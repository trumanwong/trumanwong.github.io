(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{r1yN:function(t,e,s){"use strict";s.r(e);var r={components:{UserForm:s("W4yC").a},data:function(){return{user:void 0}},created:function(){this.loadUser()},methods:{loadUser:function(){var t=this;this.$http.get("user/"+this.$route.params.id+"/edit?include=roles").then((function(e){t.user=e.data.data}))}}},n=s("KHd+"),o=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("vue-form",{attrs:{title:this.$t("form.edit_user")}},[e("template",{slot:"buttons"},[e("el-link",{staticStyle:{"text-decoration":"none"},attrs:{icon:"el-icon-back",underline:!1,href:"/dashboard/users"}},[this._v(this._s(this.$t("form.back")))])],1),this._v(" "),e("template",{slot:"content"},[e("user-form",{attrs:{user:this.user}})],1)],2)}),[],!1,null,null,null);e.default=o.exports}}]);