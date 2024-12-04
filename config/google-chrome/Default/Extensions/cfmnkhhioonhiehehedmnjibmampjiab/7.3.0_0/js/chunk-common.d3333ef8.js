(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-common"],{

/***/ "0cb6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_frontman23_projects_yourls_extensions_chrome_vue_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("53ca");
/* harmony import */ var _home_frontman23_projects_yourls_extensions_chrome_vue_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d4ec");
/* harmony import */ var _home_frontman23_projects_yourls_extensions_chrome_vue_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bee2");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("e9c4");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("498a");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("5319");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__);









var PRIMARY_DOMAIN = 'start.me'; // const PRIMARY_DOMAIN = 'beta.start.me'
// const SM_PRIMARY_LOCATION = 'http://localhost:5000'

var SM_PRIMARY_LOCATION = 'https://' + PRIMARY_DOMAIN;
var SM_API_LOCATION = SM_PRIMARY_LOCATION;
var EXTENSION_TYPE = 'newtab';
var CURRENT_BROWSER = 'chrome';
var CURRENT_VERSION = '7.3';
var SM_OPTION_HOMEPAGE_ID = 'homepageId';
var SM_OPTION_HOMEPAGE_URL = 'homepageUrl';
var SM_MESSAGE_SIGN_IN = 'signIn';
var SM_MESSAGE_SIGNED_IN = 'signedInToStartme';
var SM_MESSAGE_OPEN_OPTIONS_PAGE = 'openOptionsPage'; // const MIN_EXTENSION_INFO_UPDATE_DELAY = 60 * 1000 // 1 min

var MIN_EXTENSION_INFO_UPDATE_DELAY = 3 * 60 * 60 * 1000; // 3 hours

var StartmeClass = /*#__PURE__*/function () {
  function StartmeClass() {
    Object(_home_frontman23_projects_yourls_extensions_chrome_vue_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, StartmeClass);

    this.MINUTE = 60 * 1000;
    this.lastExtensionInfoUpdated = 0;
    this.USER_FALLBACK_LOCALE = 'en_US';
  }
  /**
   * Constructs an API call URL
   * @param path
   * @returns {string}
   */


  Object(_home_frontman23_projects_yourls_extensions_chrome_vue_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(StartmeClass, [{
    key: "apiURL",
    value: function apiURL() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return SM_API_LOCATION + path;
    }
    /**
     * Constructs a URL to navigate to the primary start.me domain
     * @param path
     * @returns {string}
     */

  }, {
    key: "primaryURL",
    value: function primaryURL() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return SM_PRIMARY_LOCATION + path;
    }
    /**
     * Creates a new element.
     * @note The classes, attributes, text and child parameters are optional and can appear in random order, with the exception
     * of the text parameter, which should always occur after at least one attributes parameter
     * @param {Element} [parent]
     * @param {string} tag
     * @param {string} [classes]
     * @param {{}} [attributes]
     * @param {string} [text] Text to add to child node (only works when attributes option was specified as well)
     * @param {Element} [child]
     * @returns {Element}
     */

  }, {
    key: "crel",
    value: function
      /* parent, tag, classes, attributes, text, child */
    crel() {
      // Parse parameters; use arguments directly rather than converting to array, to make sure V8 optimizations can take place
      var argc = arguments.length,
          argp = 0,
          tag = arguments[argp++],
          parent = null;

      if (Object(_home_frontman23_projects_yourls_extensions_chrome_vue_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(tag) == "object") {
        parent = tag;
        tag = arguments[argp++];
      } // Create element and optionally append to parent


      var element = document.createElement(tag); // Iterate other parameters

      var sawAttributes = false;

      while (argp <= argc) {
        var arg = arguments[argp++];

        switch (Object(_home_frontman23_projects_yourls_extensions_chrome_vue_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arg)) {
          case 'string':
            if (sawAttributes) {
              // Add a text node
              element.appendChild(document.createTextNode(arg));
            } else {
              // Add a class
              element.classList.add(arg);
            }

            break;

          case 'object':
            if (arg == null) {// Do nothing
            } else if (arg.nodeType) {
              // Assume Node
              element.appendChild(arg);
            } else {
              // Assume attributes object
              sawAttributes = true;

              for (var attr in arg) {
                element.setAttribute(attr, arg[attr]);
              }
            }

            break;
        }
      }

      if (parent) parent.appendChild(element);
      return element;
    }
    /**
     * Converts a plain object into a form data structure
     * @param object
     * @returns {FormData}
     */

  }, {
    key: "formData",
    value: function formData(object) {
      var data = new FormData();

      for (var property in object) {
        if (object.hasOwnProperty(property)) data.set(property, object[property]);
      }

      return data;
    }
    /**
     * Returns the current time
     */

  }, {
    key: "now",
    value: function now() {
      return new Date().valueOf();
    }
    /**
     * Returns the current user
     * @param noCache
     * @returns {Promise}
     */

  }, {
    key: "getUser",
    value: function getUser(noCache) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        // Consult cache
        var cachedUser = false;
        chrome.storage.local.get(['cachedUser'], function (result) {
          try {
            cachedUser = JSON.parse(result.cachedUser);
            if (Object(_home_frontman23_projects_yourls_extensions_chrome_vue_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cachedUser) != 'object') cachedUser = false;
          } catch (e) {
            cachedUser = false;
          } // See if we need to fetch


          var fetchNeeded = noCache || !cachedUser || _this.now() - cachedUser.timestamp > 20 * _this.MINUTE; // See if cache is still fresh


          if (!fetchNeeded) return done(cachedUser.user);

          var url = _this.apiURL('/logged_in');

          if (_this.checkExtensionInfoTimestampExpired()) {
            url += "?extension_type=".concat(EXTENSION_TYPE, "&browser=").concat(CURRENT_BROWSER, "&version=").concat(CURRENT_VERSION);

            _this.updateExtensionInfoTimestamp();
          }

          fetch(url, {
            credentials: 'include'
          }).then(function (response) {
            if (response.status != 200) return reject();
            response.json().then(function (data) {
              var dataToStore = JSON.stringify({
                user: data.user,
                timestamp: _this.now()
              }); // Store user data in cache

              chrome.storage.local.set({
                cachedUser: dataToStore
              }, function () {});
              done(data.user);
            });
          }).catch(function (error) {
            // Clear cache
            _this.clearCache();

            reject();
          });
        });

        function done(user) {
          if (user) resolve(user);else reject();
        }
      });
    }
    /**
     * Removes cached data from storage.
     */

  }, {
    key: "clearCache",
    value: function clearCache() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      chrome.storage.local.remove(['cachedUser', 'cachedPages', 'cachedUserPages', 'backgroundImage', 'backgroundColor', SM_OPTION_HOMEPAGE_URL]);

      if (!options.keepHomepage) {
        chrome.storage.local.remove([SM_OPTION_HOMEPAGE_ID]);
      }
    }
    /**
     * Removes cached data from storage.
     */

  }, {
    key: "clearPages",
    value: function clearPages() {
      chrome.storage.local.remove(['cachedPages', 'cachedUserPages', 'backgroundImage', 'backgroundColor', SM_OPTION_HOMEPAGE_URL, SM_OPTION_HOMEPAGE_ID]);
    }
    /**
     * Requires a user to be signed in. Offers the user the chance to sign in.
     * @param noCache
     */

  }, {
    key: "requireUser",
    value: function requireUser(noCache) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.getUser(noCache).then(resolve).catch(function (err) {
          chrome.runtime.sendMessage({
            message: SM_MESSAGE_SIGN_IN
          }, function (success) {
            if (!success) return reject(); // Wait for signal 'signed in'

            chrome.runtime.onMessage.addListener(function (message) {
              if (message.message == SM_MESSAGE_SIGNED_IN) {
                // Make sure user is signed in
                _this2.getUser(true
                /* No caching */
                ).then(resolve).catch(reject);
              }
            });
          });
        });
      });
    }
    /**
     * Indicates whether currently logged in
     * @returns {Promise}
     * @deprecated
     */

  }, {
    key: "ifLoggedIn",
    value: function ifLoggedIn() {
      return this.getUser();
    }
    /**
     * Attempts to create an anonymous user
     */

  }, {
    key: "createAnonymousUser",
    value: function createAnonymousUser() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        fetch(_this3.primaryURL("/users/new/anonymous.json?skip_default_page=true&utm_medium=extension&utm_source=".concat(CURRENT_BROWSER)), {
          method: 'POST',
          credentials: 'include'
        }).then(function (response) {
          if (response.status != 201
          /* Created */
          ) return reject();
          return response.json();
        }).then(function (user) {
          return resolve(user);
        }).catch(reject);
      });
    }
    /**
     * Updates the specified properties of the current user
     * @param properties
     * @returns {Promise}
     */

  }, {
    key: "updateUser",
    value: function updateUser(properties) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        // Create body
        var data = new FormData();

        for (var property in properties) {
          if (!properties.hasOwnProperty(property)) continue;
          data.set("user[".concat(property, "]"), properties[property]);
        } // Perform update


        fetch(_this4.primaryURL('/users/edit.json'), {
          method: 'PUT',
          credentials: 'include',
          body: data
        }).then(function (response) {
          switch (response.status) {
            case 200:
              response.json().then(function (user) {
                return resolve(user);
              }).catch(reject);
              break;

            case 400:
              // Validation error
              response.json().then(function (errors) {
                return reject(errors);
              }).catch(reject);
              break;

            default:
              reject();
          }
        }).catch(reject);
      });
    }
    /**
     * Opens the options page
     * @returns {Promise}
     */

  }, {
    key: "openOptionsPage",
    value: function openOptionsPage() {
      return new Promise(function (resolve, reject) {
        chrome.runtime.sendMessage({
          message: SM_MESSAGE_OPEN_OPTIONS_PAGE
        }, function (response) {
          if (response === true) resolve();else reject();
        });
      });
    }
    /**
     * Converts window.setTimeout to a Promiss
     * @param duration
     * @returns {Promise}
     */

  }, {
    key: "timeout",
    value: function timeout() {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return new Promise(function (resolve, reject) {
        setTimeout(resolve, duration);
      });
    }
    /**
     * Simple string hash method. Inspired by Java's String.hashCode() method
     * (http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/)
     * @param s String to be hashed
     */

  }, {
    key: "hashCode",
    value: function hashCode(s) {
      var hash = 0,
          char,
          length = s.length;
      if (length == 0) return hash;

      for (var i = 0; i < length; i++) {
        char = s.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash &= 0x7FFFFFFF; // Convert to 31bit integer to prevent sign issues
      }

      return hash;
    }
    /**
     * Shuffles the items in the specified array using the Fisher–Yates algorithm
     * @param items
     */

  }, {
    key: "shuffle",
    value: function shuffle(items) {
      var itemCount = items.length;

      for (var i = itemCount - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));

        if (i != j) {
          var temp = items[i];
          items[i] = items[j];
          items[j] = temp;
        }
      }

      return items;
    }
    /**
     * Attempt to build a meaningful title from a URL
     * @param {string} url
     * @returns {string}
     */

  }, {
    key: "titleFromUrl",
    value: function titleFromUrl(url) {
      // Return a cleaned up version of the URL:
      // - hostname (without www)
      // - pathname (without extension; all none alphanumerical characters removed, every word capitalized)
      var parser = this.crel('a', {
        href: url
      });
      var host = parser.hostname.replace(/^www\.([a-z]?)/, function (match, cap) {
        return cap.toUpperCase();
      }).trim();
      var path = parser.pathname.replace(/(index)?\.\w+$/, '').replace(/[^a-z0-9]+([a-z]?)/g, function (match, cap) {
        return ' ' + cap.toUpperCase();
      }).trim();
      if (path) return "".concat(host, ": ").concat(path);else return host;
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return chrome.i18n.getMessage('@@ui_locale').toLowerCase();
    }
  }, {
    key: "optionsOpenedInTab",
    value: function optionsOpenedInTab() {
      if (CURRENT_BROWSER == 'firefox') return true;
      return chrome.runtime.getManifest().options_ui.open_in_tab;
    }
  }, {
    key: "updateExtensionInfoTimestamp",
    value: function updateExtensionInfoTimestamp() {
      this.lastExtensionInfoUpdated = Date.now();
    }
  }, {
    key: "checkExtensionInfoTimestampExpired",
    value: function checkExtensionInfoTimestampExpired() {
      return Date.now() - this.lastExtensionInfoUpdated >= MIN_EXTENSION_INFO_UPDATE_DELAY;
    }
  }]);

  return StartmeClass;
}();

