require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Answer.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _SingleQ__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/SingleQ.vue");
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
  data() {
    return {
      answer: ""
    };
  },

  methods: {
    addAnswer() {
      if (this.answer == "") {
        alert({
          title: "",
          message: "Write somthing to answer",
          okButtonText: "ok"
        });
      } else {
        this.$backendService.addAnswer(this.answer).then(result => {
          console.log("done" + result); // alert("Done");

          alert({
            title: "",
            message: "Added Successfully",
            okButtonText: "ok"
          });
          this.answer = "";
        }, error => {
          console.log(error);
        });
      }
    },

    Back() {
      this.$navigateTo(_SingleQ__WEBPACK_IMPORTED_MODULE_1__["default"], {
        clearHistory: true
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Ask.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
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
  data() {
    return {
      question: {
        title: "",
        details: ""
      }
    };
  },

  methods: {
    AskQ() {
      if (this.question.title == "" || this.question.details == "") {
        alert({
          title: "",
          message: "Question title and details are required",
          okButtonText: "ok"
        });
      } else {
        this.$backendService.AskQn(this.question).then(result => {
          // console.log("done"+ result)
          // alert("Done");
          alert({
            title: "",
            message: "Added Successfully",
            okButtonText: "ok"
          });
          this.question.title = "";
          this.question.details = "";
        }, error => {
          console.log(error);
        });
      }
    },

    Back() {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _Ask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Ask.vue");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Profile.vue");
/* harmony import */ var _SingleQ__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/SingleQ.vue");
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-ui-listview/vue");
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_4__);
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





var ObservableArray = __webpack_require__("tns-core-modules/data/observable-array").ObservableArray;



var platformModule = __webpack_require__("tns-core-modules/platform");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      listofrequest: new ObservableArray(),
      navbar: "Welcome " + global.userData.user.first_name
    };
  },

  methods: {
    onPullToRefreshInitiated(_ref) {
      var {
        object
      } = _ref;
      console.log('Pulling...');
      this.$nextTick(() => {
        this.$backendService.getRequests().then(result => {
          // console.log(" ----0---- " + result);
          this.listofrequest = new ObservableArray(result);
        }, error => {
          console.log(error);
        });
        object.notifyPullToRefreshFinished();
      });
    },

    onItemTap: function onItemTap(_ref2) {
      var {
        item
      } = _ref2;
      // console.log(item.id);
      global.selected = item.id;
      this.$navigateTo(_SingleQ__WEBPACK_IMPORTED_MODULE_3__["default"], {
        clearHistory: true
      });
    },

    logout() {
      this.$backendService.logout();
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true
      });
    },

    Ask() {
      this.$navigateTo(_Ask__WEBPACK_IMPORTED_MODULE_1__["default"], {
        clearHistory: true
      });
    },

    Profile() {
      this.$navigateTo(_Profile__WEBPACK_IMPORTED_MODULE_2__["default"], {
        clearHistory: true
      });
    },

    stripHtml(str) {
      if (str === null || str === '') return false;else str = str.toString();
      return str.replace(/<[^>]*>/g, '');
    }

  },

  mounted() {
    this.$backendService.getRequests().then(result => {
      console.log(" ----0---- " + result);
      this.listofrequest = new ObservableArray(result);
    }, error => {
      console.log(error);
    });
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
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
  data() {
    return {
      isLoggingIn: true,
      processing: false,
      user: {
        email: "blabla@bla.bla",
        password: "123",
        confirmPassword: "123",
        firstname: "Abdllah",
        lastname: "saad"
      }
    };
  },

  mounted() {
    this.$backendService.access().then(result => {}, error => {
      console.log(error);
    });
  },

  methods: {
    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
    },

    submit() {
      if (!this.user.email || !this.user.password) {
        this.alert("Please provide both an email address and password.");
        return;
      }

      this.processing = true;

      if (this.isLoggingIn) {
        this.login();
      } else {
        this.register();
      }
    },

    login() {
      var result = this.$backendService.login(this.user).then(result => {
        console.log(" ---- " + result);

        if (result) {
          this.isLoggingIn = true;
          this.processing = false;
          this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
            clearHistory: true
          }); //console.log("from login vue --------- "+global.accessToken);
        } else {
          this.alert("Wrong Username or Password");
          this.processing = false;
        }
      }, error => {
        console.log(error);
      });
    },

    register() {
      if (this.user.firstname == "" || this.user.lastname == "" || this.user.confirmPassword == "") {
        this.alert("Please fill all the fields");
        this.processing = false;
      } else {
        if (this.user.password != this.user.confirmPassword) {
          this.alert("Your passwords do not match.");
          this.processing = false;
          return;
        } else {
          this.$backendService.addUser(this.user).then(result => {
            console.log(result);
            this.processing = false;
            this.alert("Your account was successfully created.");
            this.isLoggingIn = true;
          }).catch(() => {
            this.processing = false;
            this.alert("Unfortunately we were unable to create your account.");
          });
        }
      }
    },

    forgotPassword() {
      prompt({
        title: "Forgot Password",
        message: "Enter the email address you used to register for Lynx to reset your password.",
        inputType: "email",
        defaultText: "",
        okButtonText: "Ok",
        cancelButtonText: "Cancel"
      }).then(data => {
        if (data.result) {
          this.$backendService.resetPassword(data.text.trim()).then(() => {
            this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
          }).catch(() => {
            this.alert("Unfortunately, an error occurred resetting your password.");
          });
        }
      });
    },

    focusPassword() {
      this.$refs.password.nativeView.focus();
    },

    focusConfirmPassword() {
      if (!this.isLoggingIn) {
        this.$refs.confirmPassword.nativeView.focus();
      }
    },

    alert(message) {
      return alert({
        title: "LYNX",
        okButtonText: "OK",
        message: message
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Profile.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue");
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
  data() {
    return {
      name: "Name: " + global.userData.user.first_name + " " + global.userData.user.last_name,
      joinedin: "Email: " + global.userData.user.email
    };
  },

  methods: {
    logout() {
      this.$backendService.logout();
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
        clearHistory: true
      });
    },

    Back() {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/SingleQ.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _Answer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Answer.vue");
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-ui-listview/vue");
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_2__);
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



var ObservableArray = __webpack_require__("tns-core-modules/data/observable-array").ObservableArray;



var platformModule = __webpack_require__("tns-core-modules/platform");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      like: "~/images/beforelike.png",
      dislike: "~/images/dislike.png",
      ques: {
        name: "",
        date: "",
        title: "",
        details: "",
        id: ""
      },
      id: global.selected,
      answers: new ObservableArray(),
      test: ["1", "2", "3"]
    };
  },

  mounted() {
    this.$backendService.SingleQ().then(result => {
      // console.log("7amada");
      console.log(result);
      this.ques.title = result.title;
      this.ques.details = result.details;
      this.ques.name = result.owner.first_name + " " + result.owner.last_name;
      var str = result.created_on;
      var stringArray = str.split(" ");
      this.ques.date = stringArray[0]; // console.log(this.ques);
    }, error => {
      console.log(error);
    });
    this.$backendService.Answers().then(result => {
      // console.log("7amada");
      console.log(result);
      this.answers = new ObservableArray(result); // console.log(this.ques);
    }, error => {
      console.log(error);
    });
  },

  methods: {
    onPullToRefreshInitiated(_ref) {
      var {
        object
      } = _ref;
      console.log('Pulling...');
      this.$nextTick(() => {
        this.$backendService.Answers().then(result => {
          // console.log(" ----0---- " + result);
          this.answers = new ObservableArray(result);
        }, error => {
          console.log(error);
        });
        object.notifyPullToRefreshFinished();
      });
    },

    Answer() {
      this.$navigateTo(_Answer__WEBPACK_IMPORTED_MODULE_1__["default"], {
        clearHistory: true
      });
    },

    Back() {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Answer.vue?vue&type=style&index=0&id=4425e44e&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-panel[data-v-4425e44e] {\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n.description-label[data-v-4425e44e] {\n    margin-bottom: 15;\n}\n\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Answer.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Ask.vue?vue&type=style&index=0&id=3c0a3624&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-panel[data-v-3c0a3624] {\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n.description-label[data-v-3c0a3624] {\n    margin-bottom: 15;\n}\n\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Ask.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page[data-v-c27482c4] {\n    align-items: center;\n    flex-direction: column;\n}\n.form[data-v-c27482c4] {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n}\n.logo[data-v-c27482c4] {\n    margin-bottom: 12;\n    height: 90;\n    font-weight: bold;\n}\n.header[data-v-c27482c4] {\n    horizontal-align: center;\n    font-size: 25;\n    font-weight: 600;\n    margin-bottom: 70;\n    text-align: center;\n    color: #D51A1A;\n}\n.input-field[data-v-c27482c4] {\n    margin-bottom: 25;\n}\n.input[data-v-c27482c4] {\n    font-size: 18;\n    placeholder-color: #A8A8A8;\n}\n.input[data-v-c27482c4]:disabled {\n    background-color: white;\n    opacity: 0.5;\n}\n.btn-primary[data-v-c27482c4] {\n    margin: 30 5 15 5;\n}\n.login-label[data-v-c27482c4] {\n    horizontal-align: center;\n    color: #A8A8A8;\n    font-size: 16;\n}\n.sign-up-label[data-v-c27482c4] {\n    margin-bottom: 20;\n}\n.bold[data-v-c27482c4] {\n    color: #000000;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Login.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Profile.vue?vue&type=style&index=0&id=010534c4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-panel[data-v-010534c4] {\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n.description-label[data-v-010534c4] {\n    margin-bottom: 15;\n}\n\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Profile.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Answer.vue?vue&type=template&id=4425e44e&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { padding: "15" } },
        [
          _c(
            "GridLayout",
            { attrs: { width: "94%" } },
            [
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "horizontal",
                    horizontalAlignment: "left"
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "~/images/logo2.png",
                      width: "35",
                      height: "35",
                      verticalAlignment: "center",
                      marginRight: "0"
                    }
                  }),
                  _c("Label", {
                    attrs: {
                      text: "Add an Answer",
                      fontSize: "20",
                      verticalAlignment: "center",
                      marginLeft: "15"
                    }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "horizontal",
                    horizontalAlignment: "right"
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "~/images/back.jpg",
                      width: "35",
                      height: "35",
                      verticalAlignment: "center",
                      marginRight: "15"
                    },
                    on: { tap: _vm.Back }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            { staticClass: "home-panel" },
            [
              _c("TextView", {
                staticStyle: {
                  height: "300",
                  borderWidth: "1",
                  borderColor: "Green",
                  borderRadius: "10"
                },
                attrs: {
                  loaded: "textviewloaded",
                  hint: "Write your answer here",
                  updateTextTrigger: "textChanged",
                  editable: "true"
                },
                model: {
                  value: _vm.answer,
                  callback: function($event) {
                    _vm.answer = $event.object["text"]
                  },
                  expression: "answer"
                }
              }),
              _c("Button", {
                staticStyle: {
                  width: "100",
                  height: "40",
                  borderWidth: "1",
                  borderColor: "Green",
                  borderRadius: "10"
                },
                attrs: {
                  text: "Answer",
                  fontSize: "15",
                  marginTop: "30",
                  backgroundColor: "#6DD0B4"
                },
                on: { tap: _vm.addAnswer }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Ask.vue?vue&type=template&id=3c0a3624&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { padding: "15" } },
        [
          _c(
            "GridLayout",
            { attrs: { width: "94%" } },
            [
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "horizontal",
                    horizontalAlignment: "left"
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "~/images/logo2.png",
                      width: "35",
                      height: "35",
                      verticalAlignment: "center",
                      marginRight: "0"
                    }
                  }),
                  _c("Label", {
                    attrs: {
                      text: "Ask a Question",
                      fontSize: "20",
                      verticalAlignment: "center",
                      marginLeft: "15"
                    }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "horizontal",
                    horizontalAlignment: "right"
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "~/images/back.jpg",
                      width: "35",
                      height: "35",
                      verticalAlignment: "center",
                      marginRight: "15"
                    },
                    on: { tap: _vm.Back }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            { staticClass: "home-panel" },
            [
              _c("TextField", {
                staticStyle: {
                  height: "50",
                  borderWidth: "1",
                  borderColor: "Green",
                  borderRadius: "10"
                },
                attrs: { hint: "Title", marginTop: "10" },
                model: {
                  value: _vm.question.title,
                  callback: function($event) {
                    _vm.$set(_vm.question, "title", $event.object["text"])
                  },
                  expression: "question.title"
                }
              }),
              _c("TextField", {
                staticStyle: {
                  height: "100",
                  borderWidth: "1",
                  borderColor: "Green",
                  borderRadius: "10"
                },
                attrs: { hint: "Details", marginTop: "10" },
                model: {
                  value: _vm.question.details,
                  callback: function($event) {
                    _vm.$set(_vm.question, "details", $event.object["text"])
                  },
                  expression: "question.details"
                }
              }),
              _c("Button", {
                staticStyle: {
                  width: "100",
                  height: "40",
                  borderWidth: "1",
                  borderColor: "Green",
                  borderRadius: "10"
                },
                attrs: {
                  text: "Ask",
                  fontSize: "15",
                  marginTop: "30",
                  backgroundColor: "#6DD0B4"
                },
                on: { tap: _vm.AskQ }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { padding: "15" } },
        [
          _c(
            "GridLayout",
            { attrs: { width: "94%" } },
            [
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "horizontal",
                    horizontalAlignment: "left"
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "~/images/logo2.png",
                      width: "35",
                      height: "35",
                      verticalAlignment: "center",
                      marginRight: "0"
                    }
                  }),
                  _c("Label", {
                    attrs: {
                      text: _vm.navbar,
                      fontSize: "20",
                      verticalAlignment: "center",
                      marginLeft: "0"
                    }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "horizontal",
                    horizontalAlignment: "right"
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "~/images/ask.png",
                      width: "35",
                      height: "35",
                      verticalAlignment: "center",
                      marginRight: "15"
                    },
                    on: { tap: _vm.Ask }
                  }),
                  _c("Image", {
                    attrs: {
                      src: "~/images/profile.png",
                      width: "35",
                      height: "35",
                      verticalAlignment: "center",
                      marginRight: "15"
                    },
                    on: { tap: _vm.Profile }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "RadListView",
        {
          attrs: {
            pullToRefresh: "true",
            width: "94%",
            horizontalAlignment: "center",
            separatorColor: "transparent",
            marginTop: "30",
            items: _vm.listofrequest,
            "+alias": "item"
          },
          on: {
            itemTap: _vm.onItemTap,
            pullToRefreshInitiated: _vm.onPullToRefreshInitiated
          }
        },
        [
          _c("v-template", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var item = ref.item
                  var $index = ref.$index
                  var $even = ref.$even
                  var $odd = ref.$odd
                  return _c(
                    "StackLayout",
                    { attrs: { orientation: "vertical" } },
                    [
                      _c(
                        "GridLayout",
                        {
                          directives: [
                            {
                              name: "shadow",
                              rawName: "v-shadow",
                              value: 2,
                              expression: "2"
                            }
                          ],
                          attrs: { alignItems: "center", borderRadius: "10" }
                        },
                        [
                          _c(
                            "StackLayout",
                            {
                              staticStyle: { borderRadius: "10" },
                              attrs: {
                                orientation: "vertical",
                                verticalAlignment: "middle",
                                height: "100",
                                backgroundColor: "#B3BDFF"
                              }
                            },
                            [
                              _c("Label", {
                                attrs: {
                                  text: item.title,
                                  marginLeft: "15",
                                  fontSize: "25"
                                }
                              }),
                              _c("Label", {
                                attrs: {
                                  text: item.details,
                                  marginLeft: "15",
                                  marginTop: "15"
                                }
                              })
                            ],
                            1
                          ),
                          _c("Label", {
                            attrs: {
                              text: item.created_on,
                              marginRight: "15",
                              marginTop: "15",
                              horizontalAlignment: "right",
                              verticalAlignment: "middle"
                            }
                          })
                        ],
                        1
                      ),
                      _c("StackLayout", {
                        attrs: { height: "15", backgroundColor: "" }
                      })
                    ],
                    1
                  )
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { actionBarHidden: "true" } },
    [
      _c(
        "ScrollView",
        [
          _c(
            "FlexboxLayout",
            { staticClass: "page" },
            [
              _c(
                "StackLayout",
                { staticClass: "form" },
                [
                  _c("Image", {
                    staticClass: "logo",
                    attrs: {
                      src: "~/images/logo2.png",
                      width: "200",
                      height: "200"
                    }
                  }),
                  _c("Label", {
                    staticClass: "header",
                    attrs: { text: "LYNX APP", color: "Black" }
                  }),
                  _c(
                    "GridLayout",
                    { attrs: { rows: "auto, auto, auto, auto, auto" } },
                    [
                      _c(
                        "StackLayout",
                        { staticClass: "input-field", attrs: { row: "0" } },
                        [
                          _c("TextField", {
                            staticClass: "input",
                            attrs: {
                              hint: "Email",
                              isEnabled: !_vm.processing,
                              keyboardType: "email",
                              autocorrect: "false",
                              autocapitalizationType: "none",
                              returnKeyType: "next"
                            },
                            on: { returnPress: _vm.focusPassword },
                            model: {
                              value: _vm.user.email,
                              callback: function($event) {
                                _vm.$set(
                                  _vm.user,
                                  "email",
                                  $event.object["text"]
                                )
                              },
                              expression: "user.email"
                            }
                          }),
                          _c("StackLayout", { staticClass: "hr-light" })
                        ],
                        1
                      ),
                      _c(
                        "StackLayout",
                        { staticClass: "input-field", attrs: { row: "1" } },
                        [
                          _c("TextField", {
                            ref: "password",
                            staticClass: "input",
                            attrs: {
                              isEnabled: !_vm.processing,
                              hint: "Password",
                              secure: "true",
                              returnKeyType: _vm.isLoggingIn ? "done" : "next"
                            },
                            on: { returnPress: _vm.focusConfirmPassword },
                            model: {
                              value: _vm.user.password,
                              callback: function($event) {
                                _vm.$set(
                                  _vm.user,
                                  "password",
                                  $event.object["text"]
                                )
                              },
                              expression: "user.password"
                            }
                          }),
                          _c("StackLayout", { staticClass: "hr-light" })
                        ],
                        1
                      ),
                      _c(
                        "StackLayout",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.isLoggingIn,
                              expression: "!isLoggingIn"
                            }
                          ],
                          staticClass: "input-field",
                          attrs: { row: "2" }
                        },
                        [
                          _c("TextField", {
                            ref: "confirmPassword",
                            staticClass: "input",
                            attrs: {
                              isEnabled: !_vm.processing,
                              hint: "Confirm password",
                              secure: "true",
                              returnKeyType: "done"
                            },
                            model: {
                              value: _vm.user.confirmPassword,
                              callback: function($event) {
                                _vm.$set(
                                  _vm.user,
                                  "confirmPassword",
                                  $event.object["text"]
                                )
                              },
                              expression: "user.confirmPassword"
                            }
                          }),
                          _c("StackLayout", { staticClass: "hr-light" })
                        ],
                        1
                      ),
                      _c(
                        "StackLayout",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.isLoggingIn,
                              expression: "!isLoggingIn"
                            }
                          ],
                          staticClass: "input-field",
                          attrs: { row: "3" }
                        },
                        [
                          _c("TextField", {
                            ref: "confirmPassword",
                            staticClass: "input",
                            attrs: {
                              isEnabled: !_vm.processing,
                              hint: "First name",
                              returnKeyType: "done"
                            },
                            model: {
                              value: _vm.user.firstname,
                              callback: function($event) {
                                _vm.$set(
                                  _vm.user,
                                  "firstname",
                                  $event.object["text"]
                                )
                              },
                              expression: "user.firstname"
                            }
                          }),
                          _c("StackLayout", { staticClass: "hr-light" })
                        ],
                        1
                      ),
                      _c(
                        "StackLayout",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.isLoggingIn,
                              expression: "!isLoggingIn"
                            }
                          ],
                          staticClass: "input-field",
                          attrs: { row: "4" }
                        },
                        [
                          _c("TextField", {
                            ref: "confirmPassword",
                            staticClass: "input",
                            attrs: {
                              isEnabled: !_vm.processing,
                              hint: "last Name",
                              returnKeyType: "done"
                            },
                            model: {
                              value: _vm.user.lastname,
                              callback: function($event) {
                                _vm.$set(
                                  _vm.user,
                                  "lastname",
                                  $event.object["text"]
                                )
                              },
                              expression: "user.lastname"
                            }
                          }),
                          _c("StackLayout", { staticClass: "hr-light" })
                        ],
                        1
                      ),
                      _c("ActivityIndicator", {
                        attrs: { rowSpan: "5", busy: _vm.processing }
                      })
                    ],
                    1
                  ),
                  _c("Button", {
                    staticStyle: {
                      width: "100",
                      height: "40",
                      borderRadius: "10",
                      backgroundColor: "#AF83EA"
                    },
                    attrs: {
                      text: _vm.isLoggingIn ? "Log In" : "Sign Up",
                      isEnabled: !_vm.processing,
                      fontWeight: "bold"
                    },
                    on: { tap: _vm.submit }
                  }),
                  _c("Label", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isLoggingIn,
                        expression: "isLoggingIn"
                      }
                    ],
                    staticClass: "login-label",
                    attrs: { text: "Forgot your password?" },
                    on: {
                      tap: function($event) {
                        return _vm.forgotPassword()
                      }
                    }
                  })
                ],
                1
              ),
              _c(
                "Label",
                {
                  staticClass: "login-label sign-up-label",
                  on: { tap: _vm.toggleForm }
                },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", {
                        attrs: {
                          text: _vm.isLoggingIn
                            ? "Don’t have an account? "
                            : "Back to Login"
                        }
                      }),
                      _c("Span", {
                        staticClass: "bold",
                        attrs: {
                          marginTop: "50",
                          text: _vm.isLoggingIn ? "Sign up" : "",
                          color: "Green"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Profile.vue?vue&type=template&id=010534c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { padding: "15" } },
        [
          _c(
            "GridLayout",
            { attrs: { width: "94%" } },
            [
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "horizontal",
                    horizontalAlignment: "left"
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "~/images/logo2.png",
                      width: "35",
                      height: "35",
                      verticalAlignment: "center",
                      marginRight: "0"
                    }
                  }),
                  _c("Label", {
                    attrs: {
                      text: "Profile",
                      fontSize: "20",
                      verticalAlignment: "center",
                      marginLeft: "15"
                    }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "horizontal",
                    horizontalAlignment: "right"
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "~/images/back.jpg",
                      width: "35",
                      height: "35",
                      verticalAlignment: "center",
                      marginRight: "15"
                    },
                    on: { tap: _vm.Back }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            { staticClass: "home-panel" },
            [
              _c("Image", {
                staticStyle: {
                  width: "160",
                  height: "160",
                  borderWidth: "4",
                  borderColor: "Green",
                  borderRadius: "100"
                },
                attrs: {
                  src: "~/images/pp.jpg",
                  width: "200",
                  height: "200",
                  verticalAlignment: "center",
                  marginBottom: "100"
                }
              }),
              _c("Label", {
                attrs: {
                  text: _vm.name,
                  fontSize: "20",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: _vm.joinedin,
                  fontSize: "20",
                  verticalAlignment: "center"
                }
              }),
              _c("Button", {
                staticStyle: {
                  width: "100",
                  height: "40",
                  borderWidth: "1",
                  borderColor: "White",
                  borderRadius: "10"
                },
                attrs: {
                  color: "White",
                  text: "Logout",
                  backgroundColor: "Red",
                  marginTop: "150",
                  fontSize: "15"
                },
                on: { tap: _vm.logout }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/SingleQ.vue?vue&type=template&id=e64b9e04&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { attrs: { padding: "15" } },
        [
          _c(
            "GridLayout",
            { attrs: { width: "94%" } },
            [
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "horizontal",
                    horizontalAlignment: "left"
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "~/images/logo2.png",
                      width: "35",
                      height: "35",
                      verticalAlignment: "center",
                      marginRight: "0"
                    }
                  }),
                  _c("Label", {
                    attrs: {
                      text: "Question",
                      fontSize: "20",
                      verticalAlignment: "center",
                      marginLeft: "0"
                    }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "horizontal",
                    horizontalAlignment: "right"
                  }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "~/images/back.jpg",
                      width: "35",
                      height: "35",
                      verticalAlignment: "center",
                      marginRight: "15"
                    },
                    on: { tap: _vm.Back }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            [
              _c("Label", {
                attrs: {
                  color: "Black",
                  fontSize: "25",
                  marginLeft: "5",
                  marginTop: "10",
                  marginRight: "5",
                  textWrap: "true",
                  text: _vm.ques.title,
                  fontWeight: "bold"
                }
              }),
              _c(
                "Label",
                {
                  attrs: {
                    textWrap: "true",
                    color: "Black",
                    marginTop: "5",
                    fontStyle: "italic",
                    marginLeft: "190"
                  }
                },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "By: " } }),
                      _c("Span", {
                        staticStyle: { color: "red" },
                        attrs: { text: _vm.ques.name }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "Label",
                {
                  attrs: {
                    textWrap: "true",
                    color: "Black",
                    marginTop: "5",
                    fontStyle: "italic",
                    marginLeft: "200"
                  }
                },
                [
                  _c(
                    "FormattedString",
                    [
                      _c("Span", { attrs: { text: "Asked on: " } }),
                      _c("Span", {
                        staticStyle: { color: "red" },
                        attrs: { text: _vm.ques.date }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c("Label", {
                attrs: {
                  color: "Black",
                  fontSize: "14",
                  marginTop: "15",
                  marginLeft: "5",
                  marginRight: "5",
                  textWrap: "true",
                  text: _vm.ques.details
                }
              }),
              _c("Button", {
                staticStyle: {
                  width: "100",
                  height: "40",
                  borderWidth: "1",
                  borderColor: "White",
                  borderRadius: "10"
                },
                attrs: {
                  color: "White",
                  text: "Answer",
                  backgroundColor: "Green",
                  marginTop: "20",
                  fontSize: "15"
                },
                on: { tap: _vm.Answer }
              }),
              _c("StackLayout", {}),
              _c(
                "StackLayout",
                { attrs: { marginLeft: "5", marginRight: "5" } },
                [
                  _c(
                    "RadListView",
                    {
                      attrs: {
                        horizontalAlignment: "center",
                        separatorColor: "transparent",
                        marginTop: "15",
                        marginLeft: "10",
                        marginRight: "10",
                        items: _vm.answers,
                        "+alias": "item"
                      }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var item = ref.item
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "StackLayout",
                                { attrs: { orientation: "vertical" } },
                                [
                                  _c(
                                    "GridLayout",
                                    {
                                      directives: [
                                        {
                                          name: "shadow",
                                          rawName: "v-shadow",
                                          value: 2,
                                          expression: "2"
                                        }
                                      ],
                                      attrs: {
                                        alignItems: "center",
                                        borderRadius: "10"
                                      }
                                    },
                                    [
                                      _c(
                                        "StackLayout",
                                        {
                                          staticStyle: { borderRadius: "10" },
                                          attrs: {
                                            orientation: "vertical",
                                            verticalAlignment: "middle",
                                            backgroundColor: "#B3BDFF"
                                          }
                                        },
                                        [
                                          _c(
                                            "Label",
                                            {
                                              attrs: {
                                                textWrap: "true",
                                                marginTop: "5",
                                                fontStyle: "italic",
                                                marginLeft: "160"
                                              }
                                            },
                                            [
                                              _c(
                                                "FormattedString",
                                                [
                                                  _c("Span", {
                                                    attrs: { text: "By: " }
                                                  }),
                                                  _c("Span", {
                                                    staticStyle: {
                                                      color: "red"
                                                    },
                                                    attrs: {
                                                      text:
                                                        item.owner.first_name +
                                                        " " +
                                                        item.owner.last_name
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _c(
                                            "Label",
                                            {
                                              attrs: {
                                                textWrap: "true",
                                                marginTop: "5",
                                                fontStyle: "italic",
                                                marginLeft: "160"
                                              }
                                            },
                                            [
                                              _c(
                                                "FormattedString",
                                                [
                                                  _c("Span", {
                                                    attrs: {
                                                      text: "Asked on: "
                                                    }
                                                  }),
                                                  _c("Span", {
                                                    staticStyle: {
                                                      color: "red"
                                                    },
                                                    attrs: {
                                                      text: item.created_on
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _c("Label", {
                                            attrs: {
                                              textWrap: "true",
                                              color: "Black",
                                              text: item.content,
                                              marginLeft: "15",
                                              fontSize: "15"
                                            }
                                          }),
                                          _c("Image", {
                                            attrs: {
                                              src: _vm.like,
                                              width: "35",
                                              height: "35",
                                              verticalAlignment: "center",
                                              marginRight: "0"
                                            }
                                          }),
                                          _c("Image", {
                                            attrs: {
                                              src: _vm.dislike,
                                              width: "35",
                                              height: "35",
                                              verticalAlignment: "center"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _c("StackLayout", {
                                    attrs: { height: "15", backgroundColor: "" }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./routes/index.js": "./routes/index.js",
	"./services/backend-service.js": "./services/backend-service.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"height","value":"50"},{"type":"declaration","property":"background-color","value":"#D51A1A"},{"type":"declaration","property":"border-radius","value":"5"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"font-weight","value":"600"}]},{"type":"rule","selectors":[".btn-primary:disabled"],"declarations":[{"type":"declaration","property":"opacity","value":"0.5"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-ui-listview/vue");
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_vue_shadow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-vue-shadow/dist/nativescript-vue-shadow.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./routes/index.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./services/backend-service.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_5__);

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_1___default.a);

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_vue_shadow__WEBPACK_IMPORTED_MODULE_2__["default"]);


 // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

var backendService = new _services_backend_service__WEBPACK_IMPORTED_MODULE_4__["default"]();
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$backendService = backendService;
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h("frame", [h(backendService.isLoggedIn() ? _routes__WEBPACK_IMPORTED_MODULE_3__["default"].home : _routes__WEBPACK_IMPORTED_MODULE_3__["default"].login)])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/Answer.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Answer_vue_vue_type_template_id_4425e44e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Answer.vue?vue&type=template&id=4425e44e&scoped=true&");
/* harmony import */ var _Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Answer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Answer_vue_vue_type_style_index_0_id_4425e44e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Answer.vue?vue&type=style&index=0&id=4425e44e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Answer_vue_vue_type_template_id_4425e44e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Answer_vue_vue_type_template_id_4425e44e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4425e44e",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('4425e44e')) {
      api.createRecord('4425e44e', component.options)
    } else {
      api.reload('4425e44e', component.options)
    }
    module.hot.accept("./components/Answer.vue?vue&type=template&id=4425e44e&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Answer_vue_vue_type_template_id_4425e44e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Answer.vue?vue&type=template&id=4425e44e&scoped=true&");
(function () {
      api.rerender('4425e44e', {
        render: _Answer_vue_vue_type_template_id_4425e44e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Answer_vue_vue_type_template_id_4425e44e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Answer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Answer.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Answer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Answer.vue?vue&type=style&index=0&id=4425e44e&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_style_index_0_id_4425e44e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Answer.vue?vue&type=style&index=0&id=4425e44e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_style_index_0_id_4425e44e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_style_index_0_id_4425e44e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_style_index_0_id_4425e44e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_style_index_0_id_4425e44e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_style_index_0_id_4425e44e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Answer.vue?vue&type=template&id=4425e44e&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_template_id_4425e44e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Answer.vue?vue&type=template&id=4425e44e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_template_id_4425e44e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Answer_vue_vue_type_template_id_4425e44e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Ask.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ask_vue_vue_type_template_id_3c0a3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Ask.vue?vue&type=template&id=3c0a3624&scoped=true&");
/* harmony import */ var _Ask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Ask.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Ask_vue_vue_type_style_index_0_id_3c0a3624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Ask.vue?vue&type=style&index=0&id=3c0a3624&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Ask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Ask_vue_vue_type_template_id_3c0a3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Ask_vue_vue_type_template_id_3c0a3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3c0a3624",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3c0a3624')) {
      api.createRecord('3c0a3624', component.options)
    } else {
      api.reload('3c0a3624', component.options)
    }
    module.hot.accept("./components/Ask.vue?vue&type=template&id=3c0a3624&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Ask_vue_vue_type_template_id_3c0a3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Ask.vue?vue&type=template&id=3c0a3624&scoped=true&");
(function () {
      api.rerender('3c0a3624', {
        render: _Ask_vue_vue_type_template_id_3c0a3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Ask_vue_vue_type_template_id_3c0a3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Ask.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Ask.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Ask.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Ask.vue?vue&type=style&index=0&id=3c0a3624&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_style_index_0_id_3c0a3624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Ask.vue?vue&type=style&index=0&id=3c0a3624&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_style_index_0_id_3c0a3624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_style_index_0_id_3c0a3624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_style_index_0_id_3c0a3624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_style_index_0_id_3c0a3624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_style_index_0_id_3c0a3624_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Ask.vue?vue&type=template&id=3c0a3624&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_template_id_3c0a3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Ask.vue?vue&type=template&id=3c0a3624&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_template_id_3c0a3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ask_vue_vue_type_template_id_3c0a3624_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('67410f3a')) {
      api.createRecord('67410f3a', component.options)
    } else {
      api.reload('67410f3a', component.options)
    }
    module.hot.accept("./components/Home.vue?vue&type=template&id=67410f3a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&");
(function () {
      api.rerender('67410f3a', {
        render: _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c27482c4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c27482c4')) {
      api.createRecord('c27482c4', component.options)
    } else {
      api.reload('c27482c4', component.options)
    }
    module.hot.accept("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
(function () {
      api.rerender('c27482c4', {
        render: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Profile.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_010534c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Profile.vue?vue&type=template&id=010534c4&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Profile_vue_vue_type_style_index_0_id_010534c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Profile.vue?vue&type=style&index=0&id=010534c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_010534c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_010534c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "010534c4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('010534c4')) {
      api.createRecord('010534c4', component.options)
    } else {
      api.reload('010534c4', component.options)
    }
    module.hot.accept("./components/Profile.vue?vue&type=template&id=010534c4&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Profile_vue_vue_type_template_id_010534c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Profile.vue?vue&type=template&id=010534c4&scoped=true&");
(function () {
      api.rerender('010534c4', {
        render: _Profile_vue_vue_type_template_id_010534c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Profile_vue_vue_type_template_id_010534c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Profile.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Profile.vue?vue&type=style&index=0&id=010534c4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_010534c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Profile.vue?vue&type=style&index=0&id=010534c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_010534c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_010534c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_010534c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_010534c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_010534c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Profile.vue?vue&type=template&id=010534c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_010534c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Profile.vue?vue&type=template&id=010534c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_010534c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_010534c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/SingleQ.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleQ_vue_vue_type_template_id_e64b9e04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/SingleQ.vue?vue&type=template&id=e64b9e04&");
/* harmony import */ var _SingleQ_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/SingleQ.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleQ_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleQ_vue_vue_type_template_id_e64b9e04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleQ_vue_vue_type_template_id_e64b9e04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('e64b9e04')) {
      api.createRecord('e64b9e04', component.options)
    } else {
      api.reload('e64b9e04', component.options)
    }
    module.hot.accept("./components/SingleQ.vue?vue&type=template&id=e64b9e04&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SingleQ_vue_vue_type_template_id_e64b9e04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/SingleQ.vue?vue&type=template&id=e64b9e04&");
(function () {
      api.rerender('e64b9e04', {
        render: _SingleQ_vue_vue_type_template_id_e64b9e04___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SingleQ_vue_vue_type_template_id_e64b9e04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/SingleQ.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/SingleQ.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleQ_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/SingleQ.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleQ_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/SingleQ.vue?vue&type=template&id=e64b9e04&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleQ_vue_vue_type_template_id_e64b9e04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/SingleQ.vue?vue&type=template&id=e64b9e04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleQ_vue_vue_type_template_id_e64b9e04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleQ_vue_vue_type_template_id_e64b9e04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"android\":{\"v8Flags\":\"--expose_gc\",\"forceLog\":true,\"markingMode\":\"none\"},\"main\":\"app.js\",\"name\":\"tns-template-vue\",\"version\":\"3.2.0\"}");

/***/ }),

/***/ "./routes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");


var routes = {
  login: _components_Login__WEBPACK_IMPORTED_MODULE_0__["default"],
  home: _components_Home__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./services/backend-service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackendService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.
//import * as Kinvey from "kinvey-nativescript-sdk";

/*Kinvey.init({
    appKey: "kid_SyY8LYO8M",
    appSecret: "09282985d7c540f7b076a9c7fd884c77"
});*/



var ObservableArray = __webpack_require__("tns-core-modules/data/observable-array").ObservableArray;

global.isUserLoggedin = false;
global.accessToken = null;
global.userData = null;
global.toRegister = null;
global.selected = null;
class BackendService {
  isLoggedIn() {
    return global.isUserLoggedin;
  }

  login(user) {
    return _asyncToGenerator(function* () {
      console.log("logging in");
      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "POST",
        "url": "https://thebaselabs.com/directus/public/abdelateef/auth/authenticate",
        // your api url
        data: {
          email: user.email,
          password: user.password
        }
      }).then(result => {
        var userDetails = null;

        if (result.data.data.token) {
          global.userData = result.data.data;
          global.accessToken = result.data.data.token;
          global.isUserLoggedin = true;
        }

        if (global.userData != null) {
          return true;
        } else {
          return false;
        }
      }, error => {
        console.error(error);
      }); //return Kinvey.User.login(user.email, user.password);
    })();
  }

  access() {
    return _asyncToGenerator(function* () {
      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "POST",
        "url": "https://thebaselabs.com/directus/public/abdelateef/auth/authenticate",
        // your api url
        data: {
          email: "cmabdellateef@std.axcelacademy.co.uk",
          password: "TZbCMgG9t5"
        }
      }).then(result => {
        var userDetails = null;

        if (result.data.data.token) {
          // console.log(result.data.data.token);
          global.toRegister = result.data.data.token;
        } else {
          return false;
        }
      }, error => {
        console.error(error);
      });
    })();
  }

  addUser(user) {
    return _asyncToGenerator(function* () {
      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "POST",
        "url": "https://thebaselabs.com/directus/public/abdelateef/users",
        // your api url
        headers: {
          Authorization: "Bearer ".concat(global.toRegister)
        },
        data: {
          first_name: user.firstname,
          last_name: user.lastname,
          email: user.email,
          password: user.password,
          role: 3,
          status: "active"
        }
      }).then(result => {
        return result.data.data; // console.log("Questions ---- ",global.Questions);
      }, error => {
        console.error(error);
      });
    })();
  }

  getRequests() {
    return _asyncToGenerator(function* () {
      console.log("----&&&&-- in getrequests");
      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "GET",
        "url": "https://thebaselabs.com/directus/public/abdelateef/items/questions",
        // your api url
        headers: {
          Authorization: "Bearer " + global.accessToken
        }
      }).then(result => {
        //console.log("------ "+result.data.data.length);
        //console.log(result.data.data);
        return result.data.data;
      }, error => {
        console.error(error);
      });
    })();
  }

  AskQn(question) {
    return _asyncToGenerator(function* () {
      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "POST",
        "url": "https://thebaselabs.com/directus/public/abdelateef/items/questions",
        // your api url
        headers: {
          Authorization: "Bearer " + global.accessToken
        },
        data: {
          status: "published",
          title: question.title,
          details: question.details
        }
      }).then(result => {
        // console.log("------ "+result.data.data);
        //console.log(result.data.data);
        return result.data.data;
      }, error => {
        console.error(error);
      });
    })();
  }

  addAnswer(ans) {
    return _asyncToGenerator(function* () {
      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "POST",
        "url": "https://thebaselabs.com/directus/public/abdelateef/items/answers",
        // your api url
        headers: {
          Authorization: "Bearer " + global.accessToken
        },
        data: {
          status: "published",
          content: ans,
          questionid: global.selected
        }
      }).then(result => {
        // console.log("------ "+result.data.data);
        //console.log(result.data.data);
        return result.data.data;
      }, error => {
        console.error(error);
      });
    })();
  }

  SingleQ() {
    return _asyncToGenerator(function* () {
      // console.log("----&&&&-- in Single Question");
      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "GET",
        "url": 'https://thebaselabs.com/directus/public/abdelateef/items/questions/' + global.selected + '?fields=id,details,title,created_on,owner.id,owner.first_name,owner.last_name',
        // your api url
        headers: {
          Authorization: "Bearer " + global.accessToken
        }
      }).then(result => {
        // console.log(result.data.data);
        return result.data.data;
      }, error => {
        console.error(error);
      });
    })();
  }

  Answers() {
    return _asyncToGenerator(function* () {
      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "GET",
        "url": ' https://thebaselabs.com/directus/public/abdelateef/items/answers?filter[questionid] =' + global.selected + "&fields=id,content,owner.first_name,owner.last_name, created_on",
        // your api url
        headers: {
          Authorization: "Bearer " + global.accessToken
        }
      }).then(result => {
        // console.log(result.data.data);
        return result.data.data;
      }, error => {
        console.error(error);
      });
    })();
  }

  logout() {
    global.isUserLoggedin = false;
    global.accessToken = null;
    global.userData = null;
    return true;
  }

  register(user) {//return Kinvey.User.signup({ username: user.email, password: user.password });
  }

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "@nativescript/core/application":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/application");

/***/ }),

/***/ "@nativescript/core/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/data/observable-array");

/***/ }),

/***/ "@nativescript/core/platform":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/platform");

/***/ }),

/***/ "@nativescript/core/text/formatted-string":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/text/formatted-string");

/***/ }),

/***/ "@nativescript/core/text/span":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/text/span");

/***/ }),

/***/ "@nativescript/core/ui/action-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/action-bar");

/***/ }),

/***/ "@nativescript/core/ui/activity-indicator":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/activity-indicator");

/***/ }),

/***/ "@nativescript/core/ui/border":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/border");

/***/ }),

/***/ "@nativescript/core/ui/bottom-navigation":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/bottom-navigation");

/***/ }),

/***/ "@nativescript/core/ui/button":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/button");

/***/ }),

/***/ "@nativescript/core/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/content-view");

/***/ }),

/***/ "@nativescript/core/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/core/view");

/***/ }),

/***/ "@nativescript/core/ui/date-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/date-picker");

/***/ }),

/***/ "@nativescript/core/ui/frame":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/frame");

/***/ }),

/***/ "@nativescript/core/ui/html-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/html-view");

/***/ }),

/***/ "@nativescript/core/ui/image":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/image");

/***/ }),

/***/ "@nativescript/core/ui/label":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/label");

/***/ }),

/***/ "@nativescript/core/ui/layouts/absolute-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/absolute-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/dock-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/dock-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/flexbox-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/flexbox-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/grid-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/grid-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/layout-base":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/layout-base");

/***/ }),

/***/ "@nativescript/core/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/stack-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/wrap-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/wrap-layout");

