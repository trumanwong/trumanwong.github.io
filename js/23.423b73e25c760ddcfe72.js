(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+A9I":function(t,e,a){"use strict";a.r(e);var r={components:{CategoryForm:a("wK84").a},data:function(){return{category:void 0}},created:function(){this.loadCategory()},methods:{loadCategory:function(){var t=this;this.$http.get("category/"+this.$route.params.id+"/edit").then((function(e){t.category=e.data.data}))}}},o=a("KHd+"),s=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("vue-form",{attrs:{title:this.$t("form.edit_category")}},[e("template",{slot:"buttons"},[e("el-link",{staticStyle:{"text-decoration":"none"},attrs:{icon:"el-icon-back",underline:!1,href:"/dashboard/categories"}},[this._v(this._s(this.$t("form.back")))])],1),this._v(" "),e("template",{slot:"content"},[e("category-form",{attrs:{category:this.category}})],1)],2)}),[],!1,null,null,null);e.default=s.exports},"1GJp":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var r=a("XJYT");function o(t){if("string"==typeof t.data)this.$message.error(t.status+" "+t.statusText);else{var e=t.data.errors,a="";Object.keys(e).map((function(t,r){var o=e[t];a+='<span style="color: #e74c3c">'+o[0]+"</span><br>"})),Object(r.Message)({dangerouslyUseHTMLString:!0,message:a})}}},wK84:function(t,e,a){"use strict";var r=a("1GJp"),o={props:{category:{type:Object,default:function(){return{}}}},data:function(){return{options:[{id:0,label:"文章"},{id:1,label:"文件"}]}},computed:{mode:function(){return this.category.id?"update":"create"}},methods:{onSubmit:function(){var t=this,e="category"+(this.category.id?"/"+this.category.id:""),a=this.category.id?"patch":"post";this.$http[a](e,this.category).then((function(e){t.$message.success("You "+t.mode+"d the category success!"),t.$router.push({name:"dashboard.category"})})).catch((function(t){var e=t.response;Object(r.a)(e)}))}}},s=a("KHd+"),c=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("el-form",{ref:"form",staticClass:"col-sm-6 offset-sm-2",attrs:{model:t.category,"label-width":"80px"}},[a("el-form-item",{attrs:{label:t.$t("form.category_name")}},[a("el-input",{attrs:{clearable:""},model:{value:t.category.name,callback:function(e){t.$set(t.category,"name",e)},expression:"category.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("form.path")}},[a("el-input",{attrs:{clearable:""},model:{value:t.category.path,callback:function(e){t.$set(t.category,"path",e)},expression:"category.path"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("form.category")}},[a("el-select",{attrs:{clearable:"",placeholder:t.$t("form.select_category_type")},model:{value:t.category.type,callback:function(e){t.$set(t.category,"type",e)},expression:"category.type"}},t._l(t.options,(function(t){return a("el-option",{key:t.id,attrs:{label:t.label,value:t.id}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("form.description")}},[a("el-input",{attrs:{type:"textarea",placeholder:t.$t("form.category_description"),maxlength:"255","show-word-limit":"",clearable:""},model:{value:t.category.description,callback:function(e){t.$set(t.category,"description",e)},expression:"category.description"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(t._s(t.category.id?t.$t("form.edit"):t.$t("form.create")))])],1)],1)],1)}),[],!1,null,null,null);e.a=c.exports}}]);