(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+UcJ":function(t,e,a){"use strict";a("lbA0")},"5j4a":function(t,e,a){"use strict";var n={props:{params:{type:Object,default:""},placeholder:{type:String,default:""}},methods:{search:function(){this.$emit("search",this.params)}}},i=a("KHd+"),l=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 align-items-center p-0 text-right"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",[a("el-input",{attrs:{placeholder:t.placeholder,clearable:""},on:{input:t.search},model:{value:t.params.keyword,callback:function(e){t.$set(t.params,"keyword",e)},expression:"params.keyword"}})],1),t._v(" "),a("el-form-item",[a("small",[t._t("buttons")],2)])],1)],1)}),[],!1,null,null,null);e.a=l.exports},"8J3c":function(t,e,a){"use strict";a.r(e);var n=a("kJ5Q"),i={components:{CustomerFilter:a("5j4a").a,CustomerTable:n.a},data:function(){return{apiUrl:"article",basicColumn:[],tableOption:{},tableData:[],params:{page:1,per_page:10},paginate:!0,pageSizes:[10,30,50,100],pagination:{total:0,currentPage:1,pageSize:10},loading:!1}},created:function(){this.tableOption={label:this.$t("table.action"),fixed:"right",width:"300",item_actions:[{name:"view-item",icon:"el-icon-view"},{name:"edit-item",permission:"UPDATE_ARTICLE",icon:"el-icon-edit"},{name:"delete-item",permission:"DESTROY_ARTICLE",icon:"el-icon-delete"}]},this.basicColumn=[{prop:"page_image",label:this.$t("table.cover"),slot:!0},{prop:"title",label:this.$t("table.title")},{prop:"subtitle",label:this.$t("table.subtitle")},{prop:"category",label:this.$t("table.category"),slot:!0},{prop:"tags",label:this.$t("table.tag"),slot:!0},{prop:"published_at",label:this.$t("table.published_at")}],this.getData()},methods:{getData:function(){var t=this;this.loading=!0,this.$http.get(this.apiUrl,{params:this.params}).then((function(e){t.loading=!1,t.pagination=e.data.meta.pagination,t.tableData=e.data.data}))},setParams:function(t,e){this.params[t]=e,this.getData()},tableActions:function(t,e){var a=this;"edit-item"==t?this.$router.push({name:"dashboard.article.edit",params:{id:e.id}}):"delete-item"==t?this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.loading=!0,a.$http.delete("article/"+e.id).then((function(t){a.$message.success("You delete the article success!"),a.$emit("reload")})).catch((function(t){var e=t.response;a.loading=!1,"string"!=typeof e.data.error&&e.data.error?a.$message.error(e.data.error.message):a.$message.error(e.status+" : Resource "+e.statusText)}))})).catch((function(){a.$message({type:"info",message:"已取消删除"})})):"view-item"==t&&window.open("/"+e.slug,"_blank")},search:function(t){this.params=t,this.getData()},toCreate:function(){this.$router.push("/dashboard/articles/create")}}},l=a("KHd+"),o=Object(l.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"box-title"},[a("div",{staticClass:"row d-flex m-0"},[a("div",{staticClass:"col-md-6 d-flex align-items-center p-0"},[a("h5",{staticClass:"align-self-center"},[t._v(t._s(t.$t("page.articles"))+"  ")]),t._v(" "),t._m(0)]),t._v(" "),a("customer-filter",{attrs:{params:t.params,placeholder:t.$t("table.placeholder")},on:{search:t.search}},[a("template",{slot:"buttons"},[t.checkPermission("CREATE_ARTICLE")?a("el-button",{attrs:{type:"primary"},on:{click:t.toCreate}},[t._v(t._s(t.$t("page.create"))+"\n          ")]):t._e()],1)],2)],1)]),t._v(" "),a("div",{staticClass:"box-content p-0"},[a("customer-table",{attrs:{"table-data":t.tableData,"table-column":t.basicColumn,"table-option":t.tableOption,pagination:t.pagination,paginate:!0,"page-sizes":t.pageSizes,"api-url":t.apiUrl,loading:t.loading},on:{"table-action":t.tableActions,"set-params":t.setParams},scopedSlots:t._u([{key:"page_image",fn:function(t){var e=t.row;return[a("el-image",{staticStyle:{width:"100px",height:"100px","border-radius":"50%"},attrs:{"preview-src-list":e.preview_src_list,src:e.page_image}})]}},{key:"category",fn:function(e){var n=e.row;return[n.category?a("el-tag",[t._v("\n          "+t._s(n.category.name)+"\n        ")]):t._e()]}},{key:"tags",fn:function(e){var n=e.row;return t._l(n.tags,(function(e,n){return a("el-tag",{key:e.id},[t._v("\n          "+t._s(e.name)+"\n        ")])}))}}])})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"float-left"},[e("nav",{attrs:{"aria-label":"breadcrumb"}})])}],!1,null,null,null);e.default=o.exports},clLX:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".pagination[data-v-6d9df984]{position:relative;text-align:center;padding:5px 0}.actions[data-v-6d9df984]{width:100%;padding:12px 0;text-align:center}.actions a[data-v-6d9df984]{display:inline-block;border-radius:50%;width:2.2rem;height:2.2rem;line-height:2rem;padding:0;margin-left:5px;margin-right:5px}.actions a i[data-v-6d9df984]{font-size:.8rem}",""])},kJ5Q:function(t,e,a){"use strict";var n={props:{loading:{type:Boolean,default:!1},stripe:{type:Boolean,default:!0},border:{type:Boolean,default:!0},tooltipEffect:{type:String,default:"dark"},tableData:{type:Array,required:!0},tableColumn:{type:Array,required:!0},tableOption:{type:Object,default:function(){return{}}},itemActions:{type:Array,default:function(){return[{name:"edit-item",icon:"el-icon-edit"},{name:"delete-item",icon:"el-icon-delete"}]}},paginate:{type:Boolean,default:!0},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},pageSizes:{type:Array,default:function(){return[10,30,50,100]}},pagination:{type:Object,default:function(){return{total:0,currentPage:1,pageSize:10}}},tableHeight:{type:String}},methods:{getRowKey:function(t){return t.id},show:function(t,e){var a=e.split(".");for(var n in a)t=t[a[n]];return t},handleButtonClick:function(t,e,a){this.$emit("handle-button-click",{methods:t,row:e,index:a})},handleSortChange:function(t){this.$emit("handle-sort-change",t)},handleSelectionChange:function(t){this.$emit("handle-selection-change",t)},filterHandler:function(t,e,a){return e[a.property]===t},toggleExpand:function(t){this.$refs.table.toggleRowExpansion(t)},handleSizeChange:function(t){this.$emit("set-params","per_page",t)},handleCurrentChange:function(t){this.$emit("set-params","page",t)},callAction:function(t,e){this.$emit("table-action",t,e)},closeTag:function(t){this.$emit("close-tag",t)},handleToggleRowSelection:function(t,e){var a=this;this.$nextTick((function(){a.$refs.table.toggleRowSelection(t,e)}))}}},i=(a("+UcJ"),a("KHd+")),l=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[[a("el-table",t._g(t._b({directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",style:"width: 100%; height: "+(""===t.tableHeight?"100%":t.tableHeight),attrs:{"highlight-current-row":"","tooltip-effect":t.tooltipEffect,stripe:t.stripe,data:t.tableData,height:t.tableHeight,"row-key":t.getRowKey},on:{"row-click":t.toggleExpand,"sort-change":t.handleSortChange,"selection-change":t.handleSelectionChange}},"el-table",t.$attrs,!1),t.$listeners),[t._l(t.tableColumn,(function(e,n){return[e.filters?a("el-table-column",{key:n,attrs:{width:e.width,align:e.align,label:e.label,prop:e.prop,sortable:e.sortable,filters:e.filters?e.filters:[],"filter-method":t.filterHandler,"show-overflow-tooltip":!e.operate},scopedSlots:t._u([{key:"default",fn:function(n){return[e.slot?t._t(e.prop,null,null,n):a("span",[t._v(t._s(t.show(n.row,e.prop)))])]}}],null,!0)}):"selection"===e.type?a("el-table-column",{attrs:{type:e.type,width:e.width}}):a("el-table-column",{key:n,attrs:{width:e.width,align:e.align?e.align:"center",label:e.label,prop:e.prop,sortable:e.sortable,"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(n){return[e.slot?t._t(e.prop,null,null,n):a("span",[t._v(t._s(t.show(n.row,e.prop)))])]}}],null,!0)})]})),t._v(" "),t.tableOption.label?a("el-table-column",{attrs:{fixed:t.tableOption.fixed,align:t.tableOption.align?t.tableOption.align:"center",width:t.tableOption.width,label:t.tableOption.label},scopedSlots:t._u([{key:"default",fn:function(e){return[t.tableOption.item_actions?[t.tableOption.item_actions.length<=3?t._l(t.tableOption.item_actions,(function(n,i){return a("el-button",{key:i,attrs:{type:"text",icon:n.icon},on:{click:function(a){return t.callAction(n.name,e.row)}}},[t._v("\n                "+t._s(n.label)+"\n              ")])})):[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[t._v("\n                  操作"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.tableOption.item_actions,(function(n,i){return a("el-dropdown-item",{key:i,attrs:{command:n.name,icon:n.icon},nativeOn:{click:function(a){return t.callAction(n.name,e.row)}}},[t._v(t._s(n.label)+"\n                  ")])})),1)],1)]]:t._l(t.itemActions,(function(n,i){return a("el-button",{key:i,class:n.icon,attrs:{type:"text"},on:{click:function(a){return t.callAction(n.name,e.row)}}},[t._v("\n              "+t._s(n.label)+"\n            ")])}))]}}],null,!1,2866732118)}):t._e()],2)],t._v(" "),t.paginate&&t.pagination.total>0?[a("section",{staticClass:"pagination"},[a("el-pagination",t._g(t._b({attrs:{"page-sizes":t.pageSizes,layout:t.layout,"current-page":t.pagination.current_page,"page-size":t.pagination.per_page,total:t.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1),t.$listeners))],1)]:t._e()],2)}),[],!1,null,"6d9df984",null);e.a=l.exports},lbA0:function(t,e,a){var n=a("clLX");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(t.exports=n.locals)}}]);