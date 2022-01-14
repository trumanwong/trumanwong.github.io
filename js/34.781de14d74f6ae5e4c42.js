(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/user/User.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/user/User.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CustomerFilter: _components_CustomerFilter__WEBPACK_IMPORTED_MODULE_1__["default"],
    CustomerTable: _components_CustomerTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      apiUrl: 'tag',
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
      width: '200'
    };
    this.basicColumn = [{
      name: 'id',
      trans: 'table.id',
      titleClass: 'width-5-percent text-center',
      dataClass: 'text-center'
    }, {
      name: 'avatar',
      trans: 'table.avatar',
      titleClass: 'text-center',
      dataClass: 'text-center',
      callback: 'avatar'
    }, {
      name: 'name',
      trans: 'table.username'
    }, {
      name: 'email',
      trans: 'table.email'
    }, {
      name: '__component',
      trans: 'table.status',
      titleClass: 'text-center',
      dataClass: 'text-center'
    }, {
      name: 'created_at',
      trans: 'table.created_at'
    }, {
      name: '__actions',
      trans: 'table.action',
      titleClass: 'text-center',
      dataClass: 'text-center'
    }];
    this.getData();
  },
  methods: {
    avatar: function avatar(value) {
      return '<img src="' + value + '" class="avatar img-fluid rounded-circle" />';
    },
    tableActions: function tableActions(action, data) {
      var _this = this;

      if (action == 'edit-item') {
        this.$router.push({
          name: 'dashboard.user.edit',
          params: {
            id: data.id
          }
        });
      } else if (action == 'delete-item') {
        this.$http["delete"]('user/' + data.id).then(function (response) {
          toastr.success('You delete the user success!');

          _this.$emit('reload');
        }, function (response) {
          if (typeof response.data.error !== 'string' && response.data.error) {
            toastr.error(response.data.error.message);
          } else {
            toastr.error(response.status + ' : Resource ' + response.statusText);
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/user/User.vue?vue&type=template&id=0ad1c944&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/user/User.vue?vue&type=template&id=0ad1c944& ***!
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
              _vm._v(_vm._s(_vm.$t("page.users")) + "  "),
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
                  _vm.checkPermission("CREATE_USER")
                    ? _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.toCreate },
                        },
                        [_vm._v(_vm._s(_vm.$t("page.create")) + "\n          ")]
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
          on: { "table-action": _vm.tableActions, "set-params": _vm.setParams },
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

/***/ "./resources/js/dashboard/modules/user/User.vue":
/*!******************************************************!*\
  !*** ./resources/js/dashboard/modules/user/User.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_vue_vue_type_template_id_0ad1c944___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=0ad1c944& */ "./resources/js/dashboard/modules/user/User.vue?vue&type=template&id=0ad1c944&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/modules/user/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_0ad1c944___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_vue_vue_type_template_id_0ad1c944___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/modules/user/User.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/modules/user/User.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/dashboard/modules/user/User.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/user/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/modules/user/User.vue?vue&type=template&id=0ad1c944&":
/*!*************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/user/User.vue?vue&type=template&id=0ad1c944& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_0ad1c944___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=template&id=0ad1c944& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/user/User.vue?vue&type=template&id=0ad1c944&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_0ad1c944___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_0ad1c944___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);