/***/ }),

/***/ "@nativescript/core/ui/list-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/list-picker");

/***/ }),

/***/ "@nativescript/core/ui/list-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/list-view");

/***/ }),

/***/ "@nativescript/core/ui/page":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/page");

/***/ }),

/***/ "@nativescript/core/ui/placeholder":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/placeholder");

/***/ }),

/***/ "@nativescript/core/ui/progress":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/progress");

/***/ }),

/***/ "@nativescript/core/ui/proxy-view-container":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/proxy-view-container");

/***/ }),

/***/ "@nativescript/core/ui/scroll-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/scroll-view");

/***/ }),

/***/ "@nativescript/core/ui/search-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/search-bar");

/***/ }),

/***/ "@nativescript/core/ui/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/segmented-bar");

/***/ }),

/***/ "@nativescript/core/ui/slider":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/slider");

/***/ }),

/***/ "@nativescript/core/ui/switch":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/switch");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-content-item":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-content-item");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-strip":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-strip");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-strip-item":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-strip-item");

/***/ }),

/***/ "@nativescript/core/ui/tab-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-view");

/***/ }),

/***/ "@nativescript/core/ui/tabs":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tabs");

/***/ }),

/***/ "@nativescript/core/ui/text-field":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/text-field");

/***/ }),

