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
/******/ 		"popup": 0
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
/******/ 	deferredModules.push([1,"chunk-vendors","chunk-common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "0465":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "07f4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PremiumMark_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("af4d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PremiumMark_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PremiumMark_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "083e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0a3d":
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9986ca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/popup/App.vue?vue&type=template&id=2269eeb2&
var Appvue_type_template_id_2269eeb2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Bookmarklet',_vm._b({},'Bookmarklet',{ propUrl: _vm.propUrl, propTitle: _vm.propTitle, isOptionsScreen: _vm.isOptionsScreen, hideOpenTabs: _vm.hideOpenTabs },false))}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/popup/App.vue?vue&type=template&id=2269eeb2&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__("00b4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__("2b3d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__("9861");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9986ca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddBookmarkPage.vue?vue&type=template&id=7013b504&
var AddBookmarkPagevue_type_template_id_7013b504_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"add-bookmark-page"},[_c('div',{staticClass:"add-bookmark-page__dialog"},[_c('div',{staticClass:"add-bookmark-page__wrapper"},[(_vm.isLoading)?_c('div',{staticClass:"add-bookmark-page__preloader"},[_c('div',{staticClass:"add-bookmark-page__box"},[_c('Loader',{attrs:{"blocking":""}})],1)]):_vm._e(),_c('div',{staticClass:"add-bookmark-page__context",class:{ 'add-bookmark-page__context_visible': _vm.isUserMenuVisible },on:{"click":_vm.hideUserMenu}},[_c('div',{staticClass:"add-bookmark-page__context-container"},[_c('div',{staticClass:"add-bookmark-page__context-wrapper"},[(_vm.getUserData)?_c('div',{staticClass:"add-bookmark-page__form-block"},[_c('div',{staticClass:"add-bookmark-page__user"},[_c('a',{staticClass:"add-bookmark-page__user-link",attrs:{"href":"https://start.me/users/edit","target":"_blank"}},[_c('span',{staticClass:"add-bookmark-page__info"},[_c('span',{staticClass:"add-bookmark-page__name-container"},[_c('span',{staticClass:"add-bookmark-page__name"},[_vm._v(_vm._s(_vm.getUserData.name))]),(_vm.getUserData.is_premium)?_c('span',{staticClass:"add-bookmark-page__upgrade"},[_c('PremiumMark',{attrs:{"label":_vm.$t('account_type_pro').message}})],1):_vm._e()]),_c('span',{staticClass:"add-bookmark-page__email"},[_vm._v(_vm._s(_vm.getUserData.email))])])])])]):_vm._e(),_c('div',{staticClass:"add-bookmark-page__context-box"},[_c('div',{staticClass:"add-bookmark-page__context-list"},[_c('a',{staticClass:"add-bookmark-page__context-item add-bookmark-page__context-item_paired_top add-bookmark-page__context-item__separated",attrs:{"href":"https://start.me/users/edit","target":"_blank"}},[_vm._v(_vm._s(_vm.$t('account_details').message))]),_c('a',{staticClass:"add-bookmark-page__context-item add-bookmark-page__context-item_paired_bottom",on:{"click":_vm.showHelpPage}},[_vm._v(_vm._s(_vm.$t('help_and_support').message))]),_c('a',{staticClass:"add-bookmark-page__context-item add-bookmark-page__context-item__separated",on:{"click":_vm.emitSignOut}},[_vm._v(_vm._s(_vm.$t('logout').message))])])])])])]),_c('transition',{attrs:{"name":"slide-left","in-out":""}},[(_vm.isSelectExpanded)?_c('div',{staticClass:"add-bookmark-page__aside add-bookmark-page__aside_middle"},[_c('div',{staticClass:"add-bookmark-page__container"},[_c('HeaderBar',{staticClass:"add-bookmark-page__header",attrs:{"is-aside":"","has-refresh-button":"","has-preferences-button":"","is-refreshing":_vm.isRefreshing,"profile-avatar":_vm.profileAvatar,"trail-string":_vm.$t('select_location').message},on:{"logoClicked":_vm.collapseSelect,"refresh":_vm.refreshPagesList,"openPreferences":_vm.openPreferencesEditing,"userButtonClicked":_vm.showUserMenu}}),_c('div',{staticClass:"add-bookmark-page__expanded"},[_c('SearchableSelect',{staticClass:"add-bookmark-page__dropdown",attrs:{"is-functional":"","is-mobile":_vm.$isMobile,"selected-value":_vm.selectedWidgetId,"options":_vm.pages,"max-height":_vm.dropdownHeight},on:{"set-value":_vm.setWidgetId,"deactivate":_vm.collapseSelect},model:{value:(_vm.filterString),callback:function ($$v) {_vm.filterString=$$v},expression:"filterString"}})],1)],1)]):_vm._e()]),_c('transition',{attrs:{"name":"slide-left","in-out":""}},[(_vm.isEditingPreferences)?_c('div',{staticClass:"add-bookmark-page__aside add-bookmark-page__aside_top"},[_c('div',{staticClass:"add-bookmark-page__container"},[_c('div',{staticClass:"add-bookmark-page__version"},[_vm._v("v.7.3")]),_c('HeaderBar',{staticClass:"add-bookmark-page__header",attrs:{"is-aside":"","has-tabs":"","has-help-button":"","is-options-screen":_vm.isOptionsScreen,"profile-avatar":_vm.profileAvatar,"trail-string":_vm.$t('preferences').message},on:{"logoClicked":_vm.closePreferencesEditing,"helpClicked":_vm.showHelpPage,"userButtonClicked":_vm.showUserMenu}},[_c('ul',{staticClass:"add-bookmark-page__tabs",attrs:{"slot":"tabs"},slot:"tabs"},_vm._l((_vm.settingsTabs),function(tab){return _c('li',{key:("settings_tab_" + (tab.id)),staticClass:"add-bookmark-page__tab add-bookmark-page__tab_settings",class:{ 'add-bookmark-page__tab_active': _vm.activeTabId === tab.id },on:{"click":function($event){$event.stopPropagation();return _vm.activateSettingsTab(tab.id)}}},[_vm._v(_vm._s(tab.label))])}),0)]),_c('div',{staticClass:"add-bookmark-page__form add-bookmark-page__form_flex"},[(_vm.isSettingsTabActive)?_c('div',{staticClass:"add-bookmark-page__form-block"},[_c('div',{staticClass:"add-bookmark-page__row add-bookmark-page__row_flex"},[_c('div',{staticClass:"add-bookmark-page__subtitle"},[_vm._v(_vm._s(_vm.$t('select_your_new_tab_page').message))]),_c('div',{staticClass:"add-bookmark-page__select-wrapper"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.homepageId),expression:"homepageId"}],staticClass:"add-bookmark-page__input add-bookmark-page__input_type_select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.homepageId=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[(_vm.homepageOptions.length)?_vm._l((_vm.homepageOptions),function(group){return _c('optgroup',{key:group.id,staticClass:"add-bookmark-page__optgroup",attrs:{"label":group.title}},_vm._l((group.pages),function(page){return _c('option',{key:page.id,staticClass:"add-bookmark-page__option",domProps:{"value":page.value}},[_vm._v(_vm._s(page.label))])}),0)}):_c('option',{staticClass:"add-bookmark-page__option",domProps:{"value":null}},[_vm._v(_vm._s(_vm.$t('default_page').message))])],2),_c('SvgStrokeIcon',{staticClass:"add-bookmark-page__control-icon add-bookmark-page__control-icon_type_select",attrs:{"icon":"chevron-down","options":{ size: 16 }}})],1)]),_c('div',{staticClass:"add-bookmark-page__row add-bookmark-page__row_flex"},[_c('Toggler',{staticClass:"add-bookmark-page__toggler",attrs:{"options":{
                      label: _vm.$t('autosave_in_inbox').message,
                      defaultColor: '',
                      isOpposite: true,
                      isDivided: false,
                    }},model:{value:(_vm.denyLinksAutosaving),callback:function ($$v) {_vm.denyLinksAutosaving=$$v},expression:"denyLinksAutosaving"}})],1),_c('div',{staticClass:"add-bookmark-page__row add-bookmark-page__row_flex"},[_c('div',{staticClass:"add-bookmark-page__subtitle"},[_vm._v(_vm._s(_vm.$t('import_browser_bookmarks').message))]),_c('a',{staticClass:"add-bookmark-page__button add-bookmark-page__button_small",on:{"click":function($event){$event.stopPropagation();return _vm.initImport.apply(null, arguments)}}},[_c('span',{staticClass:"add-bookmark-page__button-text"},[_vm._v(_vm._s(_vm.$t('import').message))])])]),_c('div',{staticClass:"add-bookmark-page__row add-bookmark-page__row_flex"},[_c('div',{staticClass:"add-bookmark-page__subtitle"},[_vm._v(_vm._s(_vm.$t('refresh_data').message))]),_c('a',{staticClass:"add-bookmark-page__button add-bookmark-page__button_small",on:{"click":function($event){$event.stopPropagation();return _vm.clearCache.apply(null, arguments)}}},[_c('span',{staticClass:"add-bookmark-page__button-text add-bookmark-page__button-text_constant",attrs:{"title":_vm.$t('clear_cache').message}},[(_vm.isClearingCache)?_c('span',{staticClass:"add-bookmark-page__button-icon-container"},[_c('SvgStrokeIcon',{staticClass:"add-bookmark-page__feather-icon add-bookmark-page__feather-icon_lowered add-bookmark-page__chevron_animated",attrs:{"icon":"refresh-cw","options":{ size: 14 }}})],1):[_vm._v(_vm._s(_vm.$t('clear_cache').message))]],2)])])]):(_vm.isShortcutsTabActive)?_c('div',{staticClass:"add-bookmark-page__form-block"},[_c('div',{staticClass:"add-bookmark-page__row add-bookmark-page__row_flex"},[_c('div',{staticClass:"add-bookmark-page__subtitle"},[_vm._v(_vm._s(_vm.$t('create_new_bookmark').message))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.browserActionShortcut),expression:"browserActionShortcut"}],staticClass:"add-bookmark-page__input add-bookmark-page__input_type_select add-bookmark-page__select-wrapper",attrs:{"type":"text","disabled":""},domProps:{"value":(_vm.browserActionShortcut)},on:{"input":function($event){if($event.target.composing){ return; }_vm.browserActionShortcut=$event.target.value}}}),_c('a',{staticClass:"add-bookmark-page__changer",on:{"click":function($event){$event.stopPropagation();return _vm.openChangeShortcuts.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.$t('change').message))])]),_c('div',{staticClass:"add-bookmark-page__row add-bookmark-page__row_flex"},[_c('div',{staticClass:"add-bookmark-page__subtitle"},[_vm._v(_vm._s(_vm.$t('open_startme_homepage').message))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.homepageShortcut),expression:"homepageShortcut"}],staticClass:"add-bookmark-page__input add-bookmark-page__input_type_select add-bookmark-page__select-wrapper",attrs:{"type":"text","disabled":""},domProps:{"value":(_vm.homepageShortcut)},on:{"input":function($event){if($event.target.composing){ return; }_vm.homepageShortcut=$event.target.value}}}),_c('a',{staticClass:"add-bookmark-page__changer",on:{"click":function($event){$event.stopPropagation();return _vm.openChangeShortcuts.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.$t('change').message))])]),_c('div',{staticClass:"add-bookmark-page__row add-bookmark-page__row_flex"},[_c('div',{staticClass:"add-bookmark-page__subtitle"},[_vm._v(_vm._s(_vm.$t('search_bookmarks_from_address_bar').message))]),_c('a',{staticClass:"add-bookmark-page__input add-bookmark-page__input_stub add-bookmark-page__select-wrapper",attrs:{"href":"https://support.start.me/hc/en-us/articles/360017858020-Search-bookmarks-from-address-bar","target":"_blank"}},[_c('span',{staticClass:"add-bookmark-page__input-text"},[_vm._v(_vm._s(_vm.$t('learn_how_this_works').message))]),_c('SvgStrokeIcon',{staticClass:"add-bookmark-page__feather-icon add-bookmark-page__feather-icon_bottom",attrs:{"icon":"external-link","options":{ size: 14, strokeWidth: 1 }}})],1)])]):_vm._e()])],1)]):_vm._e()]),_c('div',{key:"main_screen",staticClass:"add-bookmark-page__container"},[_c('HeaderBar',{staticClass:"add-bookmark-page__header",attrs:{"has-main-logo":"","has-preferences-button":"","profile-avatar":_vm.profileAvatar},on:{"openPreferences":_vm.openPreferencesEditing,"userButtonClicked":_vm.showUserMenu}},[(_vm.linkExists && _vm.linkExists.length)?_c('a',{staticClass:"add-bookmark-page__warning",attrs:{"target":"_blank","href":_vm.existedLinkWarningHref,"title":_vm.existedLinkWarningTitle}},[_c('SvgStrokeIcon',{staticClass:"add-bookmark-page__warning-icon",attrs:{"icon":"alert-circle","options":{ size: 16 }}}),_c('span',{staticClass:"add-bookmark-page__warning-text"},[_vm._v(" "+_vm._s(_vm.$t('you_already_saved_this_link').message)+" "),(_vm.linkExists.length > 1)?[_vm._v(" ("+_vm._s(_vm.linkExists.length)+") ")]:_vm._e()],2)],1):_vm._e()]),_c('form',{staticClass:"add-bookmark-page__form",class:{ 'add-bookmark-page__form_lowered': _vm.autosavedLinkRemoved || _vm.denyLinksAutosaving },on:{"submit":function($event){$event.preventDefault();return _vm.sendChanges.apply(null, arguments)}}},[_c('div',{staticClass:"add-bookmark-page__row"},[_c('div',{staticClass:"add-bookmark-page__bookmark-container"},[_c('div',{staticClass:"add-bookmark-page__image-container"},[_c('img',{staticClass:"add-bookmark-page__bookmark-favicon",attrs:{"alt":"","src":_vm.getBookmarkIcon(),"onerror":"this.src='https://f.start.me/fa/bookmark';this.onerror='';"}})]),_c('div',{staticClass:"add-bookmark-page__bookmark-info",class:{ 'add-bookmark-page__bookmark-info_hoverable': !_vm.isTitleEditing }},[_c('div',{staticClass:"add-bookmark-page__title-container"},[(_vm.isTitleEditing)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.title),expression:"title"}],ref:"titleInput",staticClass:"add-bookmark-page__title-input",attrs:{"type":"text"},domProps:{"value":(_vm.title)},on:{"blur":_vm.closeTitleEditing,"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();return _vm.closeTitleEditing.apply(null, arguments)},"input":function($event){if($event.target.composing){ return; }_vm.title=$event.target.value}}}):(_vm.title.trim().length)?_c('span',{staticClass:"add-bookmark-page__title-wrapper",on:{"click":function($event){$event.stopPropagation();return _vm.editTitle.apply(null, arguments)}}},[_c('span',{staticClass:"add-bookmark-page__title"},[_vm._v(_vm._s(_vm.title))]),_c('span',{staticClass:"add-bookmark-page__title-button"},[_c('SvgStrokeIcon',{staticClass:"add-bookmark-page__feather-icon add-bookmark-page__feather-icon_lowered",attrs:{"icon":"edit-3"}})],1)]):_c('a',{staticClass:"add-bookmark-page__title-link",on:{"click":function($event){$event.stopPropagation();return _vm.editTitle.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.$t('add_title').message))])])])])]),(!(_vm.isNewWidgetOptionSelected || _vm.isNewGroupOptionSelected))?_c('div',{staticClass:"add-bookmark-page__heading add-bookmark-page__heading_lowered"},[_c('div',{staticClass:"add-bookmark-page__label"},[_vm._v(_vm._s(_vm.$t('save_in').message))])]):_vm._e(),_c('div',{staticClass:"add-bookmark-page__destination"},[(_vm.isNewWidgetOptionSelected)?[_c('div',{staticClass:"add-bookmark-page__label"},[_vm._v(_vm._s(_vm.$t('create_new_widget_on_page_ext').message)+" "+_vm._s(("\"" + (_vm.selectedPage.label || '') + "\"")))]),_c('div',{staticClass:"add-bookmark-page__input-wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newWidgetTitle),expression:"newWidgetTitle"}],ref:"widgetTitleInput",staticClass:"add-bookmark-page__input add-bookmark-page__input_padded",attrs:{"type":"text","required":"","autofocus":""},domProps:{"value":(_vm.newWidgetTitle)},on:{"input":function($event){if($event.target.composing){ return; }_vm.newWidgetTitle=$event.target.value}}}),_c('a',{staticClass:"add-bookmark-page__cancel",on:{"click":_vm.restoreID}},[_c('SvgStrokeIcon',{staticClass:"add-bookmark-page__control-icon add-bookmark-page__control-icon_lowered",attrs:{"icon":"x","options":{ size: 16 }}})],1)])]:(_vm.isNewGroupOptionSelected)?[_c('div',{staticClass:"add-bookmark-page__label"},[_vm._v(_vm._s(_vm.$t('create_new_group_on_page_widget_ext').message)+" "+_vm._s(("\"" + (_vm.selectedPage.label || '') + "\" - \"" + (_vm.selectedPage.selectedWidget ? _vm.selectedPage.selectedWidget.label || '' : '') + "\"")))]),_c('div',{staticClass:"add-bookmark-page__input-wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newFolderTitle),expression:"newFolderTitle"}],ref:"folderTitleInput",staticClass:"add-bookmark-page__input add-bookmark-page__input_padded",attrs:{"type":"text","required":"","autofocus":""},domProps:{"value":(_vm.newFolderTitle)},on:{"input":function($event){if($event.target.composing){ return; }_vm.newFolderTitle=$event.target.value}}}),_c('a',{staticClass:"add-bookmark-page__cancel",on:{"click":_vm.restoreID}},[_c('SvgStrokeIcon',{staticClass:"add-bookmark-page__control-icon add-bookmark-page__control-icon_lowered",attrs:{"icon":"x","options":{ size: 16 }}})],1)])]:[_c('SearchableSelect',{staticClass:"add-bookmark-page__dropdown add-bookmark-page__dropdown_hoverable",attrs:{"selected-value":_vm.selectedWidgetId,"options":_vm.pages,"max-height":_vm.dropdownHeight,"has-error":_vm.hasWidgetFieldError},on:{"activate":_vm.expandSelect,"set-value":_vm.setWidgetId},model:{value:(_vm.filterString),callback:function ($$v) {_vm.filterString=$$v},expression:"filterString"}}),((_vm.linkExists && _vm.linkExists.length) || _vm.autosavedLink)?_c('div',{staticClass:"add-bookmark-page__notifications"},[(_vm.autosavedLink)?_c('div',{staticClass:"add-bookmark-page__status-content"},[_c('div',{staticClass:"add-bookmark-page__status-box"},[_c('span',{staticClass:"add-bookmark-page__status-icon"},[_c('SvgStrokeIcon',{staticClass:"add-bookmark-page__status-icon-svg",attrs:{"icon":"check","options":{ size: 16, strokeWidth: 2 }}})],1),_c('span',{staticClass:"add-bookmark-page__status-text"},[_vm._v(_vm._s(_vm.$t(this.isAlreadyAutosaved ? 'already_saved_in_x_ext' : 'autosaved_in_x_ext').message)+" "),_c('a',{staticClass:"add-bookmark-page__status-text_link",on:{"click":function($event){$event.stopPropagation();return _vm.emitOpenBookmarks.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.$t('inbox').message))])])])]):_vm._e()]):_vm._e()],_c('div',{staticClass:"add-bookmark-page__row",class:{ 'add-bookmark-page__row_lowered': !_vm.denyLinksAutosaving }},[_c('div',{staticClass:"add-bookmark-page__heading"},[_c('div',{staticClass:"add-bookmark-page__label"},[_vm._v(_vm._s(_vm.$t('pure_description').message))])]),_c('MarkdownTextarea',{staticClass:"add-bookmark-page__textarea",attrs:{"options":{}},model:{value:(_vm.description),callback:function ($$v) {_vm.description=$$v},expression:"description"}})],1),_c('div',{staticClass:"add-bookmark-page__row"},[_c('div',{staticClass:"add-bookmark-page__heading"},[_c('div',{staticClass:"add-bookmark-page__label"},[_vm._v(_vm._s(_vm.$t('url').message))])]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.url),expression:"url"}],staticClass:"add-bookmark-page__input",attrs:{"type":"text"},domProps:{"value":(_vm.url)},on:{"input":function($event){if($event.target.composing){ return; }_vm.url=$event.target.value}}})])],2),_c('div',{staticClass:"add-bookmark-page__buttons"},[_c('button',{staticClass:"add-bookmark-page__main-button add-bookmark-page__main-button_wrapped",class:{ 'add-bookmark-page__main-button_disabled': !_vm.isButtonActive },attrs:{"type":"submit","disabled":_vm.isSaving || !_vm.isButtonActive}},[(_vm.isSaving)?_c('ThreeDotsSpinner'):[_vm._v(_vm._s(_vm.$t('save_bookmark').message))]],2),(!_vm.hideOpenTabs)?_c('button',{staticClass:"add-bookmark-page__secondary-button",class:{ 'add-bookmark-page__secondary-button_disabled': (_vm.isTabsPermissionGranted && !_vm.isOpenTabsButtonActive) || _vm.isSaving },attrs:{"disabled":(_vm.isTabsPermissionGranted && !_vm.isOpenTabsButtonActive) || _vm.isSaving},on:{"click":function($event){$event.preventDefault();$event.stopPropagation();return _vm.openOpenTabsScreen.apply(null, arguments)}}},[(_vm.isTabsPermissionGranted)?[_vm._v(" "+_vm._s(_vm.$t('open_tabs').message)+" ("+_vm._s(_vm.openTabsArray.length)+") "),_c('SvgStrokeIcon',{staticClass:"add-bookmark-page__feather-icon add-bookmark-page__feather-icon_lowered",attrs:{"icon":"chevron-right","options":{ size: 14, strokeWidth: 1 }}})]:[_vm._v(_vm._s(_vm.$t('open_tabs').message))]],2):_vm._e()])])],1),_vm._v(" "),_c('transition',{attrs:{"name":"slide-left","in-out":""}},[(_vm.isOpenTabsOpened)?_c('div',{key:"open_tabs_screen",staticClass:"add-bookmark-page__aside add-bookmark-page__aside_bottom"},[_c('div',{staticClass:"add-bookmark-page__container"},[_c('HeaderBar',{staticClass:"add-bookmark-page__header",attrs:{"is-aside":"","has-preferences-button":"","is-refreshing":_vm.isRefreshing,"profile-avatar":_vm.profileAvatar,"trail-string":((_vm.$t('open_tabs').message) + " (" + (_vm.openTabsArray.length) + ")")},on:{"logoClicked":_vm.closeOpenTabsScreen,"openPreferences":_vm.openPreferencesEditing,"userButtonClicked":_vm.showUserMenu}}),_c('form',{staticClass:"add-bookmark-page__form add-bookmark-page__form_strict",on:{"submit":function($event){$event.preventDefault();return _vm.sendChangesMultiple.apply(null, arguments)}}},[_c('div',{staticClass:"add-bookmark-page__row"},[_c('div',{staticClass:"add-bookmark-page__line"},[_c('div',{staticClass:"add-bookmark-page__selector add-bookmark-page__selector_all",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.toggleSelectAllTabs.apply(null, arguments)}}},[_c('button',{staticClass:"add-bookmark-page__control",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.toggleSelectAllTabs.apply(null, arguments)}}},[_c('span',{staticClass:"add-bookmark-page__check",class:{ 'add-bookmark-page__check_active': _vm.allOpenTabsSelected }},[_c('SvgStrokeIcon',{staticClass:"add-bookmark-page__check-icon",attrs:{"icon":"check","options":{ size: 12, strokeWidth: 2 }}})],1)]),_c('span',{staticClass:"add-bookmark-page__control-label"},[_vm._v(_vm._s(_vm.$t('select_all').message))])]),_vm._l((_vm.openTabsArray),function(openTab){return _c('div',{key:("open_tab_" + (openTab.id)),staticClass:"add-bookmark-page__selector"},[_c('a',{staticClass:"add-bookmark-page__control",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.toggleOpenTabSelected(openTab)}}},[_c('span',{staticClass:"add-bookmark-page__check",class:{ 'add-bookmark-page__check_active': _vm.selectedOpenTabsArray.includes(openTab.id) }},[_c('SvgStrokeIcon',{staticClass:"add-bookmark-page__check-icon",attrs:{"icon":"check","options":{ size: 12, strokeWidth: 2 }}})],1)]),_c('span',{staticClass:"add-bookmark-page__control-favicon-wrapper"},[_c('img',{staticClass:"add-bookmark-page__control-favicon",attrs:{"alt":"","src":_vm.getOpenTabIcon(openTab),"onerror":"this.src='https://f.start.me/fa/bookmark';this.onerror='';"}})]),_c('div',{staticClass:"add-bookmark-page__title-container add-bookmark-page__title-container_flexible"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(openTab.title),expression:"openTab.title"}],ref:("openTabsTitleInput_" + (openTab.id)),refInFor:true,staticClass:"add-bookmark-page__title-input",attrs:{"type":"text"},domProps:{"value":(openTab.title)},on:{"focus":function($event){return _vm.editOpenTabsTitle(openTab.id)},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();$event.preventDefault();return _vm.toggleOpenTabSelected(openTab)},"input":function($event){if($event.target.composing){ return; }_vm.$set(openTab, "title", $event.target.value)}}}),_c('span',{staticClass:"add-bookmark-page__title-button"},[_c('SvgStrokeIcon',{staticClass:"add-bookmark-page__feather-icon add-bookmark-page__feather-icon_lowered",attrs:{"icon":"edit-3"}})],1)])])})],2)]),_c('div',{staticClass:"add-bookmark-page__destination"},[(_vm.isNewWidgetOptionSelected)?[_c('div',{staticClass:"add-bookmark-page__label"},[_vm._v(_vm._s(_vm.$t('create_new_widget_on_page_ext').message)+" "+_vm._s(("\"" + (_vm.selectedPage.label || '') + "\"")))]),_c('div',{staticClass:"add-bookmark-page__input-wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newWidgetTitle),expression:"newWidgetTitle"}],staticClass:"add-bookmark-page__input add-bookmark-page__input_padded",attrs:{"type":"text","required":"","autofocus":""},domProps:{"value":(_vm.newWidgetTitle)},on:{"input":function($event){if($event.target.composing){ return; }_vm.newWidgetTitle=$event.target.value}}}),_c('a',{staticClass:"add-bookmark-page__cancel",on:{"click":_vm.restoreID}},[_c('SvgStrokeIcon',{staticClass:"add-bookmark-page__control-icon add-bookmark-page__control-icon_lowered",attrs:{"icon":"x","options":{ size: 16 }}})],1)])]:(_vm.isNewGroupOptionSelected)?[_c('div',{staticClass:"add-bookmark-page__label"},[_vm._v(_vm._s(_vm.$t('create_new_group_on_page_widget_ext').message)+" "+_vm._s(("\"" + (_vm.selectedPage.label || '') + "\" - \"" + (_vm.selectedPage.selectedWidget ? _vm.selectedPage.selectedWidget.label || '' : '') + "\"")))]),_c('div',{staticClass:"add-bookmark-page__input-wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newFolderTitle),expression:"newFolderTitle"}],staticClass:"add-bookmark-page__input add-bookmark-page__input_padded",attrs:{"type":"text","required":"","autofocus":""},domProps:{"value":(_vm.newFolderTitle)},on:{"input":function($event){if($event.target.composing){ return; }_vm.newFolderTitle=$event.target.value}}}),_c('a',{staticClass:"add-bookmark-page__cancel",on:{"click":_vm.restoreID}},[_c('SvgStrokeIcon',{staticClass:"add-bookmark-page__control-icon add-bookmark-page__control-icon_lowered",attrs:{"icon":"x","options":{ size: 16 }}})],1)])]:[_c('SearchableSelect',{staticClass:"add-bookmark-page__dropdown add-bookmark-page__dropdown_hoverable",attrs:{"selected-value":_vm.selectedWidgetId,"options":_vm.pages,"max-height":_vm.dropdownHeight,"has-error":_vm.hasWidgetFieldError},on:{"activate":_vm.expandSelect,"set-value":_vm.setWidgetId},model:{value:(_vm.filterString),callback:function ($$v) {_vm.filterString=$$v},expression:"filterString"}})]],2),_c('div',{staticClass:"add-bookmark-page__buttons add-bookmark-page__buttons_position_left"},[_c('button',{staticClass:"add-bookmark-page__main-button add-bookmark-page__main-button_wrapped",class:{ 'add-bookmark-page__main-button_disabled': !_vm.selectedOpenTabsArray.length },attrs:{"type":"submit","disabled":_vm.isSaving || !_vm.selectedOpenTabsArray.length}},[(_vm.isSaving)?_c('ThreeDotsSpinner'):[_vm._v(_vm._s(("" + (_vm.$t('save_selected_tabs').message) + (_vm.selectedOpenTabsArray.length ? ' (' + _vm.selectedOpenTabsArray.length + ')' : ''))))]],2),_c('div',{staticClass:"add-bookmark-page__extra",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.toggleCloseTabs.apply(null, arguments)}}},[_c('button',{staticClass:"add-bookmark-page__control",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.toggleCloseTabs.apply(null, arguments)}}},[_c('span',{staticClass:"add-bookmark-page__check",class:{ 'add-bookmark-page__check_active': _vm.getShouldCloseTabs }},[_c('SvgStrokeIcon',{staticClass:"add-bookmark-page__check-icon",attrs:{"icon":"check","options":{ size: 12, strokeWidth: 2 }}})],1)]),_c('span',{staticClass:"add-bookmark-page__control-label"},[_vm._v(_vm._s(_vm.$t('close_tabs_after_saving').message))])])])])],1)]):_vm._e()])],1)])])}
var AddBookmarkPagevue_type_template_id_7013b504_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AddBookmarkPage.vue?vue&type=template&id=7013b504&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("2909");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__("841c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__("4e82");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("4d63");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.dot-all.js
var es_regexp_dot_all = __webpack_require__("c607");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.sticky.js
var es_regexp_sticky = __webpack_require__("2c3e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/vue-types/dist/vue-types.m.js + 1 modules
var vue_types_m = __webpack_require__("84d4");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/config/bookmarklet.js
var bookmarklet = __webpack_require__("af8c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9986ca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HeaderBar.vue?vue&type=template&id=68a4e0bf&
var HeaderBarvue_type_template_id_68a4e0bf_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header-bar",class:{
    'header-bar_aside': _vm.isAside,
    'header-bar_has-tabs': _vm.hasTabs,
    'header-bar_cut': _vm.isOptionsScreen,
  }},[(!_vm.isOptionsScreen)?_c('div',{staticClass:"header-bar__header-wrapper"},[_c('div',{staticClass:"header-bar__header-logo"},[(_vm.hasMainLogo)?_c('a',{staticClass:"header-bar__image-container",attrs:{"href":"https://start.me","target":"_blank"}},[_c('img',{staticClass:"header-bar__logo-image",attrs:{"src":"/images/Logo@2x.png","alt":""}})]):_c('div',{staticClass:"header-bar__image-container header-bar__image-container_interactive",on:{"click":function($event){$event.stopPropagation();return _vm.emitLogoClicked.apply(null, arguments)}}},[_c('img',{staticClass:"header-bar__logo-image",attrs:{"src":"/images/Logo-app@2x.png","alt":""}})]),(_vm.trailString)?[_c('SvgStrokeIcon',{staticClass:"header-bar__control-icon",attrs:{"icon":"chevron-right","options":{ size: 14, strokeWidth: 1 }}}),_c('div',{staticClass:"header-bar__trail"},[_vm._v(_vm._s(_vm.trailString))])]:_vm._e()],2),_c('div',{staticClass:"header-bar__extra"},[_vm._t("default")],2),(_vm.hasRefreshButton)?_c('span',{staticClass:"header-bar__control-button header-bar__control-button_small",class:{ 'header-bar__control-button_animated': _vm.isRefreshing },attrs:{"title":_vm.$t('refresh_list').message},on:{"click":function($event){$event.stopPropagation();return _vm.emitRefresh.apply(null, arguments)}}},[_c('SvgStrokeIcon',{staticClass:"header-bar__control-icon",attrs:{"icon":"refresh-cw","options":{ strokeWidth: 1 }}})],1):_vm._e(),(_vm.hasHelpButton)?_c('span',{staticClass:"header-bar__control-button header-bar__control-button_small",on:{"click":function($event){$event.stopPropagation();return _vm.emitHelpClicked.apply(null, arguments)}}},[_c('SvgStrokeIcon',{staticClass:"header-bar__control-icon",attrs:{"icon":"help-circle","options":{ strokeWidth: 1 }}})],1):_vm._e(),(_vm.hasPreferencesButton)?_c('span',{staticClass:"header-bar__control-button header-bar__control-button_small",on:{"click":function($event){$event.stopPropagation();return _vm.emitOpenPreferences.apply(null, arguments)}}},[_c('SvgStrokeIcon',{staticClass:"header-bar__control-icon",attrs:{"icon":"settings","options":{ strokeWidth: 1 }}})],1):_vm._e(),_c('span',{staticClass:"header-bar__control-button header-bar__control-button_round",class:{ 'header-bar__control-button_grey header-bar__control-button_medium': !_vm.profileAvatar },on:{"click":function($event){$event.stopPropagation();return _vm.emitUserButtonClicked.apply(null, arguments)}}},[(_vm.profileAvatar)?_c('img',{staticClass:"header-bar__avatar",attrs:{"alt":"","src":_vm.profileAvatar}}):_vm._e(),_c('SvgStrokeIcon',{staticClass:"header-bar__control-icon header-bar__control-icon_white",attrs:{"icon":"user","options":{ strokeWidth: 1 }}})],1)]):_vm._e(),(_vm.hasTabs)?_vm._t("tabs"):_vm._e()],2)}
var HeaderBarvue_type_template_id_68a4e0bf_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/HeaderBar.vue?vue&type=template&id=68a4e0bf&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9986ca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SvgStrokeIcon.vue?vue&type=template&id=2082a216&functional=true&
var SvgStrokeIconvue_type_template_id_2082a216_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('svg',{staticClass:"svg-stroke-icon",class:_vm.data.staticClass || '',attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"none","stroke-linecap":"round","stroke-linejoin":"round","width":_vm.props.options.size !== undefined ? _vm.props.options.size : 12,"height":_vm.props.options.size !== undefined ? _vm.props.options.size : 12,"stroke-width":_vm.props.options.strokeWidth !== undefined ? _vm.props.options.strokeWidth : 2}},[(_vm.props.icon === 'alert-circle')?[_c('circle',{attrs:{"cx":"12","cy":"12","r":"10"}}),_c('line',{attrs:{"x1":"12","y1":"8","x2":"12","y2":"12"}}),_c('line',{attrs:{"x1":"12","y1":"16","x2":"12.01","y2":"16"}})]:(_vm.props.icon === 'arrow-left')?[_c('line',{attrs:{"x1":"19","y1":"12","x2":"5","y2":"12"}}),_c('polyline',{attrs:{"points":"12 19 5 12 12 5"}})]:(_vm.props.icon === 'check')?[_c('polyline',{attrs:{"points":"20 6 9 17 4 12"}})]:(_vm.props.icon === 'chevron-down')?[_c('polyline',{attrs:{"points":"6 9 12 15 18 9"}})]:(_vm.props.icon === 'chevron-left')?[_c('polyline',{attrs:{"points":"15 18 9 12 15 6"}})]:(_vm.props.icon === 'chevron-right')?[_c('polyline',{attrs:{"points":"9 18 15 12 9 6"}})]:(_vm.props.icon === 'edit-3')?[_c('path',{attrs:{"d":"M12 20h9"}}),_c('path',{attrs:{"d":"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}})]:(_vm.props.icon === 'external-link')?[_c('path',{attrs:{"d":"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}}),_c('polyline',{attrs:{"points":"15 3 21 3 21 9"}}),_c('line',{attrs:{"x1":"10","y1":"14","x2":"21","y2":"3"}})]:(_vm.props.icon === 'help-circle')?[_c('circle',{attrs:{"cx":"12","cy":"12","r":"10"}}),_c('path',{attrs:{"d":"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}}),_c('line',{attrs:{"x1":"12","y1":"17","x2":"12.01","y2":"17"}})]:(_vm.props.icon === 'inbox')?[_c('polyline',{attrs:{"points":"22 12 16 12 14 15 10 15 8 12 2 12"}}),_c('path',{attrs:{"d":"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}})]:(_vm.props.icon === 'loader')?[_c('line',{attrs:{"x1":"12","y1":"2","x2":"12","y2":"6"}}),_c('line',{attrs:{"x1":"12","y1":"18","x2":"12","y2":"22"}}),_c('line',{attrs:{"x1":"4.93","y1":"4.93","x2":"7.76","y2":"7.76"}}),_c('line',{attrs:{"x1":"16.24","y1":"16.24","x2":"19.07","y2":"19.07"}}),_c('line',{attrs:{"x1":"2","y1":"12","x2":"6","y2":"12"}}),_c('line',{attrs:{"x1":"18","y1":"12","x2":"22","y2":"12"}}),_c('line',{attrs:{"x1":"4.93","y1":"19.07","x2":"7.76","y2":"16.24"}}),_c('line',{attrs:{"x1":"16.24","y1":"7.76","x2":"19.07","y2":"4.93"}})]:(_vm.props.icon === 'more-vertical')?[_c('circle',{attrs:{"cx":"12","cy":"12","r":"1"}}),_c('circle',{attrs:{"cx":"12","cy":"5","r":"1"}}),_c('circle',{attrs:{"cx":"12","cy":"19","r":"1"}})]:(_vm.props.icon === 'refresh-cw')?[_c('polyline',{attrs:{"points":"23 4 23 10 17 10"}}),_c('polyline',{attrs:{"points":"1 20 1 14 7 14"}}),_c('path',{attrs:{"d":"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"}})]:(_vm.props.icon === 'search')?[_c('circle',{attrs:{"cx":"11","cy":"11","r":"8"}}),_c('line',{attrs:{"x1":"21","y1":"21","x2":"16.65","y2":"16.65"}})]:(_vm.props.icon === 'settings')?[_c('circle',{attrs:{"cx":"12","cy":"12","r":"3"}}),_c('path',{attrs:{"d":"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}})]:(_vm.props.icon === 'user')?[_c('path',{attrs:{"d":"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}}),_c('circle',{attrs:{"cx":"12","cy":"7","r":"4"}})]:(_vm.props.icon === 'x')?[_c('line',{attrs:{"x1":"18","y1":"6","x2":"6","y2":"18"}}),_c('line',{attrs:{"x1":"6","y1":"6","x2":"18","y2":"18"}})]:_vm._e()],2)}
var SvgStrokeIconvue_type_template_id_2082a216_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SvgStrokeIcon.vue?vue&type=template&id=2082a216&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SvgStrokeIcon.vue?vue&type=script&lang=js&
/*
 *  SVG icon component from feathericons set.
 *  Icons are colored using stroke attribute.
 **/

