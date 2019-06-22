import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store.js'
import Home from '@/views/Home.vue';
import Auth from '@/views/Auth.vue';
import Login from '@/components/ui/auth/Login.vue';
import Register from '@/components/ui/auth/Register.vue';
import Error404 from '@/views/Error404.vue';
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
    //{ path: '/journal', redirect: { name: 'journalHome', params: { page: 1 } } },
    {
      path: '/journal/:page(\\d+)?',
      name: 'journalHome',
      component: () => import(/* webpackChunkName: "journal" */ './views/Journal/JournalHome.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/journal/entry/:id',
      name: 'journalEntry',
      component: () => import(/* webpackChunkName: "journal" */ './views/Journal/JournalEntry.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/coping',
      name: 'copingHome',
      component: () => import(/* webpackChunkName: "coping" */ './views/CopingHome.vue'),
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
      meta: {
        requiresAnon: true,
      },
      children: [
        {
          path: 'login',
          alias: [''],
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
    {
      path: '/logout',
      name: 'logout',
      beforeEnter : (to, from, next) => { 
        auth.signOut();
        next('/');
      },
      meta: {
        system: true
      }
    },
    // 404 page
    {
      path: '*',
      component: Error404
    }
  ]
})

// only allow authed users to see auth required pages.
router.beforeEach((to, from, next) => {
  const user = store.getters['user'];
  
  // If this is a special page, or the user hasn't been handled yet
  if (user === undefined || to.matched.some( record => record.meta.system )) {
    // Then just let him through. We'll deal with his access later.
    next(); return;
  }

  const requiresAuth = to.matched.some(
    record => record.meta.requiresAuth
  )

  const requiresAnon = to.matched.some(
    record => record.meta.requiresAnon
  )

  // if a user isn't logged in and tries to access a page with auth required,
  // redirect to the login page.
  if (requiresAuth && !user) { next ('/auth/login') }
  // if an authed user trys to access a page that doesn't require auth, redirect to
  // the home page
  else if (requiresAnon && user) { next ('/home') } 
  // else, go to the page
  else {  next(); }
});

export default router;