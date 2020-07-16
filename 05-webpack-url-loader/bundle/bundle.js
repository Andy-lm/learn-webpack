/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "./bundle/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const icon = __webpack_require__(/*! ./lmm.jpg */ \"./lmm.jpg\");\r\n// file-loader处理之后我们导入图片拿到的是图片打包之后的地址\r\nconsole.log(icon);\r\n\r\nlet oImg = document.createElement(\"img\");\r\noImg.src = icon;\r\ndocument.body.appendChild(oImg);\r\n\r\n/*\r\nwebpack要将图片进行打包，需要安装儒url-loader加载器，加载器有个默认的设置选项limit：8196，当你的图片大小不超过8kb的时候，打包的时候会生成base64位的图片地址，这种情况下背景图片可以正常显示，当你图片大小超过limit设置的限制时，它会生成一个静态资源图片\r\n\r\n// 表示在url地址前加上./bundle/\r\npublicPath: './bundle/'*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaWNvbiA9IHJlcXVpcmUoXCIuL2xtbS5qcGdcIik7XHJcbi8vIGZpbGUtbG9hZGVy5aSE55CG5LmL5ZCO5oiR5Lus5a+85YWl5Zu+54mH5ou/5Yiw55qE5piv5Zu+54mH5omT5YyF5LmL5ZCO55qE5Zyw5Z2AXHJcbmNvbnNvbGUubG9nKGljb24pO1xyXG5cclxubGV0IG9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5vSW1nLnNyYyA9IGljb247XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob0ltZyk7XHJcblxyXG4vKlxyXG53ZWJwYWNr6KaB5bCG5Zu+54mH6L+b6KGM5omT5YyF77yM6ZyA6KaB5a6J6KOF5YSSdXJsLWxvYWRlcuWKoOi9veWZqO+8jOWKoOi9veWZqOacieS4qum7mOiupOeahOiuvue9rumAiemhuWxpbWl077yaODE5Nu+8jOW9k+S9oOeahOWbvueJh+Wkp+Wwj+S4jei2hei/hzhrYueahOaXtuWAme+8jOaJk+WMheeahOaXtuWAmeS8mueUn+aIkGJhc2U2NOS9jeeahOWbvueJh+WcsOWdgO+8jOi/meenjeaDheWGteS4i+iDjOaZr+WbvueJh+WPr+S7peato+W4uOaYvuekuu+8jOW9k+S9oOWbvueJh+Wkp+Wwj+i2hei/h2xpbWl06K6+572u55qE6ZmQ5Yi25pe277yM5a6D5Lya55Sf5oiQ5LiA5Liq6Z2Z5oCB6LWE5rqQ5Zu+54mHXHJcblxyXG4vLyDooajnpLrlnKh1cmzlnLDlnYDliY3liqDkuIouL2J1bmRsZS9cclxucHVibGljUGF0aDogJy4vYnVuZGxlLycqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./lmm.jpg":
/*!*****************!*\
  !*** ./lmm.jpg ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/lmm.jpg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sbW0uanBnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbG1tLmpwZz85OThmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbG1tLmpwZ1wiOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lmm.jpg\n");

/***/ })

/******/ });