(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/user/Form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/user/Form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config/helper */ "./resources/js/config/helper.js");


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
  props: {
    user: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      roles: [],
      allRoles: [],
      isAdmin: false
    };
  },
  computed: {
    mode: function mode() {
      return this.user.id ? 'update' : 'create';
    }
  },
  watch: {
    user: function user(val) {
      this.roles = val.roles.data;
    }
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.loadRoles();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    loadRoles: function loadRoles() {
      var _this2 = this;

      this.$http.get('role', {
        params: {
          per_page: 100
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this2.allRoles = data.data;
      });
    },
    onSubmit: function onSubmit() {
      var _this3 = this;

      var url = 'user' + (this.user.id ? '/' + this.user.id : '');
      var method = this.user.id ? 'patch' : 'post';
      this.user.roles = this.roles;
      this.$http[method](url, this.user).then(function (response) {
        _this3.$message.success('You ' + _this3.mode + 'd a new account information!');

        _this3.$router.push({
          name: 'dashboard.user'
        });
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        Object(config_helper__WEBPACK_IMPORTED_MODULE_1__["stack_error"])(response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/user/Form.vue?vue&type=template&id=26b517d7&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/user/Form.vue?vue&type=template&id=26b517d7& ***!
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
  return _c(
    "el-form",
    { ref: "form", attrs: { "label-width": "120px" } },
    [
      _c(
        "el-form-item",
        [
          _c("el-avatar", {
            attrs: {
              size: 100,
              src: _vm.user.avatar ? _vm.user.avatar : "/images/default.png",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: _vm.$t("form.name") } },
        [
          _c("el-input", {
            attrs: {
              placeholder: _vm.$t("form.name"),
              disabled: _vm.user.id ? true : false,
            },
            model: {
              value: _vm.user.name,
              callback: function ($$v) {
                _vm.$set(_vm.user, "name", $$v)
              },
              expression: "user.name",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: _vm.$t("form.email") } },
        [
          _c("el-input", {
            attrs: { placeholder: _vm.$t("form.email") },
            model: {
              value: _vm.user.email,
              callback: function ($$v) {
                _vm.$set(_vm.user, "email", $$v)
              },
              expression: "user.email",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: _vm.$t("form.nickname") } },
        [
          _c("el-input", {
            attrs: { placeholder: _vm.$t("form.nickname") },
            model: {
              value: _vm.user.nickname,
              callback: function ($$v) {
                _vm.$set(_vm.user, "nickname", $$v)
              },
              expression: "user.nickname",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: _vm.$t("form.website") } },
        [
          _c("el-input", {
            attrs: { placeholder: _vm.$t("form.website") },
            model: {
              value: _vm.user.website,
              callback: function ($$v) {
                _vm.$set(_vm.user, "website", $$v)
              },
              expression: "user.website",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: _vm.$t("form.description") } },
        [
          _c("el-input", {
            attrs: { placeholder: _vm.$t("form.description") },
            model: {
              value: _vm.user.description,
              callback: function ($$v) {
                _vm.$set(_vm.user, "description", $$v)
              },
              expression: "user.description",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      !_vm.user.id
        ? [
            _c(
              "el-form-item",
              { attrs: { label: _vm.$t("form.password") } },
              [
                _c("el-input", {
                  attrs: {
                    type: "password",
                    placeholder: _vm.$t("form.password"),
                  },
                  model: {
                    value: _vm.user.password,
                    callback: function ($$v) {
                      _vm.$set(_vm.user, "password", $$v)
                    },
                    expression: "user.password",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-form-item",
              { attrs: { label: _vm.$t("form.confirm_password") } },
              [
                _c("el-input", {
                  attrs: {
                    type: "password",
                    placeholder: _vm.$t("form.confirm_password"),
                  },
                  model: {
                    value: _vm.user.password_confirmation,
                    callback: function ($$v) {
                      _vm.$set(_vm.user, "password_confirmation", $$v)
                    },
                    expression: "user.password_confirmation",
                  },
                }),
              ],
              1
            ),
          ]
        : _vm._e(),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: "Set Admin" } },
        [
          _c("el-checkbox", {
            attrs: { "true-label": 1, "false-label": 0 },
            model: {
              value: _vm.user.is_admin,
              callback: function ($$v) {
                _vm.$set(_vm.user, "is_admin", $$v)
              },
              expression: "user.is_admin",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _vm.user.is_admin
        ? _c(
            "el-form-item",
            { attrs: { label: "Roles" } },
            [
              _c(
                "el-select",
                {
                  attrs: {
                    multiple: "",
                    placeholder: _vm.$t("form.select_tag"),
                  },
                  model: {
                    value: _vm.roles,
                    callback: function ($$v) {
                      _vm.roles = $$v
                    },
                    expression: "roles",
                  },
                },
                _vm._l(_vm.allRoles, function (item) {
                  return _c("el-option", {
                    key: item.id,
                    attrs: { label: item.name, value: item.id },
                  })
                }),
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "el-form-item",
        [
          _c("el-button", { on: { click: _vm.onSubmit } }, [
            _vm._v(
              _vm._s(_vm.user.id ? _vm.$t("form.edit") : _vm.$t("form.create"))
            ),
          ]),
        ],
        1
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/config/helper.js":
/*!***************************************!*\
  !*** ./resources/js/config/helper.js ***!
  \***************************************/
/*! exports provided: stack_error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stack_error", function() { return stack_error; });
function stack_error(response) {
  if (typeof response.data == 'string') {
    this.$message.error(response.status + ' ' + response.statusText);
  } else {
    var data = response.data.errors;
    var content = '';
    Object.keys(data).map(function (key, index) {
      var value = data[key];
      content += '<span style="color: #e74c3c">' + value[0] + '</span><br>';
    });
    console.log({
      title: "Error Text!",
      type: 'error',
      html: content
    });
  }
}

/***/ }),

/***/ "./resources/js/dashboard/modules/user/Form.vue":
/*!******************************************************!*\
  !*** ./resources/js/dashboard/modules/user/Form.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_26b517d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=26b517d7& */ "./resources/js/dashboard/modules/user/Form.vue?vue&type=template&id=26b517d7&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/modules/user/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_26b517d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_26b517d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/modules/user/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/modules/user/Form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/dashboard/modules/user/Form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/user/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/modules/user/Form.vue?vue&type=template&id=26b517d7&":
/*!*************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/user/Form.vue?vue&type=template&id=26b517d7& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_26b517d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=26b517d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/user/Form.vue?vue&type=template&id=26b517d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_26b517d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_26b517d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);