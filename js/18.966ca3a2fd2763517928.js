(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/role/Permission.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/role/Permission.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  data: function data() {
    return {
      modules: [],
      selectedPermissions: []
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Promise.all([_this.loadRole(), _this.loadPermissions()]);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    savePermissions: function savePermissions() {
      var _this2 = this;

      this.$http.post("role/".concat(this.$route.params.id, "/permissions"), {
        permissions: this.selectedPermissions
      }).then(function () {
        _this2.$router.push({
          name: 'dashboard.role'
        });
      });
    },
    loadRole: function loadRole() {
      var _this3 = this;

      this.$http.get("role/".concat(this.$route.params.id, "/edit")).then(function (_ref) {
        var data = _ref.data;
        _this3.selectedPermissions = data.data.permission_ids;
      });
    },
    loadPermissions: function loadPermissions() {
      var _this4 = this;

      var names = ['user', 'article', 'discussion', 'comment', 'file', 'tag', 'category', 'link', 'role', 'visitor', 'system'];
      var modules = [];
      names.forEach(function (item) {
        modules.push({
          name: item,
          label: _this4.$t("permission.".concat(item)),
          permissions: []
        });
      });
      this.$http.get('permissions').then(function (_ref2) {
        var data = _ref2.data;
        data.data.forEach(function (item) {
          var type = item.name.split('_')[1];
          modules.forEach(function (module, index) {
            if (type === module.name) {
              modules[index].permissions.push(item);
            }
          });
        });
        _this4.modules = modules;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/role/Permission.vue?vue&type=style&index=0&id=74ab29d2&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/role/Permission.vue?vue&type=style&index=0&id=74ab29d2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card[data-v-74ab29d2] {\n  border-radius: 0;\n  border-bottom: 1px solid #e7eaec !important;\n}\n.card[data-v-74ab29d2]:last-child {\n  border-bottom: 0 !important;\n  border-radius: 5px;\n}\n.card .custom-control input[data-v-74ab29d2],\n.card .custom-control label[data-v-74ab29d2] {\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/role/Permission.vue?vue&type=style&index=0&id=74ab29d2&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/role/Permission.vue?vue&type=style&index=0&id=74ab29d2&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Permission.vue?vue&type=style&index=0&id=74ab29d2&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/role/Permission.vue?vue&type=style&index=0&id=74ab29d2&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/role/Permission.vue?vue&type=template&id=74ab29d2&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/role/Permission.vue?vue&type=template&id=74ab29d2&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "box box-radius shadow-sm" }, [
      _c(
        "div",
        {
          staticClass:
            "box-title d-flex justify-content-between align-items-center",
        },
        [
          _c("h5", { staticClass: "m-0" }, [
            _vm._v(_vm._s(_vm.$t("form.set_permissions"))),
          ]),
          _vm._v(" "),
          _c(
            "small",
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-primary mr-2",
                  on: { click: _vm.savePermissions },
                },
                [_vm._v(_vm._s(_vm.$t("form.submit")))]
              ),
              _vm._v(" "),
              _c(
                "el-link",
                {
                  staticStyle: { "text-decoration": "none" },
                  attrs: {
                    icon: "el-icon-back",
                    underline: false,
                    href: "/dashboard/roles",
                  },
                },
                [_vm._v(_vm._s(_vm.$t("form.back")))]
              ),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "box-content p-0" }, [
        _c(
          "div",
          { staticClass: "row m-0" },
          _vm._l(_vm.modules, function (module) {
            return _c(
              "div",
              { staticClass: "card col-md-12 p-3 border-0" },
              [
                _c(
                  "h6",
                  { staticClass: "card-title font-weight-bold text-upper" },
                  [_vm._v(_vm._s(module.label))]
                ),
                _vm._v(" "),
                _c(
                  "el-checkbox-group",
                  {
                    model: {
                      value: _vm.selectedPermissions,
                      callback: function ($$v) {
                        _vm.selectedPermissions = $$v
                      },
                      expression: "selectedPermissions",
                    },
                  },
                  _vm._l(module.permissions, function (permission) {
                    return _c(
                      "el-checkbox-button",
                      { key: permission.id, attrs: { label: permission.id } },
                      [_vm._v(_vm._s(permission.label))]
                    )
                  }),
                  1
                ),
              ],
              1
            )
          }),
          0
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/dashboard/modules/role/Permission.vue":
/*!************************************************************!*\
  !*** ./resources/js/dashboard/modules/role/Permission.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Permission_vue_vue_type_template_id_74ab29d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Permission.vue?vue&type=template&id=74ab29d2&scoped=true& */ "./resources/js/dashboard/modules/role/Permission.vue?vue&type=template&id=74ab29d2&scoped=true&");
/* harmony import */ var _Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Permission.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/modules/role/Permission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Permission_vue_vue_type_style_index_0_id_74ab29d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Permission.vue?vue&type=style&index=0&id=74ab29d2&lang=scss&scoped=true& */ "./resources/js/dashboard/modules/role/Permission.vue?vue&type=style&index=0&id=74ab29d2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Permission_vue_vue_type_template_id_74ab29d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Permission_vue_vue_type_template_id_74ab29d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "74ab29d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/modules/role/Permission.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/modules/role/Permission.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/role/Permission.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Permission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/role/Permission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/modules/role/Permission.vue?vue&type=style&index=0&id=74ab29d2&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/role/Permission.vue?vue&type=style&index=0&id=74ab29d2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_dist_cjs_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_style_index_0_id_74ab29d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Permission.vue?vue&type=style&index=0&id=74ab29d2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/role/Permission.vue?vue&type=style&index=0&id=74ab29d2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_dist_cjs_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_style_index_0_id_74ab29d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_dist_cjs_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_style_index_0_id_74ab29d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_dist_cjs_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_style_index_0_id_74ab29d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_dist_cjs_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_style_index_0_id_74ab29d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/dashboard/modules/role/Permission.vue?vue&type=template&id=74ab29d2&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/role/Permission.vue?vue&type=template&id=74ab29d2&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_template_id_74ab29d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Permission.vue?vue&type=template&id=74ab29d2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/role/Permission.vue?vue&type=template&id=74ab29d2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_template_id_74ab29d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_template_id_74ab29d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);