var Startme = new StartmeClass();
/* harmony default export */ __webpack_exports__["a"] = (Startme);

/***/ }),

/***/ "0d7b":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar/messages.json": [
		"c485",
		"chunk-2d216be4"
	],
	"./cs/messages.json": [
		"6205",
		"chunk-2d0ceeb7"
	],
	"./da/messages.json": [
		"dfb1",
		"chunk-2d22a107"
	],
	"./de/messages.json": [
		"36fc",
		"chunk-2d0ba756"
	],
	"./el/messages.json": [
		"7214",
		"chunk-2d0d6334"
	],
	"./en/messages.json": [
		"d76a"
	],
	"./es/messages.json": [
		"ac5f",
		"chunk-2d213369"
	],
	"./es_AR/messages.json": [
		"7de9",
		"chunk-2d0e2537"
	],
	"./fi/messages.json": [
		"50cb",
		"chunk-2d0c7930"
	],
	"./fr/messages.json": [
		"36aa",
		"chunk-2d0ba6b9"
	],
	"./he/messages.json": [
		"052b",
		"chunk-2d0a402b"
	],
	"./hi/messages.json": [
		"dbc6",
		"chunk-2d229227"
	],
	"./hu/messages.json": [
		"4335",
		"chunk-2d0c0a17"
	],
	"./id/messages.json": [
		"429d",
		"chunk-2d0c073f"
	],
	"./it/messages.json": [
		"3201",
		"chunk-2d0b9196"
	],
	"./ja/messages.json": [
		"f9a2",
		"chunk-2d22e0ba"
	],
	"./ko/messages.json": [
		"1cc5",
		"chunk-2d0b66fa"
	],
	"./ms/messages.json": [
		"765a",
		"chunk-2d0d72e1"
	],
	"./nl/messages.json": [
		"4cb8",
		"chunk-2d0cc3fb"
	],
	"./no/messages.json": [
		"cc05",
		"chunk-2d221b5b"
	],
	"./pl/messages.json": [
		"c682",
		"chunk-2d217363"
	],
	"./pt/messages.json": [
		"e3de",
		"chunk-2d225665"
	],
	"./pt_BR/messages.json": [
		"ba47",
		"chunk-2d219ff8"
	],
	"./ro/messages.json": [
		"ca4e",
		"chunk-2d221485"
	],
	"./ru/messages.json": [
		"2412",
		"chunk-2d0b24d9"
	],
	"./sr/messages.json": [
		"e804",
		"chunk-2d2262ad"
	],
	"./sv/messages.json": [
		"c4f6",
		"chunk-2d217177"
	],
	"./th/messages.json": [
		"3a99",
		"chunk-2d0c4324"
	],
	"./tr/messages.json": [
		"8f07",
		"chunk-2d0e9aab"
	],
	"./vi/messages.json": [
		"4aef",
		"chunk-2d0cbd04"
	],
	"./zh/messages.json": [
		"607a",
		"chunk-2d0ce83a"
	],
	"./zh_CN/messages.json": [
		"391d",
		"chunk-2d0bac2f"
	],
	"./zh_TW/messages.json": [
		"7434",
		"chunk-2d0d6af4"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "0d7b";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "12cb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ i18n; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ setInterfaceLanguage; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
var vue_i18n_esm = __webpack_require__("a925");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./src/config/bookmarklet.js
var bookmarklet = __webpack_require__("af8c");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/messageformat/messageformat.js
var messageformat = __webpack_require__("aa45");
var messageformat_default = /*#__PURE__*/__webpack_require__.n(messageformat);

// CONCATENATED MODULE: ./src/i18n/CustomFormatter.js






var CustomFormatter_PluralizationFormatter = /*#__PURE__*/function () {
  function PluralizationFormatter() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(classCallCheck["a" /* default */])(this, PluralizationFormatter);

    this._locale = options.locale || 'en-US';
    this._formatter = new messageformat_default.a(this._locale);
    this._caches = Object.create(null);
  }

  Object(createClass["a" /* default */])(PluralizationFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      // Replace variable definition "{{count}}" with "{count}"; "%{count}" with "{count}"
      message = message.replace(/{{|}}|%{|'%{|'{{|}}'/g, function (m) {
        return {
          '{{': '{',
          '}}': '}',
          '%{': '{',
          // Properly escape single quotes
          "'%{": "''{",
          "'{{": "''{",
          "}}'": "}''"
        }[m];
      });
      var fn = this._caches[message];

      if (!fn) {
        fn = this._formatter.compile(message, this._locale);
        this._caches[message] = fn;
      }

      return [fn(values)];
    }
  }]);

  return PluralizationFormatter;
}();