/* harmony default export */ var SvgStrokeIconvue_type_script_lang_js_ = ({
  name: 'SvgStrokeIcon',
  props: {
    icon: vue_types_m["a" /* default */].string.isRequired,
    options: vue_types_m["a" /* default */].object.def({})
  }
});
// CONCATENATED MODULE: ./src/components/SvgStrokeIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SvgStrokeIconvue_type_script_lang_js_ = (SvgStrokeIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/SvgStrokeIcon.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SvgStrokeIconvue_type_script_lang_js_,
  SvgStrokeIconvue_type_template_id_2082a216_functional_true_render,
  SvgStrokeIconvue_type_template_id_2082a216_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var SvgStrokeIcon = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HeaderBar.vue?vue&type=script&lang=js&


/* harmony default export */ var HeaderBarvue_type_script_lang_js_ = ({
  name: 'HeaderBar',
  components: {
    SvgStrokeIcon: SvgStrokeIcon
  },
  props: {
    trailString: vue_types_m["a" /* default */].string.def(''),
    profileAvatar: vue_types_m["a" /* default */].string.def(''),
    isAside: vue_types_m["a" /* default */].bool.def(false),
    hasPreferencesButton: vue_types_m["a" /* default */].bool.def(false),
    hasHelpButton: vue_types_m["a" /* default */].bool.def(false),
    hasRefreshButton: vue_types_m["a" /* default */].bool.def(false),
    hasTabs: vue_types_m["a" /* default */].bool.def(false),
    hasMainLogo: vue_types_m["a" /* default */].bool.def(false),
    isRefreshing: vue_types_m["a" /* default */].bool.def(false),
    isOptionsScreen: vue_types_m["a" /* default */].bool.def(false)
  },
  methods: {
    emitLogoClicked: function emitLogoClicked() {
      this.$emit('logoClicked');
    },
    emitRefresh: function emitRefresh() {
      this.$emit('refresh');
    },
    emitOpenPreferences: function emitOpenPreferences() {
      this.$emit('openPreferences');
    },
    emitUserButtonClicked: function emitUserButtonClicked() {
      this.$emit('userButtonClicked');
    },
    emitHelpClicked: function emitHelpClicked() {
      this.$emit('helpClicked');
    }
  }
});
// CONCATENATED MODULE: ./src/components/HeaderBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderBarvue_type_script_lang_js_ = (HeaderBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/HeaderBar.vue?vue&type=style&index=0&lang=scss&
var HeaderBarvue_type_style_index_0_lang_scss_ = __webpack_require__("7653");

