(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{7277:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"my-5"},[r("h1",{staticClass:"h1"},[t._v("Dashboard")]),"buyer"===t.userType?r("BuyerDashboard"):t._e(),"seller"===t.userType?r("SellerDashboard"):t._e()],1)},s=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"buyer-dashboard"}},[r("b-card",{attrs:{"no-body":""}},[r("b-tabs",{attrs:{pills:"",card:"",fill:""}},[r("b-tab",{attrs:{title:"Perfil",active:""}},[r("div",{staticClass:"my-4"},[r("p",[t._v("Nombre")])])]),r("b-tab",{attrs:{title:"Ubicaciones"}},[r("BuyerLocationList")],1),r("b-tab",{attrs:{title:"Compras Anteriores"}},[r("BuyerOperationList")],1),r("b-tab",{attrs:{title:"Alertas"}},[r("p",{staticClass:"text-muted"},[t._v("WIP")])])],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v(" Las direcciones cargadas por el cliente son usadas para calcular los envíos de productos. ")]),t.locationsList.length?r("b-list-group",t._l(t.locationsList,(function(e,a){return r("b-list-group-item",{key:a},[r("p",[t._v("Ubicación "+t._s(a+1))]),r("pre",[t._v(t._s(e))])])})),1):r("b-alert",{attrs:{variant:"info",show:""}},[t._v(" No hay ninguna ubicación registrada. ")]),r("div",{staticClass:"actions my-2"},[r("b-button",{attrs:{variant:"outline-primary"}},[t._v("Agregar Ubicación")])],1)],1)},l=[],u={name:"BuyerLocationList",computed:{locationsList:function(){return this.$store.state.buyer.locations}}},c=u,p=r("2877"),b=Object(p["a"])(c,i,l,!1,null,null,null),d=b.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v(" Podés llevar un registro de todas las operaciones registradas en el sistema ")]),t.operationsList.length?r("b-list-group",t._l(t.operationsList,(function(e,a){return r("b-list-group-item",{key:a},[r("p",[t._v("Compra #"+t._s(a))]),r("pre",[t._v(t._s(e))]),r("b-button",{attrs:{variant:"text"}},[t._v("Ver Detalles")])],1)})),1):r("b-alert",{attrs:{show:""}},[t._v(" No hay ninguna operación registrada hasta el momento ")])],1)},_=[],m={name:"BuyerOperationList",computed:{operationsList:function(){return this.$store.state.buyer.operations}}},h=m,y=Object(p["a"])(h,v,_,!1,null,null,null),f=y.exports,L={name:"BuyerDashboard",components:{BuyerOperationList:f,BuyerLocationList:d}},g=L,O=Object(p["a"])(g,n,o,!1,null,null,null),x=O.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"seller-dashboard"}},[r("b-card",{attrs:{"no-body":""}},[r("b-tabs",{attrs:{pills:"",card:"",fill:""}},[r("b-tab",{attrs:{title:"Perfil del Negocio",active:""}},[r("p",{staticClass:"text-muted"},[t._v("WIP")]),r("p",[t._v("Nombre")]),r("p",[t._v("Ubicación")]),r("p",[t._v("Horarios de Atención")]),r("p",[t._v("Distancia de Envío")])]),r("b-tab",{attrs:{title:"Productos"}},[r("SellerProductList")],1),r("b-tab",{attrs:{title:"Operaciones"}},[r("SellerOperationList")],1),r("b-tab",{attrs:{title:"Descuentos"}},[r("p",{staticClass:"text-muted"},[t._v("WIP")])])],1)],1)],1)},P=[],$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v(" Listado de las ventas registradas en el sistema. ")]),t.operationsList.length?r("b-list-group",t._l(t.operationsList,(function(e,a){return r("b-list-group-item",{key:a},[r("p",[t._v("Venta #"+t._s(a))]),r("pre",[t._v(t._s(e))]),r("b-button",{attrs:{variant:"text"}},[t._v("Ver Detalles")])],1)})),1):r("b-alert",{attrs:{show:""}},[t._v(" No hay ninguna venta registrada hasta el momento. ")])],1)},w=[],C={name:"SellerOperationList",computed:{operationsList:function(){return this.$store.state.seller.operations}}},B=C,S=Object(p["a"])(B,$,w,!1,null,null,null),E=S.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v(" Listado de productos cargados en el sistema. ")]),t.productsList.length?r("b-list-group",t._l(t.productsList,(function(e,a){return r("b-list-group-item",{key:a},[r("p",[t._v("Producto #"+t._s(a))]),r("pre",[t._v(t._s(e))]),r("b-button",{attrs:{variant:"text"}},[t._v("Ver Detalles")])],1)})),1):r("b-alert",{attrs:{show:""}},[t._v(" No hay ningún producto cargado hasta el momento. ")]),r("p",[r("b-button",{attrs:{variant:"primary",to:"/createProduct"}},[t._v("Cargar Producto")])],1)],1)},N=[],k={name:"SellerProductList",computed:{productsList:function(){return this.$store.state.seller.products}}},A=k,U=Object(p["a"])(A,j,N,!1,null,null,null),V=U.exports,I={name:"SellerDashboard",components:{SellerProductList:V,SellerOperationList:E}},T=I,W=Object(p["a"])(T,D,P,!1,null,null,null),J=W.exports,H={name:"Dashboard",components:{BuyerDashboard:x,SellerDashboard:J},computed:{userType:function(){return this.$store.state.auth.type}}},q=H,z=Object(p["a"])(q,a,s,!1,null,null,null);e["default"]=z.exports}}]);
//# sourceMappingURL=dashboard.5c97ad54.js.map