// EXTERNAL MODULE: ./src/store/index.js
var store = __webpack_require__("4360");

// EXTERNAL MODULE: ./src/_locales/en/messages.json
var messages = __webpack_require__("d76a");

// CONCATENATED MODULE: ./src/i18n/index.js













var locale = bookmarklet["a" /* default */].fallbackLocale;
var loadedLanguages = [bookmarklet["a" /* default */].fallbackLocale]; // our default language that is preloaded
// Always include the translations for the default language

var translations = messages;

var i18n_messages = Object(defineProperty["a" /* default */])({}, locale, translations);

vue_runtime_esm["a" /* default */].use(vue_i18n_esm["a" /* default */]);
var i18n = new vue_i18n_esm["a" /* default */]({
  locale: locale,
  messages: i18n_messages,
  fallbackLocale: bookmarklet["a" /* default */].fallbackLocale,
  formatter: new CustomFormatter_PluralizationFormatter({
    locale: locale
  }),
  silentTranslationWarn: true
});
/**
 * Handler for switching to a different language
 * @param {String} lang
 */

function setInterfaceLanguage(lang) {
  store["a" /* store */].dispatch('setInterfaceLanguage', lang).then(function () {
    return loadLanguageAsync(lang);
  }); // Load main translation files
}
/**
 * Lazy-load a language
 *
 * @see https://kazupon.github.io/vue-i18n/guide/lazy-loading.html
 *
 * @param {String} lang
 */