// CONCATENATED MODULE: ./src/components/HeaderBar.vue






/* normalize component */

var HeaderBar_component = Object(componentNormalizer["a" /* default */])(
  components_HeaderBarvue_type_script_lang_js_,
  HeaderBarvue_type_template_id_68a4e0bf_render,
  HeaderBarvue_type_template_id_68a4e0bf_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HeaderBar = (HeaderBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9986ca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MarkdownTextarea.vue?vue&type=template&id=a7c2faa2&
var MarkdownTextareavue_type_template_id_a7c2faa2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"markdown-textarea"},[_c('textarea-autosize',{ref:"textarea",staticClass:"markdown-textarea__field",class:{ 'markdown-textarea__field_font_small': _vm.options.isSmall },style:(_vm.style),attrs:{"rows":_vm.options.isLarge ? 6 : 2},on:{"input":_vm.emitInput},nativeOn:{"paste":function($event){$event.stopPropagation();}},model:{value:(_vm.currentValue),callback:function ($$v) {_vm.currentValue=$$v},expression:"currentValue"}}),(_vm.options.tip)?_c('span',{staticClass:"markdown-textarea__tip"},[_vm._v(_vm._s(_vm.options.tip))]):_vm._e()],1)}
var MarkdownTextareavue_type_template_id_a7c2faa2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MarkdownTextarea.vue?vue&type=template&id=a7c2faa2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MarkdownTextarea.vue?vue&type=script&lang=js&

