(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var a=n(35),o=n(34),r=n(13),s=n(16),i=n(18),l=n(17),c=n(19),u=n(0),m=n.n(u),d=n(4),p=n(27),h=n(81),g=n.n(h),b=n(5),f=n(33),v=n(88),E=n(83),S=(n(133),n(12)),k=n(85),_=n(14),y=(n(134),function(e){var t=["login-btn"];"Facebook"===e.name?t.push("FacebookStyle"):"Google"===e.name&&t.push("GoogleStyle");var n=null;return"Google"===e.name?n="https://upload.wikimedia.org/wikipedia/commons/2/2d/Google_Plus_logo_2015.svg":"Facebook"===e.name&&(n="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"),m.a.createElement("div",{className:"col-6-of-12",onClick:e.click},m.a.createElement("div",{className:t.join(" ")},m.a.createElement("div",{className:"login-icon-wrapper"},m.a.createElement("img",{className:"login-icon-svg",src:n,alt:e.name})),m.a.createElement("p",{className:"btn-text"},m.a.createElement("b",null,"Sign in with ",e.name))))}),w=(n(135),function(){return m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-6-of-12"},m.a.createElement("div",{className:"LineSeparator"},"Quickly sign in?")))}),O={controls:{email:{elementType:"input",elementConfig:{type:"text",placeholder:"Email"},label:"Email:",value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},label:"Password:",value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isAdmin:!1,isFormValid:!1,goSignup:!1,error:null},j=function(e){function t(){var e,n;Object(r.a)(this,t);for(var s=arguments.length,c=new Array(s),u=0;u<s;u++)c[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state=Object(o.a)({},O),n.authModeHandler=function(){n.setState(function(e){return{goSignup:!e.goSignup}})},n.validCheckHandler=function(e){var t=Object(o.a)({},n.state.controls[e]);t.value.length>0&&(t=Object(b.b)(t,{valid:!0}));var r=Object(b.b)(n.state.controls,Object(a.a)({},e,t)),s=!0;for(t in r)s=r[t].valid&&s;n.setState({controls:r,isFormValid:s})},n.inputChangedHandler=function(e,t){var o,r=e.target.value;o=r.length>0?Object(b.b)(n.state.controls[t],{valid:!0,value:r,touched:!0}):Object(b.b)(n.state.controls[t],{valid:!1,value:r});var s=Object(b.b)(n.state.controls,Object(a.a)({},t,o)),i=!0;for(o in s)i=s[o].valid&&i;n.setState({controls:s,isFormValid:i})},n.submitFormHandler=function(e){var t=n.state.controls.email.value,a=n.state.controls.password.value;n.state.isAdmin,e.preventDefault(),n.state.goSignup?n.props.firebase.doCreateUserWithEmailAndPassword(t,a).then(function(e){sessionStorage.setItem("token",e.user.refreshToken),sessionStorage.setItem("uid",e.user.uid)}).then(function(e){n.setState(Object(o.a)({},O)),n.props.history.push(S.b)}).catch(function(e){return n.setState({error:e})}):n.props.firebase.doSignInWithEmailAndPassword(t,a).then(function(e){sessionStorage.setItem("token",e.user.refreshToken),sessionStorage.setItem("uid",e.user.uid)}).then(function(e){n.setState(Object(o.a)({},O)),n.props.history.push(S.b)}).catch(function(e){n.setState({error:e})})},n.onChangeCheckBoxHandler=function(e){n.setState(Object(a.a)({},e.target.name,e.target.checked))},n.GoogleAuthHandler=function(){n.props.firebase.doSignInWithGoogle().then(function(e){var t=e.user.uid,a=e.user.refreshToken;sessionStorage.setItem("uid",t),sessionStorage.setItem("token",a),n.props.history.push(S.b)}).catch(function(e){console.log("Getting error",e.message)})},n.FacebookAuthHandler=function(){n.props.firebase.doSignInWithFacebook().then(function(e){console.log(e);var t=e.user.uid,a=e.user.refreshToken;sessionStorage.setItem("uid",t),sessionStorage.setItem("token",a),n.props.history.push(S.b)}).catch(function(e){console.log("Getting error",e.message)})},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=Object.entries(this.state.controls).map(function(t){return m.a.createElement("div",{key:t[0],className:"row col-12-of-12"},m.a.createElement("div",{className:"col-6-of-12"},m.a.createElement(v.a,{valid:t[1].valid,elementtype:t[1].elementType,elementconfig:t[1].elementConfig,value:t[1].value,label:t[1].label,touched:t[1].touched,changed:function(n){return e.inputChangedHandler(n,t[0])}})))}),n=m.a.createElement("div",{className:"row col-12-of-12 errorMessage"},this.state.error?m.a.createElement("span",{className:"message"},this.state.error.message):m.a.createElement("span",{className:"message"},"Please fill the form")),a=m.a.createElement(g.a,null,m.a.createElement("div",{className:"row col-6-of-12"},m.a.createElement("h1",{className:"primary__heading title"},!0===this.state.goSignup?"Sign up":"Log in")),n,m.a.createElement("form",{className:"Form",onSubmit:this.submitFormHandler},t,m.a.createElement("div",{className:"row"},m.a.createElement(E.a,{disabled:!this.state.isFormValid,btnType:"Btn-primary"},"Submit"),m.a.createElement(E.a,{type:"button",btnType:"Switch",click:function(){return e.authModeHandler(e.state.goSignup)}},"SWITCH TO ",this.state.goSignup?"LOGIN":"SIGN UP"),m.a.createElement(p.b,{to:S.h,style:{color:"#1abc9c",fontWeight:"300",display:"block",padding:"10px 0",marginRight:"1rem"}},"Forget Password?"))),m.a.createElement(w,null),m.a.createElement("div",{className:"row col-6-of-12"},m.a.createElement(y,{click:this.GoogleAuthHandler,name:"Google"}),m.a.createElement(y,{click:this.FacebookAuthHandler,name:"Facebook"})));return this.props.spinner&&(a=m.a.createElement(k.a,null)),sessionStorage.getItem("token")&&(a=m.a.createElement(d.a,{to:"/"})),m.a.createElement(g.a,null,a)}}]),t}(u.Component);t.default=Object(d.f)(Object(_.c)(Object(f.b)(function(e){return{token:e.auth.token,err:e.auth.err,spinner:e.auth.spinner}})(j)))},81:function(e,t){e.exports=function(e){return e.children}},83:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(84),s=n.n(r);t.a=function(e){var t=[s.a.Btn];return t.push(s.a[e.btnType]),e.disabled&&t.push(s.a.disabled),o.a.createElement("button",{type:e.type,className:t.join(" "),onClick:e.click},e.children)}},84:function(e,t,n){e.exports={Btn:"Button_Btn__3Gc_G","Btn-primary":"Button_Btn-primary__ROT0d",disabled:"Button_disabled__1p0kb"}},85:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(86),s=n.n(r);t.a=function(){return o.a.createElement("div",{className:s.a.Spinner})}},86:function(e,t,n){e.exports={Spinner:"Spinner_Spinner__2AEm6",spin:"Spinner_spin__1Y3QT"}},88:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(89),s=n.n(r);t.a=function(e){var t=null,n=[s.a.InputElement];switch(!e.valid&&e.touched&&n.push(s.a.invalid),e.elementtype){case"input":t=o.a.createElement("div",{className:s.a.Input},o.a.createElement("input",Object.assign({className:n.join(" "),value:e.value,onChange:e.changed},e.elementconfig)),o.a.createElement("label",{className:s.a.label,htmlFor:e.inputId},e.label));break;default:return t}return o.a.createElement("div",null,t)}},89:function(e,t,n){e.exports={InputElement:"Input_InputElement__Ooq4A",invalid:"Input_invalid__376Oq",label:"Input_label__2JQJH"}}}]);
//# sourceMappingURL=7.16a50dec.chunk.js.map