function loadLanguageAsync(lang) {
  // If current lang is the requested lang to lazy load, return it
  if (!lang || i18n.locale === lang) return Promise.resolve(lang); // If the requested lang is already (lazy-)loaded, set it as 'active'

  if (loadedLanguages.includes(lang)) return Promise.resolve(setI18nLanguage(lang)); // Fall back to English when requesting an unsupported language

  if (!bookmarklet["a" /* default */].supportedLocales.includes(lang)) return Promise.resolve(setI18nLanguage('en')); // Fetch translation files for requested lang

  return new Promise(function (resolve, reject) {
    __webpack_require__("0d7b")("./".concat(lang, "/messages.json")).then(function (translations) {
      if (!translations) return;
      var allMessages = translations;
      i18n_messages[lang] = translations;
      i18n.setLocaleMessage(lang, allMessages);
      loadedLanguages.push(lang);
      resolve(setI18nLanguage(lang));
    }).catch(function () {}); // Ignore errors; we'll fall back to English
  });
}
/**
 * Set the provided lang as the active language, in vue-i18n, Axios & the DOM
 *
 * @param {String} lang
 * @return {String}
 */


function setI18nLanguage(lang) {
  i18n.locale = lang;
  axios_default.a.defaults.headers.common['Accept-Language'] = lang;
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

/***/ }),

/***/ "4360":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
/* harmony import */ var _home_frontman23_projects_yourls_extensions_chrome_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2909");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4de4");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4e82");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("07ac");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("2b0e");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("2f62");
/* harmony import */ var vuex_persistedstate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("0e44");
/* harmony import */ var _ApiService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("f027");