/* harmony default export */ var MarkdownTextareavue_type_script_lang_js_ = ({
  name: 'MarkdownTextarea',
  props: {
    options: vue_types_m["a" /* default */].shape({
      hasAutofocus: vue_types_m["a" /* default */].bool.def(false),
      hasLink: vue_types_m["a" /* default */].bool.def(false),
      isLarge: vue_types_m["a" /* default */].bool.def(false)
    }).loose.def({
      hasAutofocus: false,
      isLarge: false
    }),
    value: vue_types_m["a" /* default */].string.def('')
  },
  data: function data() {
    return {
      currentValue: this.value
    };
  },
  computed: {
    style: function style() {
      if (!this.options.maxHeight) return {};
      return {
        minHeight: "".concat(this.options.maxHeight, "px"),
        maxHeight: "".concat(this.options.maxHeight, "px"),
        overflow: 'hidden auto'
      };
    }
  },
  watch: {
    value: function value() {
      this.currentValue = this.value;
    }
  },
  mounted: function mounted() {
    if (this.options.hasAutofocus) {
      this.$refs.textarea.$el.focus();
      this.$refs.textarea.$el.selectionStart = 10000;
    }
  },
  methods: {
    emitInput: function emitInput() {
      this.$emit('input', this.currentValue);
    }
  }
});
// CONCATENATED MODULE: ./src/components/MarkdownTextarea.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MarkdownTextareavue_type_script_lang_js_ = (MarkdownTextareavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/MarkdownTextarea.vue?vue&type=style&index=0&lang=scss&
var MarkdownTextareavue_type_style_index_0_lang_scss_ = __webpack_require__("d1de");

// CONCATENATED MODULE: ./src/components/MarkdownTextarea.vue






/* normalize component */

var MarkdownTextarea_component = Object(componentNormalizer["a" /* default */])(
  components_MarkdownTextareavue_type_script_lang_js_,
  MarkdownTextareavue_type_template_id_a7c2faa2_render,
  MarkdownTextareavue_type_template_id_a7c2faa2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MarkdownTextarea = (MarkdownTextarea_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9986ca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchableSelect.vue?vue&type=template&id=50b6fffc&
var SearchableSelectvue_type_template_id_50b6fffc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    'searchable-select',
    {
      'searchable-select_active': _vm.isFunctional,
      'searchable-select_filled': _vm.filterString.length,
      'searchable-select_error': _vm.hasError,
    }
  ]},[_c('div',{staticClass:"searchable-select__wrapper",on:{"click":_vm.emitActivation}},[_c('div',{staticClass:"searchable-select__field"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.filterString),expression:"filterString"}],ref:"input",staticClass:"searchable-select__input",class:{
          'searchable-select__input_inactive': !_vm.isFunctional,
          'searchable-select__input_padded': _vm.isFunctional
        },attrs:{"type":"text","autocomplete":"off","placeholder":_vm.placeholder},domProps:{"value":(_vm.filterString)},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();$event.preventDefault();return _vm.emitActivation.apply(null, arguments)},"input":function($event){if($event.target.composing){ return; }_vm.filterString=$event.target.value}}}),(_vm.isFunctional)?_c('span',{staticClass:"searchable-select__lens"},[_c('SvgStrokeIcon',{staticClass:"searchable-select__feather-icon",attrs:{"icon":"search","options":{ strokeWidth: 1 }}})],1):_vm._e(),_c('span',{staticClass:"searchable-select__chevron"},[_c('SvgStrokeIcon',{staticClass:"searchable-select__feather-icon",attrs:{"icon":"chevron-right","options":{ size: 14, strokeWidth: 1 }}})],1),_c('span',{staticClass:"searchable-select__times",on:{"click":_vm.resetFilter}},[_c('SvgStrokeIcon',{staticClass:"searchable-select__feather-icon",attrs:{"icon":"x","options":{ size: 14, strokeWidth: 1 }}})],1)]),(_vm.isFunctional)?_c('div',{staticClass:"searchable-select__content"},[_c('div',{ref:"list",staticClass:"searchable-select__list",style:({ maxHeight: _vm.maxHeight ? (_vm.maxHeight + "px") : 'none' })},[_c('button',{staticClass:"searchable-select__option",class:{ 'searchable-select__option_selected': _vm.selectedValue === null },attrs:{"tabindex":0},on:{"click":function($event){$event.stopPropagation();return _vm.setValue(null)}}},[_c('div',{staticClass:"searchable-select__option-container"},[_c('span',{staticClass:"searchable-select__item-icon"},[_c('SvgStrokeIcon',{staticClass:"searchable-select__feather-icon searchable-select__feather-icon_relative",attrs:{"icon":"inbox","options":{ strokeWidth: 1 }}})],1),_c('span',{staticClass:"searchable-select__item-label"},[_vm._v(_vm._s(_vm.$t('inbox').message))])])]),_vm._l((_vm.optionsList),function(option){return _c('button',{key:option.key,ref:option.isSelected ? 'selected' : option.key,refInFor:true,staticClass:"searchable-select__option",class:[
            ("searchable-select__option_type_" + (option.level)),
            {
              'searchable-select__option_expandable': option.isExpandable,
              'searchable-select__option_selected': option.isSelected,
              'searchable-select__option_dimmed': option.isDimmed,
            }
          ],attrs:{"tabindex":0},on:{"click":option.clickHandler}},[_c('span',{staticClass:"searchable-select__option-container"},[_c('span',{staticClass:"searchable-select__item-icon"},[(option.isExpandable)?_c('SvgStrokeIcon',{staticClass:"searchable-select__feather-icon searchable-select__feather-icon_relative",class:{ 'searchable-select__feather-icon_rotated': option.isExpanded },attrs:{"icon":"chevron-down","options":{ strokeWidth: 1 }}}):_vm._e()],1),_c('span',{staticClass:"searchable-select__item-label"},[_vm._v(_vm._s(option.label))])])])})],2)]):_vm._e()])])}
var SearchableSelectvue_type_template_id_50b6fffc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SearchableSelect.vue?vue&type=template&id=50b6fffc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SearchableSelect.vue?vue&type=script&lang=js&











var DEFAULT_PLACEHOLDER = 'select_a_widget';
var SEARCH_PLACEHOLDER = 'search_widgets';
var FOCUS_DELAY = 500;
/* harmony default export */ var SearchableSelectvue_type_script_lang_js_ = ({
  name: 'SearchableSelect',
  components: {
    SvgStrokeIcon: SvgStrokeIcon
  },
  props: {
    options: vue_types_m["a" /* default */].array.def([]),
    selectedValue: vue_types_m["a" /* default */].any.def(null),
    maxHeight: vue_types_m["a" /* default */].number,
    value: vue_types_m["a" /* default */].string.def(''),
    isFunctional: vue_types_m["a" /* default */].bool.def(false),
    hasError: vue_types_m["a" /* default */].bool.def(false)
  },
  data: function data() {
    return {
      isActive: this.isFunctional || false,
      expandedPages: [],
      expandedWidgets: []
    };
  },
  computed: {
    optionsList: function optionsList() {
      var _this = this;

      var result = [];
      this.options.forEach(function (group) {
        group.value.forEach(function (subgroup) {
          var isExpanded = _this.expandedPages.includes(subgroup.id) || _this.filterString.length;

          result.push({
            label: _this.getSubgroupLabel(group.label, subgroup.label),
            key: "page_".concat(subgroup.id),
            level: 'page',
            clickHandler: function clickHandler() {
              _this.togglePage(subgroup.id);
            },
            isExpandable: true,
            isExpanded: isExpanded
          });

          if (isExpanded) {
            subgroup.value.forEach(function (inner) {
              var isExpandable = Array.isArray(inner.value);

              var isExpanded = _this.expandedWidgets.includes(inner.id) || _this.filterString.length;

              var isSelected = inner.id === _this.selectedValue;
              result.push({
                label: inner.label,
                key: "widget_".concat(inner.id),
                level: 'inner',
                isDimmed: inner.isDimmed,
                clickHandler: function clickHandler() {
                  if (isExpandable) {
                    _this.toggleWidget(inner.id);
                  } else {
                    _this.setValue(inner.id);
                  }
                },
                isExpandable: isExpandable,
                isExpanded: isExpanded,
                isSelected: isSelected
              });

              if (isExpandable && isExpanded) {
                inner.value.forEach(function (folder) {
                  var isSelected = folder.id === _this.selectedValue;
                  result.push({
                    label: folder.label,
                    key: "folder_".concat(folder.id),
                    level: 'folder',
                    isDimmed: folder.isDimmed,
                    clickHandler: function clickHandler() {
                      _this.setValue(folder.id);
                    },
                    isSelected: isSelected
                  });
                });
              }
            });
          }
        });
      });
      return result;
    },
    placeholder: function placeholder() {
      if (this.isFunctional) return this.$t(SEARCH_PLACEHOLDER).message;
      var placeholder = this.getPlaceholder(this.selectedValue);
      return placeholder;
    },
    filterString: {
      get: function get() {
        return this.value;
      },
      set: function set(str) {
        this.$emit('input', str);
      }
    }
  },
  created: function created() {
    if (this.isFunctional) this.$eventBus.$on('activate-searchable-input', this.processActivation);
  },
  mounted: function mounted() {
    var _this2 = this;

    this.processActivation();
    if (this.$isMobile || !this.isFunctional) return;
    setTimeout(function () {
      _this2.setFocus();
    }, FOCUS_DELAY);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.isFunctional) this.$eventBus.$off('activate-searchable-input', this.processActivation);
  },
  methods: {
    resetFilter: function resetFilter() {
      this.filterString = '';
    },
    getPlaceholder: function getPlaceholder(id) {
      if (id === null) return this.$t('inbox').message;
      var widgetId;
      var groupId;

      if (typeof id === 'string') {
        var re = /^(\d+)_(\d+)/;
        var parts = id.match(re);
        if (!parts) return this.$t(DEFAULT_PLACEHOLDER).message;
        widgetId = Number(parts[1]);
        groupId = Number(parts[2]);
      } else {
        widgetId = id;
      }

      var placeholder = '';
      var pageLabel;
      var widgetLabel;
      var groupLabel;
      this.options.some(function (o) {
        return o.value.some(function (p) {
          return p.value.some(function (w) {
            if (w.id === widgetId) {
              pageLabel = p.label;
              widgetLabel = w.label;

              if (groupId) {
                w.value.some(function (g) {
                  if (g.id === id) {
                    groupLabel = g.label;
                    return true;
                  }

                  return false;
                });
              }

              return true;
            }

            return false;
          });
        });
      });

      if (pageLabel !== undefined && widgetLabel !== undefined) {
        placeholder = "".concat(pageLabel, " / ").concat(widgetLabel);
        if (groupLabel) placeholder += " / ".concat(groupLabel);
      }

      return placeholder || this.$t(DEFAULT_PLACEHOLDER).message;
    },
    setFocus: function setFocus() {
      if (!this.$refs.input) return;
      this.$refs.input.focus();
    },
    processActivation: function processActivation() {
      var _this3 = this;

      this.preExpandItems();
      this.$nextTick(function () {
        _this3.scrollList();
      });
    },
    preExpandItems: function preExpandItems() {
      var _this4 = this;

      var pageLimit = 2;
      var pagesCount = 0;
      var lessThreePages = this.options.every(function (group) {
        pagesCount += group.value.length;
        if (pagesCount > pageLimit) return false;
        return true;
      });

      if (lessThreePages) {
        this.options.forEach(function (group) {
          group.value.forEach(function (page) {
            _this4.expandedPages.push(page.id);
          });
        });
      }

      if (this.selectedValue) {
        this.options.some(function (group) {
          return group.value.some(function (page) {
            if (page.value.length === 1) return false;
            return page.value.some(function (widget) {
              if (widget.id === _this4.selectedValue) {
                if (!_this4.expandedPages.includes(page.id)) _this4.expandedPages.push(page.id);
                return true;
              }

              if (!Array.isArray(widget.value) || widget.value.length === 1) return false;
              return widget.value.some(function (folder) {
                if (folder.id === _this4.selectedValue) {
                  if (!_this4.expandedPages.includes(page.id)) _this4.expandedPages.push(page.id);
                  if (!_this4.expandedWidgets.includes(widget.id)) _this4.expandedWidgets.push(widget.id);
                  return true;
                }

                return false;
              });
            });
          });
        });
      }
    },
    scrollList: function scrollList() {
      if (!this.$refs.list || !this.$refs.selected) return;
      var list = Array.isArray(this.$refs.list) ? this.$refs.list[0] : this.$refs.list;
      var selected = Array.isArray(this.$refs.selected) ? this.$refs.selected[0] : this.$refs.selected;
      if (!selected || !list) return;
      var listCoords = list.getBoundingClientRect();
      var selectedCoords = selected.getBoundingClientRect();
      var scrollValue = selectedCoords.top - listCoords.top + list.scrollTop - this.maxHeight / 2;
      list.scrollTop = scrollValue >= 0 ? scrollValue : 0;
    },
    deactivate: function deactivate() {
      this.$emit('input', '');
      this.$emit('deactivate');
    },
    setValue: function setValue(id) {
      this.$emit('set-value', id);
      this.deactivate();
    },
    setValueAndSave: function setValueAndSave(id) {
      this.$emit('set-value-and-save', id);
      this.deactivate();
    },
    emitActivation: function emitActivation() {
      if (this.isFunctional) return;
      this.$emit('activate');
    },
    getSubgroupLabel: function getSubgroupLabel(groupLabel, subgroupLabel) {
      if (!groupLabel) return subgroupLabel;
      return "".concat(groupLabel, ": ").concat(subgroupLabel);
    },
    togglePage: function togglePage(id) {
      if (this.expandedPages.includes(id)) this.expandedPages = this.expandedPages.filter(function (item) {
        return item !== id;
      });else this.expandedPages.push(id);
    },
    toggleWidget: function toggleWidget(id) {
      if (this.expandedWidgets.includes(id)) this.expandedWidgets = this.expandedWidgets.filter(function (item) {
        return item !== id;
      });else this.expandedWidgets.push(id);
    }
  }
});
// CONCATENATED MODULE: ./src/components/SearchableSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SearchableSelectvue_type_script_lang_js_ = (SearchableSelectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SearchableSelect.vue?vue&type=style&index=0&lang=scss&
var SearchableSelectvue_type_style_index_0_lang_scss_ = __webpack_require__("21d0");

