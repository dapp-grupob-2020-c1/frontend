(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["authRedirect"],{"5a5f":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("PageContainer",[o("p",{staticClass:"text-center"},[t._v("Auth...")])])},s=[],a=o("e61d"),r=o("5350"),i={components:{PageContainer:r["a"]},mounted:function(){if(console.log("auth mounted"),this.$route.query.token)this.$store.commit("auth/setLogin",this.$route.query.token),this.$root.$bvToast.toast(this.$t("login.loginSuccess"),a["a"]),this.$router.push("/dashboard");else{var t={variant:"danger",toaster:"b-toaster-top-center",noCloseButton:!0,autoHideDelay:5e3};this.$root.$bvToast.toast(this.$t("login.loginError"),t),this.$router.push("/login")}}},u=i,c=o("2877"),l=Object(c["a"])(u,n,s,!1,null,null,null);e["default"]=l.exports},e61d:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var n={variant:"success",toaster:"b-toaster-top-center",noCloseButton:!0,autoHideDelay:5e3}}}]);
//# sourceMappingURL=authRedirect.eaf7056b.js.map