(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/search/search"],{

/***/ 28:
/*!*************************************************************************************************************!*\
  !*** C:/Users/Akinator/IdeaProjects/GarbageSort-master/frontend/main.js?{"page":"pages%2Fsearch%2Fsearch"} ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _search = _interopRequireDefault(__webpack_require__(/*! ./pages/search/search.vue */ 29));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_search.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 29:
/*!******************************************************************************************!*\
  !*** C:/Users/Akinator/IdeaProjects/GarbageSort-master/frontend/pages/search/search.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_4cedc0c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=4cedc0c6& */ 30);
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ 32);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.vue?vue&type=style&index=0&lang=css& */ 34);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_4cedc0c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_vue_vue_type_template_id_4cedc0c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _search_vue_vue_type_template_id_4cedc0c6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/search/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 30:
/*!*************************************************************************************************************************!*\
  !*** C:/Users/Akinator/IdeaProjects/GarbageSort-master/frontend/pages/search/search.vue?vue&type=template&id=4cedc0c6& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_4cedc0c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=template&id=4cedc0c6& */ 31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_4cedc0c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_4cedc0c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_4cedc0c6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_4cedc0c6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 31:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Akinator/IdeaProjects/GarbageSort-master/frontend/pages/search/search.vue?vue&type=template&id=4cedc0c6& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup: function() {
      return __webpack_require__.e(/*! import() | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 73))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. ????????????????????????????????????")
    console.error(
      "2. ???????????????????????? easycom ??????????????????https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. ?????????????????? easycom ????????????????????????????????? components ??????????????????"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.imageResults, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var g0 = Math.floor(item.score * 100)
    return {
      $orig: $orig,
      g0: g0
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 32:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Akinator/IdeaProjects/GarbageSort-master/frontend/pages/search/search.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=script&lang=js& */ 33);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 33:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Akinator/IdeaProjects/GarbageSort-master/frontend/pages/search/search.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uniPopup = function uniPopup() {__webpack_require__.e(/*! require.ensure | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then((function () {return resolve(__webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 73));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var myPopup = function myPopup() {__webpack_require__.e(/*! require.ensure | components/myPopup */ "components/myPopup").then((function () {return resolve(__webpack_require__(/*! @/components/myPopup.vue */ 108));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var share = function share() {__webpack_require__.e(/*! require.ensure | components/share */ "components/share").then((function () {return resolve(__webpack_require__(/*! @/components/share.vue */ 87));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};










































































































































var recorderManager = uni.getRecorderManager();
var innerAudioContext = uni.createInnerAudioContext();

innerAudioContext.autoplay = true;var _default =

{
  components: {
    //??????mSearch?????????????????????????????????
    uniPopup: uniPopup,
    myPopup: myPopup,
    share: share },

  data: function data() {
    return {
      defaultKeyword: "",
      keyword: "",
      oldKeywordList: [],
      hotKeywordList: [],
      keywordList: [],
      forbid: '',
      isShowKeywordList: false,
      imagePath: "",

      // ??????????????? ???	start
      popupShow: false,
      voicePath: '',
      startTiming: false,
      drawTiming: false,
      timeoutTiming: false,
      animaTiming1: false,
      animaTiming2: false,
      animationData: {},
      maxTime: 5000,
      frame: 50,

      // ??????????????? ???	end

      // image ???????????? start
      possible: [],
      reference: null,
      results: [],
      // imageResults: [],
      imageResults: [{
        "score": 0.944264,
        "root": "??????-??????",
        "keyword": "?????????" },
      {
        "score": 0.799999,
        "root": "Logo",
        "keyword": "85???c" },
      {
        "score": 0.589144,
        "root": "??????-??????",
        "keyword": "?????????" },
      {
        "score": 0.227161,
        "root": "??????-??????",
        "keyword": "???????????????" },
      {
        "score": 0.018175,
        "root": "??????-??????",
        "keyword": "?????????" }],


      imagesResultShow: false,
      replyWord: [
      "?????????,???????????????????????????,?????????????????? ???(???????????????)???",
      "?????????????????????,??????????????????????????????, ??????????????????(?????????????)",
      "??????????????????????????????????????????????????????",
      "??????????????????????????????????????????????????????",
      "?????????????????????????????????????????????",
      "?????????,???????????????????????????,?????????????????? ???(???????????????)???"],


      // image ???????????? end
      detailPopupShow: false,
      detailShowObject: null };


  },
  // onShareAppMessage() {
  // 	return {
  // 		title: "????????????????????????",
  // 		path: '/pages/index/index',
  // 		imageUrl: this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
  // 	}
  // },

  onLoad: function onLoad(option) {
    var me = this;
    if (option.type == 1) {
      me.takePhoto();
    } else if (option.type == 2) {
      me.readyRecord();
    } else if (option.type == 3) {

      console.log(" search-------");
      console.log(option);
      if (option.keyword) {
        me.keyword = option.keyword;

        if (option.uni != "null") {
          var uniOne = JSON.parse(option.uni);

          me.detailPopupShow = true;
          me.detailShowObject = {
            keyword: uniOne.garbageName,
            garbageType: uniOne.garbageType,
            remark: uniOne.remark };

          me.saveKeyword(uniOne.garbageName);
        }
        console.log(option.keywordList);
        console.log(option.keywordList == "[]");
        if (option.keywordList != "[]") {
          var list = JSON.parse(option.keywordList);
          me.isShowKeywordList = true;
          me.keywordList = me.drawCorrelativeKeyword(JSON.parse(option.keywordList), me.keyword);
        }
        console.log(me.isShowKeywordList);
        console.log(me.keywordList);

        console.log(me.detailPopupShow);
        if (me.keywordList == 0 && !me.detailPopupShow) {
          me.noTitlemodalTap();
        }

      }
    }

    me.init();
    // ????????????????????????

    console.log(1);
    // ???????????????????????????
    recorderManager.onStop(function (res) {
      uni.showLoading({
        title: '?????????????????????...' });

      console.log('recorder stop' + JSON.stringify(res));
      me.voicePath = res.tempFilePath;
      console.log(me.voicePath);
      me.popupShow = false;

      // if (me.voicePath) {
      // 	innerAudioContext.src = me.voicePath;
      // 	innerAudioContext.play();
      // 	console.log("???????????????")
      // }

      // canvas ??????
      // let angle = -0.5;
      // let context = uni.createCanvasContext('canvas');
      // me.draw = setTimeout(function() {
      // 	context.beginPath();
      // 	context.setStrokeStyle("#1296db");
      // 	context.setLineWidth(3);
      // 	context.arc(0, 0, 0, -0.5 * Math.PI, (angle += 2 / (me.maxTime / me.frame)) * Math.PI, false);
      // 	context.stroke();
      // 	context.draw();
      // }, 1);
      uni.uploadFile({
        url: me.serverUrl + '/upload/record', //???????????????????????????????????????
        filePath: me.voicePath,
        name: 'file',
        success: function success(uploadFileRes) {
          console.log(uploadFileRes.data);
          var res = JSON.parse(uploadFileRes.data);
          var data = res.data;
          var uniOne = data.uni;
          me.keyword = data.keyword;
          me.isShowKeywordList = true;
          me.keywordList = me.drawCorrelativeKeyword(data.results, me.keyword);
          if (uniOne) {
            me.detailPopupShow = true;
            me.detailShowObject = {
              keyword: uniOne.garbageName,
              garbageType: uniOne.garbageType,
              remark: uniOne.remark };

          }
          if (me.keywordList == 0 && !me.detailPopupShow) {
            me.noTitlemodalTap();
          }
        },
        complete: function complete() {
          uni.hideLoading();
        } });

    });

  },

  methods: {
    tapKeyword: function tapKeyword(keyword) {
      this.keyword = keyword;
      this.doSearch();
      this.imagesResultShow = false;
    },
    noTitlemodalTap: function noTitlemodalTap() {
      uni.showModal({
        title: "??????????????????",
        content: this.replyWord[Math.round(Math.random() * 5)],
        confirmText: "?????????",
        showCancel: false,
        success: function success(res) {
          if (res.confirm) {
            console.log('??????????????????');
          } else if (res.cancel) {
            console.log('??????????????????');
          }
        } });

    },
    //  ?????????????????? start
    showDetail: function showDetail(row) {
      this.detailShowObject = row;
      this.detailPopupShow = true;
    },
    hideMypopup: function hideMypopup() {
      this.detailPopupShow = false;
    },
    hideUnipPpup: function hideUnipPpup() {
      this.imagesResultShow = false;
    },
    readyRecord: function readyRecord() {
      this.popupShow = true;
    },
    start: function start() {
      // console.log("startTiming");
      this.recording();
      // this.startTiming = setTimeout(this.recording, 150);
    },
    end: function end() {
      // console.log("?????? end")
      recorderManager.stop();
      clearInterval(this.draw);
      clearTimeout(this.startTiming);
      clearTimeout(this.timeoutTiming);
      clearInterval(this.animaTiming1);
      clearInterval(this.animaTiming2);
      this.draw = false;
      this.startTiming = false;
      this.timeoutTiming = false;
      this.animaTiming1 = false;
      this.animaTiming2 = false;
      var animation = uni.createAnimation({
        duration: 500,
        timingFunction: 'ease' });

      this.animation = animation;
      animation.scale(1, 1).step();
      this.animationData = animation.export();
    },
    recording: function recording() {
      var me = this;
      // console.log('????????????');
      recorderManager.start();
      // ??????
      // let angle = -0.5;
      // let context = uni.createCanvasContext('canvas');
      // me.draw = setInterval(function() {
      // 	context.beginPath();
      // 	context.setStrokeStyle("#1296db");
      // 	context.setLineWidth(3);
      // 	context.arc(75, 75, 50, -0.5 * Math.PI, (angle += 2 / (me.maxTime / me.frame)) * Math.PI, false);
      // 	context.stroke();
      // 	context.draw();
      // }, me.frame);
      me.animaTiming1 = setInterval(function () {
        var animation = uni.createAnimation({
          duration: 500,
          timingFunction: 'ease' });


        me.animation = animation;

        animation.scale(1.3, 1.3).step();

        me.animationData = animation.export();

      }, 500);
      me.animaTiming2 = setInterval(function () {
        var animation = uni.createAnimation({
          duration: 500,
          timingFunction: 'ease' });


        me.animation = animation;

        animation.scale(1, 1).step();

        me.animationData = animation.export();

      }, 1000);
      me.timeoutTiming = setTimeout(function () {
        clearInterval(me.draw);
        me.draw = false;
        me.animaTiming1 = false;
        me.animaTiming2 = false;
        // console.log("????????????????????????");
        recorderManager.stop();
      }, me.maxTime);
    },
    playVoice: function playVoice() {
      var me = this;
      // console.log(" ?????? ??????")
      // console.log(me.voicePath)
      if (me.voicePath) {
        innerAudioContext.src = me.voicePath;
        innerAudioContext.play();
        // console.log("???????????????")
      }
    },
    hidePopup: function hidePopup() {
      this.popupShow = false;
    },
    takePhoto: function takePhoto() {
      var me = this;
      uni.chooseImage({
        count: 1,
        success: function success(res) {
          uni.showLoading({
            title: '?????????????????????...' });

          me.imagePath = res.tempFilePaths[0];
          console.log(me.imagePath);
          uni.uploadFile({
            url: me.serverUrl + '/upload/image', //???????????????????????????????????????
            filePath: res.tempFilePaths[0],
            name: 'file',
            success: function success(uploadFileRes) {
              console.log(uploadFileRes.data);
              var res = JSON.parse(uploadFileRes.data);
              var data = res.data;
              var response = JSON.parse(data.response);
              console.log(response.result);
              var uniOne = data.uni;
              me.keyword = data.keyword;

              me.keywordList = me.drawCorrelativeKeyword(data.results, me.keyword);
              if (uniOne) {// ?????????????????????????????????
                me.isShowKeywordList = true;
                me.detailPopupShow = true;

                me.detailShowObject = {
                  keyword: uniOne.garbageName,
                  garbageType: uniOne.garbageType,
                  remark: uniOne.remark };

              } else if (me.keywordList.length > 0) {
                me.isShowKeywordList = true;

              } else {
                me.imageResults = response.result;
                me.imagesResultShow = true;
              }


              // if (me.keywordList == 0 && !me.detailPopupShow) {
              // 	me.noTitlemodalTap();
              // }

            },
            complete: function complete() {
              uni.hideLoading();
            } });

        } });

    },

    // ?????????????????? end

    init: function init() {
      this.loadDefaultKeyword();
      this.loadOldKeyword();
      this.loadHotKeyword();

    },
    blur: function blur() {
      uni.hideKeyboard();
    },
    //???????????????????????????
    loadDefaultKeyword: function loadDefaultKeyword() {
      //????????????????????????????????????????????????ajax?????????????????????,????????????????????????????????????????????????????????????????????????????????????????????????????????????
      this.defaultKeyword = "??????";
    },
    //??????????????????,??????????????????Storage
    loadOldKeyword: function loadOldKeyword() {var _this = this;
      uni.getStorage({
        key: 'OldKeys',
        success: function success(res) {
          var OldKeys = JSON.parse(res.data);
          _this.oldKeywordList = OldKeys;
        } });

    },
    //??????????????????
    loadHotKeyword: function loadHotKeyword() {
      var me = this;
      me.hotKeywordList = ['??????', '??????', '?????????', '????????????', '????????????', '???????????????', '?????????', 'USB', 'USB3.0'];
      uni.request({
        url: me.serverUrl + "/qb/top10",
        success: function success(res) {
          me.hotKeywordList = res.data.data.map(function (item) {return item.keyword;});
        } });

      //????????????????????????????????????????????????ajax?????????????????????
    },
    //???????????? ???
    inputChange: function inputChange() {var _this2 = this;
      // var keyword = event.detail ? event.detail.value : event;
      var keyword = this.keyword;

      console.log("keyword:" + keyword);
      //???????????????????????????????????????


      setTimeout(function () {
        console.log("results:" + keyword);
        if (!keyword) {
          _this2.keywordList = [];
          _this2.isShowKeywordList = false;
          return;
        }
        _this2.isShowKeywordList = true;
        //???????????????????????????????????????????????????????????????
        uni.request({
          url: _this2.serverUrl + "/qb/name/" + keyword, //????????????
          success: function success(res) {
            console.log(res);
            _this2.keywordList = _this2.drawCorrelativeKeyword(res.data.data, keyword);
          } });

      }, 300);

    },
    //???????????????
    drawCorrelativeKeyword: function drawCorrelativeKeyword(keywords, keyword) {
      var len = keywords.length,
      keywordArr = [];
      for (var i = 0; i < len; i++) {
        var row = keywords[i];
        //????????????#9f9f9f
        var html = row.garbageName.replace(keyword, "<span style='color: #72c69c;'>" + keyword + "</span>");
        html = '<div>' + html + '</div>';
        var tmpObj = {
          keyword: row.garbageName,
          htmlStr: html,
          garbageType: row.garbageType,
          remark: row.remark };

        keywordArr.push(tmpObj);
      }
      return keywordArr;
    },
    //???????????????
    setkeyword: function setkeyword(data) {
      this.keyword = data.keyword;
    },
    //??????????????????
    oldDelete: function oldDelete() {var _this3 = this;
      uni.showModal({
        content: '?????????????????????????????????',
        success: function success(res) {
          if (res.confirm) {
            console.log('??????????????????');
            _this3.oldKeywordList = [];
            uni.removeStorage({
              key: 'OldKeys' });

          } else if (res.cancel) {
            console.log('??????????????????');
          }
        } });

    },
    //??????????????????
    hotToggle: function hotToggle() {
      this.forbid = this.forbid ? '' : '_forbid';
    },
    //????????????
    doSearch: function doSearch(key) {var _this4 = this;
      uni.showLoading({
        title: '?????????????????????...' });

      key = key ? key : this.keyword ? this.keyword : this.defaultKeyword;
      this.keyword = key;
      this.saveKeyword(key); //??????????????? 
      // uni.showToast({
      // 	title: key,
      // 	icon: 'none',
      // 	duration: 2000
      // });
      // this.inputChange();
      uni.request({
        url: this.serverUrl + "/qb/uniname/" + this.keyword, //????????????
        success: function success(res) {
          console.log(res);
          var data = res.data.data;
          var uniOne = data.uni;
          var results = data.results;
          if (uniOne) {
            _this4.detailPopupShow = true;
            _this4.detailShowObject = {
              keyword: uniOne.garbageName,
              garbageType: uniOne.garbageType,
              remark: uniOne.remark };

          }
          if (results.length > 0) {
            _this4.keywordList = _this4.drawCorrelativeKeyword(results, _this4.keyword);
          }
          if (_this4.keywordList == 0 && !_this4.detailPopupShow) {
            _this4.noTitlemodalTap();
          }
          // this.keywordList = this.drawCorrelativeKeyword(res.data.data, keyword);
        },
        complete: function complete() {
          uni.hideLoading();
        } });



    },
    //??????????????????????????????
    saveKeyword: function saveKeyword(keyword) {var _this5 = this;
      uni.getStorage({
        key: 'OldKeys',
        success: function success(res) {
          console.log(res.data);
          var OldKeys = JSON.parse(res.data);
          var findIndex = OldKeys.indexOf(keyword);
          if (findIndex == -1) {
            OldKeys.unshift(keyword);
          } else {
            OldKeys.splice(findIndex, 1);
            OldKeys.unshift(keyword);
          }
          //??????10?????????
          OldKeys.length > 10 && OldKeys.pop();
          uni.setStorage({
            key: 'OldKeys',
            data: JSON.stringify(OldKeys) });

          _this5.oldKeywordList = OldKeys; //??????????????????
        },
        fail: function fail(e) {
          var OldKeys = [keyword];
          uni.setStorage({
            key: 'OldKeys',
            data: JSON.stringify(OldKeys) });

          _this5.oldKeywordList = OldKeys; //??????????????????
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 34:
/*!***************************************************************************************************************************!*\
  !*** C:/Users/Akinator/IdeaProjects/GarbageSort-master/frontend/pages/search/search.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=style&index=0&lang=css& */ 35);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 35:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Akinator/IdeaProjects/GarbageSort-master/frontend/pages/search/search.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[28,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/search/search.js.map