/***/ "@nativescript/core/ui/text-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/text-view");

/***/ }),

/***/ "@nativescript/core/ui/time-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/time-picker");

/***/ }),

/***/ "@nativescript/core/ui/web-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/web-view");

/***/ }),

/***/ "@nativescript/core/utils/types":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/utils/types");

/***/ }),

/***/ "@nativescript/core/xml":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/xml");

/***/ }),

/***/ "nativescript-ui-listview/vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-listview/vue");

/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/color":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/color");

/***/ }),

/***/ "tns-core-modules/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable-array");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/ui/core/weak-event-listener":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/core/weak-event-listener");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/page/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page/page");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BbnN3ZXIudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0Fzay52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTG9naW4udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1Byb2ZpbGUudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1NpbmdsZVEudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQW5zd2VyLnZ1ZT9kMTU3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXNrLnZ1ZT8xYmI0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlPzAxNDciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlLnZ1ZT82NmUxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQW5zd2VyLnZ1ZT9lNzdlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXNrLnZ1ZT9kNWE5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/YjY2YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT8zY2U4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZS52dWU/ZGQ5MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpbmdsZVEudnVlPzNhYWQiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQW5zd2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fuc3dlci52dWU/MmEyNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fuc3dlci52dWU/MzcwOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fuc3dlci52dWU/M2E0MSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fzay52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Bc2sudnVlP2Q1MjQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Bc2sudnVlPzllOGEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Bc2sudnVlP2IxZjciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzU2MjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT84MzQyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlP2U2MDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/MjEyNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT9mYjRmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlLnZ1ZT9hYjFjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZS52dWU/YzYzYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGUudnVlPzkzMTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaW5nbGVRLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpbmdsZVEudnVlP2Q2ODMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaW5nbGVRLnZ1ZT9kMDdjIiwid2VicGFjazovLy8uL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS90ZXh0L2Zvcm1hdHRlZC1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdGV4dC9zcGFuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2FjdGlvbi1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYWN0aXZpdHktaW5kaWNhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2JvcmRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9ib3R0b20tbmF2aWdhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvY29udGVudC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2NvcmUvdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9kYXRlLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9odG1sLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvaW1hZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9kb2NrLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZ3JpZC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9sYXlvdXQtYmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL3dyYXAtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xpc3QtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xpc3Qtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3BsYWNlaG9sZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3Byb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3Byb3h5LXZpZXctY29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3Njcm9sbC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NlYXJjaC1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2VnbWVudGVkLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zbGlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3dpdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLWNvbnRlbnQtaXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcC1pdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGV4dC1maWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90ZXh0LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGltZS1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvd2ViLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdXRpbHMvdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUveG1sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L3Z1ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC12dWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvd2Vhay1ldmVudC1saXN0ZW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiJdLCJuYW1lcyI6WyJSYWRMaXN0VmlldyIsIlZ1ZSIsInVzZSIsIk5TVnVlU2hhZG93Iiwicm91dGVzIiwiYmFja2VuZFNlcnZpY2UiLCJwcm90b3R5cGUiLCIkYmFja2VuZFNlcnZpY2UiLCJyZW5kZXIiLCJoIiwiaXNMb2dnZWRJbiIsImxvZ2luIiwiTG9naW4iLCJob21lIiwiSG9tZSIsIk9ic2VydmFibGVBcnJheSIsInJlcXVpcmUiLCJnbG9iYWwiLCJpc1VzZXJMb2dnZWRpbiIsImFjY2Vzc1Rva2VuIiwidXNlckRhdGEiLCJ0b1JlZ2lzdGVyIiwic2VsZWN0ZWQiLCJCYWNrZW5kU2VydmljZSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJtZXRob2QiLCJkYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsInRoZW4iLCJyZXN1bHQiLCJ1c2VyRGV0YWlscyIsInRva2VuIiwiZXJyb3IiLCJhY2Nlc3MiLCJhZGRVc2VyIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJmaXJzdF9uYW1lIiwiZmlyc3RuYW1lIiwibGFzdF9uYW1lIiwibGFzdG5hbWUiLCJyb2xlIiwic3RhdHVzIiwiZ2V0UmVxdWVzdHMiLCJBc2tRbiIsInF1ZXN0aW9uIiwidGl0bGUiLCJkZXRhaWxzIiwiYWRkQW5zd2VyIiwiYW5zIiwiY29udGVudCIsInF1ZXN0aW9uaWQiLCJTaW5nbGVRIiwiQW5zd2VycyIsImxvZ291dCIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQSxHQU5BOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSw2Q0FGQTtBQUdBO0FBSEE7QUFLQSxPQU5BLE1BT0E7QUFDQSw2QkFDQSxTQURBLENBQ0EsV0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBLHVDQURBLENBRUE7O0FBQ0E7QUFDQSxxQkFEQTtBQUVBLHlDQUZBO0FBR0E7QUFIQTtBQU1BO0FBQ0EsU0FaQSxFQVlBO0FBQ0E7QUFDQSxTQWRBO0FBZUE7QUFDQSxLQTFCQTs7QUEyQkE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUEvQkE7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REFBd0QscUJBQXFCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RCxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDcFdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QVdDOztBQUVEc0IsUUFBTSxHQUFHO0FBQ0x6QyxVQUFNLENBQUNDLGNBQVAsR0FBd0IsS0FBeEI7QUFDQUQsVUFBTSxDQUFDRSxXQUFQLEdBQXFCLElBQXJCO0FBQ0FGLFVBQU0sQ0FBQ0csUUFBUCxHQUFrQixJQUFsQjtBQUNBLFdBQU8sSUFBUDtBQUNIOztBQUVEdUMsVUFBUSxDQUFDbkMsSUFBRCxFQUFPLENBQ1g7QUFDSDs7QUFuTCtCLEM7Ozs7Ozs7O0FDbEJwQywyRDs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLCtEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsMEU7Ozs7Ozs7QUNBQSxzRTs7Ozs7OztBQ0FBLHlFOzs7Ozs7O0FDQUEsc0U7Ozs7Ozs7QUNBQSxzRTs7Ozs7OztBQ0FBLHVFOzs7Ozs7O0FDQUEsc0U7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsdUU7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsdUY7Ozs7Ozs7QUNBQSxnRjs7Ozs7OztBQ0FBLHFGOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSxtRDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsNkM7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7QUNBQSxtRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSx5RTs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLG9FIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgcGFkZGluZz1cIjE1XCI+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHdpZHRoPVwiOTQlXCI+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08SW1hZ2Ugc3JjPVwifi9pbWFnZXMvbG9nby5wbmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIG1hcmdpblJpZ2h0PVwiMTBcIi8+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2xvZ28yLnBuZ1wiIHdpZHRoPVwiMzVcIiBoZWlnaHQ9XCIzNVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgbWFyZ2luUmlnaHQ9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkFkZCBhbiBBbnN3ZXJcIiBmb250U2l6ZT1cIjIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBtYXJnaW5MZWZ0PVwiMTVcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPEJ1dHRvbiB0ZXh0PVwiQmFja1wiIG1hcmdpblJpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJCYWNrXCIgc3R5bGU9XCJ3aWR0aDo2NTtoZWlnaHQ6NDA7Ym9yZGVyLXdpZHRoOjE7Ym9yZGVyLWNvbG9yOlJlZDtib3JkZXItcmFkaXVzOjEwXCIvPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvYmFjay5qcGdcIiB3aWR0aD1cIjM1XCIgaGVpZ2h0PVwiMzVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIG1hcmdpblJpZ2h0PVwiMTVcIiBAdGFwPVwiQmFja1wiPiA8L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08QnV0dG9uIHRleHQ9XCJzaWduIG91dFwiIG1hcmdpblJpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJsb2dvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICA8L0FjdGlvbkJhcj5cclxuICAgICAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaG9tZS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPFRleHRWaWV3IGxvYWRlZD1cInRleHR2aWV3bG9hZGVkXCIgaGludD1cIldyaXRlIHlvdXIgYW5zd2VyIGhlcmVcIiB1cGRhdGVUZXh0VHJpZ2dlcj1cInRleHRDaGFuZ2VkXCIgdi1tb2RlbD1cImFuc3dlclwiIGVkaXRhYmxlPVwidHJ1ZVwiIHN0eWxlPVwiIGhlaWdodDozMDA7IGJvcmRlci13aWR0aDoxO2JvcmRlci1jb2xvcjpHcmVlbjtib3JkZXItcmFkaXVzOjEwXCIvPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQW5zd2VyXCIgQHRhcD1cImFkZEFuc3dlclwiIGZvbnRTaXplPVwiMTVcIiBtYXJnaW5Ub3A9XCIzMFwiIGJhY2tncm91bmRDb2xvcj1cIiM2REQwQjRcIiBzdHlsZT1cIndpZHRoOjEwMDtoZWlnaHQ6NDA7Ym9yZGVyLXdpZHRoOjE7Ym9yZGVyLWNvbG9yOkdyZWVuO2JvcmRlci1yYWRpdXM6MTBcIiAvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XHJcbiAgICBpbXBvcnQgU2luZ2xlUSBmcm9tIFwiLi9TaW5nbGVRXCI7XHJcblxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYW5zd2VyOlwiXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgYWRkQW5zd2VyKCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFuc3dlciA9PSBcIlwiICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIldyaXRlIHNvbXRoaW5nIHRvIGFuc3dlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIm9rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRBbnN3ZXIodGhpcy5hbnN3ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb25lXCIrIHJlc3VsdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoXCJEb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFkZGVkIFN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwib2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9LGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBCYWNrKCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFNpbmdsZVEsIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICBcclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbiAgICAuaG9tZS1wYW5lbCB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwO1xyXG4gICAgICAgIG1hcmdpbjogMTU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcclxuICAgIH1cclxuICAgXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciBwYWRkaW5nPVwiMTVcIj5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgd2lkdGg9XCI5NCVcIj5cclxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiAgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9sb2dvLnBuZ1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgbWFyZ2luUmlnaHQ9XCIxMFwiLz4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvbG9nbzIucG5nXCIgd2lkdGg9XCIzNVwiIGhlaWdodD1cIjM1XCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBtYXJnaW5SaWdodD1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiQXNrIGEgUXVlc3Rpb25cIiBmb250U2l6ZT1cIjIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBtYXJnaW5MZWZ0PVwiMTVcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPEJ1dHRvbiB0ZXh0PVwiQmFja1wiIG1hcmdpblJpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJCYWNrXCIgc3R5bGU9XCJ3aWR0aDo2NTtoZWlnaHQ6NDA7Ym9yZGVyLXdpZHRoOjE7Ym9yZGVyLWNvbG9yOlJlZDtib3JkZXItcmFkaXVzOjEwXCIvPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvYmFjay5qcGdcIiB3aWR0aD1cIjM1XCIgaGVpZ2h0PVwiMzVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIG1hcmdpblJpZ2h0PVwiMTVcIiBAdGFwPVwiQmFja1wiPiA8L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08QnV0dG9uIHRleHQ9XCJzaWduIG91dFwiIG1hcmdpblJpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJsb2dvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICA8L0FjdGlvbkJhcj5cclxuICAgICAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaG9tZS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwicXVlc3Rpb24udGl0bGVcIiAgIGhpbnQ9XCJUaXRsZVwiICBzdHlsZT1cImhlaWdodDo1MDtib3JkZXItd2lkdGg6MTtib3JkZXItY29sb3I6R3JlZW47Ym9yZGVyLXJhZGl1czoxMFwiIG1hcmdpblRvcD1cIjEwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cInF1ZXN0aW9uLmRldGFpbHNcIiAgaGludD1cIkRldGFpbHNcIiBzdHlsZT1cIiBoZWlnaHQ6MTAwOyBib3JkZXItd2lkdGg6MTtib3JkZXItY29sb3I6R3JlZW47Ym9yZGVyLXJhZGl1czoxMFwiIG1hcmdpblRvcD1cIjEwXCIvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQXNrXCIgQHRhcD1cIkFza1FcIiBmb250U2l6ZT1cIjE1XCIgbWFyZ2luVG9wPVwiMzBcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjNkREMEI0XCIgc3R5bGU9XCJ3aWR0aDoxMDA7aGVpZ2h0OjQwO2JvcmRlci13aWR0aDoxO2JvcmRlci1jb2xvcjpHcmVlbjtib3JkZXItcmFkaXVzOjEwXCIgLz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOlwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgQXNrUSgpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5xdWVzdGlvbi50aXRsZSA9PSBcIlwiIHx8IHRoaXMucXVlc3Rpb24uZGV0YWlscyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgdGl0bGU6IFwiXCIsXHJcbiAgbWVzc2FnZTogXCJRdWVzdGlvbiB0aXRsZSBhbmQgZGV0YWlscyBhcmUgcmVxdWlyZWRcIixcclxuICBva0J1dHRvblRleHQ6IFwib2tcIlxyXG59KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy4kYmFja2VuZFNlcnZpY2VcclxuICAgICAgICAgICAgICAgICAgICAuQXNrUW4odGhpcy5xdWVzdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRvbmVcIisgcmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGVydChcIkRvbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQWRkZWQgU3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJva1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbi50aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb24uZGV0YWlscyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgQmFjaygpIHtcclxuICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgXHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4gICAgLmhvbWUtcGFuZWwge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBtYXJnaW46IDE1O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XHJcbiAgICB9XHJcbiAgIFxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZSA+XG4gICAgPFBhZ2UgPlxuICAgICAgICAgIDxBY3Rpb25CYXIgcGFkZGluZz1cIjE1XCI+XG4gICAgICAgICAgICA8R3JpZExheW91dCB3aWR0aD1cIjk0JVwiPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiAgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIiA+XG4gXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9sb2dvMi5wbmdcIiB3aWR0aD1cIjM1XCIgaGVpZ2h0PVwiMzVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIG1hcmdpblJpZ2h0PVwiMFwiID5cbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9sb2dvLnBuZ1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgbWFyZ2luUmlnaHQ9XCIxMFwiLz4tLT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibmF2YmFyXCIgZm9udFNpemU9XCIyMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgbWFyZ2luTGVmdD1cIjBcIiAvPlxuXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxCdXR0b24gdGV4dD1cIkFzaz9cIiBmb250U2l6ZT1cIjEwXCIgbWFyZ2luUmlnaHQ9XCIxNVwiXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJBc2tcIiBzdHlsZT1cIndpZHRoOjYwO2hlaWdodDo0MDtib3JkZXItd2lkdGg6MTtib3JkZXItY29sb3I6R3JlZW47Ym9yZGVyLXJhZGl1czoxMFwiLz4gLS0+XG4gICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvYXNrLnBuZ1wiIHdpZHRoPVwiMzVcIiBoZWlnaHQ9XCIzNVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgbWFyZ2luUmlnaHQ9XCIxNVwiIEB0YXA9XCJBc2tcIj4gPC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL3Byb2ZpbGUucG5nXCIgd2lkdGg9XCIzNVwiIGhlaWdodD1cIjM1XCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBtYXJnaW5SaWdodD1cIjE1XCIgQHRhcD1cIlByb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxCdXR0b24gdGV4dD1cInNpZ24gb3V0XCIgbWFyZ2luUmlnaHQ9XCIxNVwiXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJsb2dvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LS0+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgPC9BY3Rpb25CYXI+XG4gICAgICAgICA8UmFkTGlzdFZpZXcgIHB1bGxUb1JlZnJlc2g9XCJ0cnVlXCIgZm9yPVwiaXRlbSBpbiBsaXN0b2ZyZXF1ZXN0XCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIiB3aWR0aD1cIjk0JVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBzZXBhcmF0b3JDb2xvcj1cInRyYW5zcGFyZW50XCIgbWFyZ2luVG9wPVwiMzBcIiBAcHVsbFRvUmVmcmVzaEluaXRpYXRlZD1cIm9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZFwiPlxuICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGFsaWduSXRlbXM9XCJjZW50ZXJcIiAgYm9yZGVyUmFkaXVzPVwiMTBcIiAgdi1zaGFkb3c9XCIyXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJtaWRkbGVcIiBoZWlnaHQ9XCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNCM0JERkZcIiBzdHlsZT1cImJvcmRlci1yYWRpdXM6MTBcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS50aXRsZVwiIGNsYXNzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdD1cIjE1XCIgZm9udFNpemU9XCIyNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS5kZXRhaWxzXCIgY2xhc3M9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PVwiMTVcIiBtYXJnaW5Ub3A9XCIxNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS5jcmVhdGVkX29uXCIgY2xhc3M9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjE1XCIgbWFyZ2luVG9wPVwiMTVcIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiB2ZXJ0aWNhbEFsaWdubWVudD1cIm1pZGRsZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGhlaWdodD1cIjE1XCIgYmFja2dyb3VuZENvbG9yPVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICA8L1JhZExpc3RWaWV3PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XG4gICAgaW1wb3J0IEFzayBmcm9tIFwiLi9Bc2tcIjtcbiAgICBpbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi9Qcm9maWxlXCI7XG4gICAgaW1wb3J0IFNpbmdsZVEgZnJvbSBcIi4vU2luZ2xlUVwiO1xuXG5cblxuY29uc3QgT2JzZXJ2YWJsZUFycmF5ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpLk9ic2VydmFibGVBcnJheTtcbmltcG9ydCBSYWRMaXN0VmlldyBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvdnVlJztcbmNvbnN0IHBsYXRmb3JtTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7XG5cblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlzdG9mcmVxdWVzdDogbmV3IE9ic2VydmFibGVBcnJheSgpLFxuICAgICAgICAgICAgICAgIG5hdmJhcjogXCJXZWxjb21lIFwiKyBnbG9iYWwudXNlckRhdGEudXNlci5maXJzdF9uYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQgKHsgb2JqZWN0IH0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQdWxsaW5nLi4uJyk7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYmFja2VuZFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLmdldFJlcXVlc3RzKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIC0tLS0wLS0tLSBcIiArIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdG9mcmVxdWVzdCA9ICBuZXcgT2JzZXJ2YWJsZUFycmF5KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0sZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBvYmplY3Qubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkl0ZW1UYXA6IGZ1bmN0aW9uKHsgaXRlbSB9KSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgZ2xvYmFsLnNlbGVjdGVkID0gaXRlbS5pZDtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFNpbmdsZVEsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9nb3V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9naW4sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQXNrKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQXNrLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICBQcm9maWxlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUHJvZmlsZSwge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHJpcEh0bWwoc3RyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICgoc3RyPT09bnVsbCkgfHwgKHN0cj09PScnKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLzxbXj5dKj4vZywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAuZ2V0UmVxdWVzdHMoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgLS0tLTAtLS0tIFwiICsgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0b2ZyZXF1ZXN0ID0gIG5ldyBPYnNlcnZhYmxlQXJyYXkocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSxlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxTY3JvbGxWaWV3PlxuICAgICAgICA8RmxleGJveExheW91dCBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3M9XCJsb2dvXCIgc3JjPVwifi9pbWFnZXMvbG9nbzIucG5nXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImhlYWRlclwiIHRleHQ9XCJMWU5YIEFQUFwiIGNvbG9yPVwiQmxhY2tcIj48L0xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cImF1dG8sIGF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjBcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiRW1haWxcIiA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cImVtYWlsXCIgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIiB2LW1vZGVsPVwidXNlci5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIiBAcmV0dXJuUHJlc3M9XCJmb2N1c1Bhc3N3b3JkXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjFcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiByZWY9XCJwYXNzd29yZFwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmV0dXJuS2V5VHlwZT1cImlzTG9nZ2luZ0luID8gJ2RvbmUnIDogJ25leHQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcmV0dXJuUHJlc3M9XCJmb2N1c0NvbmZpcm1QYXNzd29yZFwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIyXCIgdi1zaG93PVwiIWlzTG9nZ2luZ0luXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgcmVmPVwiY29uZmlybVBhc3N3b3JkXCIgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiQ29uZmlybSBwYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIiB2LW1vZGVsPVwidXNlci5jb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJkb25lXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIzXCIgdi1zaG93PVwiIWlzTG9nZ2luZ0luXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgcmVmPVwiY29uZmlybVBhc3N3b3JkXCIgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiRmlyc3QgbmFtZVwiICB2LW1vZGVsPVwidXNlci5maXJzdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJkb25lXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiNFwiIHYtc2hvdz1cIiFpc0xvZ2dpbmdJblwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIHJlZj1cImNvbmZpcm1QYXNzd29yZFwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cImxhc3QgTmFtZVwiICB2LW1vZGVsPVwidXNlci5sYXN0bmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cImRvbmVcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93U3Bhbj1cIjVcIiA6YnVzeT1cInByb2Nlc3NpbmdcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdMb2cgSW4nIDogJ1NpZ24gVXAnXCIgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgQHRhcD1cInN1Ym1pdFwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgICBzdHlsZT1cIndpZHRoOjEwMDtoZWlnaHQ6NDA7Ym9yZGVyLXJhZGl1czoxMDtiYWNrZ3JvdW5kLWNvbG9yOiNBRjgzRUFcIiA+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPExhYmVsIHYtc2hvdz1cImlzTG9nZ2luZ0luXCIgdGV4dD1cIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tbGFiZWxcIiBAdGFwPVwiZm9yZ290UGFzc3dvcmQoKVwiID48L0xhYmVsPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibG9naW4tbGFiZWwgc2lnbi11cC1sYWJlbFwiIEB0YXA9XCJ0b2dnbGVGb3JtXCI+XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJpc0xvZ2dpbmdJbiA/ICdEb27igJl0IGhhdmUgYW4gYWNjb3VudD8gJyA6ICdCYWNrIHRvIExvZ2luJ1wiPjwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gbWFyZ2luVG9wPVwiNTBcIiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJydcIiBjbGFzcz1cImJvbGRcIiBjb2xvcj1cIkdyZWVuXCI+PC9TcGFuPlxuICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiYmxhYmxhQGJsYS5ibGFcIixcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiMTIzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogXCIxMjNcIixcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiBcIkFiZGxsYWhcIixcbiAgICAgICAgICAgICAgICAgICAgbGFzdG5hbWU6IFwic2FhZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlLmFjY2VzcygpLnRoZW4ocmVzdWx0ID0+IHt9LGVycm9yID0+IHsgY29uc29sZS5sb2coZXJyb3IpOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdG9nZ2xlRm9ybSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXIuZW1haWwgfHwgIXRoaXMudXNlci5wYXNzd29yZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLlwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbG9naW4oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuJGJhY2tlbmRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIC5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiAtLS0tIFwiICsgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJmcm9tIGxvZ2luIHZ1ZSAtLS0tLS0tLS0gXCIrZ2xvYmFsLmFjY2Vzc1Rva2VuKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJXcm9uZyBVc2VybmFtZSBvciBQYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICAgICAgfSxlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy51c2VyLmZpcnN0bmFtZSA9PSBcIlwiIHx8dGhpcy51c2VyLmxhc3RuYW1lID09IFwiXCIgfHwgdGhpcy51c2VyLmNvbmZpcm1QYXNzd29yZCA9PSBcIlwiICl7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQbGVhc2UgZmlsbCBhbGwgdGhlIGZpZWxkc1wiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlci5wYXNzd29yZCAhPSB0aGlzLnVzZXIuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBwYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZS5hZGRVc2VyKHRoaXMudXNlcikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmb3Jnb3RQYXNzd29yZCgpIHtcbiAgICAgICAgICAgICAgICBwcm9tcHQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgTHlueCB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXG4gICAgICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3VyIHBhc3N3b3JkIHdhcyBzdWNjZXNzZnVsbHkgcmVzZXQuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBpbnN0cnVjdGlvbnMgb24gY2hvb3NpbmcgYSBuZXcgcGFzc3dvcmQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuY29uZmlybVBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhbGVydChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTFlOWFwiLFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5wYWdlIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuZm9ybSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMDtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTI7XG4gICAgICAgIGhlaWdodDogOTA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDcwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjRDUxQTFBO1xuICAgIH1cblxuICAgIC5pbnB1dC1maWVsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1O1xuICAgIH1cblxuICAgIC5pbnB1dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTg7XG4gICAgICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjQThBOEE4O1xuICAgIH1cblxuICAgIC5pbnB1dDpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuXG4gICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgbWFyZ2luOiAzMCA1IDE1IDU7XG4gICAgfVxuXG4gICAgLmxvZ2luLWxhYmVsIHtcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI0E4QThBODtcbiAgICAgICAgZm9udC1zaXplOiAxNjtcbiAgICB9XG5cbiAgICAuc2lnbi11cC1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwO1xuICAgIH1cblxuICAgIC5ib2xkIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgcGFkZGluZz1cIjE1XCI+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHdpZHRoPVwiOTQlXCI+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08SW1hZ2Ugc3JjPVwifi9pbWFnZXMvbG9nby5wbmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIG1hcmdpblJpZ2h0PVwiMTBcIi8+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2xvZ28yLnBuZ1wiIHdpZHRoPVwiMzVcIiBoZWlnaHQ9XCIzNVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgbWFyZ2luUmlnaHQ9XCIwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJQcm9maWxlXCIgZm9udFNpemU9XCIyMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgbWFyZ2luTGVmdD1cIjE1XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxCdXR0b24gdGV4dD1cIkJhY2tcIiBtYXJnaW5SaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICBAdGFwPVwiQmFja1wiIHN0eWxlPVwid2lkdGg6NjU7aGVpZ2h0OjQwO2JvcmRlci13aWR0aDoxO2JvcmRlci1jb2xvcjpSZWQ7Ym9yZGVyLXJhZGl1czoxMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9iYWNrLmpwZ1wiIHdpZHRoPVwiMzVcIiBoZWlnaHQ9XCIzNVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgbWFyZ2luUmlnaHQ9XCIxNVwiIEB0YXA9XCJCYWNrXCI+IDwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxCdXR0b24gdGV4dD1cInNpZ24gb3V0XCIgbWFyZ2luUmlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQHRhcD1cImxvZ291dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPi0tPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgIDwvQWN0aW9uQmFyPlxyXG4gICAgICAgIDxTY3JvbGxWaWV3PlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJob21lLXBhbmVsXCIgPlxyXG4gICAgICAgICAgICAgICA8SW1hZ2Ugc3R5bGU9XCJ3aWR0aDoxNjA7aGVpZ2h0OjE2MDtib3JkZXItd2lkdGg6NDtib3JkZXItY29sb3I6R3JlZW47Ym9yZGVyLXJhZGl1czoxMDBcIiAgc3JjPVwifi9pbWFnZXMvcHAuanBnXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiICBtYXJnaW5Cb3R0b209XCIxMDBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJuYW1lXCIgZm9udFNpemU9XCIyMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiam9pbmVkaW5cIiAgZm9udFNpemU9XCIyMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cIldoaXRlXCIgdGV4dD1cIkxvZ291dFwiIGJhY2tncm91bmRDb2xvcj1cIlJlZFwiIEB0YXA9XCJsb2dvdXRcIiBtYXJnaW5Ub3A9XCIxNTBcIiBmb250U2l6ZT1cIjE1XCIgIHN0eWxlPVwid2lkdGg6MTAwO2hlaWdodDo0MDtib3JkZXItd2lkdGg6MTtib3JkZXItY29sb3I6V2hpdGU7Ym9yZGVyLXJhZGl1czoxMFwiLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8IS0tIDxBYnNvbHV0ZUxheW91dCAgY2xhc3M9XCJob21lLXBhbmVsXCIgPlxyXG4gICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL3BwLmpwZ1wiIGxlZnQ9XCI4OFwiIHRvcD1cIjBcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgIG1hcmdpbkJvdHRvbT1cIjMwMFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm5hbWVcIiBsZWZ0PVwiMTM1XCIgdG9wPVwiMjAwXCIgZm9udFNpemU9XCIyMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgbWFyZ2luVG9wPVwiNDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImpvaW5lZGluXCIgbGVmdD1cIjIwXCIgdG9wPVwiMjcwXCIgZm9udFNpemU9XCIyMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cIldoaXRlXCIgdGV4dD1cIkxvZ291dFwiIGxlZnQ9XCIxNjVcIiB0b3A9XCIzNTBcIiBiYWNrZ3JvdW5kQ29sb3I9XCJSZWRcIiBAdGFwPVwibG9nb3V0XCIgLz5cclxuICA8L0Fic29sdXRlTGF5b3V0PiAtLT5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xyXG4gICAgaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICBuYW1lOlwiTmFtZTogXCIrIGdsb2JhbC51c2VyRGF0YS51c2VyLmZpcnN0X25hbWUrXCIgXCIrZ2xvYmFsLnVzZXJEYXRhLnVzZXIubGFzdF9uYW1lLFxyXG4gICAgICAgICAgICAgICBqb2luZWRpbjogXCJFbWFpbDogXCIrZ2xvYmFsLnVzZXJEYXRhLnVzZXIuZW1haWxcclxuXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgbG9nb3V0KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYmFja2VuZFNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgQmFjaygpIHtcclxuICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgXHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4gICAgLmhvbWUtcGFuZWwge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBtYXJnaW46IDE1O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XHJcbiAgICB9XHJcbiAgIFxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZSA+XHJcbiAgICA8UGFnZSA+XHJcbiAgICAgICAgICA8QWN0aW9uQmFyIHBhZGRpbmc9XCIxNVwiPlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCB3aWR0aD1cIjk0JVwiPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiICBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiID5cclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9sb2dvMi5wbmdcIiB3aWR0aD1cIjM1XCIgaGVpZ2h0PVwiMzVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIG1hcmdpblJpZ2h0PVwiMFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08SW1hZ2Ugc3JjPVwifi9pbWFnZXMvbG9nby5wbmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIG1hcmdpblJpZ2h0PVwiMTBcIi8+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJRdWVzdGlvblwiIGZvbnRTaXplPVwiMjBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIG1hcmdpbkxlZnQ9XCIwXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiID5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxCdXR0b24gdGV4dD1cIkFzaz9cIiBmb250U2l6ZT1cIjEwXCIgbWFyZ2luUmlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQHRhcD1cIkFza1wiIHN0eWxlPVwid2lkdGg6NjA7aGVpZ2h0OjQwO2JvcmRlci13aWR0aDoxO2JvcmRlci1jb2xvcjpHcmVlbjtib3JkZXItcmFkaXVzOjEwXCIvPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvYmFjay5qcGdcIiB3aWR0aD1cIjM1XCIgaGVpZ2h0PVwiMzVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIG1hcmdpblJpZ2h0PVwiMTVcIiBAdGFwPVwiQmFja1wiPiA8L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08QnV0dG9uIHRleHQ9XCJzaWduIG91dFwiIG1hcmdpblJpZ2h0PVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJsb2dvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4tLT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgPC9BY3Rpb25CYXI+XHJcbiAgICAgICAgICAgIDxTY3JvbGxWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2xvcj1cIkJsYWNrXCIgZm9udFNpemU9XCIyNVwiIG1hcmdpbkxlZnQ9XCI1XCIgbWFyZ2luVG9wPVwiMTBcIiBtYXJnaW5SaWdodD1cIjVcIiAgdGV4dFdyYXA9XCJ0cnVlXCIgOnRleHQ9XCJxdWVzLnRpdGxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiBjb2xvcj1cIkJsYWNrXCIgbWFyZ2luVG9wPVwiNVwiIGZvbnRTdHlsZT1cIml0YWxpY1wiIG1hcmdpbkxlZnQ9XCIxOTBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJCeTogXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInF1ZXMubmFtZVwiIHN0eWxlPVwiY29sb3I6IHJlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIGNvbG9yPVwiQmxhY2tcIiBtYXJnaW5Ub3A9XCI1XCIgZm9udFN0eWxlPVwiaXRhbGljXCIgbWFyZ2luTGVmdD1cIjIwMFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkFza2VkIG9uOiBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwicXVlcy5kYXRlXCIgc3R5bGU9XCJjb2xvcjogcmVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sb3I9XCJCbGFja1wiIGZvbnRTaXplPVwiMTRcIiBtYXJnaW5Ub3A9XCIxNVwiIG1hcmdpbkxlZnQ9XCI1XCIgbWFyZ2luUmlnaHQ9XCI1XCIgIHRleHRXcmFwPVwidHJ1ZVwiIDp0ZXh0PVwicXVlcy5kZXRhaWxzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cIldoaXRlXCIgdGV4dD1cIkFuc3dlclwiIEB0YXA9XCJBbnN3ZXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCJHcmVlblwiIG1hcmdpblRvcD1cIjIwXCIgZm9udFNpemU9XCIxNVwiICBzdHlsZT1cIndpZHRoOjEwMDtoZWlnaHQ6NDA7Ym9yZGVyLXdpZHRoOjE7Ym9yZGVyLWNvbG9yOldoaXRlO2JvcmRlci1yYWRpdXM6MTBcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIlwiPjwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG1hcmdpbkxlZnQ9XCI1XCIgbWFyZ2luUmlnaHQ9XCI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRMaXN0VmlldyAgIGZvcj1cIml0ZW0gaW4gYW5zd2Vyc1wiICAgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIHNlcGFyYXRvckNvbG9yPVwidHJhbnNwYXJlbnRcIiBtYXJnaW5Ub3A9XCIxNVwiIG1hcmdpbkxlZnQ9XCIxMFwiIG1hcmdpblJpZ2h0PVwiMTBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgYWxpZ25JdGVtcz1cImNlbnRlclwiICBib3JkZXJSYWRpdXM9XCIxMFwiICB2LXNoYWRvdz1cIjJcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHZlcnRpY2FsQWxpZ25tZW50PVwibWlkZGxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjQjNCREZGXCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOjEwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgbWFyZ2luVG9wPVwiNVwiIGZvbnRTdHlsZT1cIml0YWxpY1wiIG1hcmdpbkxlZnQ9XCIxNjBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJCeTogXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIml0ZW0ub3duZXIuZmlyc3RfbmFtZSsnICcraXRlbS5vd25lci5sYXN0X25hbWVcIiBzdHlsZT1cImNvbG9yOiByZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIiBtYXJnaW5Ub3A9XCI1XCIgZm9udFN0eWxlPVwiaXRhbGljXCIgbWFyZ2luTGVmdD1cIjE2MFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkFza2VkIG9uOiBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiaXRlbS5jcmVhdGVkX29uXCIgc3R5bGU9XCJjb2xvcjogcmVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIGNvbG9yPVwiQmxhY2tcIiA6dGV4dD1cIml0ZW0uY29udGVudFwiIGNsYXNzPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PVwiMTVcIiBmb250U2l6ZT1cIjE1XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJsaWtlXCIgd2lkdGg9XCIzNVwiIGhlaWdodD1cIjM1XCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ9XCIwXCIgICA+IDwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cImRpc2xpa2VcIiB3aWR0aD1cIjM1XCIgaGVpZ2h0PVwiMzVcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4gPC9JbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxMYWJlbCA6dGV4dD1cIml0ZW0uY3JlYXRlZF9vblwiIGNsYXNzPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjE1XCIgbWFyZ2luVG9wPVwiMTVcIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiB2ZXJ0aWNhbEFsaWdubWVudD1cIm1pZGRsZVwiLz4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBoZWlnaHQ9XCIxNVwiIGJhY2tncm91bmRDb2xvcj1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SYWRMaXN0Vmlldz4gIFxyXG4gICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tIDxTdGFja0xheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIm5hbWVcIiBmb250U2l6ZT1cIjIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIjdhbWFkYVwiICBmb250U2l6ZT1cIjIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAgLz5cclxuXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD4gLS0+XHJcbiAgICAgICAgICAgIDwhLS0gPEFic29sdXRlTGF5b3V0ICBjbGFzcz1cImhvbWUtcGFuZWxcIiA+XHJcbiAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvcHAuanBnXCIgbGVmdD1cIjg4XCIgdG9wPVwiMFwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAgbWFyZ2luQm90dG9tPVwiMzAwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibmFtZVwiIGxlZnQ9XCIxMzVcIiB0b3A9XCIyMDBcIiBmb250U2l6ZT1cIjIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBtYXJnaW5Ub3A9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiam9pbmVkaW5cIiBsZWZ0PVwiMjBcIiB0b3A9XCIyNzBcIiBmb250U2l6ZT1cIjIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiV2hpdGVcIiB0ZXh0PVwiTG9nb3V0XCIgbGVmdD1cIjE2NVwiIHRvcD1cIjM1MFwiIGJhY2tncm91bmRDb2xvcj1cIlJlZFwiIEB0YXA9XCJsb2dvdXRcIiAvPlxyXG4gIDwvQWJzb2x1dGVMYXlvdXQ+IC0tPlxyXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgICAgICBcclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuICAgIGltcG9ydCBBbnN3ZXIgZnJvbSBcIi4vQW5zd2VyXCI7XHJcblxyXG5jb25zdCBPYnNlcnZhYmxlQXJyYXkgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIikuT2JzZXJ2YWJsZUFycmF5O1xyXG5pbXBvcnQgUmFkTGlzdFZpZXcgZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L3Z1ZSc7XHJcbmNvbnN0IHBsYXRmb3JtTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsaWtlOlwifi9pbWFnZXMvYmVmb3JlbGlrZS5wbmdcIixcclxuICAgICAgICAgICAgICAgIGRpc2xpa2U6XCJ+L2ltYWdlcy9kaXNsaWtlLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgcXVlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6XCJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGlkOiBnbG9iYWwuc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJzOiBuZXcgT2JzZXJ2YWJsZUFycmF5KCksXHJcbiAgICAgICAgICAgICAgICB0ZXN0OltcIjFcIixcIjJcIixcIjNcIl1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKXtcclxuICAgICAgICAgICAgdGhpcy4kYmFja2VuZFNlcnZpY2UuU2luZ2xlUSgpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjdhbWFkYVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXMudGl0bGUgPSByZXN1bHQudGl0bGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXMuZGV0YWlscyA9IHJlc3VsdC5kZXRhaWxzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzLm5hbWUgPSByZXN1bHQub3duZXIuZmlyc3RfbmFtZSArXCIgXCIrIHJlc3VsdC5vd25lci5sYXN0X25hbWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyICAgPSByZXN1bHQuY3JlYXRlZF9vbjtcclxuICAgICAgICAgICAgICAgIHZhciBzdHJpbmdBcnJheSA9IHN0ci5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXMuZGF0ZSA9IHN0cmluZ0FycmF5WzBdO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5xdWVzKTtcclxuICAgICAgICAgICAgfSxlcnJvcj0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlLkFuc3dlcnMoKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCI3YW1hZGFcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VycyA9ICBuZXcgT2JzZXJ2YWJsZUFycmF5KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnF1ZXMpO1xyXG4gICAgICAgICAgICB9LGVycm9yPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQgKHsgb2JqZWN0IH0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1B1bGxpbmcuLi4nKTtcclxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYmFja2VuZFNlcnZpY2VcclxuICAgICAgICAgICAgICAgICAgICAuQW5zd2VycygpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIgLS0tLTAtLS0tIFwiICsgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlcnMgPSAgbmV3IE9ic2VydmFibGVBcnJheShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3Qubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBBbnN3ZXIoKXtcclxuICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEFuc3dlciwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEJhY2soKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgIFxyXG4gICAgfTtcclxuPC9zY3JpcHQ+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaG9tZS1wYW5lbFtkYXRhLXYtNDQyNWU0NGVdIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luOiAxNTtcXG59XFxuLmRlc2NyaXB0aW9uLWxhYmVsW2RhdGEtdi00NDI1ZTQ0ZV0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0Fuc3dlci52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmhvbWUtcGFuZWxbZGF0YS12LTNjMGEzNjI0XSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcbi5kZXNjcmlwdGlvbi1sYWJlbFtkYXRhLXYtM2MwYTM2MjRdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9Bc2sudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5wYWdlW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZm9ybVtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgICBmbGV4LWdyb3c6IDI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5sb2dvW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMjtcXG4gICAgaGVpZ2h0OiA5MDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5oZWFkZXJbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNzA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNENTFBMUE7XFxufVxcbi5pbnB1dC1maWVsZFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjU7XFxufVxcbi5pbnB1dFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7XFxufVxcbi5pbnB1dFtkYXRhLXYtYzI3NDgyYzRdOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuLmJ0bi1wcmltYXJ5W2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW46IDMwIDUgMTUgNTtcXG59XFxuLmxvZ2luLWxhYmVsW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjQThBOEE4O1xcbiAgICBmb250LXNpemU6IDE2O1xcbn1cXG4uc2lnbi11cC1sYWJlbFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjA7XFxufVxcbi5ib2xkW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0xvZ2luLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaG9tZS1wYW5lbFtkYXRhLXYtMDEwNTM0YzRdIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luOiAxNTtcXG59XFxuLmRlc2NyaXB0aW9uLWxhYmVsW2RhdGEtdi0wMTA1MzRjNF0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL1Byb2ZpbGUudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IGF0dHJzOiB7IHBhZGRpbmc6IFwiMTVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB3aWR0aDogXCI5NCVcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9pbWFnZXMvbG9nbzIucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzVcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFkZCBhbiBBbnN3ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9iYWNrLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5CYWNrIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhvbWUtcGFuZWxcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIlRleHRWaWV3XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiR3JlZW5cIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbG9hZGVkOiBcInRleHR2aWV3bG9hZGVkXCIsXG4gICAgICAgICAgICAgICAgICBoaW50OiBcIldyaXRlIHlvdXIgYW5zd2VyIGhlcmVcIixcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVRleHRUcmlnZ2VyOiBcInRleHRDaGFuZ2VkXCIsXG4gICAgICAgICAgICAgICAgICBlZGl0YWJsZTogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFuc3dlcixcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmFuc3dlciA9ICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhbnN3ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIkdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNVwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjMwXCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzZERDBCNFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5hZGRBbnN3ZXIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgcGFkZGluZzogXCIxNVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjk0JVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9sb2dvMi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQXNrIGEgUXVlc3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9iYWNrLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5CYWNrIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhvbWUtcGFuZWxcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MFwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiR3JlZW5cIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBoaW50OiBcIlRpdGxlXCIsIG1hcmdpblRvcDogXCIxMFwiIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucXVlc3Rpb24udGl0bGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5xdWVzdGlvbiwgXCJ0aXRsZVwiLCAkZXZlbnQub2JqZWN0W1widGV4dFwiXSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInF1ZXN0aW9uLnRpdGxlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDBcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIkdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaGludDogXCJEZXRhaWxzXCIsIG1hcmdpblRvcDogXCIxMFwiIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucXVlc3Rpb24uZGV0YWlscyxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnF1ZXN0aW9uLCBcImRldGFpbHNcIiwgJGV2ZW50Lm9iamVjdFtcInRleHRcIl0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJxdWVzdGlvbi5kZXRhaWxzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJHcmVlblwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFza1wiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIzMFwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM2REQwQjRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uQXNrUSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBhdHRyczogeyBwYWRkaW5nOiBcIjE1XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgd2lkdGg6IFwiOTQlXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vaW1hZ2VzL2xvZ28yLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLm5hdmJhcixcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vaW1hZ2VzL2Fzay5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjE1XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uQXNrIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vaW1hZ2VzL3Byb2ZpbGUucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzVcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLlByb2ZpbGUgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJSYWRMaXN0Vmlld1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHB1bGxUb1JlZnJlc2g6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiOTQlXCIsXG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgc2VwYXJhdG9yQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIzMFwiLFxuICAgICAgICAgICAgaXRlbXM6IF92bS5saXN0b2ZyZXF1ZXN0LFxuICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJpdGVtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpdGVtVGFwOiBfdm0ub25JdGVtVGFwLFxuICAgICAgICAgICAgcHVsbFRvUmVmcmVzaEluaXRpYXRlZDogX3ZtLm9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaGFkb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaGFkb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGJvcmRlclJhZGl1czogXCIxMFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBib3JkZXJSYWRpdXM6IFwiMTBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwibWlkZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNCM0JERkZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0uZGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0uY3JlYXRlZF9vbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcIm1pZGRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaGVpZ2h0OiBcIjE1XCIsIGJhY2tncm91bmRDb2xvcjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1cIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dvXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vaW1hZ2VzL2xvZ28yLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMDBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJMWU5YIEFQUFwiLCBjb2xvcjogXCJCbGFja1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0bywgYXV0bywgYXV0bywgYXV0bywgYXV0b1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiMFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiRW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcIm5leHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgcmV0dXJuUHJlc3M6IF92bS5mb2N1c1Bhc3N3b3JkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IHJvdzogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogX3ZtLmlzTG9nZ2luZ0luID8gXCJkb25lXCIgOiBcIm5leHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgcmV0dXJuUHJlc3M6IF92bS5mb2N1c0NvbmZpcm1QYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQub2JqZWN0W1widGV4dFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNMb2dnaW5nSW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFpc0xvZ2dpbmdJblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY29uZmlybVBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkNvbmZpcm0gcGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcImRvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5jb25maXJtUGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZmlybVBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50Lm9iamVjdFtcInRleHRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5jb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5pc0xvZ2dpbmdJbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWlzTG9nZ2luZ0luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIzXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJjb25maXJtUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6ICFfdm0ucHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiRmlyc3QgbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogXCJkb25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuZmlyc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpcnN0bmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuZmlyc3RuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNMb2dnaW5nSW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFpc0xvZ2dpbmdJblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiNFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY29uZmlybVBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcImxhc3QgTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogXCJkb25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIubGFzdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFzdG5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQub2JqZWN0W1widGV4dFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmxhc3RuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQWN0aXZpdHlJbmRpY2F0b3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93U3BhbjogXCI1XCIsIGJ1c3k6IF92bS5wcm9jZXNzaW5nIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQUY4M0VBXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXNMb2dnaW5nSW4gPyBcIkxvZyBJblwiIDogXCJTaWduIFVwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc3VibWl0IH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzTG9nZ2luZ0luLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0xvZ2dpbmdJblwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZm9yZ290UGFzc3dvcmQoKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luLWxhYmVsIHNpZ24tdXAtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnRvZ2dsZUZvcm0gfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLmlzTG9nZ2luZ0luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkRvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJCYWNrIHRvIExvZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjUwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pc0xvZ2dpbmdJbiA/IFwiU2lnbiB1cFwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiR3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgcGFkZGluZzogXCIxNVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHdpZHRoOiBcIjk0JVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9sb2dvMi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxNVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vaW1hZ2VzL2JhY2suanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzVcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLkJhY2sgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaG9tZS1wYW5lbFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNjBcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNjBcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjRcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIkdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTAwXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzcmM6IFwifi9pbWFnZXMvcHAuanBnXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMDBcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5uYW1lLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5qb2luZWRpbixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIldoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIldoaXRlXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIkxvZ291dFwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIlJlZFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjE1MFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ubG9nb3V0IH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IGF0dHJzOiB7IHBhZGRpbmc6IFwiMTVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB3aWR0aDogXCI5NCVcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9pbWFnZXMvbG9nbzIucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzVcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9iYWNrLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5CYWNrIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJCbGFja1wiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjVcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI1XCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0ucXVlcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiQmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjE5MFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiQnk6IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0ucXVlcy5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIkJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIyMDBcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIkFza2VkIG9uOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnF1ZXMuZGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiQmxhY2tcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0XCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTVcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnF1ZXMuZGV0YWlsc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIldoaXRlXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIldoaXRlXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFuc3dlclwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIkdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLkFuc3dlciB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHt9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWFyZ2luTGVmdDogXCI1XCIsIG1hcmdpblJpZ2h0OiBcIjVcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiUmFkTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uYW5zd2VycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNoYWRvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNoYWRvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBib3JkZXJSYWRpdXM6IFwiMTBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwibWlkZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQjNCREZGXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTYwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJCeTogXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm93bmVyLmZpcnN0X25hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub3duZXIubGFzdF9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjE2MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFza2VkIG9uOiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS5jcmVhdGVkX29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiQmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5saWtlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZGlzbGlrZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhlaWdodDogXCIxNVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCIsXG5cdFwiLi9yb3V0ZXMvaW5kZXguanNcIjogXCIuL3JvdXRlcy9pbmRleC5qc1wiLFxuXHRcIi4vc2VydmljZXMvYmFja2VuZC1zZXJ2aWNlLmpzXCI6IFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfGt0fCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzJ1wifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI1MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjRDUxQTFBXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNjAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1wcmltYXJ5OmRpc2FibGVkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3BhY2l0eVwiLFwidmFsdWVcIjpcIjAuNVwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OztcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XG5pbXBvcnQgUmFkTGlzdFZpZXcgZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L3Z1ZSc7XG5WdWUudXNlKFJhZExpc3RWaWV3KTtcbmltcG9ydCBOU1Z1ZVNoYWRvdyBmcm9tICduYXRpdmVzY3JpcHQtdnVlLXNoYWRvdydcblZ1ZS51c2UoTlNWdWVTaGFkb3cpXG5cbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4vcm91dGVzXCI7XG5pbXBvcnQgQmFja2VuZFNlcnZpY2UgZnJvbSBcIi4vc2VydmljZXMvYmFja2VuZC1zZXJ2aWNlXCI7XG5cblxuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xuXG4vLyBVbmNvbW1tZW50IHRoZSBmb2xsb3dpbmcgdG8gc2VlIE5hdGl2ZVNjcmlwdC1WdWUgb3V0cHV0IGxvZ3Ncbi8vIFZ1ZS5jb25maWcuc2lsZW50ID0gZmFsc2U7XG5cbmNvbnN0IGJhY2tlbmRTZXJ2aWNlID0gbmV3IEJhY2tlbmRTZXJ2aWNlKCk7XG5WdWUucHJvdG90eXBlLiRiYWNrZW5kU2VydmljZSA9IGJhY2tlbmRTZXJ2aWNlO1xuXG5uZXcgVnVlKHtcbiAgcmVuZGVyOiBoID0+IGgoXCJmcmFtZVwiLCBbaChiYWNrZW5kU2VydmljZS5pc0xvZ2dlZEluKCkgPyByb3V0ZXMuaG9tZSA6IHJvdXRlcy5sb2dpbildKVxufSkuJHN0YXJ0KCk7XG5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQW5zd2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NDI1ZTQ0ZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BbnN3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BbnN3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0Fuc3dlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NDI1ZTQ0ZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDQyNWU0NGVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxtb2hhbVxcXFxEb2N1bWVudHNcXFxcbW9iaWxlIGRldlxcXFxseW54XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ0MjVlNDRlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ0MjVlNDRlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ0MjVlNDRlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BbnN3ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0MjVlNDRlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ0MjVlNDRlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0Fuc3dlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5zd2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fuc3dlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fuc3dlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NDI1ZTQ0ZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbnN3ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDQyNWU0NGUmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5zd2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NDI1ZTQ0ZSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXNrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYzBhMzYyNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Bc2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Bc2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0Fzay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYzBhMzYyNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiM2MwYTM2MjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxtb2hhbVxcXFxEb2N1bWVudHNcXFxcbW9iaWxlIGRldlxcXFxseW54XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNjMGEzNjI0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNjMGEzNjI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNjMGEzNjI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Bc2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjMGEzNjI0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNjMGEzNjI0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0Fzay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fzay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fzay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYzBhMzYyNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Bc2sudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2MwYTM2MjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXNrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYzBhMzYyNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2EmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxtb2hhbVxcXFxEb2N1bWVudHNcXFxcbW9iaWxlIGRldlxcXFxseW54XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY3NDEwZjNhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3NDEwZjNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3NDEwZjNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NzQxMGYzYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9Ib21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzI3NDgyYzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImMyNzQ4MmM0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcbW9oYW1cXFxcRG9jdW1lbnRzXFxcXG1vYmlsZSBkZXZcXFxcbHlueFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjMjc0ODJjNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MyNzQ4MmM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJvZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDEwNTM0YzQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDEwNTM0YzQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjAxMDUzNGM0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcbW9oYW1cXFxcRG9jdW1lbnRzXFxcXG1vYmlsZSBkZXZcXFxcbHlueFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMTA1MzRjNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMTA1MzRjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMTA1MzRjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJvZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDEwNTM0YzQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDEwNTM0YzQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvUHJvZmlsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wMTA1MzRjNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAxMDUzNGM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAxMDUzNGM0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TaW5nbGVRLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNjRiOWUwNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaW5nbGVRLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2luZ2xlUS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXG1vaGFtXFxcXERvY3VtZW50c1xcXFxtb2JpbGUgZGV2XFxcXGx5bnhcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZTY0YjllMDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZTY0YjllMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZTY0YjllMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NpbmdsZVEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU2NGI5ZTA0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2U2NGI5ZTA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL1NpbmdsZVEudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpbmdsZVEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2luZ2xlUS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2luZ2xlUS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTY0YjllMDQmXCIiLCJpbXBvcnQgTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW5cIjtcbmltcG9ydCBIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWVcIjtcblxuXG5jb25zdCByb3V0ZXMgPSB7XG4gICAgbG9naW46IExvZ2luLFxuICAgIGhvbWU6IEhvbWVcbn1cbmV4cG9ydCBkZWZhdWx0IHJvdXRlczsiLCIvLyBUaGUgZm9sbG93aW5nIGlzIGEgc2FtcGxlIGltcGxlbWVudGF0aW9uIG9mIGEgYmFja2VuZCBzZXJ2aWNlIHVzaW5nIFByb2dyZXNzIEtpbnZleSAoaHR0cHM6Ly93d3cucHJvZ3Jlc3MuY29tL2tpbnZleSkuXG4vLyBGZWVsIGZyZWUgdG8gc3dhcCBpbiB5b3VyIG93biBzZXJ2aWNlIC8gQVBJcyAvIGV0YyBoZXJlIGZvciB5b3VyIG93biBhcHBzLlxuXG4vL2ltcG9ydCAqIGFzIEtpbnZleSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcblxuLypLaW52ZXkuaW5pdCh7XG4gICAgYXBwS2V5OiBcImtpZF9TeVk4TFlPOE1cIixcbiAgICBhcHBTZWNyZXQ6IFwiMDkyODI5ODVkN2M1NDBmN2IwNzZhOWM3ZmQ4ODRjNzdcIlxufSk7Ki9cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSBcImh0dHBcIjtcbmNvbnN0IE9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKS5PYnNlcnZhYmxlQXJyYXk7XG5cbmdsb2JhbC5pc1VzZXJMb2dnZWRpbiA9IGZhbHNlO1xuZ2xvYmFsLmFjY2Vzc1Rva2VuID0gbnVsbDtcbmdsb2JhbC51c2VyRGF0YSA9IG51bGw7XG5nbG9iYWwudG9SZWdpc3RlciA9IG51bGw7XG5nbG9iYWwuc2VsZWN0ZWQgPSBudWxsO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xuXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5pc1VzZXJMb2dnZWRpbjtcbiAgICB9XG5cbiAgICBhc3luYyBsb2dpbih1c2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2luZyBpblwiKTtcbiAgICAgICAgXG5cbiAgICAgICAgICByZXR1cm4gIGF4aW9zKHsgbWV0aG9kOiBcIlBPU1RcIiwgXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RoZWJhc2VsYWJzLmNvbS9kaXJlY3R1cy9wdWJsaWMvYWJkZWxhdGVlZi9hdXRoL2F1dGhlbnRpY2F0ZVwiLCAvLyB5b3VyIGFwaSB1cmxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZXJEZXRhaWxzID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5kYXRhLnRva2VuKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwudXNlckRhdGEgPSByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLmFjY2Vzc1Rva2VuID0gcmVzdWx0LmRhdGEuZGF0YS50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5pc1VzZXJMb2dnZWRpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWwudXNlckRhdGEgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvL3JldHVybiBLaW52ZXkuVXNlci5sb2dpbih1c2VyLmVtYWlsLCB1c2VyLnBhc3N3b3JkKTtcbiAgICB9XG4gICAgYXN5bmMgYWNjZXNzKCl7XG4gICAgICAgIHJldHVybiAgYXhpb3MoeyBtZXRob2Q6IFwiUE9TVFwiLCBcbiAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RoZWJhc2VsYWJzLmNvbS9kaXJlY3R1cy9wdWJsaWMvYWJkZWxhdGVlZi9hdXRoL2F1dGhlbnRpY2F0ZVwiLCAvLyB5b3VyIGFwaSB1cmxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZW1haWw6IFwiY21hYmRlbGxhdGVlZkBzdGQuYXhjZWxhY2FkZW15LmNvLnVrXCIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJUWmJDTWdHOXQ1XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHZhciB1c2VyRGV0YWlscyA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLmRhdGEudG9rZW4pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LmRhdGEuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICBnbG9iYWwudG9SZWdpc3RlciA9IHJlc3VsdC5kYXRhLmRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGFzeW5jIGFkZFVzZXIodXNlcil7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gIGF4aW9zKHsgbWV0aG9kOiBcIlBPU1RcIiwgXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RoZWJhc2VsYWJzLmNvbS9kaXJlY3R1cy9wdWJsaWMvYWJkZWxhdGVlZi91c2Vyc1wiLCAvLyB5b3VyIGFwaSB1cmxcbiAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnbG9iYWwudG9SZWdpc3Rlcn1gfSxcbiAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiB1c2VyLmZpcnN0bmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0X25hbWU6IHVzZXIubGFzdG5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgcm9sZTogMyxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwiYWN0aXZlXCJcbiAgICAgICAgICAgfVxuICAgICAgICAgIH0pLnRoZW4ocmVzdWx0PT57XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlF1ZXN0aW9ucyAtLS0tIFwiLGdsb2JhbC5RdWVzdGlvbnMpO1xuICAgICAgICAgIH0sZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRSZXF1ZXN0cygpXG4gICAge1xuICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLSYmJiYtLSBpbiBnZXRyZXF1ZXN0c1wiKTtcbiAgICAgICAgcmV0dXJuICBheGlvcyh7IG1ldGhvZDogXCJHRVRcIiwgXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3RoZWJhc2VsYWJzLmNvbS9kaXJlY3R1cy9wdWJsaWMvYWJkZWxhdGVlZi9pdGVtcy9xdWVzdGlvbnNcIiwgLy8geW91ciBhcGkgdXJsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIisgZ2xvYmFsLmFjY2Vzc1Rva2VuIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS0tLSBcIityZXN1bHQuZGF0YS5kYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgQXNrUW4ocXVlc3Rpb24pXG4gICAge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuICBheGlvcyh7IG1ldGhvZDogXCJQT1NUXCIsIFxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90aGViYXNlbGFicy5jb20vZGlyZWN0dXMvcHVibGljL2FiZGVsYXRlZWYvaXRlbXMvcXVlc3Rpb25zXCIsIC8vIHlvdXIgYXBpIHVybFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIrIGdsb2JhbC5hY2Nlc3NUb2tlbiB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOlwicHVibGlzaGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBxdWVzdGlvbi50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogcXVlc3Rpb24uZGV0YWlsc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0gXCIrcmVzdWx0LmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGFkZEFuc3dlcihhbnMpXG4gICAge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuICBheGlvcyh7IG1ldGhvZDogXCJQT1NUXCIsIFxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90aGViYXNlbGFicy5jb20vZGlyZWN0dXMvcHVibGljL2FiZGVsYXRlZWYvaXRlbXMvYW5zd2Vyc1wiLCAvLyB5b3VyIGFwaSB1cmxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiKyBnbG9iYWwuYWNjZXNzVG9rZW4gfSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czpcInB1Ymxpc2hlZFwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBhbnMsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uaWQ6IGdsb2JhbC5zZWxlY3RlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0gXCIrcmVzdWx0LmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgXG4gICAgYXN5bmMgU2luZ2xlUSgpXG4gICAge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0mJiYmLS0gaW4gU2luZ2xlIFF1ZXN0aW9uXCIpO1xuICAgICAgICByZXR1cm4gIGF4aW9zKHsgbWV0aG9kOiBcIkdFVFwiLCBcbiAgICAgICAgICAgICAgICBcInVybFwiOiAnaHR0cHM6Ly90aGViYXNlbGFicy5jb20vZGlyZWN0dXMvcHVibGljL2FiZGVsYXRlZWYvaXRlbXMvcXVlc3Rpb25zLydcbiAgICAgICAgICAgICAgICArZ2xvYmFsLnNlbGVjdGVkKyc/ZmllbGRzPWlkLGRldGFpbHMsdGl0bGUsY3JlYXRlZF9vbixvd25lci5pZCxvd25lci5maXJzdF9uYW1lLG93bmVyLmxhc3RfbmFtZScsIC8vIHlvdXIgYXBpIHVybFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIrIGdsb2JhbC5hY2Nlc3NUb2tlbiB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgQW5zd2VycygpXG4gICAge1xuICAgICAgICByZXR1cm4gIGF4aW9zKHsgbWV0aG9kOiBcIkdFVFwiLCBcbiAgICAgICAgICAgICAgICBcInVybFwiOiAnIGh0dHBzOi8vdGhlYmFzZWxhYnMuY29tL2RpcmVjdHVzL3B1YmxpYy9hYmRlbGF0ZWVmL2l0ZW1zL2Fuc3dlcnM/ZmlsdGVyW3F1ZXN0aW9uaWRdID0nXG4gICAgICAgICAgICAgICAgK2dsb2JhbC5zZWxlY3RlZCtcIiZmaWVsZHM9aWQsY29udGVudCxvd25lci5maXJzdF9uYW1lLG93bmVyLmxhc3RfbmFtZSwgY3JlYXRlZF9vblwiLCAvLyB5b3VyIGFwaSB1cmxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiKyBnbG9iYWwuYWNjZXNzVG9rZW4gfVxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LmRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICBnbG9iYWwuaXNVc2VyTG9nZ2VkaW4gPSBmYWxzZTtcbiAgICAgICAgZ2xvYmFsLmFjY2Vzc1Rva2VuID0gbnVsbDtcbiAgICAgICAgZ2xvYmFsLnVzZXJEYXRhID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIodXNlcikge1xuICAgICAgICAvL3JldHVybiBLaW52ZXkuVXNlci5zaWdudXAoeyB1c2VybmFtZTogdXNlci5lbWFpbCwgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQgfSk7XG4gICAgfVxufVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdGV4dC9zcGFuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9hY3Rpb24tYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2JvcmRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYm90dG9tLW5hdmlnYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvY29udGVudC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9jb3JlL3ZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2RhdGUtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvaHRtbC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9pbWFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2RvY2stbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2xheW91dC1iYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy93cmFwLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGlzdC1waWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xpc3Qtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGxhY2Vob2xkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3Byb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wcm94eS12aWV3LWNvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2Nyb2xsLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NlYXJjaC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NlZ21lbnRlZC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3dpdGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1jb250ZW50LWl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcC1pdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGV4dC1maWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGV4dC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90aW1lLXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvd2ViLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3V0aWxzL3R5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS94bWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L3Z1ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdnVlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS93ZWFrLWV2ZW50LWxpc3RlbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==