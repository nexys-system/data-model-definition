(this["webpackJsonp@nexys/ddl"]=this["webpackJsonp@nexys/ddl"]||[]).push([[0],{27:function(e,t,n){e.exports=n(59)},32:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"LeftRight",(function(){return F}));var r=n(0),o=n.n(r),c=n(20),l=n.n(c);n(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i,s=n(4),u=n(2),m=n(7),p={borderTop:"1px solid #e5e5e5",borderBottom:"1px solid #e5e5e5",boxShadow:"0 .25rem .75rem rgba(0, 0, 0, .05)"},d=[{link:"/validate/schema",name:"Validate Schema"},{link:"/openApi",name:"Open Api Conversion"}],f=function(e){var t=o.a.createElement("header",null,o.a.createElement("div",{style:p,className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white"},o.a.createElement("h5",{className:"my-0 mr-md-auto font-weight-normal"},o.a.createElement(m.a,{to:"/"},"Digis DDL")),o.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},d.map((function(e,t){return o.a.createElement(m.a,{className:"p-2 text-dark",key:t,to:e.link},e.name)})))));return o.a.createElement(o.a.Fragment,null,t,o.a.createElement("div",{className:"container"},e.children))},h=function(e){var t="fa fa-"+e.name;return o.a.createElement("i",{className:t})},g=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"DDL Checker"),o.a.createElement("p",null,"Use the menu to explore the different functionalities of the package"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/Nexysweb/ddl"},o.a.createElement(h,{name:"code"})," Source")," under MIT license"))},b=n(1),y=n.n(b),v=["Int","Long","Double","LocalDateTime","LocalDate","Boolean","BigDecimal","String"],E=y.a.object().keys({name:y.a.string().alphanum().required(),column:y.a.string().optional(),type:y.a.string().alphanum().required(),optional:y.a.boolean(),permissions:y.a.array().optional(),description:y.a.string().optional()}),S=y.a.object().keys({name:y.a.string().alphanum().required(),uuid:y.a.boolean().optional(),table:y.a.string().optional(),description:y.a.string().optional(),fields:y.a.array().items(E).unique((function(e,t){return e.name===t.name})).required(),permissions:y.a.array().optional(),constraints:y.a.array()}),N=y.a.array().items(S).required(),O=function(e){var t=N.validate(e,{abortEarly:!1});if(void 0===t.error||null===t.error){var n=function(e){var t=[],n=e.map((function(e){var n=e.fields.map((function(e){return e.type})).filter((function(e){return v.indexOf(e)<0}));return t=t.concat(n),e.name})),a=[];return t.map((function(e){return n.indexOf(e)<0&&a.push('"'.concat(e,'" is referenced as a type in params but was never defined')),!0})),a}(JSON.parse(e));return n.length>0?{status:!1,errors:n}:{status:!0,errors:null}}return{status:!1,errors:t.error.details.map((function(e){return e.message+" "+JSON.stringify(e.path)}))}},j=n(23),D=n(24),x=n(25),w=n(26),k=function(e){try{return JSON.parse(e),!0}catch(t){return!1}},C=(i=function(e){var t=O(e);return t&&!t.status&&t.errors?{errors:["the string you entered is not a properly formatted DDL file, try again"].concat(t.errors.map((function(e){return e})))}:t},function(e){return function(e){Object(w.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state=void 0,a.handleSubmit=function(){var e=a.state.content;if(k(e)){var t=i(e);console.log(t),t.errors?a.setState({errors:t.errors,message:null}):a.setState({errors:null,message:"Congratulations, this is a valid file"})}else a.setState({errors:["the string you entered is not a JSON string, try again"],message:null})},a.handleChange=function(e){var t=e.target.value;a.setState({content:t})},a.state={content:"",errors:null},a}return Object(D.a)(n,[{key:"renderError",value:function(){var e=this.state.errors;return e?o.a.createElement("ul",{className:"list-group"},e.map((function(e,t){return o.a.createElement("li",{className:"list-group-item list-group-item-danger",key:t},e)}))):null}},{key:"renderSuccess",value:function(){var e=this.state.message;return e?o.a.createElement("p",{className:"alert alert-success"},e):null}},{key:"render",value:function(){var e=this.state.content;return o.a.createElement(o.a.Fragment,null,this.renderError(),this.renderSuccess(),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("textarea",{className:"form-control",style:{minWidth:"100%",height:"400px"},placeholder:"insert your json here",value:e,onChange:this.handleChange}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:this.handleSubmit},"Validate"))))}}]),n}(o.a.Component)})((function(){})),J=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Schema Validation"),o.a.createElement(C,null))},L=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Open Api V3"),o.a.createElement("p",null,"Based on ",o.a.createElement("a",{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md"},"OpenAPI Specification")),o.a.createElement("p",null,o.a.createElement("b",null,"TODO")))},B=n(5),I=function(e){return o.a.createElement("textarea",{className:"form-control",style:{minWidth:"100%",height:"400px"},placeholder:"insert your json here",value:e.content,onChange:function(t){var n=t.target.value;e.onChange(n)}})},T={display:"block",whiteSpace:"pre-wrap"},A=function(e){return o.a.createElement("code",{style:T},e.value)},q=function(e){return o.a.createElement("p",{className:"alert alert-danger"},e.message)},F=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,e.title),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},e.left),o.a.createElement("div",{className:"col-md-6"},e.right)))},R={name:"Company",uuid:!1,fields:[{type:"LocalDateTime",name:"logDateAdded",optional:!1},{type:"Country",name:"country",column:"country_id",optional:!0},{type:"String",name:"wwId",optional:!0},{type:"String",name:"name",optional:!1},{type:"CompanyStatus",name:"status",column:"status_id",optional:!1},{type:"Int",name:"type",column:"type_id",optional:!1},{type:"User",name:"logUser",column:"log_user_id",optional:!0},{type:"String",name:"ceId",optional:!1}]},_=["LocalDateTime","LocalDate","String","Int","BigDecimal","Double","Boolean"],V=function(e){var t=e.name,n=e.uuid?"uuid: string":"id: number",a=e.fields.map((function(e){var t=e.name,n=e.optional?"?":"",a=function(e){if(_.includes(e))switch(e){case"LocalDateTime":case"LocalDate":return"Date";case"Int":case"BigDecimal":case"Double":return"number";case"Boolean":return"boolean";default:return"string"}return"{id: number} | ".concat(e)}(e.type);return"".concat(t).concat(n,": ").concat(a)})),r=[n].concat(a).join(",\n  ");return"export interface ".concat(t," {\n  ").concat(r,"\n}")},W=function(e){return e.map((function(e){return V(e)})).join("\n\n")},P=function(e){switch(e){case"String":return"Joi.string()";case"Boolean":return"Joi.boolean()";case"Int":case"BigDecimal":case"Double":return"Joi.number()";case"LocalDateTime":return"Joi.date()";case"LocalDate":return"Joi.string()";default:return console.warn('The type "'.concat(e,'" could not be converted to Joi, this may create some errors')),"Joi.string()"}},U=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?e:e+".required()"},M=function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.filter((function(e){return!t.includes(e.name)})).map((function(e){return"  "+e.name+": "+U(P(e.type),e.optional)})).join(",\n");return"Joi.Object({\n"+n+"\n});"}(JSON.parse(e))},$=function(){var e=Object(r.useState)(JSON.stringify(R,null,2)),t=Object(B.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)(null),i=Object(B.a)(l,2),s=i[0],u=i[1],m=Object(r.useState)(null),p=Object(B.a)(m,2),d=p[0],f=p[1],h=o.a.createElement(o.a.Fragment,null,d&&o.a.createElement(q,{message:d}),o.a.createElement(I,{content:n,onChange:function(e){c(e),k(e)?f(null):f("no json")}}),o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){try{var e=function(e){var t=JSON.parse(e);return Array.isArray(t)?W(t):t.entities?W(t.entities):V(t)}(n);u(e)}catch(t){f("can't convert")}}},"Convert!"),"\xa0",o.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:function(){return c("[]")}},"Reset")),g=s&&o.a.createElement(A,{value:s});return o.a.createElement(a.LeftRight,{title:"Schema to Typescript",left:h,right:g})},z=function(){var e=Object(r.useState)(JSON.stringify(R.fields,null,2)),t=Object(B.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)(null),i=Object(B.a)(l,2),s=i[0],u=i[1],m=Object(r.useState)(null),p=Object(B.a)(m,2),d=p[0],f=p[1],h=o.a.createElement(o.a.Fragment,null,d&&o.a.createElement(q,{message:d}),o.a.createElement(I,{content:n,onChange:function(e){c(e),k(e)?f(null):f("no json")}}),o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){try{var e=M(n);u(e)}catch(t){f("can't convert")}}},"Convert!"),"\xa0",o.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:function(){return c("[]")}},"Reset")),g=s&&o.a.createElement(A,{value:s});return o.a.createElement(a.LeftRight,{title:"Schema to Joi",left:h,right:g})},G=function(){return o.a.createElement("p",null,"Page Not Found")};var H=Object(s.f)((function(){return o.a.createElement(f,null,o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/",component:g}),o.a.createElement(s.a,{exact:!0,path:"/validate/schema",component:J}),o.a.createElement(s.a,{exact:!0,path:"/openApi",component:L}),o.a.createElement(s.a,{exact:!0,path:"/toTS",component:$}),o.a.createElement(s.a,{exact:!0,path:"/toJoi",component:z}),o.a.createElement(s.a,{path:"/",component:G})))})),K=u.a({basename:"/ddl"});l.a.render(o.a.createElement(s.b,{history:K},o.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.7ea50f87.chunk.js.map