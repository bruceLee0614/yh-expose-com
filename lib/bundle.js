/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["yh-expose-com"] = factory(require("react"));
	else
		root["yh-expose-com"] = factory(root["react"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n // interface ComExposeProps {\n//     children: any\n//     readonly always?: boolean // 是否一直有效\n//     // 曝光时的回调，若不存在always，则只执行一次\n//     onExpose?: (dom: HTMLElement) => void\n//     // 曝光后又隐藏的回调，若不存在always，则只执行一次\n//     onHide?: (dom: HTMLElement) => void\n//     observerOptions?: any // IntersectionObserver相关的配置\n// }\n\n/**\n * 监听元素的曝光\n * @param {ComExposeProps} props 要监听的元素和回调\n * @returns {JSX.Element}\n */\n\nvar ComExpose = function ComExpose(props) {\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var curExpose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    //todo\n    if (ref.current && window.IntersectionObserver) {\n      var target = ref.current; // 配置参数\n\n      var observerOptions = (props === null || props === void 0 ? void 0 : props.observerOptions) || {\n        threshold: [0.1, 0.5, 1]\n      }; // 回调参数\n\n      var intersectionCallback = function intersectionCallback(entries) {\n        var _entries = _slicedToArray(entries, 1),\n            entry = _entries[0];\n\n        if (entry.isIntersecting) {\n          if (entry.intersectionRatio >= observerOptions.threshold[0]) {\n            if (!curExpose.current) {\n              var _props$onExpose;\n\n              props === null || props === void 0 ? void 0 : (_props$onExpose = props.onExpose) === null || _props$onExpose === void 0 ? void 0 : _props$onExpose.call(props, target);\n            }\n\n            curExpose.current = true;\n\n            if (!(props !== null && props !== void 0 && props.always) && typeof (props === null || props === void 0 ? void 0 : props.onHide) !== 'function') {\n              // 当always属性为加，且没有onHide方式时\n              // 则在执行一次曝光后，移动监听\n              io.unobserve(target);\n            }\n          }\n        } else if (typeof (props === null || props === void 0 ? void 0 : props.onHide) === 'function' && curExpose.current) {\n          props.onHide(target);\n          curExpose.current = false;\n\n          if (!(props !== null && props !== void 0 && props.always)) {\n            io.unobserve(target);\n          }\n        }\n      };\n\n      var io = new IntersectionObserver(intersectionCallback, observerOptions);\n      io.observe(target);\n      return function () {\n        io.unobserve(target);\n      };\n    } else {\n      return function () {};\n    }\n  }, [ref]); // 当组件的个数大于等于2，或组件使用fragment标签包裹时\n  // 则创建一个新的div用来挂在ref属性\n\n  if (react__WEBPACK_IMPORTED_MODULE_0___default().Children.count(props.children) >= 2 || props.children.type.toString() === 'Symbol(react.fragment)') {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      ref: ref\n    }, props.children);\n  } // 为该组件挂在ref属性\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(props.children, {\n    ref: ref\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComExpose);\n\n//# sourceURL=webpack://yh-expose-com/./src/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});