// CONCATENATED MODULE: ./src/components/SearchableSelect.vue






/* normalize component */

var SearchableSelect_component = Object(componentNormalizer["a" /* default */])(
  components_SearchableSelectvue_type_script_lang_js_,
  SearchableSelectvue_type_template_id_50b6fffc_render,
  SearchableSelectvue_type_template_id_50b6fffc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SearchableSelect = (SearchableSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9986ca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Toggler.vue?vue&type=template&id=23117800&
var Togglervue_type_template_id_23117800_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"toggler",class:{
    'toggler_checked': _vm.options.isOpposite ? (_vm.options.ignoreConfirm ? !_vm.currentValue : !_vm.value) : (_vm.options.ignoreConfirm ? _vm.currentValue : _vm.value),
    'toggler_divided': _vm.options.isDivided,
    'toggler_disabled': _vm.options.isDisabled,
    'toggler_theme_dark': _vm.isDarkTheme && !_vm.isAdmin,
    'toggler_increased-background': _vm.options.hasIncreasedBackground,
  }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkedValue),expression:"checkedValue"}],staticClass:"toggler__input",attrs:{"type":"checkbox","id":_vm.id},domProps:{"checked":Array.isArray(_vm.checkedValue)?_vm._i(_vm.checkedValue,null)>-1:(_vm.checkedValue)},on:{"change":[function($event){var $$a=_vm.checkedValue,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checkedValue=$$a.concat([$$v]))}else{$$i>-1&&(_vm.checkedValue=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.checkedValue=$$c}},_vm.emitChange]}}),_c('label',{staticClass:"toggler__label",attrs:{"for":_vm.id}},[_c('span',{staticClass:"toggler__label-container"},[(_vm.options.icon)?_c('span',{staticClass:"toggler__icon-container"},[_c('SvgStrokeIcon',{staticClass:"toggler__icon",attrs:{"icon":_vm.options.icon}})],1):_vm._e(),_c('span',{staticClass:"toggler__text"},[_c('span',{staticClass:"toggler__title"},[_vm._v(_vm._s(_vm.options.label))]),(_vm.options.sublabel)?_c('span',{staticClass:"toggler__subtitle"},[_vm._v(_vm._s(_vm.options.sublabel))]):_vm._e()]),(_vm.options.isForPro)?_c('span',{staticClass:"toggler__premium-mark"},[_c('PremiumMark',{attrs:{"is-active":_vm.options.isProUser,"label":_vm.$t('account_types.pro').message}})],1):_vm._e()]),_c('span',{staticClass:"toggler__control",class:("toggler__control_color_" + (_vm.options.defaultColor))},[_c('span',{staticClass:"toggler__thumb"})])])])}
var Togglervue_type_template_id_23117800_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Toggler.vue?vue&type=template&id=23117800&

// EXTERNAL MODULE: ./node_modules/shortid/index.js
var shortid = __webpack_require__("8dee");
var shortid_default = /*#__PURE__*/__webpack_require__.n(shortid);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9986ca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PremiumMark.vue?vue&type=template&id=628825f1&functional=true&
var PremiumMarkvue_type_template_id_628825f1_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('span',{staticClass:"premium-mark",class:{
    'premium-mark_active': _vm.props.isActive,
    'premium-mark_inline': _vm.props.isInline,
    'premium-mark_clickable': _vm.props.clickHandler,
  },attrs:{"title":_vm.props.title},on:{"click":function () { if (_vm.props.clickHandler) { _vm.props.clickHandler() } }}},[_vm._v(_vm._s(_vm.props.label))])}
var PremiumMarkvue_type_template_id_628825f1_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PremiumMark.vue?vue&type=template&id=628825f1&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PremiumMark.vue?vue&type=script&lang=js&

/* harmony default export */ var PremiumMarkvue_type_script_lang_js_ = ({
  name: 'PremiumMark',
  props: {
    isActive: vue_types_m["a" /* default */].bool.def(false),
    isInline: vue_types_m["a" /* default */].bool.def(false),
    label: vue_types_m["a" /* default */].string.def(''),
    title: vue_types_m["a" /* default */].string,
    clickHandler: vue_types_m["a" /* default */].func
  }
});
// CONCATENATED MODULE: ./src/components/PremiumMark.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PremiumMarkvue_type_script_lang_js_ = (PremiumMarkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/PremiumMark.vue?vue&type=style&index=0&lang=scss&
var PremiumMarkvue_type_style_index_0_lang_scss_ = __webpack_require__("07f4");

// CONCATENATED MODULE: ./src/components/PremiumMark.vue






/* normalize component */

var PremiumMark_component = Object(componentNormalizer["a" /* default */])(
  components_PremiumMarkvue_type_script_lang_js_,
  PremiumMarkvue_type_template_id_628825f1_functional_true_render,
  PremiumMarkvue_type_template_id_628825f1_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var PremiumMark = (PremiumMark_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Toggler.vue?vue&type=script&lang=js&






/* harmony default export */ var Togglervue_type_script_lang_js_ = ({
  name: 'Toggler',
  components: {
    PremiumMark: PremiumMark,
    SvgStrokeIcon: SvgStrokeIcon
  },
  props: {
    value: vue_types_m["a" /* default */].any.isRequired,
    options: vue_types_m["a" /* default */].shape({
      label: vue_types_m["a" /* default */].string,
      defaultColor: vue_types_m["a" /* default */].string,
      isOpposite: vue_types_m["a" /* default */].bool,
      isDivided: vue_types_m["a" /* default */].bool
    }).loose.def({
      label: '',
      defaultColor: '',
      isOpposite: false,
      isDivided: false
    })
  },
  data: function data() {
    return {
      currentValue: this.value
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapGetters */])(['isDarkTheme'])), {}, {
    isAdmin: function isAdmin() {
      return this.$route.meta.isAdminPage;
    },
    checkedValue: {
      get: function get() {
        return this.currentValue;
      },
      set: function set(newValue) {
        if (this.options.isDisabled) {
          if (this.options.disabledHandler) this.options.disabledHandler();
          return;
        }

        this.currentValue = +newValue;
        this.$emit('input', +this.currentValue);
      }
    },
    id: function id() {
      return shortid_default.a.generate();
    }
  }),
  methods: {
    emitChange: function emitChange() {
      this.$emit('change');
    }
  }
});
// CONCATENATED MODULE: ./src/components/Toggler.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Togglervue_type_script_lang_js_ = (Togglervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Toggler.vue?vue&type=style&index=0&lang=scss&
var Togglervue_type_style_index_0_lang_scss_ = __webpack_require__("635e");

// CONCATENATED MODULE: ./src/components/Toggler.vue






/* normalize component */

var Toggler_component = Object(componentNormalizer["a" /* default */])(
  components_Togglervue_type_script_lang_js_,
  Togglervue_type_template_id_23117800_render,
  Togglervue_type_template_id_23117800_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Toggler = (Toggler_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9986ca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ThreeDotsSpinner.vue?vue&type=template&id=1657a594&
var ThreeDotsSpinnervue_type_template_id_1657a594_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['three-dots-spinner', { 'three-dots-spinner_color_blue': _vm.isBlue }]},[_c('span',{staticClass:"three-dots-spinner__element"})])}
var ThreeDotsSpinnervue_type_template_id_1657a594_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ThreeDotsSpinner.vue?vue&type=template&id=1657a594&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ThreeDotsSpinner.vue?vue&type=script&lang=js&

/* harmony default export */ var ThreeDotsSpinnervue_type_script_lang_js_ = ({
  name: 'ThreeDotsSpinner',
  props: {
    isBlue: vue_types_m["a" /* default */].bool.def(false)
  }
});
// CONCATENATED MODULE: ./src/components/ThreeDotsSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ThreeDotsSpinnervue_type_script_lang_js_ = (ThreeDotsSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ThreeDotsSpinner.vue?vue&type=style&index=0&lang=scss&
var ThreeDotsSpinnervue_type_style_index_0_lang_scss_ = __webpack_require__("74d8");

// CONCATENATED MODULE: ./src/components/ThreeDotsSpinner.vue






/* normalize component */

