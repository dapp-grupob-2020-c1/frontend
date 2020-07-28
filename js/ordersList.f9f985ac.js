(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ordersList"],{"36db":function(t,r,e){"use strict";e.r(r);var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("PageContainer",{attrs:{title:t.$t("order.orderList"),"breadcrumb-items":t.breadcrumbItems}},[e("div",{staticClass:"actions my-2"},[t.activeOrder?e("b-button",{staticClass:"mr-2 mb-2",attrs:{to:"/orders/search",variant:"primary",size:"lg"}},[e("b-icon-search"),t._v(" "+t._s(t.$t("order.searchProducts"))+" ")],1):t._e(),e("b-button",{staticClass:"mr-2 mb-2",attrs:{to:"/orders/create",variant:"outline-primary",size:"lg"}},[e("b-icon-plus-square"),t._v(" "+t._s(t.$t("order.createNew"))+" ")],1)],1),e("h2",{staticClass:"h4"},[t._v(t._s(t.$t("order.pastOrders")))]),t.ordersList.length?e("b-list-group",t._l(t.ordersList,(function(t){return e("b-list-group-item",{key:t.id},[e("OrderListItem",{attrs:{order:t}})],1)})),1):e("b-alert",{staticClass:"m-0",attrs:{show:""}},[t._v(" "+t._s(t.$t("order.listEmpty"))+" ")])],1)},a=[],o=e("5350"),i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"order-list-item"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h2",{staticClass:"h3"},[t._v(t._s(t.$t("order.location")))]),e("p",[t._v(t._s(t.order.location.address))]),e("GmapMap",{staticStyle:{width:"100%",height:"300px"},attrs:{center:{lat:t.order.location.latitude,lng:t.order.location.longitude},zoom:14,options:{disableDefaultUI:!0,fullscreenControl:!1}}},[e("GmapMarker",{attrs:{position:{lat:t.order.location.latitude,lng:t.order.location.longitude}}})],1)],1),e("div",{staticClass:"col-6"},[e("h2",{staticClass:"h3"},[t._v(t._s(t.$t("order.productsList")))]),t._l(t.order.entries,(function(r){return e("div",{key:r.id,staticClass:"d-flex align-items-center"},[e("div",{staticClass:"flex-shrink-1"},[t._v(t._s(r.quantity)+" x")]),e("ProductDetails",{attrs:{product:r.product}})],1)})),e("p",{staticClass:"lead py-2 my-2 border-top"},[t._v(" Total: "),e("span",{staticClass:"font-weight-bold"},[t._v("$ "+t._s(t.order.total))])])],2)])])},d=[],c=e("a635"),n={components:{ProductDetails:c["a"]},props:{order:{required:!0,type:Object}},computed:{}},l=n,u=e("2877"),A=Object(u["a"])(l,i,d,!1,null,null,null),p=A.exports,h={components:{OrderListItem:p,PageContainer:o["a"]},data:function(){return{breadcrumbItems:[{text:this.$t("dashboard.dashboard"),to:"/dashboard"},{text:this.$t("order.orderList")}]}},mounted:function(){this.$store.dispatch("cart/getActiveShoppingCart"),this.$store.dispatch("cart/getOldCarts")},computed:{activeOrder:function(){return this.$store.state.cart.active},ordersList:function(){return this.$store.state.cart.history}}},f=h,m=Object(u["a"])(f,s,a,!1,null,null,null);r["default"]=m.exports},"66ed":function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAAD+CAMAAAAtSEhjAAAAA3NCSVQICAjb4U/gAAAACVBMVEXw7eq9vb3Pzs0h1CxKAAABHElEQVR4nO3cwQqDMBBFUfX/P7rQVSiF2NDBDO+cbVx4YQZbEI8DAAAAAAAAAAAAAAAAAAAAAAAAAAAoc5V4uuq26ywgvwn58uXLly9ffk4+QKDw//sVz73zfLrqtuz8kl898fldlj88v6a+zfRn5xfNfnx+j+UPz6+qbzL92fllsx+f32H5w/Pr6ltMv/zg/MLV77D84fmV9Q2mPzu/dPbj83df/vD82vrtp1++fPny5cuXL19+Qv77JaThdmfvK80u/Tx/uu+O4aZnlw51S+c7ki9fvvwJ+fLly18535F8+fLlT8iXL1/+yvmO5Mv/kfwv5MuXL78L+fLlh+b/79MkHT9dAgAAAAAAAAAAAAAAAAAAAAAAAAAADb0AQ5EYoP6eNIsAAAAASUVORK5CYII="},a635:function(t,r,e){"use strict";var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"product-details"},[e("b-media",{attrs:{"vertical-align":"center"},scopedSlots:t._u([{key:"aside",fn:function(){return[e("b-img",{attrs:{fluid:"",rounded:"",src:t.productImage,width:"128",height:"128"},on:{click:function(r){return t.$bvModal.show("modal-product-"+t.product.id)}}}),e("b-modal",{attrs:{id:"modal-product-"+t.product.id,centered:"","hide-footer":"","hide-header":""}},[e("b-img",{attrs:{"fluid-grow":"",src:t.productImage}})],1)]},proxy:!0}])},[e("p",{staticClass:"h3 font-weight-light text-muted float-right"},[t._v(" $ "+t._s(t.product.price)+" ")]),e("h2",{staticClass:"h3"},[t._v(t._s(t.product.name))]),e("p",[t._v(t._s(t.product.brand))])])],1)},a=[],o=(e("99af"),e("b0c0"),e("e61d")),i={name:"ProductDetails",props:{product:{type:Object,required:!0},buy:{type:Boolean,default:!1}},data:function(){return{quantity:1}},computed:{productImage:function(){return this.product.image?this.product.image:e("66ed")}},methods:{handleAddToCart:function(){var t={product:this.product.name,quantity:this.quantity},r="".concat(t.quantity," x ").concat(t.product," ").concat(this.$t("product.addedToCart"));this.$root.$bvToast.toast(r,o["a"])}}},d=i,c=e("2877"),n=Object(c["a"])(d,s,a,!1,null,null,null);r["a"]=n.exports},e61d:function(t,r,e){"use strict";e.d(r,"a",(function(){return s}));var s={variant:"success",toaster:"b-toaster-top-center",noCloseButton:!0,autoHideDelay:5e3}}}]);
//# sourceMappingURL=ordersList.f9f985ac.js.map