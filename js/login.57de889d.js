(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(e,n,r){"use strict";r.r(n);var a=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("b-container",{staticClass:"my-5"},[r("b-row",{attrs:{"align-h":"center","align-v":"center"}},[r("b-col",{attrs:{cols:"12",md:"8",lg:"6"}},[r("h1",[e._v("Iniciar Sesión")]),r("b-card",[r("form",{on:{submit:function(n){return n.preventDefault(),e.handleLogin(n)}}},[r("b-form-group",{attrs:{id:"input-group-username",label:"Usuario","label-for":"username"}},[r("b-form-input",{attrs:{id:"username",type:"text",name:"username",autocomplete:"username",required:""},model:{value:e.username,callback:function(n){e.username=n},expression:"username"}})],1),r("b-form-group",{attrs:{id:"input-group-password",label:"Contraseña","label-for":"password"}},[r("b-form-input",{attrs:{id:"password",type:"password",name:"password",autocomplete:"current-password",required:""},model:{value:e.password,callback:function(n){e.password=n},expression:"password"}})],1),r("b-form-row",[r("b-col",[r("b-button",{attrs:{block:"",variant:"primary"},on:{click:e.handleSellerLogin}},[e._v(" Iniciar Sesión (Seller) ")])],1),r("b-col",[r("b-button",{attrs:{block:"",variant:"primary"},on:{click:e.handleBuyerLogin}},[e._v(" Iniciar Sesión (Buyer) ")])],1)],1)],1)]),r("p",[e._v(" No tenés cuenta? "),r("router-link",{attrs:{to:"/register"}},[e._v("Registrar nuevo usuario")]),e._v(". ")],1)],1)],1)],1)},t=[],o={name:"Login",data:function(){return{username:null,password:null}},methods:{handleLogin:function(e){console.log("enviando login!",e),this.$store.dispatch("auth/login",e),this.$root.$bvToast.toast("Sesión Iniciada Correctamente",{variant:"success",toaster:"b-toaster-top-right",noCloseButton:!0,autoHideDelay:4e3})},handleSellerLogin:function(){var e={name:"Juan Seller",type:"seller"};this.handleLogin(e)},handleBuyerLogin:function(){var e={name:"Roberto Buyer",type:"buyer"};this.handleLogin(e)}}},s=o,i=r("2877"),l=Object(i["a"])(s,a,t,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=login.57de889d.js.map