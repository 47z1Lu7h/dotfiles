/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"welcome": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + "." + {"chunk-2d0a402b":"2ef82da2","chunk-2d0b24d9":"d2273d8d","chunk-2d0b66fa":"dff5ba3a","chunk-2d0b9196":"c01319be","chunk-2d0ba6b9":"dc1f46fe","chunk-2d0ba756":"5b4eb808","chunk-2d0bac2f":"25b21b73","chunk-2d0c073f":"0cb17801","chunk-2d0c0a17":"4625271b","chunk-2d0c4324":"9399e7b0","chunk-2d0c7930":"df875be2","chunk-2d0cbd04":"28e87e87","chunk-2d0cc3fb":"72476e8c","chunk-2d0ce83a":"5f9628cb","chunk-2d0ceeb7":"453dfdef","chunk-2d0d6334":"0b31ffdc","chunk-2d0d6af4":"e8fb44cb","chunk-2d0d72e1":"bdb768d2","chunk-2d0e2537":"b18cb260","chunk-2d0e9aab":"e55fe3e8","chunk-2d213369":"5bbb9457","chunk-2d216be4":"e1aa4249","chunk-2d217177":"2f985ccb","chunk-2d217363":"dbe960fa","chunk-2d219ff8":"a8f35cbb","chunk-2d221485":"c1d1cdf5","chunk-2d221b5b":"bd35394c","chunk-2d225665":"04fd8a3f","chunk-2d2262ad":"98ed41bc","chunk-2d229227":"8a050403","chunk-2d22a107":"f3743d81","chunk-2d22e0ba":"959306ae"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([3,"chunk-vendors","chunk-common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f4aa");


/***/ }),

