(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)i=s[u],a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7ba6325d"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e),o=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("5df3"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var r=n("2b0e"),a=n("ce5b"),o=n.n(a);n("15f5"),n("bf40");r["default"].use(o.a,{theme:{primary:"#418fde",secondary:"#424242",accent:"#de4f76",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},options:{customProperties:!0},iconfont:"fa"});var i=n("59ca"),s=(n("ea7b"),n("e71f"),n("9704"));r["default"].prototype.$firebase=i["apps"].length?i["app"]():i["initializeApp"](s);r["default"].prototype.$firebase,i["auth"]();var c=i["firestore"](),l=n("0ff2");r["default"].use(l["a"]);var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",{staticClass:"font-weight-light"},[e._v("Epione;")])]),n("v-spacer")],1),n("v-content",[n("router-view")],1),n("CrisisButton")],1)},f=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-speed-dial",{attrs:{absolute:"",bottom:"",right:"",direction:"top",transition:"slide-y-reverse-transition"},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{large:"",color:"info",dark:"",fab:""},model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[n("v-icon",[e._v("fa-hands-helping")]),n("v-icon",[e._v("fa-times-circle")])],1)]},proxy:!0}]),model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[n("router-link",{attrs:{to:"/auth"}},[n("v-btn",{attrs:{fab:"",dark:"",color:"info"}},[n("v-icon",[e._v("fa-phone-alt")])],1)],1),n("v-btn",{attrs:{fab:"",dark:"",color:"info"}},[n("v-icon",[e._v("fa-sms")])],1),n("v-btn",{attrs:{fab:"",dark:"",color:"info"}},[n("v-icon",[e._v("fa-globe-asia")])],1)],1)},p=[],b={data:function(){return{fab:!1}}},m=b,v=n("2877"),h=Object(v["a"])(m,d,p,!1,null,null,null),y=h.exports,g={name:"App",data:function(){return{fab:!1}},created:function(){this.$store.dispatch("bindDummy")},components:{CrisisButton:y}},w=g,x=Object(v["a"])(w,u,f,!1,null,null,null),_=x.exports,j=n("8c4f"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("HelloWorld")},O=[],C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-flex",{attrs:{"mb-4":""}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("\n        Welcome to Vuetify "+e._s(e.dummy&&e.dummy[0]?e.dummy[0].name:"Undefined")+"\n      ")]),r("p",{staticClass:"subheading font-weight-regular"},[e._v("\n        For help and collaboration with other Vuetify developers,\n        "),r("br"),e._v("please join our online\n        "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[e._v("Discord Community")])])]),r("v-flex",{attrs:{"mb-5":"",xs12:""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("What's next?")]),r("v-layout",{attrs:{"justify-center":""}},e._l(e.whatsNext,function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Important Links")]),r("v-layout",{attrs:{"justify-center":""}},e._l(e.importantLinks,function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Ecosystem")]),r("v-layout",{attrs:{"justify-center":""}},e._l(e.ecosystem,function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1)],1)],1)},P=[],E=n("2f62");function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){A(e,t,n[t])})}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}},computed:S({},Object(E["b"])(["dummy"]))},F=$,q=Object(v["a"])(F,C,P,!1,null,null,null),L=q.exports,D={components:{HelloWorld:L}},B=D,M=Object(v["a"])(B,k,O,!1,null,null,null),N=M.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{required:"","prepend-icon":"fas fa-mail-bulk",solo:"",name:"login",label:"Login",type:"email"}}),n("v-text-field",{attrs:{required:"","prepend-icon":"fas fa-key",solo:"",name:"password",label:"Password",id:"password",type:"password"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary"},on:{click:e.login}},[e._v("Login")])],1)],1)},I=[],U={data:function(){return{drawer:null}},methods:{login:function(){this.$router.replace("home")}}},W=U,R=Object(v["a"])(W,T,I,!1,null,null,null),V=R.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{solo:"","prepend-icon":"fa-user-circle",name:"name",label:"Name",type:"text"},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),n("v-text-field",{attrs:{solo:"",required:"","prepend-icon":"fa-mail-bulk",name:"email",label:"Email",id:"email",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-text-field",{attrs:{solo:"","prepend-icon":"fa-key",name:"password",label:"Password",id:"password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-text-field",{attrs:{solo:"","prepend-icon":"fa-key",name:"",label:"Verify Password",id:"verify_password",type:"password"},model:{value:e.verify_pword,callback:function(t){e.verify_pword=t},expression:"verify_pword"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary"},on:{click:e.createAccount}},[e._v("Register")])],1)],1)},z=[],H=n("8aa5"),K=n.n(H),G={data:function(){return{drawer:null,email:"",password:""}},props:{source:String},methods:{createAccount:function(){K.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){alert("User created!")},function(e){alert(e.message)})}}},Q=G,X=Object(v["a"])(Q,J,z,!1,null,null,null),Y=X.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-card",{staticClass:"elevation-1"},[n("v-tabs",{attrs:{centered:"",color:"primary","slider-color":"warning"},model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},[n("v-tab",{attrs:{to:{name:"login"},replace:""}},[e._v("Login")]),n("v-tab",{attrs:{to:{name:"register"},replace:""}},[e._v("Register")])],1),n("router-view")],1)],1)],1)],1)],1)},ee=[],te={data:function(){return{drawer:null,tabs:[{id:0,name:"register",route:"register"},{id:1,name:"login",route:"login"}]}},props:{}},ne=te,re=Object(v["a"])(ne,Z,ee,!1,null,null,null),ae=re.exports;r["default"].use(j["a"]);var oe=new j["a"]({mode:"hash",base:"",routes:[{path:"/",name:"home",component:N},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/auth",name:"auth",component:ae,children:[{path:"login",name:"login",component:V},{path:"register",name:"register",component:Y}]}]}),ie=n("3317");function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){ce(e,t,n[t])})}return e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r["default"].use(E["a"]);var le=new E["a"].Store({state:{dummy:void 0},getters:{dummy:function(e){return e.dummy}},mutations:se({},ie["b"]),actions:{bindDummy:Object(ie["a"])(function(e){var t=e.bindFirestoreRef;return t("dummy",c.collection("dummy"))})}}),ue=n("9483");Object(ue["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d5e8");r["default"].config.productionTip=!1,new r["default"]({router:oe,store:le,render:function(e){return e(_)}}).$mount("#app")},9704:function(e){e.exports={apiKey:"AIzaSyBbk_j3qOmK0MBaoxCavx0gmbUkGgSbJk8",authDomain:"epione-app.firebaseapp.com",databaseURL:"https://epione-app.firebaseio.com",projectId:"epione-app",storageBucket:"epione-app.appspot.com",messagingSenderId:"43178484906",appId:"1:43178484906:web:b920d0778b3038cd"}},"9b19":function(e,t,n){e.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.ee82f4bc.js.map