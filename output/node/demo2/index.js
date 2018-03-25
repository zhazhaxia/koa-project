module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./projects_node/demo2/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ejs-loader/index.js!./projects_node/demo2/tpl.ejs":
/*!***************************************************************!*\
  !*** ./node_modules/ejs-loader!./projects_node/demo2/tpl.ejs ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (obj) {\nobj || (obj = {});\nvar __t, __p = '';\nwith (obj) {\n__p += '<!DOCTYPE html>\\r\\n<html lang=\"zh-cn\">\\r\\n<head>\\r\\n  <meta charset=\"UTF-8\">\\r\\n  <title>' +\n((__t = ((obj.title ||'首页'))) == null ? '' : __t) +\n'</title>\\r\\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover\" />\\r\\n  <meta name=\"format-detection\" content=\"telephone=no\">\\r\\n  <meta http-equiv=\"Content-Language\" content=\"zh-cn\" />\\r\\n  <meta name=\"author\" content=\"Tencent-ISUX-Music\" />\\r\\n  <meta name=\"Copyright\" content=\"Tencent\" />\\r\\n  <!--关键字和描述一定要写-->\\r\\n  <meta name=\"description\" content=\"description\" />\\r\\n  <meta name=\"keywords\" content=\"keywords\" />\\r\\n  <!--如果该页面只适合在手机上进行浏览，请添加以下代码-->\\r\\n  <meta name=\"applicable-device\" content=\"mobile\">\\r\\n  <!--iphoneX 底部样式适配:(仅iphonex会识别)安全区增加间距。避免操作放在了iphone的home区域-->\\r\\n  <style>\\r\\n  html{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);}\\r\\n  </style>\\r\\n</head>\\r\\n<body>\\r\\n  <p>这是静态页</p>\\r\\n\\r\\n</body>\\r\\n</html>';\n\n}\nreturn __p\n}\n\n//# sourceURL=webpack:///./projects_node/demo2/tpl.ejs?./node_modules/ejs-loader");

/***/ }),

/***/ "./projects_node/demo2/server.js":
/*!***************************************!*\
  !*** ./projects_node/demo2/server.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ejs_loader_tpl_ejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ejs-loader!./tpl.ejs */ \"./node_modules/ejs-loader/index.js!./projects_node/demo2/tpl.ejs\");\n/* harmony import */ var ejs_loader_tpl_ejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ejs_loader_tpl_ejs__WEBPACK_IMPORTED_MODULE_0__);\n\n// import tpl from './tpl.ejs'\n// var a = require('./tpl.ejs')\n// var a = require('ejs-loader!./tpl.ejs');\n// console.log(tpl({title:'2333'}))\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (ctx) {\n  ctx.body = `demo 2`;\n});\n\n//# sourceURL=webpack:///./projects_node/demo2/server.js?");

/***/ })

/******/ });