var ThreeDotsSpinner_component = Object(componentNormalizer["a" /* default */])(
  components_ThreeDotsSpinnervue_type_script_lang_js_,
  ThreeDotsSpinnervue_type_template_id_1657a594_render,
  ThreeDotsSpinnervue_type_template_id_1657a594_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ThreeDotsSpinner = (ThreeDotsSpinner_component.exports);
// EXTERNAL MODULE: ./src/components/Loader.vue + 4 modules
var Loader = __webpack_require__("555f");

// EXTERNAL MODULE: ./src/i18n/index.js + 1 modules
var i18n = __webpack_require__("12cb");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddBookmarkPage.vue?vue&type=script&lang=js&














































var LAST_USED_WIDGET_ID_COOKIE_NAME = bookmarklet["a" /* default */].cookieNameLastUsedWidget;
var DROPDOWN_HEIGHT_OFFSET = 83;
var NEW_GROUP_ID = 'new';
var ID_REGEXP = /^(\d+)_(.+)/;
var SM_MESSAGE_GET_USER_PAGES = 'getUserPages';
var SM_MESSAGE_SIGN_IN = 'signIn';
var SM_MESSAGE_SIGN_OUT = 'signOut';
var WINDOW_CURRENT_BROWSER = 'chrome';
var SM_MESSAGE_OPEN_BOOKMARKS = 'openBookmarksManager';
var SM_MESSAGE_SHOW_HELP_PAGE = 'newtabHelp';
var SM_MESSAGE_IMPORT = 'importBookmarks';
var SM_MESSAGE_CLEAR_CACHE = 'clearCache';
var SM_OPTION_HOMEPAGE_URL = 'homepageUrl';
var SM_OPTION_HOMEPAGE_ID = 'homepageId';
var SETTINGS_TABS_ID = {
  SETTINGS: 'settings',
  SHORTCUTS: 'shortcuts'
};
/* harmony default export */ var AddBookmarkPagevue_type_script_lang_js_ = ({
  name: 'AddBookmarkPage',
  components: {
    HeaderBar: HeaderBar,
    MarkdownTextarea: MarkdownTextarea,
    SearchableSelect: SearchableSelect,
    Toggler: Toggler,
    ThreeDotsSpinner: ThreeDotsSpinner,
    SvgStrokeIcon: SvgStrokeIcon,
    Loader: Loader["a" /* default */],
    PremiumMark: PremiumMark
  },
  metaInfo: function metaInfo() {
    return {
      title: this.$t('add_to_startme').message
    };
  },
  props: {
    propUrl: vue_types_m["a" /* default */].string,
    propTitle: vue_types_m["a" /* default */].string,
    isOptionsScreen: vue_types_m["a" /* default */].bool.def(false),
    hideOpenTabs: vue_types_m["a" /* default */].bool.def(false)
  },
  data: function data() {
    return {
      title: this.propTitle || '',
      description: '',
      url: this.propUrl || '',
      isTitleEditing: false,
      selectedWidgetId: null,
      savedWidgetId: null,
      newWidgetTitle: '',
      newFolderTitle: '',
      isSaving: false,
      isLoading: true,
      isRefreshing: false,
      usedCache: false,
      filterString: '',
      showAdditionalFields: false,
      markdownGuideUrl: 'https://daringfireball.net/projects/markdown/basics',
      isSelectExpanded: false,
      hasWidgetFieldError: false,
      isImportingBookmarks: false,
      isEditingPreferences: this.isOptionsScreen || false,
      linkExists: null,
      denyLinksAutosaving: 1,
      linksAutosavingFetched: false,
      autosavedLink: null,
      autosavedLinkRemoved: false,
      isAutosaving: false,
      isAlreadyAutosaved: false,
      activeTabId: SETTINGS_TABS_ID.SETTINGS,
      browserActionShortcut: '',
      homepageShortcut: '',
      userPages: [],
      homepageOptions: [],
      homepageId: null,
      isClearingCache: false,
      isPageGetting: false,
      isTabsPermissionGranted: false,
      isOpenTabsOpened: false,
      openTabsArray: [],
      selectedOpenTabsArray: [],
      isUserMenuVisible: false,
      openTabsTitleEditing: null
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapGetters */])(['getUserData', 'getWidgetsByPage', 'getShouldCloseTabs'])), {}, {
    allOpenTabsSelected: function allOpenTabsSelected() {
      var _this = this;

      return this.openTabsArray.every(function (tab) {
        return _this.selectedOpenTabsArray.includes(tab.id);
      });
    },
    isOpenTabsButtonActive: function isOpenTabsButtonActive() {
      return this.openTabsArray.length > 0;
    },
    settingsTabs: function settingsTabs() {
      return [{
        id: SETTINGS_TABS_ID.SETTINGS,
        label: this.$t('settings').message
      }, {
        id: SETTINGS_TABS_ID.SHORTCUTS,
        label: this.$t('shortcuts').message
      }];
    },
    isSettingsTabActive: function isSettingsTabActive() {
      return this.activeTabId === SETTINGS_TABS_ID.SETTINGS;
    },
    isShortcutsTabActive: function isShortcutsTabActive() {
      return this.activeTabId === SETTINGS_TABS_ID.SHORTCUTS;
    },
    isButtonActive: function isButtonActive() {
      if (this.selectedWidgetId !== null) return true;
      if (!this.autosavedLink || this.autosavedLink && (this.url !== this.autosavedLink.url || this.title !== this.autosavedLink.title || this.description !== this.autosavedLink.description)) return true;
      return false;
    },
    query: function query() {
      var query = {};
      var queryString = window.location.search.substring(1);
      if (!queryString.length) return query;
      var queryArray = queryString.split('&');
      queryArray.forEach(function (s) {
        var parts = s.split('=');
        query[parts[0]] = decodeURIComponent(parts[1]);
      });
      return query;
    },
    dropdownHeight: function dropdownHeight() {
      if (!this.$isMobile) return bookmarklet["a" /* default */].bookmarkletSearchableHeight;

      var _document$documentEle = document.documentElement.getBoundingClientRect(),
          height = _document$documentEle.height;

      return height ? height - DROPDOWN_HEIGHT_OFFSET : bookmarklet["a" /* default */].bookmarkletSearchableHeight;
    },
    pages: function pages() {
      var _this2 = this;

      var widgets = this.getWidgetsByPage('urllist');
      return widgets.map(function (option) {
        return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, option), {}, {
          label: option.id === 'personal' ? '' : option.label,
          value: Object(toConsumableArray["a" /* default */])(option.value.filter(function (page) {
            return !page.isArchived;
          }).map(function (page) {
            var widgets = page.value;
            if (widgets.length > 1) widgets.sort(function (a, b) {
              return a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1;
            });

            if (_this2.filterString) {
              var re = new RegExp(_this2.filterString, 'i');
              widgets = widgets.filter(function (w) {
                if (re.test(w.label)) return true;

                if (Array.isArray(w.value) && w.value.some(function (g) {
                  return re.test(g.label);
                })) {
                  w.value = w.value.filter(function (g) {
                    return re.test(g.label);
                  });
                  return true;
                }

                return false;
              });
            }

            if (!_this2.filterString) {
              widgets.forEach(function (w) {
                if (Array.isArray(w.value)) {
                  w.value.push({
                    id: "".concat(w.id, "_").concat(NEW_GROUP_ID),
                    label: "+".concat(_this2.$t('create_new_group').message),
                    value: "".concat(w.id, "_").concat(NEW_GROUP_ID),
                    omitHyphen: true,
                    isDimmed: true
                  });
                }
              });
              widgets.push({
                id: -page.id,
                label: "+".concat(_this2.$t('create_new_widget').message),
                value: -page.id,
                isDimmed: true
              });
            }

            if (!widgets.length) return null;
            return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, page), {}, {
              value: Object(toConsumableArray["a" /* default */])(widgets)
            });
          }).filter(function (page) {
            return page !== null;
          }))
        });
      });
    },
    selectedPage: function selectedPage() {
      var selectedWidgetId = this.selectedWidgetId;
      var page;
      var widget;

      if (typeof selectedWidgetId === 'string') {
        var parts = selectedWidgetId.match(ID_REGEXP);

        if (parts && parts[1]) {
          selectedWidgetId = Number(parts[1]);
          this.pages.some(function (g) {
            return g.value.some(function (p) {
              var pageFound = p.value.some(function (w) {
                if (w.id === selectedWidgetId) {
                  widget = w;
                  return true;
                }

                return false;
              });

              if (pageFound) {
                page = p;
                return true;
              }

              return false;
            });
          });
        }
      } else {
        this.pages.some(function (g) {
          return g.value.some(function (p) {
            var pageFound = false;

            if (selectedWidgetId < 0 && p.id === Math.abs(selectedWidgetId)) {
              page = p;
              return true;
            } else if (selectedWidgetId > 0) {
              pageFound = p.value.some(function (w) {
                if (w.id === selectedWidgetId) {
                  widget = w;
                  return true;
                }

                return false;
              });

              if (pageFound) {
                page = p;
                return true;
              }

              return false;
            }

            return false;
          });
        });
      }

      if (page) {
        page.selectedWidget = widget;
      }

      return page || {};
    },
    isNewGroupOptionSelected: function isNewGroupOptionSelected() {
      if (!this.selectedWidgetId || typeof this.selectedWidgetId !== 'string') return false;
      var parts = this.selectedWidgetId.match(ID_REGEXP);
      if (!parts) return false;
      return parts[2] && parts[2] === NEW_GROUP_ID;
    },
    isNewWidgetOptionSelected: function isNewWidgetOptionSelected() {
      return typeof this.selectedWidgetId === 'number' && this.selectedWidgetId < 0;
    },
    profileAvatar: function profileAvatar() {
      return this.getUserData && this.getUserData.avatar_url ? this.getFacebookAvatarUrl(this.getUserData.avatar_url) || '' : '';
    },
    existedLinkWarningTitle: function existedLinkWarningTitle() {
      if (!this.url || !this.linkExists || !this.linkExists.length) return '';
      var strArray = [];
      this.linkExists.forEach(function (link) {
        var str = '';
        if (link.team_public_id) str += "".concat(link.team_title, " / ");
        str += "".concat(link.page_title, " / ").concat(link.widget_title);
        if (link.group_id) str += " / ".concat(link.group_name);
        strArray.push(str);
      });
      return strArray.join('\r\n');
    },
    existedLinkWarningHref: function existedLinkWarningHref() {
      if (!this.url || !this.linkExists || !this.linkExists.length) return 'https://start.me/bookmarks';
      var url = this.url.replace(/\/$/, '');
      return this.$startme.primaryURL("/bookmarks?section=search&q=".concat(encodeURIComponent(url)));
    },
    selectedOpenTabs: function selectedOpenTabs() {
      var _this3 = this;

      return this.openTabsArray.filter(function (tab) {
        return _this3.selectedOpenTabsArray.includes(tab.id);
      });
    }
  }),
  watch: {
    isNewWidgetOptionSelected: function isNewWidgetOptionSelected(newValue) {
      var _this4 = this;

      this.$nextTick(function () {
        if (newValue && _this4.$refs.widgetTitleInput) _this4.$refs.widgetTitleInput.focus();
      });
    },
    isNewGroupOptionSelected: function isNewGroupOptionSelected(newValue) {
      var _this5 = this;

      this.$nextTick(function () {
        if (newValue && _this5.$refs.folderTitleInput) _this5.$refs.folderTitleInput.focus();
      });
    },
    propTitle: function propTitle(newTitle) {
      this.title = newTitle;
    },
    propUrl: function propUrl() {
      var newUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.url = newUrl.replace(/\/$/, '');
    },
    denyLinksAutosaving: function denyLinksAutosaving() {
      if (!this.linksAutosavingFetched) return;
      this.processChangeLinksAutosaving();
    },
    url: 'checkLink',
    isLoading: function isLoading(value) {
      if (!value && this.usedCache) this.fetchAllPages({
        isRequestForced: true,
        noCache: true
      });
    },
    isSelectExpanded: function isSelectExpanded(value) {
      if (value) this.$eventBus.$emit('activate-searchable-input');
    },
    isEditingPreferences: function isEditingPreferences(state) {
      if (state) this.initPages();
    },
    homepageId: function homepageId(newId) {
      if (newId) this.setHomePage(newId);
    }
  },
  created: function created() {
    this.$eventBus.$on('keypress-escape', this.handleEscape);
    this.setShortcuts();

    if (this.isOptionsScreen) {
      this.initPages();
      return;
    }

    this.usedCache = !!(this.$store.state.allPages && this.$store.state.allPages.length);
  },
  beforeMount: function beforeMount() {
    var _this6 = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this6.checkLanguage();

              _this6.checkTabsPermission();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this7 = this;

    this.fetchAllPages({
      noCache: true,
      isCacheForced: true
    }).then(function () {
      return _this7.checkAutosaving();
    }).then(function () {
      _this7.initBookmarkForm();

      _this7.checkLink();
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.$eventBus.$off('keypress-escape', this.handleEscape);
  },
  methods: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapActions */])(['addWidget', 'autosaveLink', 'autosaveLinks', 'checkLinkExists', 'addNewBookmark', 'addBookmarksBatch', 'editAutosavedLink', 'removeAutosavedLink', 'fetchAllPages', 'checkLinksAutosaving', 'changeLinksAutosaving', 'toggleCloseTabs'])), {}, {
    editOpenTabsTitle: function editOpenTabsTitle(id) {
      var _this8 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this8.$refs["openTabsTitleInput_".concat(id)] && _this8.$refs["openTabsTitleInput_".concat(id)][0]) {
                  _this8.$refs["openTabsTitleInput_".concat(id)][0].select();
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    stopEditingOpenTabsTitle: function stopEditingOpenTabsTitle() {
      this.openTabsTitleEditing = null;
    },
    checkLanguage: function checkLanguage() {
      chrome.storage.local.get(['cachedUser']).then(function () {
        var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var cachedUser;

        try {
          var _cachedUser, _cachedUser$user;

          cachedUser = JSON.parse(result.cachedUser);
          if ((_cachedUser = cachedUser) !== null && _cachedUser !== void 0 && (_cachedUser$user = _cachedUser.user) !== null && _cachedUser$user !== void 0 && _cachedUser$user.lang) Object(i18n["b" /* setInterfaceLanguage */])(cachedUser.user.lang);
        } catch (e) {}
      }).catch(function (e) {
        console.warn(e);
      });
    },
    editTitle: function editTitle() {
      var _this9 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this9.isTitleEditing = true;
                _context3.next = 3;
                return _this9.$nextTick();

              case 3:
                if (_this9.$refs.titleInput) _this9.$refs.titleInput.select();

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    closeTitleEditing: function closeTitleEditing() {
      this.isTitleEditing = false;
    },
    initPages: function initPages() {
      var _this10 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var userPages = this.$store.getters.getUserPages;

      if (!options.forceFetch && userPages && userPages.length) {
        this.setupUserPages(userPages);
      } else {
        this.isPageGetting = true;
        chrome.runtime.sendMessage({
          message: SM_MESSAGE_GET_USER_PAGES,
          noCache: true
        }).then(function (pages) {
          if (!pages) return;

          _this10.$store.dispatch('setUserPages', pages);

          _this10.setupUserPages(pages);

          _this10.isPageGetting = false;
        }).catch(function () {
          _this10.isPageGetting = false;
        });
      }
    },
    setupUserPages: function setupUserPages() {
      var _this11 = this;

      var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.userPages = pages;
      this.generatePages().then(function (id) {
        _this11.homepageId = id;
      });
    },
    setHomePage: function setHomePage(homepageId) {
      chrome.storage.local.set(Object(defineProperty["a" /* default */])({}, SM_OPTION_HOMEPAGE_ID, homepageId));
      var homepage = this.userPages.find(function (page) {
        return page.id === homepageId;
      });
      if (homepage && homepage.public_id) chrome.storage.local.set(Object(defineProperty["a" /* default */])({}, SM_OPTION_HOMEPAGE_URL, "/p/".concat(homepage.public_id)));else chrome.storage.local.remove([SM_OPTION_HOMEPAGE_URL]);
    },
    generatePages: function generatePages() {
      var _this12 = this;

      return new Promise(function (resolve) {
        _this12.homepageOptions = _this12.groupPagesByTeams(); // See what page has been selected

        var homepageId = null;
        chrome.storage.local.get([SM_OPTION_HOMEPAGE_ID], function (result) {
          try {
            homepageId = parseInt(result[SM_OPTION_HOMEPAGE_ID]) || null;
          } catch (e) {
            resolve(homepageId);
          } // Make sure there is a homepage


          if (!homepageId && _this12.userPages.length > 0) {
            homepageId = _this12.userPages[0].id;
          }

          resolve(homepageId);
        });
      });
    },
    groupPagesByTeams: function groupPagesByTeams() {
      var userPages = this.userPages.filter(function (p) {
        return !p.is_archived;
      });
      var personalPagesGroup = {
        title: 'Personal Pages',
        pages: userPages.filter(function (page) {
          return !page.organization_id;
        }).map(function (page) {
          return {
            id: page.id,
            label: page.title,
            value: page.id
          };
        })
      };
      var teamsGroups = [];
      var teamPages = userPages.filter(function (page) {
        return !!page.organization_id;
      });
      teamPages.forEach(function (page) {
        var team = teamsGroups.find(function (item) {
          return item.id === page.organization_id;
        });
        var pageOption = {
          id: page.id,
          label: page.title,
          value: page.id
        };

        if (team !== undefined) {
          var index = teamsGroups.findIndex(function (item) {
            return item.title === team.title;
          });
          teamsGroups[index].pages.push(pageOption);
          return;
        }

        teamsGroups.push({
          id: page.organization_id,
          title: page.organization_title,
          pages: [pageOption]
        });
      });
      var groups = [].concat(teamsGroups);
      if (personalPagesGroup.pages.length > 0) groups.unshift(personalPagesGroup);
      return groups;
    },
    emitOpenBookmarks: function emitOpenBookmarks() {
      chrome.runtime.sendMessage({
        message: SM_MESSAGE_OPEN_BOOKMARKS
      });
    },
    setShortcuts: function setShortcuts() {
      var _this13 = this;

      chrome.commands.getAll().then(function () {
        var shortcuts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var browserActionShortcutObject = shortcuts.find(function (sc) {
          return sc.name === '_execute_action';
        });
        var homepageShortcutObject = shortcuts.find(function (sc) {
          return sc.name === 'open_startme_homepage';
        });
        if (browserActionShortcutObject) _this13.browserActionShortcut = browserActionShortcutObject.shortcut;
        if (homepageShortcutObject) _this13.homepageShortcut = homepageShortcutObject.shortcut;
      }).catch(function (err) {});
    },
    getFacebookAvatarUrl: function getFacebookAvatarUrl(url) {
      var isFBUrl = /graph\.facebook\.com\//.test(url);
      if (!isFBUrl) return url;
      return "".concat(url, "?access_token=256485647863321|df5689481a09e57450817f458ebc7cf8");
    },
    checkLink: function checkLink() {
      var _this14 = this;

      return new Promise(function (resolve, reject) {
        _this14.resetLinkExists();

        if (!_this14.url) {
          resolve({});
          return;
        }

        _this14.checkLinkExists({
          url: encodeURIComponent(_this14.url)
        }).then(function () {
          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          if (data.exists && data.exists.length) _this14.setLinkExists(data.exists);
          resolve(data);
        }).catch(reject);
      });
    },
    checkAutosaving: function checkAutosaving() {
      var _this15 = this;

      return new Promise(function (resolve) {
        _this15.checkLinksAutosaving().then(function () {
          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (data.not_logged_in) {
            chrome.runtime.sendMessage({
              message: SM_MESSAGE_SIGN_IN
            });

            _this15.quit();

            resolve();
            return;
          }

          _this15.denyLinksAutosaving = Number(data.deny_links_autosaving);
          if (!data.deny_links_autosaving) _this15.processAutosaveLink();

          _this15.$nextTick(function () {
            _this15.linksAutosavingFetched = true;
            resolve();
          });
        }).catch(function () {
          resolve();
        });
      });
    },
    processChangeLinksAutosaving: function processChangeLinksAutosaving() {
      var _this16 = this;

      var requestData = {
        denyLinksAutosaving: !!this.denyLinksAutosaving
      };
      this.changeLinksAutosaving(requestData).then(function () {
        if (!_this16.denyLinksAutosaving && !_this16.autosavedLink) _this16.processAutosaveLink();
      }).catch(function () {});
    },
    processAutosaveLink: function processAutosaveLink() {
      var _this17 = this;

      this.isAutosaving = true;
      var bookmark = {
        url: this.url,
        title: this.title,
        preventDuplication: true
      };
      this.autosaveLink(bookmark).then(function (data) {
        if (data && data.bookmark) {
          _this17.autosavedLink = data.bookmark;
          _this17.autosavedLink.description = _this17.autosavedLink.description || '';
          _this17.isAlreadyAutosaved = data.exists || false;
        } else {
          _this17.autosavedLinkRemoved = true;
        }

        _this17.isAutosaving = false;
      }).catch(function () {
        _this17.isAutosaving = false;
      });
    },
    setWidgetFieldError: function setWidgetFieldError() {
      this.hasWidgetFieldError = true;
    },
    resetWidgetFieldError: function resetWidgetFieldError() {
      this.hasWidgetFieldError = false;
    },
    activateSettingsTab: function activateSettingsTab(id) {
      this.activeTabId = id || SETTINGS_TABS_ID.SETTINGS;
    },
    handleEscape: function handleEscape() {
      if (this.isSelectExpanded) this.collapseSelect();else this.quit();
    },
    saveID: function saveID(id) {
      this.savedWidgetId = id;
    },
    restoreID: function restoreID() {
      this.newWidgetTitle = '';
      this.newFolderTitle = '';

      if (this.savedWidgetId === null) {
        this.setWidgetId(null);
        return;
      }

      if (typeof this.savedWidgetId === 'number' && this.savedWidgetId > 0) {
        this.setWidgetId(this.savedWidgetId);
        this.savedWidgetId = null;
      } else this.setWidgetId(this.getWidgetDefault());
    },
    initBookmarkForm: function initBookmarkForm() {
      var _this18 = this;

      // Set selected widget ID based on last used widget ID stored in browser storage
      chrome.storage.local.get([LAST_USED_WIDGET_ID_COOKIE_NAME]).then(function () {
        var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (result[LAST_USED_WIDGET_ID_COOKIE_NAME] !== undefined) {
          _this18.selectedWidgetId = result[LAST_USED_WIDGET_ID_COOKIE_NAME];
          _this18.isLoading = false;
          return;
        }

        _this18.isLoading = false;
      }).catch(function (e) {});
    },
    getWidgetDefault: function getWidgetDefault() {
      var pageWithWidgets = null;
      this.pages.some(function (pagesGroup) {
        if (!pagesGroup.value || !pagesGroup.value.length) return false;
        return pagesGroup.value.some(function (page) {
          if (page.value && page.value.length > 1) {
            pageWithWidgets = page;
            return true;
          }

          return false;
        });
      });
      if (!pageWithWidgets) return null;
      if (Array.isArray(pageWithWidgets.value[0].value)) return pageWithWidgets.value[0].value[0].id;
      return pageWithWidgets.value[0].id;
    },
    sendChangesMultiple: function sendChangesMultiple() {
      var _this19 = this;

      if (!this.selectedOpenTabsArray.length) return;
      var bookmarks;

      if (this.selectedWidgetId === null) {
        bookmarks = this.selectedOpenTabs.map(function (tab) {
          return {
            url: tab.url,
            title: tab.title
          };
        });
        this.isSaving = true;

        if (bookmarks.length === 1) {
          this.autosaveLink(bookmarks[0]).then(function () {
            _this19.isSaving = false;

            _this19.setCookieData(null);

            if (_this19.getShouldCloseTabs) chrome.tabs.remove(_this19.selectedOpenTabsArray);

            _this19.quit();
          }).catch(function () {});
          return;
        }

        this.autosaveLinks(bookmarks).then(function () {
          _this19.isSaving = false;

          _this19.setCookieData(null);

          if (_this19.getShouldCloseTabs) chrome.tabs.remove(_this19.selectedOpenTabsArray);

          _this19.quit();
        }).catch(function () {});
        return;
      }

      var isNewGroupOptionSelected = false;
      var selectedWidgetId;
      var folderId;

      if (typeof this.selectedWidgetId === 'string') {
        var parts = this.selectedWidgetId.match(ID_REGEXP);
        if (!parts) return;
        selectedWidgetId = parts[1];
        folderId = parts[2];
        isNewGroupOptionSelected = folderId === NEW_GROUP_ID;
      } else {
        selectedWidgetId = this.selectedWidgetId;
      }

      var page = this.selectedPage;
      bookmarks = this.selectedOpenTabs.map(function (tab) {
        return {
          url: tab.url,
          title: tab.title,
          folderTitle: folderId === NEW_GROUP_ID ? _this19.newFolderTitle || null : null,
          folderId: folderId
        };
      });
      this.isSaving = true;

      if (this.isNewWidgetOptionSelected) {
        var widget = {
          widget_type: 'urllist',
          column: 0,
          title: this.newWidgetTitle
        };
        return this.addWidget({
          pagePublicId: page.publicId,
          pageId: page.id,
          widget: widget
        }).then(function () {
          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          if (data && data.id) _this19.addLinks(page.publicId, data.id, bookmarks);
        });
      } else {
        this.addLinks(page.publicId, selectedWidgetId, bookmarks, folderId, isNewGroupOptionSelected);
      }
    },
    sendChanges: function sendChanges() {
      var _this20 = this;

      if (this.selectedWidgetId === null) {
        this.isSaving = true;

        if (this.autosavedLink) {
          var bookmarkData = this.autosavedLink;
          bookmarkData.url = this.url;
          bookmarkData.title = this.title;
          bookmarkData.description = this.description;
          this.editAutosavedLink({
            id: bookmarkData.item_id,
            bookmarkData: bookmarkData
          }).then(function () {
            _this20.isSaving = false;

            _this20.setCookieData(null);

            _this20.quit();
          }).catch(function () {});
        } else {
          var _bookmarkData = {
            url: this.url,
            title: this.title,
            description: this.description
          };
          this.autosaveLink(_bookmarkData).then(function () {
            _this20.isSaving = false;

            _this20.setCookieData(null);

            _this20.quit();
          }).catch(function () {});
        }

        return;
      }

      var isNewGroupOptionSelected = false;
      var selectedWidgetId;
      var folderId;

      if (typeof this.selectedWidgetId === 'string') {
        var parts = this.selectedWidgetId.match(ID_REGEXP);
        if (!parts) return;
        selectedWidgetId = parts[1];
        folderId = parts[2];
        isNewGroupOptionSelected = folderId === NEW_GROUP_ID;
      } else {
        selectedWidgetId = this.selectedWidgetId;
      }

      var page = this.selectedPage;
      var bookmark = {
        url: this.url,
        title: this.title,
        folderTitle: folderId === NEW_GROUP_ID ? this.newFolderTitle || null : null,
        folderId: folderId
      };
      if (this.description) bookmark.description = this.description;
      if (this.autosavedLink && this.autosavedLink.item_id) bookmark.unsortedId = this.autosavedLink.item_id;
      this.isSaving = true;

      if (this.isNewWidgetOptionSelected) {
        var widget = {
          widget_type: 'urllist',
          column: 0,
          title: this.newWidgetTitle
        };
        return this.addWidget({
          pagePublicId: page.publicId,
          pageId: page.id,
          widget: widget
        }).then(function () {
          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          if (data && data.id) _this20.addLink(page.publicId, data.id, bookmark);
        });
      } else {
        this.addLink(page.publicId, selectedWidgetId, bookmark, folderId, isNewGroupOptionSelected);
      }
    },
    setCookieData: function setCookieData(widgetId, folderId) {
      if (widgetId === null) chrome.storage.local.set(Object(defineProperty["a" /* default */])({}, LAST_USED_WIDGET_ID_COOKIE_NAME, null));else {
        var savedId = folderId ? "".concat(widgetId, "_").concat(folderId) : Number(widgetId);
        chrome.storage.local.set(Object(defineProperty["a" /* default */])({}, LAST_USED_WIDGET_ID_COOKIE_NAME, savedId));
      }
    },
    addLink: function addLink(publicId, widgetId, bookmark, folderId) {
      var _this21 = this;

      var isNewGroup = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      // Store used widget ID in cookie, so same widget is selected by default next time
      if (!isNewGroup) this.setCookieData(widgetId, folderId);
      this.addNewBookmark({
        widgetId: widgetId,
        bookmark: bookmark
      }).then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _this21.isSaving = false;
        if (isNewGroup && data.group_id) _this21.setCookieData(widgetId, data.group_id);
        if (_this21.isNewWidgetOptionSelected || isNewGroup) _this21.refreshPagesList();

        _this21.quit();
      });
    },
    addLinks: function addLinks(publicId, widgetId, bookmarks, folderId) {
      var _this22 = this;

      var isNewGroup = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      // Store used widget ID in cookie, so same widget is selected by default next time
      if (!isNewGroup) this.setCookieData(widgetId, folderId);
      this.addBookmarksBatch({
        widgetId: widgetId,
        bookmarks: bookmarks
      }).then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _this22.isSaving = false;
        if (isNewGroup && data.group_id) _this22.setCookieData(widgetId, data.group_id);
        if (_this22.isNewWidgetOptionSelected || isNewGroup) _this22.refreshPagesList();
        if (_this22.getShouldCloseTabs) chrome.tabs.remove(_this22.selectedOpenTabsArray);

        _this22.quit();
      });
    },
    quit: function quit() {
      // In mobile browsers that don't close the window, show the bookmarked page
      if (window.location && window.location.replace) window.location.replace(this.url);
      window.close();
    },
    refreshPagesList: function refreshPagesList() {
      var _this23 = this;

      this.isRefreshing = true;
      this.fetchAllPages({
        isRequestForced: true,
        noCache: true
      }).then(function () {
        _this23.isRefreshing = false;
        _this23.usedCache = false;
      }).catch(function () {
        _this23.isRefreshing = false;
      });
    },
    setWidgetId: function setWidgetId(newID) {
      var oldID = this.selectedWidgetId;
      if (newID === oldID) return;
      this.saveID(oldID);
      this.selectedWidgetId = newID;
    },
    openAdditionalFields: function openAdditionalFields() {
      this.showAdditionalFields = true;
    },
    closeAdditionalFields: function closeAdditionalFields() {
      this.showAdditionalFields = false;
    },
    expandSelect: function expandSelect() {
      this.resetWidgetFieldError();
      this.isSelectExpanded = true;
    },
    collapseSelect: function collapseSelect() {
      this.filterString = '';
      this.isSelectExpanded = false;
    },
    openBookmarksImporting: function openBookmarksImporting() {
      this.isImportingBookmarks = true;
    },
    closeBookmarksImporting: function closeBookmarksImporting() {
      this.isImportingBookmarks = false;
    },
    openPreferencesEditing: function openPreferencesEditing() {
      this.isEditingPreferences = true;
    },
    closePreferencesEditing: function closePreferencesEditing() {
      if (!this.isOptionsScreen) this.isEditingPreferences = false;
    },
    setLinkExists: function setLinkExists() {
      var existData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.linkExists = existData;
    },
    resetLinkExists: function resetLinkExists() {
      this.linkExists = null;
    },
    removeAutosaved: function removeAutosaved() {
      if (!this.autosavedLink) return;
      this.removeAutosavedLink(this.autosavedLink.item_id);
      this.autosavedLink = null;
      this.autosavedLinkRemoved = true;
    },
    initImport: function initImport() {
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
        if (granted) chrome.runtime.sendMessage({
          message: SM_MESSAGE_IMPORT
        });
      }).catch(function () {});
    },
    emitSignOut: function emitSignOut() {
      if (!this.getUserData) return;
      var isAnonymous = this.getUserData.is_anonymous || this.getUserData.dummy_email;

      if (!isAnonymous || window.confirm(this.$t('logout_confirm').message)) {
        this.resetAll();
        chrome.runtime.sendMessage({
          message: SM_MESSAGE_SIGN_OUT
        });
      }
    },
    resetAll: function resetAll() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.newWidgetTitle = '';
      this.newFolderTitle = '';
      this.savedWidgetId = null;
      this.selectedWidgetId = null;
      this.homepageId = null;
      this.userPages = [];
      this.homepageOptions = [];
      this.$store.dispatch('clearStorage');
      chrome.storage.local.set(Object(defineProperty["a" /* default */])({}, LAST_USED_WIDGET_ID_COOKIE_NAME, null));
      if (options.fetchPages) this.refreshPagesList();
    },
    openChangeShortcuts: function openChangeShortcuts() {
      if (WINDOW_CURRENT_BROWSER === 'firefox') chrome.tabs.create({
        url: 'https://support.start.me/hc/en-us/articles/360018117140'
      });else chrome.tabs.create({
        url: 'chrome://extensions/shortcuts'
      });
      this.quit();
    },
    showHelpPage: function showHelpPage() {
      chrome.runtime.sendMessage({
        message: SM_MESSAGE_SHOW_HELP_PAGE
      });
      this.quit();
    },
    clearCache: function clearCache() {
      var _this24 = this;

      this.isClearingCache = true;
      chrome.runtime.sendMessage({
        message: SM_MESSAGE_CLEAR_CACHE
      });
      this.resetAll({
        fetchPages: true
      });
      setTimeout(function () {
        _this24.isClearingCache = false;
      }, 2000);
      this.initPages();
    },
    checkTabsPermission: function checkTabsPermission() {
      var _this25 = this;

      chrome.permissions.contains({
        permissions: ['tabs']
      }).then(function (granted) {
        if (granted) {
          return Promise.resolve(true);
        } else {
          return Promise.reject('No Tabs permission granted');
        }
      }).then( /*#__PURE__*/function () {
        var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(granted) {
          var current, allTabs;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!granted) {
                    _context4.next = 9;
                    break;
                  }

                  _context4.next = 3;
                  return chrome.windows.getCurrent();

                case 3:
                  current = _context4.sent;
                  _context4.next = 6;
                  return chrome.tabs.query({});

                case 6:
                  allTabs = _context4.sent;
                  _this25.openTabsArray = allTabs.filter(function (tab) {
                    return tab.windowId === current.id;
                  });
                  _this25.isTabsPermissionGranted = true;

                case 9:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()).catch(function () {});
    },
    requestTabsPermission: function requestTabsPermission() {
      var _this26 = this;

      chrome.permissions.request({
        permissions: ['tabs']
      }).then( /*#__PURE__*/function () {
        var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(granted) {
          var current, allTabs;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!granted) {
                    _context5.next = 9;
                    break;
                  }

                  _context5.next = 3;
                  return chrome.windows.getCurrent();

                case 3:
                  current = _context5.sent;
                  _context5.next = 6;
                  return chrome.tabs.query({});

                case 6:
                  allTabs = _context5.sent;
                  _this26.openTabsArray = allTabs.filter(function (tab) {
                    return tab.windowId === current.id;
                  });
                  _this26.isTabsPermissionGranted = true;

                case 9:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }()).catch(function () {});
    },
    openOpenTabsScreen: function openOpenTabsScreen() {
      if (!this.isTabsPermissionGranted) {
        this.requestTabsPermission();
        return;
      }

      this.isOpenTabsOpened = true;
    },
    closeOpenTabsScreen: function closeOpenTabsScreen() {
      this.isOpenTabsOpened = false;
    },
    toggleOpenTabSelected: function toggleOpenTabSelected() {
      var tab = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (this.selectedOpenTabsArray.includes(tab.id)) this.selectedOpenTabsArray = this.selectedOpenTabsArray.filter(function (id) {
        return id !== tab.id;
      });else this.selectedOpenTabsArray.push(tab.id);
    },
    toggleSelectAllTabs: function toggleSelectAllTabs() {
      if (this.allOpenTabsSelected) this.selectedOpenTabsArray = [];else this.selectedOpenTabsArray = this.openTabsArray.map(function (tab) {
        return tab.id;
      });
    },
    getOpenTabIcon: function getOpenTabIcon() {
      var openTab = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (openTab.favIconUrl) return openTab.favIconUrl;

      try {
        var url = new URL(openTab.url);
        return "https://f.start.me/".concat(url.hostname);
      } catch (e) {
        return 'https://f.start.me/fa/bookmark';
      }
    },
    getBookmarkIcon: function getBookmarkIcon() {
      try {
        var url = new URL(this.url);
        return "https://f.start.me/".concat(url.hostname);
      } catch (e) {
        return 'https://f.start.me/fa/bookmark';
      }
    },
    showUserMenu: function showUserMenu() {
      this.isUserMenuVisible = true;
    },
    hideUserMenu: function hideUserMenu() {
      this.isUserMenuVisible = false;
    }
  })
});
// CONCATENATED MODULE: ./src/components/AddBookmarkPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AddBookmarkPagevue_type_script_lang_js_ = (AddBookmarkPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/AddBookmarkPage.vue?vue&type=style&index=0&lang=scss&
var AddBookmarkPagevue_type_style_index_0_lang_scss_ = __webpack_require__("ca844");

