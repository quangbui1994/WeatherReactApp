(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{139:function(e,n,t){"use strict";t.r(n);var a=t(34),r=t(13),i=t(16),s=t(18),o=t(17),u=t(19),c=t(0),l=t.n(c),p=t(14),f=t(85),d=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(t=Object(s.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(i)))).state={loading:!1,users:[]},t}return Object(u.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",function(n){var t=n.val();console.log(t);var r=Object.keys(t).map(function(e){return Object(a.a)({},t[e],{uid:e})});e.setState({users:r,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.loading&&l.a.createElement(f.a,null),this.state.users.map(function(e){return l.a.createElement("li",{key:e.uid},"Account: ",e.email," ",e.uid,", Roles: ",e.roles?e.roles.ADMIN:null)}))}}]),n}(c.Component);n.default=Object(p.c)(d)},85:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(86),s=t.n(i);n.a=function(){return r.a.createElement("div",{className:s.a.Spinner})}},86:function(e,n,t){e.exports={Spinner:"Spinner_Spinner__2AEm6",spin:"Spinner_spin__1Y3QT"}}}]);
//# sourceMappingURL=10.9a932444.chunk.js.map