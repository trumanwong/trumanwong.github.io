(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/link/Link.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/link/Link.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CustomerTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/CustomerTable */ "./resources/js/dashboard/components/CustomerTable.vue");
/* harmony import */ var _components_CustomerFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CustomerFilter */ "./resources/js/dashboard/components/CustomerFilter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CustomerFilter: _components_CustomerFilter__WEBPACK_IMPORTED_MODULE_1__["default"],
    CustomerTable: _components_CustomerTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      apiUrl: 'link',
      basicColumn: [],
      tableOption: {},
      tableData: [],
      params: {
        page: 1,
        per_page: 10
      },
      paginate: true,
      pageSizes: [10, 30, 50, 100],
      pagination: {
        total: 0,
        currentPage: 1,
        pageSize: 10
      }
    };
  },
  created: function created() {
    this.tableOption = {
      label: this.$t('table.action'),
      fixed: 'right',
      width: '200',
      item_actions: [{
        name: 'edit-item',
        permission: 'UPDATE_ARTICLE',
        icon: 'fas fa-pencil-alt',
        "class": 'btn btn-info'
      }, {
        name: 'delete-item',
        permission: 'DESTROY_ARTICLE',
        icon: 'fas fa-trash-alt',
        "class": 'btn btn-danger'
      }]
    };
    this.basicColumn = [{
      prop: 'image',
      label: this.$t('table.image'),
      slot: true
    }, {
      prop: 'name',
      label: this.$t('table.name')
    }, {
      prop: 'link',
      label: this.$t('table.link')
    }, {
      prop: 'status',
      label: this.$t('table.enabled'),
      slot: true
    }, {
      prop: 'created_at',
      label: this.$t('table.created_at')
    }];
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      this.$http.get(this.apiUrl, {
        params: this.params
      }).then(function (response) {
        _this.pagination = response.data.meta.pagination;
        _this.tableData = response.data.data;
      });
    },
    tableActions: function tableActions(action, data) {
      var _this2 = this;

      if (action == 'edit-item') {
        this.$router.push({
          name: 'dashboard.link.edit',
          params: {
            id: data.id
          }
        });
      } else if (action == 'delete-item') {
        this.$http["delete"]('link/' + data.id).then(function (response) {
          _this2.$message.success('You delete the link success!');

          _this2.$emit('reload', action);
        })["catch"](function (_ref) {
          var response = _ref.response;

          _this2.$message.error(response.status + ' : Resource ' + response.statusText);
        });
      }
    },
    search: function search(params) {
      this.params = params;
      this.getData();
    },
    toCreate: function toCreate() {
      this.$router.push('/dashboard/links/create');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/link/Link.vue?vue&type=template&id=3023b0be&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/link/Link.vue?vue&type=template&id=3023b0be& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "box" }, [
    _c("div", { staticClass: "box-title" }, [
      _c(
        "div",
        { staticClass: "row d-flex m-0" },
        [
          _c("div", { staticClass: "col-md-6 d-flex align-items-center p-0" }, [
            _c("h5", { staticClass: "align-self-center" }, [
              _vm._v(_vm._s(_vm.$t("page.links")) + "  "),
            ]),
            _vm._v(" "),
            _vm._m(0),
          ]),
          _vm._v(" "),
          _c(
            "customer-filter",
            {
              attrs: {
                params: _vm.params,
                placeholder: _vm.$t("table.placeholder"),
              },
              on: { search: _vm.search },
            },
            [
              _c(
                "template",
                { slot: "buttons" },
                [
                  _vm.checkPermission("CREATE_LINK")
                    ? _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.toCreate },
                        },
                        [_vm._v(_vm._s(_vm.$t("page.create")))]
                      )
                    : _vm._e(),
                ],
                1
              ),
            ],
            2
          ),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "box-content p-0" },
      [
        _c("customer-table", {
          attrs: {
            "table-data": _vm.tableData,
            "table-column": _vm.basicColumn,
            "table-option": _vm.tableOption,
            pagination: _vm.pagination,
            paginate: true,
            "page-sizes": _vm.pageSizes,
            "api-url": _vm.apiUrl,
          },
          on: { "table-action": _vm.tableActions },
          scopedSlots: _vm._u([
            {
              key: "image",
              fn: function (ref) {
                var row = ref.row
                return [
                  _c("el-image", {
                    staticStyle: {
                      width: "100px",
                      height: "100px",
                      "border-radius": "50%",
                    },
                    attrs: { "preview-src-list": [row.image], src: row.image },
                  }),
                ]
              },
            },
            {
              key: "status",
              fn: function (ref) {
                var row = ref.row
                return [
                  _c("el-switch", {
                    attrs: {
                      "active-color": "#13ce66",
                      "inactive-color": "#ff4949",
                    },
                    model: {
                      value: row.status,
                      callback: function ($$v) {
                        _vm.$set(row, "status", $$v)
                      },
                      expression: "row.status",
                    },
                  }),
                ]
              },
            },
          ]),
        }),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "float-left" }, [
      _c("nav", { attrs: { "aria-label": "breadcrumb" } }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/dashboard/modules/link/Link.vue":
/*!******************************************************!*\
  !*** ./resources/js/dashboard/modules/link/Link.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Link_vue_vue_type_template_id_3023b0be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link.vue?vue&type=template&id=3023b0be& */ "./resources/js/dashboard/modules/link/Link.vue?vue&type=template&id=3023b0be&");
/* harmony import */ var _Link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/modules/link/Link.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Link_vue_vue_type_template_id_3023b0be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Link_vue_vue_type_template_id_3023b0be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/modules/link/Link.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/modules/link/Link.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/dashboard/modules/link/Link.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Link.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/link/Link.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/modules/link/Link.vue?vue&type=template&id=3023b0be&":
/*!*************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/link/Link.vue?vue&type=template&id=3023b0be& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_template_id_3023b0be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Link.vue?vue&type=template&id=3023b0be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/link/Link.vue?vue&type=template&id=3023b0be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_template_id_3023b0be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_template_id_3023b0be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);