// CONCATENATED MODULE: ./src/components/AddBookmarkPage.vue






/* normalize component */

var AddBookmarkPage_component = Object(componentNormalizer["a" /* default */])(
  components_AddBookmarkPagevue_type_script_lang_js_,
  AddBookmarkPagevue_type_template_id_7013b504_render,
  AddBookmarkPagevue_type_template_id_7013b504_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddBookmarkPage = (AddBookmarkPage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/popup/App.vue?vue&type=script&lang=js&









var SM_MESSAGE_CONTEXT_LINK = 'contextLinkRequest';
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'PopupApp',
  components: {
    Bookmarklet: AddBookmarkPage
  },
  data: function data() {
    return {
      propUrl: '',
      propTitle: '',
      hideOpenTabs: false
    };
  },
  computed: {
    isOptionsScreen: function isOptionsScreen() {
      var re = /^chrome-extension:\/\/(\S+)\/popup.html#options$/;
      return re.test(window.location.href);
    }
  },
  beforeMount: function beforeMount() {
    this.requireUser();
  },
  methods: {
    requireUser: function requireUser() {
      var _this = this;

      this.$startme.requireUser().then(function (user) {
        if (!_this.$store.state.user || _this.$store.state.user.id && user && user.id && _this.$store.state.user.id !== user.id) {
          _this.$store.dispatch('clearAllPages');

          _this.$startme.clearPages();
        }

        _this.$store.dispatch('setUser', user);

        if (_this.isOptionsScreen) return;

        _this.requestContextLink().catch(function () {
          chrome.tabs.query({
            active: true,
            currentWindow: true
          }).then(function (tabs) {
            var tab = tabs[0];

            if (tab) {
              var url = tab.url,
                  title = tab.title;
              if (!url) return;
              _this.propUrl = (url || '').replace(/\/+$/, "");
              _this.propTitle = title || _this.getHostname(url);
            }
          }).catch(function () {});
        });
      }).catch(function () {});
    },
    requestContextLink: function requestContextLink() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        chrome.runtime.sendMessage({
          message: SM_MESSAGE_CONTEXT_LINK
        }).then(function (link) {
          if (link && link.url) {
            _this2.propUrl = link.url.replace(/\/+$/, "");
            _this2.propTitle = link.title || _this2.getHostname(link.url);
            _this2.hideOpenTabs = true;
            resolve();
          } else reject();
        }).catch(reject);
      });
    },
    getHostname: function getHostname(url) {
      try {
        var urlObj = new URL(url);
        return urlObj.hostname || url;
      } catch (e) {
        return url;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/popup/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/popup/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__("5df5");

// CONCATENATED MODULE: ./src/popup/App.vue






/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  popup_Appvue_type_script_lang_js_,
  Appvue_type_template_id_2269eeb2_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// EXTERNAL MODULE: ./node_modules/vue-textarea-autosize/dist/vue-textarea-autosize.esm.js
var vue_textarea_autosize_esm = __webpack_require__("3f9d");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./src/store/index.js
var store = __webpack_require__("4360");

// EXTERNAL MODULE: ./Startme.js
var Startme = __webpack_require__("0cb6");

// CONCATENATED MODULE: ./src/popup/main.js










 // Global event bus: https://medium.com/@jilsonthomas/create-a-global-event-bus-in-vue-js-838a5d9ab03a

vue_runtime_esm["a" /* default */].prototype.$eventBus = new vue_runtime_esm["a" /* default */]();
vue_runtime_esm["a" /* default */].prototype.$startme = Startme["a" /* default */];
vue_runtime_esm["a" /* default */].use(vue_textarea_autosize_esm["a" /* default */]);
vue_runtime_esm["a" /* default */].axios = axios_default.a;
/* eslint-disable no-new */

new vue_runtime_esm["a" /* default */]({
  el: '#app',
  i18n: i18n["a" /* i18n */],
  store: store["a" /* store */],
  render: function render(h) {
    return h(App);
  }
});

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0a3d");


/***/ }),

/***/ "1789":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "21d0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchableSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1789");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchableSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchableSelect_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2ef1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3ab0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5df5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7c00");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "635e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggler_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b159");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggler_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Toggler_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "74d8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreeDotsSpinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3ab0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreeDotsSpinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThreeDotsSpinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7653":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0465");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7c00":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "af4d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b159":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ca844":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBookmarkPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2ef1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBookmarkPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBookmarkPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d1de":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarkdownTextarea_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("083e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarkdownTextarea_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarkdownTextarea_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ });
//# sourceMappingURL=popup.31498d16.js.map