vue__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].use(vuex__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"]);
var initialState = {
  provide: function provide() {
    return {
      allPagesAccessTimestamp: null,
      allPages: [],
      userPages: [],
      interfaceLanguage: null,
      user: null,
      shouldCloseTabs: false
    };
  }
};
var store = new vuex__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].Store({
  state: initialState.provide(),
  actions: {
    clearStorage: function clearStorage(_ref) {
      var commit = _ref.commit;
      commit('clearStorage');
    },
    setInterfaceLanguage: function setInterfaceLanguage(_ref2, locale) {
      var commit = _ref2.commit;
      commit('setInterfaceLanguage', locale);
    },
    addWidget: function addWidget(_ref3, _ref4) {
      var state = _ref3.state,
          commit = _ref3.commit;
      var widget = _ref4.widget,
          pageId = _ref4.pageId,
          targetWidgetId = _ref4.targetWidgetId;
      return new Promise(function (resolve, reject) {
        _ApiService__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].addWidget({
          widget: widget,
          pageId: pageId,
          targetWidgetId: targetWidgetId
        }).then(function (data) {
          commit('clearAllPagesAccessTimestamp');
          resolve(data);
        }).catch(reject);
      });
    },
    checkLinkExists: function checkLinkExists(_ref5, requestData) {
      var commit = _ref5.commit;
      return new Promise(function (resolve, reject) {
        _ApiService__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].checkLinkExists(requestData).then(resolve).catch(reject);
      });
    },
    checkLinksAutosaving: function checkLinksAutosaving() {
      return new Promise(function (resolve, reject) {
        _ApiService__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].checkLinksAutosaving().then(resolve).catch(reject);
      });
    },
    changeLinksAutosaving: function changeLinksAutosaving(context, requestData) {
      return new Promise(function (resolve, reject) {
        _ApiService__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].changeLinksAutosaving(requestData).then(resolve).catch(reject);
      });
    },
    autosaveLink: function autosaveLink(context, bookmarkData) {
      return new Promise(function (resolve, reject) {
        _ApiService__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].autosaveLink(bookmarkData).then(resolve).catch(reject);
      });
    },
    autosaveLinks: function autosaveLinks(context, bookmarksData) {
      return new Promise(function (resolve, reject) {
        _ApiService__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].autosaveLinks(bookmarksData).then(resolve).catch(reject);
      });
    },
    editAutosavedLink: function editAutosavedLink(context, _ref6) {
      var id = _ref6.id,
          bookmarkData = _ref6.bookmarkData;
      return new Promise(function (resolve, reject) {
        _ApiService__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].editAutosavedLink(id, bookmarkData).then(resolve).catch(reject);
      });
    },
    removeAutosavedLink: function removeAutosavedLink(context, id) {
      return new Promise(function (resolve, reject) {
        _ApiService__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].removeAutosavedLink(id).then(resolve).catch(reject);
      });
    },
    addNewBookmark: function addNewBookmark(context, _ref7) {
      var widgetId = _ref7.widgetId,
          bookmark = _ref7.bookmark;
      return new Promise(function (resolve, reject) {
        _ApiService__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].addNewBookmark(widgetId, bookmark).then(resolve).catch(reject);
      });
    },
    addBookmarksBatch: function addBookmarksBatch(context, _ref8) {
      var widgetId = _ref8.widgetId,
          bookmarks = _ref8.bookmarks;
      return new Promise(function (resolve, reject) {
        _ApiService__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].addBookmarksBatch(widgetId, bookmarks).then(resolve).catch(reject);
      });
    },
    clearAllPages: function clearAllPages(_ref9) {
      var commit = _ref9.commit;
      commit('setAllPages', []);
      commit('clearAllPagesAccessTimestamp');
    },
    fetchAllPages: function fetchAllPages(_ref10) {
      var state = _ref10.state,
          commit = _ref10.commit;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var isRequestForced = options.isRequestForced,
          isCacheForced = options.isCacheForced;
      return new Promise(function (resolve, reject) {
        if (isCacheForced && state.allPages.length) {
          resolve(state.allPages);
          return;
        } else if (!isRequestForced && state.allPages.length) {
          resolve(state.allPages);
          return;
        }

        _ApiService__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"].getAllPages(options.noCache).then(function () {
          var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          commit('setAllPages', pages);
          commit('setAllPagesAccessTimestamp');
          resolve(pages);
        }).catch(reject);
      });
    },
    setUser: function setUser(_ref11, user) {
      var commit = _ref11.commit;
      commit('setUser', user);
    },
    setUserPages: function setUserPages(_ref12) {
      var commit = _ref12.commit;
      var pages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      commit('setUserPages', pages);
    },
    toggleCloseTabs: function toggleCloseTabs(_ref13) {
      var commit = _ref13.commit;
      commit('toggleCloseTabs');
    }
  },
  mutations: {
    toggleCloseTabs: function toggleCloseTabs(state) {
      state.shouldCloseTabs = !state.shouldCloseTabs;
    },
    setUserPages: function setUserPages(state, pages) {
      state.userPages = pages;
    },
    clearStorage: function clearStorage(state) {
      state.allPagesAccessTimestamp = null;
      state.allPages = [];
      state.userPages = [];
      state.interfaceLanguage = null;
      state.shouldCloseTabs = false;
    },
    setUser: function setUser(state, user) {
      state.user = user;
    },
    setAllPages: function setAllPages(state, pages) {
      state.allPages = pages;
    },
    setAllPagesAccessTimestamp: function setAllPagesAccessTimestamp(state) {
      state.allPagesAccessTimestamp = Date.now();
    },
    clearAllPagesAccessTimestamp: function clearAllPagesAccessTimestamp(state) {
      state.allPagesAccessTimestamp = null;
    },
    setInterfaceLanguage: function setInterfaceLanguage(state, language) {
      state.interfaceLanguage = language;
    }
  },
  getters: {
    getShouldCloseTabs: function getShouldCloseTabs(state) {
      return state.shouldCloseTabs;
    },
    getUserData: function getUserData(state) {
      return state.user;
    },
    getUserPages: function getUserPages(state) {
      return state.userPages;
    },
    isDarkTheme: function isDarkTheme() {
      return false;
    },
    getAllPagesTimestamp: function getAllPagesTimestamp(state) {
      return state.allPagesAccessTimestamp;
    },
    getWidgetsByPage: function getWidgetsByPage(state) {
      return function () {
        var widgetType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var personalPages = {
          id: 'personal',
          label: 'Personal',
          value: []
        };
        var teamsPages = {};
        state.allPages.forEach(function (page) {
          var widgets = page.widgets;
          if (widgetType) widgets = widgets.filter(function (widget) {
            return widget.widget_type === widgetType;
          });
          widgets = widgets.map(function (w) {
            if (!w.folders || !w.folders.length) {
              return {
                id: w.id,
                label: w.title || '',
                value: w.id
              };
            }

            w.folders.sort(function (a, b) {
              return a.index > b.index ? 1 : -1;
            });
            return {
              id: w.id,
              label: w.title || '',
              value: w.folders.map(function (f) {
                return {
                  id: "".concat(w.id, "_").concat(f.id),
                  label: f.title || '',
                  value: "".concat(w.id, "_").concat(f.id)
                };
              })
            };
          });
          var pageData = {
            id: page.id,
            publicId: page.public_id,
            label: page.title,
            value: widgets,
            isArchived: page.is_archived
          };

          if (!Number(page.organization_id)) {
            personalPages.value.push(pageData);
          } else {
            if (teamsPages[Number(page.organization_id)]) {
              teamsPages[Number(page.organization_id)].value.push(pageData);
            } else {
              teamsPages[Number(page.organization_id)] = {
                id: Number(page.organization_id),
                label: page.organization_title,
                value: [pageData]
              };
            }
          }
        });
        return [personalPages].concat(Object(_home_frontman23_projects_yourls_extensions_chrome_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object.values(teamsPages)));
      };
    }
  },
  plugins: [Object(vuex_persistedstate__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])({
    key: 'startme_newtab'
  })]
});

/***/ }),

/***/ "555f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0a9986ca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loader.vue?vue&type=template&id=aadcecde&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['loader', { 'loader_blocking': _vm.blocking, 'loader_ie': _vm.isIE, 'loader_hide_scrollbar': _vm.hideScrollbar }]},[(_vm.blocking)?_c('div',{staticClass:"loader__spinner loader__indicator",attrs:{"role":"progressbar"}},[_c('span',{staticClass:"loader__buffer"}),_c('span',{staticClass:"loader__rect"})]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Loader.vue?vue&type=template&id=aadcecde&