/***/ "8795":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "884c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c97c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8795");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f4aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9986ca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/welcome/App.vue?vue&type=template&id=74028317&
var Appvue_type_template_id_74028317_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"welcome-screen",class:[("welcome-screen_step_" + _vm.step), { 'welcome-screen_locked': _vm.isLocked }],attrs:{"step":_vm.step}},[_c('section',{staticClass:"welcome-screen__slides"},[_c('div',{staticClass:"welcome-screen__slide welcome-screen__slide_0",attrs:{"step":"0"}},[_c('h1',{staticClass:"welcome-screen__head"},[_c('span',{staticClass:"welcome-screen__head-text"},[_vm._v(_vm._s(_vm.$t('welcome_to').message)+" start.me!")])]),_c('p',{staticClass:"welcome-screen__text"},[_vm._v(_vm._s(_vm.$t('lets_personalize_it').message))])]),_c('div',{staticClass:"welcome-screen__slide welcome-screen__slide_1",attrs:{"step":"1"}},[_c('h1',{staticClass:"welcome-screen__head welcome-screen__head_spaced"},[_vm._v(_vm._s(_vm.$t('already_have_startme_account').message))]),_c('p',{staticClass:"welcome-screen__buttons"},[_c('button',{staticClass:"welcome-screen__button",on:{"click":function($event){$event.stopPropagation();return _vm.goToSignIn.apply(null, arguments)}}},[_c('span',{staticClass:"welcome-screen__button-text"},[_vm._v(_vm._s(_vm.$t('yes').message))]),_c('span',{staticClass:"welcome-screen__button-text"},[_vm._v(_vm._s(_vm.$t('signin_with_email').message))])]),_c('button',{staticClass:"welcome-screen__button",on:{"click":function($event){$event.stopPropagation();return _vm.showNextStep.apply(null, arguments)}}},[_c('span',{staticClass:"welcome-screen__button-text"},[_vm._v(_vm._s(_vm.$t('no').message))]),_c('span',{staticClass:"welcome-screen__button-text"},[_vm._v(_vm._s(_vm.$t('create_new_free_account').message))])])])]),_c('div',{staticClass:"welcome-screen__slide welcome-screen__slide_2",attrs:{"step":"2"}},[_c('h1',{staticClass:"welcome-screen__head"},[_vm._v(_vm._s(_vm.$t('what_is_your_name').message))]),_c('p',{staticClass:"welcome-screen__form"},[_c('span',{staticClass:"welcome-screen__form-head"},[_vm._v(_vm._s(_vm.$t('my_name_is').message))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"}],ref:"nameInput",staticClass:"welcome-screen__input",attrs:{"id":"name","type":"text","name":"name","size":"12","autocomplete":"name","x-autocompletetype":"name","placeholder":_vm.$t('eg_name').message},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})])]),_c('div',{staticClass:"welcome-screen__slide welcome-screen__slide_3",attrs:{"step":"3"}},[(!_vm.isCountryPickerVisible)?_c('h1',{staticClass:"welcome-screen__head"},[_vm._v(_vm._s(_vm.$t('where_do_you_come_from').message))]):_vm._e(),_c('div',{ref:"countryControls",staticClass:"welcome-screen__controls"},[(_vm.isCountryPickerVisible)?_c('div',{staticClass:"welcome-screen__country-picker"},[_c('CountryPicker',{attrs:{"options":_vm.countryOptions},on:{"close":_vm.hideCountryPicker},model:{value:(_vm.selectedValue),callback:function ($$v) {_vm.selectedValue=$$v},expression:"selectedValue"}})],1):_c('button',{staticClass:"welcome-screen__button",on:{"click":function($event){$event.stopPropagation();return _vm.showCountryPicker.apply(null, arguments)}}},[_c('span',{staticClass:"welcome-screen__button-text"},[_vm._v(_vm._s(_vm.selectedCountry ? _vm.selectedCountry.label : _vm.country))]),_c('span',{staticClass:"welcome-screen__button-text"},[_vm._v(_vm._s(_vm.$t('click_to_choose_a_different_country').message))])])])]),_c('div',{staticClass:"welcome-screen__slide welcome-screen__slide_4",attrs:{"step":"4"}},[_c('h1',{staticClass:"welcome-screen__head"},[_vm._v(_vm._s(_vm.$t('import_your_bookmarks_question').message))]),(_vm.importInProgress)?_c('p',{staticClass:"welcome-screen__working-status"},[_vm._v(_vm._s(_vm.$t('your_bookmarks_are_being_imported').message))]):_c('p',{staticClass:"welcome-screen__buttons"},[_c('button',{staticClass:"welcome-screen__button",on:{"click":function($event){$event.stopPropagation();return _vm.performImportAction.apply(null, arguments)}}},[_c('span',{staticClass:"welcome-screen__button-text"},[_vm._v(_vm._s(_vm.$t('yes').message))]),_c('span',{staticClass:"welcome-screen__button-text"},[_vm._v(_vm._s(_vm.$t('please_import_them').message))])]),_c('button',{staticClass:"welcome-screen__button",on:{"click":function($event){$event.stopPropagation();return _vm.showNextStep.apply(null, arguments)}}},[_c('span',{staticClass:"welcome-screen__button-text"},[_vm._v(_vm._s(_vm.$t('no').message))]),_c('span',{staticClass:"welcome-screen__button-text"},[_vm._v(_vm._s(_vm.$t('i_may_do_this_later').message))])])])]),_c('div',{staticClass:"welcome-screen__slide welcome-screen__slide_5",attrs:{"step":"5"}},[_c('h1',{staticClass:"welcome-screen__head"},[_vm._v(_vm._s(_vm.$t('create_account').message))]),_c('p',{staticClass:"welcome-screen__form"},[_c('span',{staticClass:"welcome-screen__form-head"},[_vm._v(_vm._s(_vm.$t('my_email_is').message))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],ref:"emailField",staticClass:"welcome-screen__input",attrs:{"id":"email","required":"","name":"email","type":"email","size":"25","autocomplete":"email","x-autocompletetype":"email","disabled":_vm.emailFieldDisabled ? 'disabled' : false,"placeholder":_vm.$t('eg_email').message},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})])]),_c('div',{staticClass:"welcome-screen__slide welcome-screen__slide_6",attrs:{"step":"6"}},[_c('p',{staticClass:"welcome-screen__buttons"},[_c('button',{staticClass:"welcome-screen__button",on:{"click":function($event){$event.stopPropagation();return _vm.performDoneAction.apply(null, arguments)}}},[_c('span',{staticClass:"welcome-screen__button-text"},[_vm._v(_vm._s(_vm.$t('done').message))]),_c('span',{staticClass:"welcome-screen__button-text"},[_vm._v(_vm._s(_vm.$t('take_me_to_start_page').message))])])])])]),_c('nav',{staticClass:"welcome-screen__progressbar"}),(_vm.step !== 3 || !_vm.isCountryPickerVisible)?_c('nav',{staticClass:"welcome-screen__steps"},[_c('a',{staticClass:"welcome-screen__step",attrs:{"step":"2"},on:{"click":function($event){$event.stopPropagation();return _vm.showStepN(2)}}},[_vm._v(_vm._s(_vm.$t('shake_hands').message))]),_c('a',{staticClass:"welcome-screen__step",attrs:{"step":"4"},on:{"click":function($event){$event.stopPropagation();return _vm.showStepN(4)}}},[_vm._v(_vm._s(_vm.$t('import_bookmarks').message))]),_c('a',{staticClass:"welcome-screen__step",attrs:{"step":"5"},on:{"click":function($event){$event.stopPropagation();return _vm.showStepN(5)}}},[_vm._v(_vm._s(_vm.$t('create_account').message))])]):_vm._e(),(_vm.step !== 3 || !_vm.isCountryPickerVisible)?_c('nav',{staticClass:"welcome-screen__nav-buttons"},[(_vm.step > 0)?_c('a',{staticClass:"welcome-screen__prev",attrs:{"title":"Back"},on:{"click":function($event){$event.stopPropagation();return _vm.showPrevStep.apply(null, arguments)}}},[_c('svg',{staticClass:"feather feather-chevron-left",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"100","height":"100","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('polyline',{attrs:{"points":"15 18 9 12 15 6"}})])]):_vm._e(),(_vm.step < _vm.maxStepNumber && !_vm.hideNext)?_c('a',{staticClass:"welcome-screen__next",attrs:{"title":"Next"},on:{"click":function($event){$event.stopPropagation();return _vm.showNextStep.apply(null, arguments)}}},[_c('svg',{staticClass:"feather feather-chevron-right",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"100","height":"100","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('polyline',{attrs:{"points":"9 18 15 12 9 6"}})])]):_vm._e()]):_vm._e(),(_vm.step !== 3 || !_vm.isCountryPickerVisible)?_c('a',{staticClass:"welcome-screen__close",attrs:{"title":_vm.$t('close').message},on:{"click":function($event){$event.stopPropagation();return _vm.performDoneAction.apply(null, arguments)}}},[_c('svg',{staticClass:"feather feather-x",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"44","height":"44","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('line',{attrs:{"x1":"18","y1":"6","x2":"6","y2":"18"}}),_c('line',{attrs:{"x1":"6","y1":"6","x2":"18","y2":"18"}})])]):_vm._e(),_c('a',{staticClass:"welcome-screen__logo-container",attrs:{"href":"https://start.me","target":"_blank","title":_vm.$t('app_name').message}},[_c('img',{staticClass:"welcome-screen__logo",attrs:{"src":"images/Logo-white@2x.png"}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/welcome/App.vue?vue&type=template&id=74028317&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__("00b4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9986ca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/welcome/CountryPicker.vue?vue&type=template&id=1c1e60fa&
var CountryPickervue_type_template_id_1c1e60fa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"country-picker"},[_c('div',{staticClass:"country-picker__list"},[_c('div',{staticClass:"country-picker__container"},[_c('span',{staticClass:"country-picker__underlay",on:{"click":_vm.emitClose}}),_c('div',{ref:"counrtyBox",staticClass:"country-picker__box"},_vm._l((_vm.options),function(option){return _c('div',{key:option.id,staticClass:"country-picker__option",class:{ 'country-picker__option_selected': _vm.value === option.value },attrs:{"data-option-id":option.id},on:{"click":function($event){return _vm.emitNewValue(option.value)}}},[_vm._v(_vm._s(option.label))])}),0)])])])}
var CountryPickervue_type_template_id_1c1e60fa_staticRenderFns = []


// CONCATENATED MODULE: ./src/welcome/CountryPicker.vue?vue&type=template&id=1c1e60fa&

// EXTERNAL MODULE: ./node_modules/vue-types/dist/vue-types.m.js + 1 modules
var vue_types_m = __webpack_require__("84d4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/welcome/CountryPicker.vue?vue&type=script&lang=js&



/* harmony default export */ var CountryPickervue_type_script_lang_js_ = ({
  name: 'CountryPicker',
  props: {
    options: vue_types_m["a" /* default */].array.def([]),
    value: vue_types_m["a" /* default */].any.def(null)
  },
  computed: {
    selectedOption: function selectedOption() {
      var _this = this;

      return this.options.find(function (o) {
        return o.value === _this.value;
      });
    }
  },
  mounted: function mounted() {
    this.scrollToSelected();
  },
  methods: {
    emitClose: function emitClose() {
      this.$emit('close');
    },
    emitNewValue: function emitNewValue(value) {
      this.$emit('input', value);
    },
    scrollToSelected: function scrollToSelected() {
      if (!this.selectedOption || !this.$refs || !this.$refs.counrtyBox) return;
      var selectedOption = document.querySelector("[data-option-id=\"".concat(this.selectedOption.id, "\"]"));
      if (!selectedOption) return;

      var _selectedOption$getBo = selectedOption.getBoundingClientRect(),
          top = _selectedOption$getBo.top;

      this.$refs.counrtyBox.scrollTop = top;
    }
  }
});
// CONCATENATED MODULE: ./src/welcome/CountryPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var welcome_CountryPickervue_type_script_lang_js_ = (CountryPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/welcome/CountryPicker.vue?vue&type=style&index=0&lang=scss&
var CountryPickervue_type_style_index_0_lang_scss_ = __webpack_require__("fe8f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/welcome/CountryPicker.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  welcome_CountryPickervue_type_script_lang_js_,
  CountryPickervue_type_template_id_1c1e60fa_render,
  CountryPickervue_type_template_id_1c1e60fa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CountryPicker = (component.exports);
// CONCATENATED MODULE: ./src/welcome/countries.js
/* harmony default export */ var countries = ([{
  name: 'Afghanistan',
  code: 'af',
  locale: 'fa_AF'
}, {
  name: 'Albania',
  code: 'al',
  locale: 'sq_AL'
}, {
  name: 'Algeria',
  code: 'dz',
  locale: 'ar_DZ'
}, {
  name: 'American Samoa',
  code: 'as',
  locale: 'en_AS'
}, {
  name: 'Andorra',
  code: 'ad',
  locale: 'ca_AD'
}, {
  name: 'Angola',
  code: 'ao',
  locale: 'pt_AO'
}, {
  name: 'Anguilla',
  code: 'ai',
  locale: 'en_AI'
}, {
  name: 'Antigua and Barbuda',
  code: 'ag',
  locale: 'en_AG'
}, {
  name: 'Argentina',
  code: 'ar',
  locale: 'es_AR'
}, {
  name: 'Armenia',
  code: 'am',
  locale: 'hy_AM'
}, {
  name: 'Aruba',
  code: 'aw',
  locale: 'nl_AW'
}, {
  name: 'Australia',
  code: 'au',
  locale: 'en_AU'
}, {
  name: 'Austria',
  code: 'at',
  locale: 'de_AT'
}, {
  name: 'Azerbaijan',
  code: 'az',
  locale: 'az_AZ'
}, {
  name: 'Bahamas',
  code: 'bs',
  locale: 'en_BS'
}, {
  name: 'Bahrain',
  code: 'bh',
  locale: 'ar_BH'
}, {
  name: 'Bangladesh',
  code: 'bd',
  locale: 'bn_BD'
}, {
  name: 'Barbados',
  code: 'bb',
  locale: 'en_BB'
}, {
  name: 'Belarus',
  code: 'by',
  locale: 'be_BY'
}, {
  name: 'Belgium',
  code: 'be',
  locale: 'nl_BE'
}, {
  name: 'Belize',
  code: 'bz',
  locale: 'en_BZ'
}, {
  name: 'Benin',
  code: 'bj',
  locale: 'fr_BJ'
}, {
  name: 'Bermuda',
  code: 'bm',
  locale: 'en_BM'
}, {
  name: 'Bhutan',
  code: 'bt',
  locale: 'dz_BT'
}, {
  name: 'Bolivia',
  code: 'bo',
  locale: 'es_BO'
}, {
  name: 'Bonaire',
  code: 'bq',
  locale: 'NL-BQ1'
}, {
  name: 'Bosnia and Herzegovina',
  code: 'ba',
  locale: 'bs_BA'
}, {
  name: 'Botswana',
  code: 'bw',
  locale: 'en_BW'
}, {
  name: 'Brazil',
  code: 'br',
  locale: 'pt_BR'
}, {
  name: 'British Indian Ocean Territory',
  code: 'io',
  locale: 'en_IO'
}, {
  name: 'British Virgin Islands',
  code: 'vg',
  locale: 'en_VG'
}, {
  name: 'Brunei',
  code: 'bn',
  locale: 'ms_BN'
}, {
  name: 'Bulgaria',
  code: 'bg',
  locale: 'bg_BG'
}, {
  name: 'Burkina Faso',
  code: 'bf',
  locale: 'fr_BF'
}, {
  name: 'Burundi',
  code: 'bi',
  locale: 'fr_BI'
}, {
  name: 'Cabo Verde',
  code: 'cv',
  locale: 'pt_CV'
}, {
  name: 'Cambodia',
  code: 'kh',
  locale: 'km_KH'
}, {
  name: 'Cameroon',
  code: 'cm',
  locale: 'en_CM'
}, {
  name: 'Canada',
  code: 'ca',
  locale: 'en_CA'
}, {
  name: 'Cayman Islands',
  code: 'ky',
  locale: 'en_KY'
}, {
  name: 'Central African Republic',
  code: 'cf',
  locale: 'fr_CF'
}, {
  name: 'Chad',
  code: 'td',
  locale: 'fr_TD'
}, {
  name: 'Chile',
  code: 'cl',
  locale: 'es_CL'
}, {
  name: 'China',
  code: 'cn',
  locale: 'zh_CN'
}, {
  name: 'Christmas Island',
  code: 'cx',
  locale: 'en_CX'
}, {
  name: 'Cocos [Keeling] Islands',
  code: 'cc',
  locale: 'ms_CC'
}, {
  name: 'Colombia',
  code: 'co',
  locale: 'es_CO'
}, {
  name: 'Comoros',
  code: 'km',
  locale: 'ar_KM'
}, {
  name: 'Cook Islands',
  code: 'ck',
  locale: 'en_CK'
}, {
  name: 'Costa Rica',
  code: 'cr',
  locale: 'es_CR'
}, {
  name: 'Croatia',
  code: 'hr',
  locale: 'hr_HR'
}, {
  name: 'Cuba',
  code: 'cu',
  locale: 'es_CU'
}, {
  name: 'Curacao',
  code: 'cw',
  locale: 'nl_CW'
}, {
  name: 'Cyprus',
  code: 'cy',
  locale: 'el_CY'
}, {
  name: 'Czech Republic',
  code: 'cz',
  locale: 'cs_CZ'
}, {
  name: 'Democratic Republic of the Congo',
  code: 'cd',
  locale: 'fr_CD'
}, {
  name: 'Denmark',
  code: 'dk',
  locale: 'da_DK'
}, {
  name: 'Djibouti',
  code: 'dj',
  locale: 'fr_DJ'
}, {
  name: 'Dominica',
  code: 'dm',
  locale: 'en_DM'
}, {
  name: 'Dominican Republic',
  code: 'do',
  locale: 'es_DO'
}, {
  name: 'Ecuador',
  code: 'ec',
  locale: 'es_EC'
}, {
  name: 'Egypt',
  code: 'eg',
  locale: 'ar_EG'
}, {
  name: 'El Salvador',
  code: 'sv',
  locale: 'es_SV'
}, {
  name: 'Equatorial Guinea',
  code: 'gq',
  locale: 'es_GQ'
}, {
  name: 'Eritrea',
  code: 'er',
  locale: 'aa_ER'
}, {
  name: 'Estonia',
  code: 'ee',
  locale: 'et_EE'
}, {
  name: 'Eswatini',
  code: 'sz',
  locale: 'en_SZ'
}, {
  name: 'Ethiopia',
  code: 'et',
  locale: 'am_ET'
}, {
  name: 'Falkland Islands',
  code: 'fk',
  locale: 'en_FK'
}, {
  name: 'Faroe Islands',
  code: 'fo',
  locale: 'fo_FO'
}, {
  name: 'Fiji',
  code: 'fj',
  locale: 'en_FJ'
}, {
  name: 'Finland',
  code: 'fi',
  locale: 'fi_FI'
}, {
  name: 'France',
  code: 'fr',
  locale: 'fr_FR'
}, {
  name: 'French Guiana',
  code: 'gf',
  locale: 'fr_GF'
}, {
  name: 'French Polynesia',
  code: 'pf',
  locale: 'fr_PF'
}, {
  name: 'French Southern Territories',
  code: 'tf',
  locale: 'fr_TF'
}, {
  name: 'Gabon',
  code: 'ga',
  locale: 'fr_GA'
}, {
  name: 'Gambia',
  code: 'gm',
  locale: 'en_GM'
}, {
  name: 'Georgia',
  code: 'ge',
  locale: 'ka_GE'
}, {
  name: 'Germany',
  code: 'de',
  locale: 'de_DE'
}, {
  name: 'Ghana',
  code: 'gh',
  locale: 'en_GH'
}, {
  name: 'Gibraltar',
  code: 'gi',
  locale: 'en_GI'
}, {
  name: 'Greece',
  code: 'gr',
  locale: 'el_GR'
}, {
  name: 'Greenland',
  code: 'gl',
  locale: 'kl_GL'
}, {
  name: 'Grenada',
  code: 'gd',
  locale: 'en_GD'
}, {
  name: 'Guadeloupe',
  code: 'gp',
  locale: 'fr_GP'
}, {
  name: 'Guam',
  code: 'gu',
  locale: 'en_GU'
}, {
  name: 'Guatemala',
  code: 'gt',
  locale: 'es_GT'
}, {
  name: 'Guernsey',
  code: 'gg',
  locale: 'en_GG'
}, {
  name: 'Guinea',
  code: 'gn',
  locale: 'fr_GN'
}, {
  name: 'Guinea-Bissau',
  code: 'gw',
  locale: 'pt_GW'
}, {
  name: 'Guyana',
  code: 'gy',
  locale: 'en_GY'
}, {
  name: 'Haiti',
  code: 'ht',
  locale: 'ht_HT'
}, {
  name: 'Heard Island and McDonald Islands',
  code: 'hm',
  locale: 'hm_HM'
}, {
  name: 'Honduras',
  code: 'hn',
  locale: 'es_HN'
}, {
  name: 'Hong Kong',
  code: 'hk',
  locale: 'zh_HK'
}, {
  name: 'Hungary',
  code: 'hu',
  locale: 'hu_HU'
}, {
  name: 'Iceland',
  code: 'is',
  locale: 'is_IS'
}, {
  name: 'India',
  code: 'in',
  locale: 'en_IN'
}, {
  name: 'Indonesia',
  code: 'id',
  locale: 'id_ID'
}, {
  name: 'Iran',
  code: 'ir',
  locale: 'fa_IR'
}, {
  name: 'Iraq',
  code: 'iq',
  locale: 'ar_IQ'
}, {
  name: 'Ireland',
  code: 'ie',
  locale: 'en_IE'
}, {
  name: 'Isle of Man',
  code: 'im',
  locale: 'en_IM'
}, {
  name: 'Israel',
  code: 'il',
  locale: 'he_IL'
}, {
  name: 'Italy',
  code: 'it',
  locale: 'it_IT'
}, {
  name: 'Ivory Coast',
  code: 'ci',
  locale: 'fr_CI'
}, {
  name: 'Jamaica',
  code: 'jm',
  locale: 'en_JM'
}, {
  name: 'Japan',
  code: 'jp',
  locale: 'ja_JP'
}, {
  name: 'Jersey',
  code: 'je',
  locale: 'en_JE'
}, {
  name: 'Jordan',
  code: 'jo',
  locale: 'ar_JO'
}, {
  name: 'Kazakhstan',
  code: 'kz',
  locale: 'kk_KZ'
}, {
  name: 'Kenya',
  code: 'ke',
  locale: 'en_KE'
}, {
  name: 'Kiribati',
  code: 'ki',
  locale: 'en_KI'
}, {
  name: 'Kosovo',
  code: 'xk',
  locale: 'sq_XK'
}, {
  name: 'Kuwait',
  code: 'kw',
  locale: 'ar_KW'
}, {
  name: 'Kyrgyzstan',
  code: 'kg',
  locale: 'ky_KG'
}, {
  name: 'Laos',
  code: 'la',
  locale: 'lo_LA'
}, {
  name: 'Latvia',
  code: 'lv',
  locale: 'lv_LV'
}, {
  name: 'Lebanon',
  code: 'lb',
  locale: 'ar_LB'
}, {
  name: 'Lesotho',
  code: 'ls',
  locale: 'en_LS'
}, {
  name: 'Liberia',
  code: 'lr',
  locale: 'en_LR'
}, {
  name: 'Libya',
  code: 'ly',
  locale: 'ar_LY'
}, {
  name: 'Liechtenstein',
  code: 'li',
  locale: 'de_LI'
}, {
  name: 'Lithuania',
  code: 'lt',
  locale: 'lt_LT'
}, {
  name: 'Luxembourg',
  code: 'lu',
  locale: 'lb_LU'
}, {
  name: 'Macao',
  code: 'mo',
  locale: 'zh'
}, {
  name: 'Madagascar',
  code: 'mg',
  locale: 'fr_MG'
}, {
  name: 'Malawi',
  code: 'mw',
  locale: 'ny'
}, {
  name: 'Malaysia',
  code: 'my',
  locale: 'ms_MY'
}, {
  name: 'Maldives',
  code: 'mv',
  locale: 'dv'
}, {
  name: 'Mali',
  code: 'ml',
  locale: 'fr_ML'
}, {
  name: 'Malta',
  code: 'mt',
  locale: 'mt_MT'
}, {
  name: 'Marshall Islands',
  code: 'mh',
  locale: 'mh'
}, {
  name: 'Martinique',
  code: 'mq',
  locale: 'fr_MQ'
}, {
  name: 'Mauritania',
  code: 'mr',
  locale: 'ar_MR'
}, {
  name: 'Mauritius',
  code: 'mu',
  locale: 'en_MU'
}, {
  name: 'Mayotte',
  code: 'yt',
  locale: 'fr_YT'
}, {
  name: 'Mexico',
  code: 'mx',
  locale: 'es_MX'
}, {
  name: 'Micronesia',
  code: 'fm',
  locale: 'en_FM'
}, {
  name: 'Moldova',
  code: 'md',
  locale: 'ro_MD'
}, {
  name: 'Monaco',
  code: 'mc',
  locale: 'fr_MC'
}, {
  name: 'Mongolia',
  code: 'mn',
  locale: 'mn_MN'
}, {
  name: 'Montenegro',
  code: 'me',
  locale: 'sr_ME'
}, {
  name: 'Montserrat',
  code: 'ms',
  locale: 'en_MS'
}, {
  name: 'Morocco',
  code: 'ma',
  locale: 'ar_MA'
}, {
  name: 'Mozambique',
  code: 'mz',
  locale: 'pt_MZ'
}, {
  name: 'Myanmar [Burma]',
  code: 'mm',
  locale: 'my'
}, {
  name: 'Namibia',
  code: 'na',
  locale: 'en_NA'
}, {
  name: 'Nauru',
  code: 'nr',
  locale: 'na'
}, {
  name: 'Nepal',
  code: 'np',
  locale: 'ne_NP'
}, {
  name: 'Netherlands',
  code: 'nl',
  locale: 'nl_NL'
}, {
  name: 'New Caledonia',
  code: 'nc',
  locale: 'fr_NC'
}, {
  name: 'New Zealand',
  code: 'nz',
  locale: 'en_NZ'
}, {
  name: 'Nicaragua',
  code: 'ni',
  locale: 'es_NI'
}, {
  name: 'Niger',
  code: 'ne',
  locale: 'fr_NE'
}, {
  name: 'Nigeria',
  code: 'ng',
  locale: 'en_NG'
}, {
  name: 'Niue',
  code: 'nu',
  locale: 'niu'
}, {
  name: 'Norfolk Island',
  code: 'nf',
  locale: 'en_NF'
}, {
  name: 'North Korea',
  code: 'kp',
  locale: 'ko_KP'
}, {
  name: 'North Macedonia',
  code: 'mk',
  locale: 'mk_MK'
}, {
  name: 'Northern Mariana Islands',
  code: 'mp',
  locale: 'fil'
}, {
  name: 'Norway',
  code: 'no',
  locale: 'no_NO'
}, {
  name: 'Oman',
  code: 'om',
  locale: 'ar_OM'
}, {
  name: 'Pakistan',
  code: 'pk',
  locale: 'ur_PK'
}, {
  name: 'Palau',
  code: 'pw',
  locale: 'pau'
}, {
  name: 'Palestine',
  code: 'ps',
  locale: 'ar_PS'
}, {
  name: 'Panama',
  code: 'pa',
  locale: 'es_PA'
}, {
  name: 'Papua New Guinea',
  code: 'pg',
  locale: 'en_PG'
}, {
  name: 'Paraguay',
  code: 'py',
  locale: 'es_PY'
}, {
  name: 'Peru',
  code: 'pe',
  locale: 'es_PE'
}, {
  name: 'Philippines',
  code: 'ph',
  locale: 'tl_PH'
}, {
  name: 'Pitcairn Islands',
  code: 'pn',
  locale: 'en_PN'
}, {
  name: 'Poland',
  code: 'pl',
  locale: 'pl_PL'
}, {
  name: 'Portugal',
  code: 'pt',
  locale: 'pt_PT'
}, {
  name: 'Puerto Rico',
  code: 'pr',
  locale: 'en_PR'
}, {
  name: 'Qatar',
  code: 'qa',
  locale: 'ar_QA'
}, {
  name: 'Republic of the Congo',
  code: 'cg',
  locale: 'fr_CG'
}, {
  name: 'Romania',
  code: 'ro',
  locale: 'ro_RO'
}, {
  name: 'Russia',
  code: 'ru',
  locale: 'ru_RU'
}, {
  name: 'Rwanda',
  code: 'rw',
  locale: 'rw_RW'
}, {
  name: 'Réunion',
  code: 're',
  locale: 'fr_RE'
}, {
  name: 'Saint Barthélemy',
  code: 'bl',
  locale: 'fr_BL'
}, {
  name: 'Saint Helena',
  code: 'sh',
  locale: 'en_SH'
}, {
  name: 'Saint Kitts and Nevis',
  code: 'kn',
  locale: 'en_KN'
}, {
  name: 'Saint Lucia',
  code: 'lc',
  locale: 'en_LC'
}, {
  name: 'Saint Martin',
  code: 'mf',
  locale: 'fr_MF'
}, {
  name: 'Saint Pierre and Miquelon',
  code: 'pm',
  locale: 'fr_PM'
}, {
  name: 'Saint Vincent and the Grenadines',
  code: 'vc',
  locale: 'en_VC'
}, {
  name: 'Samoa',
  code: 'ws',
  locale: 'sm_WS'
}, {
  name: 'San Marino',
  code: 'sm',
  locale: 'it_SM'
}, {
  name: 'Saudi Arabia',
  code: 'sa',
  locale: 'ar_SA'
}, {
  name: 'Senegal',
  code: 'sn',
  locale: 'fr_SN'
}, {
  name: 'Serbia',
  code: 'rs',
  locale: 'sr_RS'
}, {
  name: 'Seychelles',
  code: 'sc',
  locale: 'en_SC'
}, {
  name: 'Sierra Leone',
  code: 'sl',
  locale: 'en_SL'
}, {
  name: 'Singapore',
  code: 'sg',
  locale: 'cmn'
}, {
  name: 'Sint Maarten',
  code: 'sx',
  locale: 'nl_SX'
}, {
  name: 'Slovakia',
  code: 'sk',
  locale: 'sk_SK'
}, {
  name: 'Slovenia',
  code: 'si',
  locale: 'sl_SI'
}, {
  name: 'Solomon Islands',
  code: 'sb',
  locale: 'en_SB'
}, {
  name: 'Somalia',
  code: 'so',
  locale: 'so_SO'
}, {
  name: 'South Africa',
  code: 'za',
  locale: 'en_ZA'
}, {
  name: 'South Georgia and the South Sandwich Islands',
  code: 'gs',
  locale: 'en_GS'
}, {
  name: 'South Korea',
  code: 'kr',
  locale: 'ko_KR'
}, {
  name: 'South Sudan',
  code: 'ss',
  locale: 'en_SS'
}, {
  name: 'Spain',
  code: 'es',
  locale: 'es_ES'
}, {
  name: 'Sri Lanka',
  code: 'lk',
  locale: 'si_LK'
}, {
  name: 'Sudan',
  code: 'sd',
  locale: 'ar_SD'
}, {
  name: 'Suriname',
  code: 'sr',
  locale: 'nl_SR'
}, {
  name: 'Svalbard and Jan Mayen',
  code: 'sj',
  locale: 'no_SJ'
}, {
  name: 'Sweden',
  code: 'se',
  locale: 'sv_SE'
}, {
  name: 'Switzerland',
  code: 'ch',
  locale: 'de_CH'
}, {
  name: 'Syria',
  code: 'sy',
  locale: 'ar_SY'
}, {
  name: 'São Tomé and Príncipe',
  code: 'st',
  locale: 'pt_ST'
}, {
  name: 'Taiwan',
  code: 'tw',
  locale: 'zh_TW'
}, {
  name: 'Tajikistan',
  code: 'tj',
  locale: 'tg_TJ'
}, {
  name: 'Tanzania',
  code: 'tz',
  locale: 'sw_TZ'
}, {
  name: 'Thailand',
  code: 'th',
  locale: 'th_TH'
}, {
  name: 'Timor-Leste',
  code: 'tl',
  locale: 'tet'
}, {
  name: 'Togo',
  code: 'tg',
  locale: 'fr_TG'
}, {
  name: 'Tokelau',
  code: 'tk',
  locale: 'tkl'
}, {
  name: 'Tonga',
  code: 'to',
  locale: 'to_TO'
}, {
  name: 'Trinidad and Tobago',
  code: 'tt',
  locale: 'en_TT'
}, {
  name: 'Tunisia',
  code: 'tn',
  locale: 'ar_TN'
}, {
  name: 'Turkey',
  code: 'tr',
  locale: 'tr_TR'
}, {
  name: 'Turkmenistan',
  code: 'tm',
  locale: 'tk_TM'
}, {
  name: 'Turks and Caicos Islands',
  code: 'tc',
  locale: 'en_TC'
}, {
  name: 'Tuvalu',
  code: 'tv',
  locale: 'tvl'
}, {
  name: 'U.S. Minor Outlying Islands',
  code: 'um',
  locale: 'en_UM'
}, {
  name: 'U.S. Virgin Islands',
  code: 'vi',
  locale: 'en_VI'
}, {
  name: 'Uganda',
  code: 'ug',
  locale: 'en_UG'
}, {
  name: 'Ukraine',
  code: 'ua',
  locale: 'uk_UA'
}, {
  name: 'United Arab Emirates',
  code: 'ae',
  locale: 'ar_AE'
}, {
  name: 'United Kingdom',
  code: 'gb',
  locale: 'en_GB'
}, {
  name: 'United States of America',
  code: 'us',
  locale: 'en_US'
}, {
  name: 'Uruguay',
  code: 'uy',
  locale: 'es_UY'
}, {
  name: 'Uzbekistan',
  code: 'uz',
  locale: 'uz_UZ'
}, {
  name: 'Vanuatu',
  code: 'vu',
  locale: 'bi'
}, {
  name: 'Vatican City',
  code: 'va',
  locale: 'la_VA'
}, {
  name: 'Venezuela',
  code: 've',
  locale: 'es_VE'
}, {
  name: 'Vietnam',
  code: 'vn',
  locale: 'vi_VN'
}, {
  name: 'Wallis and Futuna',
  code: 'wf',
  locale: 'wls'
}, {
  name: 'Yemen',
  code: 'ye',
  locale: 'ar_YE'
}, {
  name: 'Zambia',
  code: 'zm',
  locale: 'en_ZM'
}, {
  name: 'Zimbabwe',
  code: 'zw',
  locale: 'en_ZW'
}, {
  name: 'Åland',
  code: 'ax',
  locale: 'sv_AX'
}]);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/welcome/App.vue?vue&type=script&lang=js&












var MAX_STEP = 6;
var ACCOUNT_STEP = 1;
var NAME_STEP = 2;
var EMAIL_STEP = 5;
var SM_MESSAGE_SHOW_WELCOME = 'showWelcomePage';
var SM_MESSAGE_IMPORT = 'importBookmarks';
var EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'WelcomeApp',
  components: {
    CountryPicker: CountryPicker
  },
  data: function data() {
    return {
      step: 0,
      name: '',
      email: '',
      country: '',
      noUser: true,
      emailFieldDisabled: false,
      isCountryPickerVisible: false,
      importInProgress: null,
      importId: 0,
      maxStepNumber: MAX_STEP,
      isLocked: false,
      responder: null,
      getUser: null
    };
  },
  computed: {
    selectedValue: {
      get: function get() {
        return this.country;
      },
      set: function set(newValue) {
        this.country = newValue;
        this.hideCountryPicker();
      }
    },
    countryOptions: function countryOptions() {
      return countries.map(function (c) {
        return {
          id: c.code,
          value: c.code,
          label: c.name,
          locale: c.locale
        };
      });
    },
    selectedCountry: function selectedCountry() {
      var _this = this;

      return this.countryOptions.find(function (c) {
        return c.value.toLowerCase() === _this.country.toLowerCase();
      });
    },
    hideNext: function hideNext() {
      if (this.step !== EMAIL_STEP) return false;
      if (this.email && EMAIL_REGEX.test(this.email)) return false;
      return true;
    }
  },
  watch: {
    country: 'performCountrySaving',
    step: function step(newStep) {
      var _this2 = this;

      this.hideCountryPicker();

      if (newStep === NAME_STEP && this.$refs && this.$refs.nameInput) {
        setTimeout(function () {
          _this2.$refs.nameInput.focus();
        }, 1000);
      }
    }
  },
  created: function created() {
    var _this3 = this;

    this.getUser = new Promise(function (resolve, reject) {
      _this3.$startme.getUser(true
      /* Force check */
      ).then(function (user) {
        _this3.noUser = false; // Already got a user.

        resolve(user);
      }).catch(function (err) {
        _this3.$startme.createAnonymousUser().then(function (user) {
          // Force cache refresh
          _this3.$startme.getUser(true
          /* Force */
          );

          resolve(user);
        }).catch(reject);
      });
    });
    this.getUser.then(function (user) {
      // Reflect current user in fields
      _this3.updateUserFields(user);

      _this3.initCountries(user);
    });
    chrome.runtime.onMessage.addListener(function (request, sender, respond) {
      switch (request.message) {
        case SM_MESSAGE_SHOW_WELCOME:
          _this3.responder = respond;
          return true;
        // Keep response channel open
      }
    });
  },
  methods: {
    performDoneAction: function performDoneAction() {
      this.done();
    },
    performCountrySaving: function performCountrySaving() {
      if (this.selectedCountry) this.saveCountry(this.selectedCountry.locale);
    },
    performImportAction: function performImportAction() {
      var _this4 = this;

      chrome.permissions.contains({
        permissions: ['bookmarks']
      }).then(function (granted) {
        if (granted) {
          return Promise.resolve(true);
        } else {
          return chrome.permissions.request({
            permissions: ['bookmarks']
          });
        }
      }).then(function (granted) {
        if (granted) _this4.doImport().then(_this4.showNextStep);else _this4.showNextStep();
      }).catch(this.showNextStep);
    },
    saveEmail: function saveEmail() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        _this5.lock();

        _this5.getUser.then(function (user) {
          // Clear validity
          if (_this5.$refs.emailField) {
            _this5.$refs.emailField.setCustomValidity('');

            _this5.$refs.emailField.parentNode.removeAttribute('data-error');
          } // See if the email needs to be saved at all


          var email = _this5.email.trim();

          if (!email || email == user.email) {
            _this5.unlock();

            return resolve();
          } // Update user


          _this5.$startme.updateUser({
            email: email
          }).then(function (user) {
            _this5.updateUser(user);

            _this5.unlock();

            resolve();
          }).catch(function (errors) {
            _this5.unlock();

            if (errors.email) {
              // Something's wrong with the email field. Compose a message
              var message = errors.email.join("\n"); // Set a validation pattern to the field that will invalidate the current email

              var escapedEmail = email.replace(/\W/, function (match) {
                return '\\' + match;
              });

              if (_this5.$refs.emailField) {
                _this5.$refs.emailField.setAttribute('pattern', "^(?!".concat(escapedEmail, ").+$"));

                _this5.$refs.emailField.select(); // Tell parent element about the error


                _this5.$refs.emailField.parentNode.setAttribute('data-error', message);
              }
            }

            return reject('reject from this.$startme.updateUser');
          });
        }).catch(function (err) {});
      });
    },
    doImport: function doImport() {
      var _this6 = this;

      if (!this.importInProgress) {
        this.importInProgress = new Promise(function (resolve, reject) {
          // Request import (make sure there is a user available for this)
          _this6.getUser.then(function () {
            chrome.runtime.sendMessage({
              message: SM_MESSAGE_IMPORT,
              quiet: true
            }).then(function (response) {
              _this6.importId = parseInt(response);
              resolve();
            });
          }).catch(reject);
        });
        return this.$startme.timeout(2000);
      }

      return this.importInProgress;
    },
    saveName: function saveName() {
      var _this7 = this;

      return new Promise(function (resolve) {
        _this7.getUser.then(function (user) {
          var name = _this7.name.trim();

          if (name && name != user.name) {
            _this7.$startme.updateUser({
              name: name
            }).then(function (user) {
              return _this7.updateUser(user);
            });
          }
        });

        resolve();
      });
    },
    done: function done() {
      var _this8 = this;

      return new Promise(function (resolve, reject) {
        _this8.getUser.then(function (user) {
          var isNewUser = user.dummy_email && user.is_anonymous;

          if (_this8.responder) {
            _this8.responder({
              isNewUser: isNewUser
            });

            window.close();
          } else {
            location.href = _this8.$startme.apiURL('/users/new_extension_installed');
          }

          resolve();
        }).catch(reject);
      });
    },
    lock: function lock() {
      this.isLocked = true;
    },
    unlock: function unlock() {
      this.isLocked = false;
    },
    showCountryPicker: function showCountryPicker() {
      this.isCountryPickerVisible = true;
    },
    hideCountryPicker: function hideCountryPicker() {
      this.isCountryPickerVisible = false;
    },
    showNextStep: function showNextStep() {
      if (this.step === NAME_STEP) {
        this.saveName();
        this.activateNextStep();
      } else if (this.step === EMAIL_STEP) {
        this.saveEmail().then(this.activateNextStep).catch(function (err) {});
      } else {
        this.activateNextStep();
      }
    },
    activateNextStep: function activateNextStep() {
      var newStep = this.step + 1;
      if (newStep === ACCOUNT_STEP && !this.noUser) newStep += 1;
      this.showStepN(newStep);
    },
    showPrevStep: function showPrevStep() {
      var newStep = this.step - 1;
      if (newStep === ACCOUNT_STEP && !this.noUser) newStep -= 1;
      this.showStepN(newStep);
    },
    showStepN: function showStepN(newStep) {
      if (newStep <= MAX_STEP && newStep >= 0) this.step = newStep;
    },
    goToSignIn: function goToSignIn() {
      if (this.responder) {
        this.responder({
          isNewUser: false,
          openSignIn: true
        });
        window.close();
      } else {
        location.href = this.$startme.apiURL('/users/sign_in');
      }
    },
    updateUserFields: function updateUserFields(user) {
      if (user.is_anonymous && (user.raw_name || user.name) === this.$t('anonymous_user').message) this.name = '';else if (user.raw_name || user.name) this.name = (user.raw_name || user.name).toString().trim();

      if (!user.dummy_email) {
        this.email = user.email.toString().trim();
        this.emailFieldDisabled = true; // Email address can only be edited when not set
      }

      if (user.country) this.country = user.country;
    },
    initCountries: function initCountries(user) {
      var country = this.determineUserCountry(user);
      if (country) this.hideCountryPicker();else this.showCountryPicker(); // If no country is selected yet, save it immediatly

      if (user && !user.country) this.saveCountry(country.locale);
    },
    saveCountry: function saveCountry(locale) {
      var _this9 = this;

      this.lock();
      var country = this.findCountryByLocale(locale, true);
      return new Promise(function (resolve, reject) {
        _this9.getUser.then(function (user) {
          // See if the country needs to be saved at all
          if (country.code === user.country) {
            _this9.unlock();

            return resolve();
          }

          _this9.$startme.updateUser({
            country: country.code
          }).then(function (user) {
            _this9.updateUser(user);

            _this9.unlock();

            resolve();
          }).catch(function (errors) {
            _this9.unlock();

            if (_this9.$refs.countryControls) _this9.$refs.countryControls.dataset.error = errors.country.join("\n");
          });
        });
      });
    },
    updateUser: function updateUser(user) {
      this.getUser = Promise.resolve(user);
      this.getUser.then(this.updateUserFields);
    },
    determineUserCountry: function determineUserCountry(user) {
      var browserLocale = this.$startme.getLocale(); // Determine the country of the user

      if (user && user.country) {
        var country = this.findCountryByCountryCode(user.country); // Only use it when the country is valid

        if (country && country.code) return country;
      }

      return this.findCountryByLocale(browserLocale, true);
    },
    findCountryByCountryCode: function findCountryByCountryCode(countryCode) {
      var country = countries.find(function (country) {
        return country.code.toLowerCase() === countryCode.toLowerCase();
      });
      return country;
    },
    findCountryByLocale: function findCountryByLocale(locale) {
      var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var country = countries.find(function (country) {
        return country.locale.toLowerCase() === locale.toLowerCase();
      });
      if (!country && fallback) return this.findCountryByLocale(this.$startme.USER_FALLBACK_LOCALE, false);
      return country;
    },
    setCountryValue: function setCountryValue(value) {
      this.country = value;
      this.hideCountryPicker();
    }
  }
});
// CONCATENATED MODULE: ./src/welcome/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var welcome_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/welcome/App.vue?vue&type=style&index=0&lang=scss&
var Appvue_type_style_index_0_lang_scss_ = __webpack_require__("c97c");

// CONCATENATED MODULE: ./src/welcome/App.vue






/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  welcome_Appvue_type_script_lang_js_,
  Appvue_type_template_id_74028317_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// EXTERNAL MODULE: ./src/i18n/index.js + 1 modules
var i18n = __webpack_require__("12cb");

// EXTERNAL MODULE: ./Startme.js
var Startme = __webpack_require__("0cb6");

// CONCATENATED MODULE: ./src/welcome/main.js








vue_runtime_esm["a" /* default */].prototype.$startme = Startme["a" /* default */];
/* eslint-disable no-new */

new vue_runtime_esm["a" /* default */]({
  el: '#app',
  i18n: i18n["a" /* i18n */],
  render: function render(h) {
    return h(App);
  }
});

/***/ }),

/***/ "fe8f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("884c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ });
//# sourceMappingURL=welcome.836f1d84.js.map