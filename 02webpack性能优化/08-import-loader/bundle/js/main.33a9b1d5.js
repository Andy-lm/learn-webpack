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
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
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
/******/ 	deferredModules.push(["./src/js/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {function addBorder() {\n  $(\"div\").css({\n    border: \"10px solid blue\"\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (addBorder);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tbW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi5qcz80NDBhIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFkZEJvcmRlcigpIHtcclxuICAgICQoXCJkaXZcIikuY3NzKHtcclxuICAgICAgICBib3JkZXI6IFwiMTBweCBzb2xpZCBibHVlXCJcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEJvcmRlcjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/common.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/js/common.js\");\n// import $ from \"jquery\";\n // $(\"body\").css({\n//     width: \"100%\",\n//     height: \"100%\",\n//     background: \"red\"\n// })\n\n$(\"div\").css({\n  width: \"100px\",\n  height: \"100px\",\n  backgroundColor: \"red\"\n});\nObject(_common_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])(); // const oBtn = document.querySelector(\"button\");\n// oBtn.addEventListener(\"click\", function () {\n//     const $div = addDiv();\n//     $(\"body\").append($div);\n// })\n// function addDiv() {\n//     const $div = $(\"<div>我是div<div>\");\n//     return $div;\n// }\n// const oBtn = document.querySelector(\"button\");\n// oBtn.addEventListener(\"click\", function () {\n//     addDiv().then(($div) => {\n//         document.body.appendChild($div[0]);\n//     })\n// })\n// function addDiv() {\n//     return import('jquery').then(({ default: $ }) => {\n// const $div = $(\"<div>我是异步div<div>\");\n// return $div;\n//     });\n// }\n// async function addDiv() {\n//     const { default: $ } = await import(\"jquery\");\n//     const $div = $(\"<div>我是异步div<div>\");\n//     return $div;\n// }\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBhZGRCb3JkZXIgZnJvbSBcIi4vY29tbW9uLmpzXCI7XHJcbi8vICQoXCJib2R5XCIpLmNzcyh7XHJcbi8vICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbi8vICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4vLyAgICAgYmFja2dyb3VuZDogXCJyZWRcIlxyXG4vLyB9KVxyXG5cclxuJChcImRpdlwiKS5jc3Moe1xyXG4gICAgd2lkdGg6IFwiMTAwcHhcIixcclxuICAgIGhlaWdodDogXCIxMDBweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiXHJcbn0pXHJcbmFkZEJvcmRlcigpO1xyXG4vLyBjb25zdCBvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcclxuLy8gb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgY29uc3QgJGRpdiA9IGFkZERpdigpO1xyXG4vLyAgICAgJChcImJvZHlcIikuYXBwZW5kKCRkaXYpO1xyXG4vLyB9KVxyXG5cclxuLy8gZnVuY3Rpb24gYWRkRGl2KCkge1xyXG4vLyAgICAgY29uc3QgJGRpdiA9ICQoXCI8ZGl2PuaIkeaYr2RpdjxkaXY+XCIpO1xyXG4vLyAgICAgcmV0dXJuICRkaXY7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xyXG4vLyBvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICBhZGREaXYoKS50aGVuKCgkZGl2KSA9PiB7XHJcbi8vICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCgkZGl2WzBdKTtcclxuLy8gICAgIH0pXHJcblxyXG4vLyB9KVxyXG5cclxuLy8gZnVuY3Rpb24gYWRkRGl2KCkge1xyXG4vLyAgICAgcmV0dXJuIGltcG9ydCgnanF1ZXJ5JykudGhlbigoeyBkZWZhdWx0OiAkIH0pID0+IHtcclxuLy8gY29uc3QgJGRpdiA9ICQoXCI8ZGl2PuaIkeaYr+W8guatpWRpdjxkaXY+XCIpO1xyXG4vLyByZXR1cm4gJGRpdjtcclxuLy8gICAgIH0pO1xyXG4vLyB9XHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGFkZERpdigpIHtcclxuLy8gICAgIGNvbnN0IHsgZGVmYXVsdDogJCB9ID0gYXdhaXQgaW1wb3J0KFwianF1ZXJ5XCIpO1xyXG4vLyAgICAgY29uc3QgJGRpdiA9ICQoXCI8ZGl2PuaIkeaYr+W8guatpWRpdjxkaXY+XCIpO1xyXG4vLyAgICAgcmV0dXJuICRkaXY7XHJcbi8vIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });