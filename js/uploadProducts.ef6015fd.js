(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uploadProducts"],{"3f68":function(l,e,t){"use strict";t.r(e);var o=function(){var l=this,e=l.$createElement,t=l._self._c||e;return t("b-container",{staticClass:"my-5"},[t("h1",{staticClass:"h1"},[l._v(l._s(l.$t("product.upload.uploadFile")))]),t("p",[l._v(l._s(l.$t("product.upload.uploadDescription")))]),t("b-form-file",{attrs:{state:Boolean(l.file),placeholder:l.$t("product.upload.selectFilePlaceholder"),"drop-placeholder":l.$t("product.upload.dropFilePlaceholder"),"browse-text":l.$t("product.upload.selectFileBrowseText")},model:{value:l.file,callback:function(e){l.file=e},expression:"file"}}),t("div",{staticClass:"my-3"},[l._v(" "+l._s(l.$t("product.upload.selectedFile"))+": "+l._s(l.file?l.file.name:"")+" ")]),t("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:l.handleUploadProduct}},[l._v(" "+l._s(l.$t("product.upload.submit"))+" ")]),t("b-button",{attrs:{variant:"text",size:"lg"},on:{click:l.handleCancel}},[l._v(" "+l._s(l.$t("product.upload.cancel"))+" ")])],1)},a=[],c={name:"ProductsUpload",data:function(){return{file:null}},methods:{handleUploadProduct:function(){console.log("//TODO handle upload product")},handleCancel:function(){console.log("//TODO handle cancel"),this.$router.back()}}},d=c,n=t("2877"),u=Object(n["a"])(d,o,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=uploadProducts.ef6015fd.js.map