(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"73cf":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"my-5"},[r("b-row",{attrs:{"align-h":"center","align-v":"center"}},[r("b-col",{attrs:{cols:"12",md:"8",lg:"6"}},[r("h1",[e._v("Registrar Nuevo Usuario")]),e.done?r("b-alert",{attrs:{show:"",variant:"success",align:"center"}},[e._v(" Registro completado ")]):r("b-card",{attrs:{"no-body":""}},[r("b-tabs",{attrs:{card:"","content-class":"mt-3"}},[r("b-tab",{attrs:{title:"Comprador",active:""}},[e.error?r("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(" Hubo un error. ")]):e._e(),r("form",{attrs:{id:"customer-form"},on:{submit:function(t){return t.preventDefault(),e.handleCustomerForm(t)}}},[r("b-form-group",{attrs:{id:"label-customer-name",label:"Nombre Completo","label-for":"customer-name"}},[r("b-form-input",{attrs:{id:"customer-name",type:"text",required:""},model:{value:e.customer.name,callback:function(t){e.$set(e.customer,"name",t)},expression:"customer.name"}})],1),r("b-form-group",{attrs:{id:"label-customer-email",label:"Email","label-for":"customer-email"}},[r("b-form-input",{attrs:{id:"customer-email",type:"email",autocomplete:"username",required:""},model:{value:e.customer.email,callback:function(t){e.$set(e.customer,"email",t)},expression:"customer.email"}})],1),r("b-form-group",{attrs:{id:"label-customer-password",label:"Contraseña","label-for":"customer-password"}},[r("b-form-input",{attrs:{id:"customer-password",type:"password",autocomplete:"new-password",required:""},model:{value:e.customer.password,callback:function(t){e.$set(e.customer,"password",t)},expression:"customer.password"}})],1),r("p",{staticClass:"text-right m-0"},[r("b-button",{attrs:{type:"submit",variant:"primary",disabled:e.loading}},[e._v(" Registrar Comprador ")])],1)],1)],1),r("b-tab",{attrs:{title:"Vendedor"}},[r("p",[e._v("wip")])])],1)],1),r("p",[e._v(" Ya tenés cuenta? "),r("router-link",{attrs:{to:"/login"}},[e._v("Iniciar Sesión")]),e._v(". ")],1)],1)],1)],1)},n=[],o=(r("96cf"),r("1da1"));r("b0c0"),r("d3b7"),r("25f0"),r("3ca3"),r("ddb0"),r("2b3d");function s(e){return u.apply(this,arguments)}function u(){return u=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new URL("/api/customer",Object({VUE_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAq4BnF_ERjt0_ymz43ORosviKhf03VDO0",NODE_ENV:"production",BASE_URL:"/frontend/"}).VUE_APP_API_URL).toString(),a=new FormData,a.append("name",t.name),a.append("email",t.email),a.append("password",t.password),e.next=7,fetch(r,{method:"POST",body:a});case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}var l={name:"Login",data:function(){return{loading:!1,error:!1,done:!1,customer:{name:null,password:null,email:null},seller:{username:null,password:null,email:null}}},methods:{handleCustomerForm:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("handle customer registration"),e.loading=!0,e.error=!1,t.next=5,s(e.customer);case 5:return r=t.sent,t.next=8,r.json();case 8:a=t.sent,r.status<200||r.status>=300?(e.error=!0,console.log("error en request",a,r.statusText)):(console.log("response data",a),e.done=!0),e.loading=!1;case 11:case"end":return t.stop()}}),t)})))()},handleSellerForm:function(){}},components:{}},i=l,c=r("2877"),m=Object(c["a"])(i,a,n,!1,null,null,null);t["default"]=m.exports},b0c0:function(e,t,r){var a=r("83ab"),n=r("9bf2").f,o=Function.prototype,s=o.toString,u=/^\s*function ([^ (]*)/,l="name";a&&!(l in o)&&n(o,l,{configurable:!0,get:function(){try{return s.call(this).match(u)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=register.03319457.js.map