// EXTERNAL MODULE: ./node_modules/vue-types/dist/vue-types.m.js + 1 modules
var vue_types_m = __webpack_require__("84d4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loader.vue?vue&type=script&lang=js&

/* harmony default export */ var Loadervue_type_script_lang_js_ = ({
  name: 'Loader',
  props: {
    blocking: vue_types_m["a" /* default */].bool.def(false),
    hideScrollbar: vue_types_m["a" /* default */].bool.def(false)
  },
  computed: {
    isIE: function isIE() {
      return this.$featurizr && this.$featurizr.browser === 'internet-explorer';
    }
  }
});
// CONCATENATED MODULE: ./src/components/Loader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loadervue_type_script_lang_js_ = (Loadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Loader.vue?vue&type=style&index=0&lang=scss&
var Loadervue_type_style_index_0_lang_scss_ = __webpack_require__("a071");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Loader.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Loader = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "a071":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f6af");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "af8c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  cookieNameLastUsedWidget: 'bookmarklet_last_widget_id',
  bookmarkletSearchableHeight: 417,
  fallbackLocale: 'en',
  supportedLocales: ['de', 'en', 'es', 'es-AR', 'fr', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'pt-BR', 'ru', 'sv', 'tr', 'zh-CN']
});

/***/ }),

/***/ "d76a":
/***/ (function(module) {

module.exports = JSON.parse("{\"____________________________________________________________________________________________________\":{\"message\":\"\",\"description\":\"This file has been generated automatically. Don't modify manually.\"},\"home_name\":{\"message\":\"start.me\"},\"app_name\":{\"message\":\"New tab page by start.me\"},\"app_short_name\":{\"message\":\"start.me\"},\"app_description\":{\"message\":\"Replace your New Tab Page with a personal dashboard.\"},\"add_feed\":{\"message\":\"Add Feed\"},\"bookmark\":{\"message\":\"Bookmark\"},\"feeds\":{\"message\":\"Feeds\"},\"title\":{\"message\":\"Title\"},\"url\":{\"message\":\"URL\"},\"please_specify_title\":{\"message\":\"Please specify a title\"},\"title_for_new_widget\":{\"message\":\"Title for new widget\"},\"title_for_new_group\":{\"message\":\"Title for new group\"},\"account\":{\"message\":\"Account\"},\"terms\":{\"message\":\"Terms\"},\"help\":{\"message\":\"Help\"},\"new_widget\":{\"message\":\"New widget\"},\"settings\":{\"message\":\"Settings\"},\"import_bookmarks\":{\"message\":\"Import bookmarks\"},\"please_wait_a_moment\":{\"message\":\"This may take a moment. Please wait.\"},\"something_went_wrong\":{\"message\":\"Something went wrong\"},\"please_try_again_later\":{\"message\":\"We are very sorry. Please try again later.\"},\"import\":{\"message\":\"Import\"},\"sign_in_to_startme\":{\"message\":\"Sign in to start.me\"},\"yes\":{\"message\":\"Yes\"},\"no\":{\"message\":\"No\"},\"create_account\":{\"message\":\"Create an account\"},\"done\":{\"message\":\"Done\"},\"close\":{\"message\":\"Close\"},\"close_window\":{\"message\":\"Close window\"},\"add_bookmark\":{\"message\":\"Add Bookmark\"},\"add_widget\":{\"message\":\"Add widget\"},\"add_group\":{\"message\":\"Add group\"},\"inbox\":{\"message\":\"Inbox\"},\"view_my_account_details\":{\"message\":\"View my account details\"},\"autosaved_in_x_ext\":{\"message\":\"Auto-saved in\"},\"already_saved_in_x_ext\":{\"message\":\"Already saved in\"},\"help_and_support\":{\"message\":\"Help & Support\"},\"account_details\":{\"message\":\"Account details\"},\"add_title\":{\"message\":\"+ Add title\"},\"add_description\":{\"message\":\"+ Add description\"},\"pro\":{\"message\":\"Pro\"},\"preferences\":{\"message\":\"Preferences\"},\"options\":{\"message\":\"Options\"},\"save\":{\"message\":\"Save\"},\"extension_options\":{\"message\":\"Extension options\"},\"search_widgets\":{\"message\":\"Search widgets\"},\"change\":{\"message\":\"Change\"},\"get_help\":{\"message\":\"Get help\"},\"create_new_group\":{\"message\":\"Create new group\"},\"enable_autosaving\":{\"message\":\"Enable auto-saving\"},\"enable\":{\"message\":\"Enable\"},\"hide\":{\"message\":\"Hide\"},\"edit_link\":{\"message\":\"Edit bookmark\"},\"auto_saving\":{\"message\":\"Auto-saving\"},\"unsorted_bookmarks\":{\"message\":\"Unsorted bookmarks\"},\"saved_in\":{\"message\":\"Saved in\"},\"remove\":{\"message\":\"Remove\"},\"create_new_widget\":{\"message\":\"Create new widget\"},\"create_new_widget_on_page_ext\":{\"message\":\"Create new widget on\"},\"create_new_group_on_page_widget_ext\":{\"message\":\"Create new group in\"},\"you_already_saved_this_link\":{\"message\":\"You already saved this link\"},\"plus_n_others\":{\"message\":\"+%{number} others\"},\"save_changes\":{\"message\":\"Save changes\"},\"logout\":{\"message\":\"Sign out\"},\"use\":{\"message\":\"Use\"},\"refresh\":{\"message\":\"Refresh\"},\"account_type_pro\":{\"message\":\"Pro\"},\"logout_confirm\":{\"message\":\"Are you sure you want to logout your anonymous account? This means that you won't be able to login to your page again. Please register your account first if you want to be able to access your page in future.\"},\"anonymous_user\":{\"message\":\"Anonymous user\"},\"select_location\":{\"message\":\"Select location\"},\"select_all\":{\"message\":\"Select all\"},\"autosave_in_inbox\":{\"message\":\"Auto-save bookmarks (in Inbox)\"},\"refresh_data\":{\"message\":\"Refresh data\"},\"close_tabs_after_saving\":{\"message\":\"Close selected tabs after saving\"},\"save_selected_tabs\":{\"message\":\"Save selected tabs\"},\"add_tabs\":{\"message\":\"Add tabs\"},\"change_description_and_url\":{\"message\":\"Change description & URL\"},\"refresh_list\":{\"message\":\"Refresh list\"},\"hide_description_and_url\":{\"message\":\"Hide description & URL\"},\"save_in\":{\"message\":\"Save in\"},\"description\":{\"message\":\"Replace your New Tab Page with a personal dashboard.\"},\"pure_description\":{\"message\":\"Description\"},\"description_bookmarker\":{\"message\":\"This Bookmarker can be used to bookmark webpages to your start.me page while you surf - start.me\"},\"select_a_widget\":{\"message\":\"Select a widget\"},\"full_name\":{\"message\":\"New tab page by start.me\"},\"full_name_bookmarker\":{\"message\":\"Bookmarker by start.me\"},\"name_bookmarker\":{\"message\":\"start.me Bookmarker\"},\"add_to_startme\":{\"message\":\"Add to start.me\"},\"open_startme_homepage\":{\"message\":\"Open start.me homepage\"},\"available_feeds\":{\"message\":\"Available feeds\"},\"default_page\":{\"message\":\"<Default page>\"},\"eg_email\":{\"message\":\"e.g. john@gmail.com\"},\"eg_name\":{\"message\":\"e.g. John Smith\"},\"i_may_do_this_later\":{\"message\":\"I may do this later\"},\"import_bookmarks_from_chrome\":{\"message\":\"Import bookmarks from browser\"},\"imported_from_chrome\":{\"message\":\"Imported from Chrome\"},\"importing_your_bookmarks\":{\"message\":\"Importing your bookmarks\"},\"import_your_bookmarks_question\":{\"message\":\"Import your bookmarks?\"},\"lets_personalize_it\":{\"message\":\"Let's personalize it. It won't take long.\"},\"markdown_supported\":{\"message\":\"Markdown supported\"},\"my_email_is\":{\"message\":\"My email is\"},\"my_name_is\":{\"message\":\"My name is\"},\"my_startme_homepage\":{\"message\":\"My start.me homepage\"},\"new_tab_page\":{\"message\":\"New tab page\"},\"open_default_chrome_startpage\":{\"message\":\"open browser's default start page\"},\"open_my_startme_homepage\":{\"message\":\"open my start.me homepage\"},\"open_pagesmenu\":{\"message\":\"Open the start.me menu\"},\"open_startme_blog\":{\"message\":\"Open start.me blog\"},\"open_browser_tabs\":{\"message\":\"Open browser tabs\"},\"open_tabs\":{\"message\":\"Open tabs\"},\"save_tabs\":{\"message\":\"Save tabs\"},\"other_preferences\":{\"message\":\"Other preferences\"},\"change_user_settings\":{\"message\":\"Change user settings\"},\"personal_pages\":{\"message\":\"Personal pages\"},\"please_import_them\":{\"message\":\"Please import them\"},\"select_new_tab_page\":{\"message\":\"Select new tab page\"},\"shake_hands\":{\"message\":\"Shake hands\"},\"show_chromes_default_page\":{\"message\":\"show the browser's default page\"},\"show_my_startme_page\":{\"message\":\"show my start.me page\"},\"take_me_to_start_page\":{\"message\":\"Take me to my new start page!\"},\"visit_account_profile\":{\"message\":\"Visit account profile\"},\"welcome_to\":{\"message\":\"Welcome to\"},\"welcome_to_startme\":{\"message\":\"Welcome to start.me\"},\"what_is_your_name\":{\"message\":\"What is your name?\"},\"when_browser_tab_is_opened\":{\"message\":\"When a new browser tab is opened\"},\"when_i_open_a_new_chrome_tab\":{\"message\":\"When I open a new tab\"},\"which_page_as_your_homepage\":{\"message\":\"Which page do you want to use as your homepage?\"},\"select_your_new_tab_page\":{\"message\":\"Select your new tab page\"},\"your_bookmarks_are_being_imported\":{\"message\":\"Your bookmarks are being imported...\"},\"your_new_tab_page_question\":{\"message\":\"Your new tab page?\"},\"where_do_you_come_from\":{\"message\":\"Where do you come from?\"},\"click_to_choose_a_different_country\":{\"message\":\"Click to choose a different country\"},\"have_startme_account\":{\"message\":\"Do you have a registered start.me account already?\"},\"already_have_startme_account\":{\"message\":\"Already have a start.me account?\"},\"signin_with_email\":{\"message\":\"Sign-in with your e-mail address\"},\"create_new_free_account\":{\"message\":\"Create a new free start.me account\"},\"clear_cache\":{\"message\":\"Clear cache\"},\"clear_extension_cache\":{\"message\":\"Clear extension cache\"},\"clear\":{\"message\":\"Clear\"},\"allow_access_to_tabs\":{\"message\":\"To see all your open browser tabs, please grant start.me access to access your browser tabs.\"},\"grant_access\":{\"message\":\"Grant access\"},\"shortcuts\":{\"message\":\"Shortcuts\"},\"create_new_bookmark\":{\"message\":\"Create new bookmark\"},\"search_bookmarks_from_address_bar\":{\"message\":\"Search bookmarks right from address bar\"},\"learn_how_this_works\":{\"message\":\"Learn how this works\"},\"visit_support_centre\":{\"message\":\"Visit support center\"},\"import_browser_bookmarks\":{\"message\":\"Import browser bookmarks\"},\"save_bookmark\":{\"message\":\"Save bookmark\"},\"save_bookmarks\":{\"message\":\"Save bookmarks\"}}");

/***/ }),

