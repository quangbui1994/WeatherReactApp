(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{10:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"g",function(){return i}),n.d(t,"f",function(){return o}),n.d(t,"d",function(){return c}),n.d(t,"e",function(){return u}),n.d(t,"h",function(){return l}),n.d(t,"a",function(){return s});var a="/",r="/home",i="/mycities",o="/map",c="/login",u="/logout",l="/pw-reset",s="/admin"},13:function(e,t,n){"use strict";var a=n(12),r=n(20),i=n.n(r),o=(n(69),n(71),{apiKey:"AIzaSyCmfJF90oW3AVz03mtGtldBPOW37JUaTRU",authDomain:"profound-outlet-241613.firebaseapp.com",databaseURL:"https://profound-outlet-241613.firebaseio.com",projectId:"profound-outlet-241613",storageBucket:"profound-outlet-241613.appspot.com",messagingSenderId:"177428683083",appId:"1:177428683083:web:f30e56df9cb0ca3c"}),c=function e(){var t=this;Object(a.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},i.a.initializeApp(o),this.auth=i.a.auth(),this.db=i.a.firestore(),this.googleProvider=new i.a.auth.GoogleAuthProvider,this.facebookProvider=new i.a.auth.FacebookAuthProvider},u=n(0),l=n.n(u),s=l.a.createContext(null),d=function(e){return function(t){return l.a.createElement(s.Consumer,null,function(n){return l.a.createElement(e,Object.assign({},t,{firebase:n}))})}},m=s;n.d(t,"a",function(){return m}),n.d(t,"c",function(){return d});t.b=c},27:function(e,t,n){e.exports={SideNav:"SideNav_SideNav__1zFda",hidden:"SideNav_hidden__2zOrE"}},43:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__F1oPf"}},5:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i});n(40);var a=n(34),r=function(e,t){return Object(a.a)({},e,t)},i=function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"][(new Date).getMonth()];return"".concat((new Date).getDate()," ").concat(e,", ").concat((new Date).getHours()," : ").concat(o((new Date).getMinutes()))},o=function(e){return e<10&&(e="01"),e}},50:function(e,t,n){e.exports=n(77)},6:function(e,t,n){"use strict";n.d(t,"o",function(){return a}),n.d(t,"p",function(){return r}),n.d(t,"n",function(){return i}),n.d(t,"g",function(){return o}),n.d(t,"h",function(){return c}),n.d(t,"f",function(){return u}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return d}),n.d(t,"l",function(){return m}),n.d(t,"e",function(){return h}),n.d(t,"d",function(){return f}),n.d(t,"j",function(){return v}),n.d(t,"k",function(){return b}),n.d(t,"i",function(){return p}),n.d(t,"m",function(){return g});var a="SET_INITIAL_DATA_START",r="SET_INITIAL_DATA_SUCCESS",i="SET_INITIAL_DATA_FAIL",o="FETCH_WEATHER_DATA_START",c="FETCH_WEATHER_DATA_SUCCESS",u="FETCH_WEATHER_DATA_FAIL",l="AUTH_HANDLER_START",s="AUTH_HANDLER_SUCCESS",d="AUTH_HANDLER_FAIL",m="LOG_OUT_HANDLER",h="SAVE_DATA_HANDLER_SUCCESS",f="FETCH_DATA_TO_REDUX_FAIL",v="GET_CITY_DATA_START",b="GET_CITY_DATA_SUCCESS",p="GET_CITY_DATA_FAIL",g="REMOVE_CITY_DATA"},60:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(24),o=n.n(i),c=n(25),u=n(9),l=n(33),s=n(6),d=n(5),m={city:null,spinner:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.g:return Object(d.b)(e,{spinner:!0});case s.h:return function(e,t){var n=Object(d.b)(e.city,{id:t.value.id,name:t.value.name,temp:t.value.main.temp,tempMin:t.value.main.temp_min,tempMax:t.value.main.temp_max,humidity:t.value.main.humidity,wind:t.value.wind,weather:t.value.weather});return Object(d.b)(e,{city:n,spinner:!1})}(e,t);case s.p:return Object(d.b)(e,{city:t.res,spinner:!1});case s.o:return Object(d.b)(e,{spinner:!0});default:return e}},f={token:null,localId:null,err:null,spinner:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.b:return Object(d.b)(e,{spinner:!0});case s.c:return Object(d.b)(e,{token:t.token,localId:t.localId,spinner:!1});case s.a:return Object(d.b)(e,{err:t.err});case s.l:return Object(d.b)(e,{token:null,localId:null});default:return e}},b={idList:[],listCity:[],spinner:!1},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.e:return function(e,t){var n=Object.values(t.IDs).map(function(e){return e.id});return Object(d.b)(e,{idList:n})}(e,t);case s.j:return Object(d.b)(e,{spinner:!0});case s.k:return Object(d.b)(e,{listCity:t.listCity,spinner:!1});case s.m:return function(e,t){console.log(t.id);var n=e.listCity.filter(function(e){return e.id!==t.id});return console.log(n),Object(d.b)(e,{listCity:n})}(e,t);case s.l:return Object(d.b)(e,{idList:[],listCity:[]});default:return e}},g=(n(60),n(12)),E=n(15),w=n(17),_=n(16),A=n(18),N=n(2),O=n(43),y=n.n(O),j=function(e){return r.a.createElement("div",{className:y.a.DrawerToggle,onClick:e.click},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},k=n(27),S=n.n(k),T=(n(61),function(e){var t=null,n=["NavigationItem"];return e.forMobile&&n.push("forMobile"),t=localStorage.getItem("token")?[{linkName:"Home",to:"/"},{linkName:"My cities",to:"/mycities"},{linkName:"Logout",to:"/logout"}]:[{linkName:"Login",to:"/login"}],r.a.createElement("ul",{className:n.join(" ")},t.map(function(e){return r.a.createElement("li",{key:e.linkName},r.a.createElement(c.c,{to:e.to,exact:!0,activeClassName:"active"},e.linkName))}))}),C=function(e){var t=[S.a.SideNav];return e.showSideNav||t.push(S.a.hidden),r.a.createElement("div",{className:t.join(" ")},r.a.createElement(T,{forMobile:!0}))},I=r.a.createContext(null),D=(n(63),n(64),function(e){var t=null;return t=e.authUser?[{linkName:"Home",to:"/"},{linkName:"My cities",to:"/mycities"},{linkName:"Logout",to:"/logout"}]:[{linkName:"Login",to:"/login"}],r.a.createElement("ul",{className:"navigation__list"},t.map(function(e){return r.a.createElement("li",{key:e.linkName,className:"navigation__item"},r.a.createElement("a",{href:e.to,activeclassname:"active",className:"navigation__link"},e.linkName))}))}),U=function(e){return r.a.createElement("div",{className:"navigation"},r.a.createElement("input",{type:"checkbox",className:"navigation__checkbox",id:"navi-toggle"}),r.a.createElement("label",{htmlFor:"navi-toggle",className:"navigation__button"},r.a.createElement("span",{className:"navigation__icon"},"\xa0")),r.a.createElement("div",{className:"navigation__background"},"\xa0"),r.a.createElement("nav",{className:"navigation__nav"},r.a.createElement(I.Consumer,null,function(t){return r.a.createElement(D,Object.assign({},e,{authUser:t}))})))},L=(n(65),function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(w.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={showSideNav:!1,showFullNav:!1},n}return Object(A.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"Navigation"},r.a.createElement("div",{className:"col-4-of-12"},r.a.createElement("span",Object.assign({className:"Logo"},this.props,{onClick:function(){e.props.history.push("/")}}),"Weather.")),r.a.createElement(j,{click:function(){return e.setState(function(e){return{showSideNav:!e.showSideNav}})}}),r.a.createElement("div",{className:"col-6-of-12 DesktopOnly"},r.a.createElement(U,{showFullNav:this.state.showFullNav,click:function(t){return e.setState({showFullNav:!0})}}))),r.a.createElement(C,{showSideNav:this.state.showSideNav}))}}]),t}(a.Component)),P=Object(N.g)(L),W=(n(66),n(10)),R=n(13),F=n(49),H=function(e){var t=function(t){function n(){var e,t;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(w.a)(this,(e=Object(_.a)(n)).call.apply(e,[this].concat(r)))).state={authUser:""},t}return Object(A.a)(n,t),Object(E.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(I.Provider,{value:this.state.authUser},r.a.createElement(e,null))}}]),n}(r.a.Component);return Object(F.a)(R.c)(t)},M=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,140))}),x=Object(a.lazy)(function(){return n.e(7).then(n.bind(null,138))}),z=Object(a.lazy)(function(){return n.e(11).then(n.bind(null,134))}),G=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,139))}),J=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,107))}),B=Object(a.lazy)(function(){return n.e(9).then(n.bind(null,135))}),Y=Object(a.lazy)(function(){return n.e(10).then(n.bind(null,136))}),V=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(w.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={authUser:""},n}return Object(A.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.listerner=this.props.firebase.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listerner()}},{key:"render",value:function(){return r.a.createElement(I.Provider,{value:this.state.authUser},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(P,null)),r.a.createElement("div",{className:"container"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(N.d,null,r.a.createElement(N.b,{path:W.c,exact:!0,component:M}),r.a.createElement(N.b,{path:W.b,exact:!0,component:M}),r.a.createElement(N.b,{path:W.g,component:G}),r.a.createElement(N.b,{path:W.d,component:x}),r.a.createElement(N.b,{path:W.e,component:z}),r.a.createElement(N.b,{path:W.h,component:B}),r.a.createElement(N.b,{path:W.f,component:J}),r.a.createElement(N.b,{path:W.a,component:Y}))))))}}]),t}(a.Component),K=H(Object(R.c)(V)),X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var q=n(45),Q=n(32),Z=n(46),ee=n.n(Z),te=n(47),ne=n(48),ae=n.n(ne),re=u.d,ie=Object(u.c)({weather:h,auth:v,user:p}),oe={key:"root",storage:ae.a,stateReconciler:ee.a},ce=Object(Q.a)(oe,ie),ue=Object(u.e)(ce,re(Object(u.a)(q.a))),le=Object(Q.b)(ue),se=r.a.createElement(l.a,{store:ue},r.a.createElement(R.a.Provider,{value:new R.b},r.a.createElement(te.a,{loading:null,persistor:le},r.a.createElement(c.a,null,r.a.createElement(K,null)))));o.a.render(se,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");X?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):$(t,e)})}}()}},[[50,3,4]]]);
//# sourceMappingURL=main.1c1388ff.chunk.js.map