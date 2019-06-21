import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/components/ui/Login.vue';
import Register from '@/components/ui/Register.vue';
import Auth from '@/views/Auth.vue';
import { auth } from '@/plugins/firebase.js';
import { register } from 'register-service-worker';

Vue.use(Router)

const router = new Router({
  mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      children: [
        {
          path: 'login',
          // alias: ['', '/login'],
          name: 'login',
          component: Login
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        },
      ]
    },
  ]
})

// only allow authed users to see auth required pages.
router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  const requiresAuth = to.matched.some(
    record => record.meta.requiresAuth
  )

  window.to = to;

  console.log("To:",to);
  console.log("From:",from);

  console.log("Has user: "+(user?"True":"False"));
  console.log("RequiresAuth: "+requiresAuth);

  // if a user isn't logged in and tries to access a page with auth required,
  // redirect to the login page.
  if (requiresAuth && !user) { next ('/auth/login') }
  // if an authed user trys to access a page that doesn't require auth, redirect to
  // the home page
  else if (!requiresAuth && user) { next ('/home') } 
  // else, go to the page
  else {  next(); }
});

export default router;