/***/ "f027":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(browser) {/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4de4");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);


var SM_MESSAGE_GET_PAGES = 'getPages';
var SM_MESSAGE_GET_USER_PAGES = 'getUserPages';
var SM_MESSAGE_CHECK_LINKS_AUTOSAVING = 'checkLinksAutosaving';
var SM_MESSAGE_AUTOSAVE_LINK = 'autosaveLink';
var SM_MESSAGE_AUTOSAVE_LINKS = 'autosaveLinks';
var SM_MESSAGE_EDIT_AUTOSAVED_LINK = 'editAutosavedLink';
var SM_MESSAGE_CHANGE_AUTOSAVING = 'changeLinksAutosaving';
var SM_MESSAGE_DELETE_AUTOSAVED_LINK = 'removeAutosavedLink';
var SM_MESSAGE_ADD_NEW_WIDGET = 'addWidget';
var SM_MESSAGE_ADD_NEW_BOOKMARK = 'addNewBookmark';
var SM_MESSAGE_ADD_BOOKMARKS_BATCH = 'addBookmarksBatch';
var SM_MESSAGE_CHECK_LINK_EXISTS = 'checkLinkExists';
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * Get raw data of all editable pages
   * @return {Array}
   */
  getAllPages: function getAllPages() {
    var noCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return new Promise(function (resolve) {
      browser.runtime.sendMessage({
        message: SM_MESSAGE_GET_PAGES,
        noCache: !!noCache
      }).then(function () {
        var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        resolve(pages.filter(function (page) {
          return !page.is_archived;
        }));
      });
    });
  },

  /**
   * Get raw data of all pages available to the user
   * @return {Array}
   */
  getAllUserPages: function getAllUserPages() {
    var noCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return new Promise(function (resolve) {
      browser.runtime.sendMessage({
        message: SM_MESSAGE_GET_USER_PAGES,
        noCache: !!noCache
      }).then(function () {
        var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        resolve(pages.filter(function (page) {
          return !page.is_archived;
        }));
      });
    });
  },

  /**
   * Get links autosaving preference
   * @return {Array}
   */
  checkLinksAutosaving: function checkLinksAutosaving() {
    return new Promise(function (resolve) {
      browser.runtime.sendMessage({
        message: SM_MESSAGE_CHECK_LINKS_AUTOSAVING
      }).then(resolve);
    });
  },

  /**
   * Change links autosaving preference
   * @return {Array}
   */
  changeLinksAutosaving: function changeLinksAutosaving() {
    var requestData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve) {
      browser.runtime.sendMessage({
        message: SM_MESSAGE_CHANGE_AUTOSAVING,
        requestData: requestData
      }).then(resolve);
    });
  },

  /**
   * Autosave a link
   * @return {Array}
   */
  autosaveLink: function autosaveLink() {
    var bookmarkData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve) {
      browser.runtime.sendMessage({
        message: SM_MESSAGE_AUTOSAVE_LINK,
        bookmarkData: bookmarkData
      }).then(resolve);
    });
  },

  /**
   * Autosave multiple links
   * @return {Array}
   */
  autosaveLinks: function autosaveLinks() {
    var bookmarksData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return new Promise(function (resolve) {
      browser.runtime.sendMessage({
        message: SM_MESSAGE_AUTOSAVE_LINKS,
        bookmarksData: bookmarksData
      }).then(resolve);
    });
  },

  /**
   * Edit autosaved link
   * @return {Array}
   */
  editAutosavedLink: function editAutosavedLink(id) {
    var bookmarkData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function (resolve) {
      browser.runtime.sendMessage({
        message: SM_MESSAGE_EDIT_AUTOSAVED_LINK,
        id: id,
        bookmarkData: bookmarkData
      }).then(resolve);
    });
  },

  /**
   * Remove autosaved link
   * @return {Array}
   */
  removeAutosavedLink: function removeAutosavedLink(id) {
    return new Promise(function (resolve) {
      browser.runtime.sendMessage({
        message: SM_MESSAGE_DELETE_AUTOSAVED_LINK,
        id: id
      }).then(resolve);
    });
  },

  /**
   * Add new widget
   * @param  {Object} widgetObject Widget object
   * @return {Promise}
   */
  addWidget: function addWidget(widgetObject) {
    return new Promise(function (resolve) {
      browser.runtime.sendMessage({
        message: SM_MESSAGE_ADD_NEW_WIDGET,
        widget: widgetObject.widget,
        pageId: widgetObject.pageId
      }).then(resolve);
    });
  },

  /**
   * Add bookmarks
   * @param  {Number} widgetId
   * @param  {Array} bookmarks
   * @return {Promise}
   */
  addBookmarksBatch: function addBookmarksBatch(widgetId, bookmarks) {
    return new Promise(function (resolve) {
      browser.runtime.sendMessage({
        message: SM_MESSAGE_ADD_BOOKMARKS_BATCH,
        widgetId: widgetId,
        bookmarks: bookmarks
      }).then(function (data) {
        resolve(data);
      });
    });
  },

  /**
   * Add bookmark
   * @param  {Number} widgetId
   * @param  {Object} bookmark
   * @return {Promise}
   */
  addNewBookmark: function addNewBookmark(widgetId, bookmark) {
    return new Promise(function (resolve) {
      browser.runtime.sendMessage({
        message: SM_MESSAGE_ADD_NEW_BOOKMARK,
        widgetId: widgetId,
        bookmark: bookmark
      }).then(resolve);
    });
  },

  /**
   * Check if link already exisits in widget/group
   * @param  {Number} widgetId
   * @param  {String} groupId
   * @param  {String} url
   * @return {Promise}
   */
  checkLinkExists: function checkLinkExists(_ref) {
    var widgetId = _ref.widgetId,
        groupId = _ref.groupId,
        url = _ref.url;
    return new Promise(function (resolve) {
      browser.runtime.sendMessage({
        message: SM_MESSAGE_CHECK_LINK_EXISTS,
        widgetId: widgetId,
        groupId: groupId,
        url: url
      }).then(resolve);
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("9845")))

/***/ }),

/***/ "f6af":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=chunk-common.d3333ef8.js.map