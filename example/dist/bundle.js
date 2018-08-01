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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index-sub.rtpl":
/*!************************!*\
  !*** ./index-sub.rtpl ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction render(opt) {\n  var data = opt.data;return \" <ul> <li>\" + data.a + \"</li> <li>\" + data.b + \"</li> </ul>\";\n};exports.render = render;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC1zdWIucnRwbD81NmFhIl0sIm5hbWVzIjpbInJlbmRlciIsIm9wdCIsImRhdGEiLCJhIiwiYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsU0FBU0EsTUFBVCxDQUFpQkMsR0FBakIsRUFBdUI7QUFBQyxNQUFJQyxPQUFPRCxJQUFJQyxJQUFmLENBQXFCLHNCQUFvQkEsS0FBS0MsQ0FBekIsa0JBQXVDRCxLQUFLRSxDQUE1QztBQUEyRCxFLFFBQVVKLE0sR0FBQUEsTSIsImZpbGUiOiIuL2luZGV4LXN1Yi5ydHBsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiByZW5kZXIoIG9wdCApIHt2YXIgZGF0YSA9IG9wdC5kYXRhOyByZXR1cm4gYCA8dWw+IDxsaT4ke2RhdGEuYX08L2xpPiA8bGk+JHtkYXRhLmJ9PC9saT4gPC91bD5gfTsgZXhwb3J0IHtyZW5kZXJ9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index-sub.rtpl\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar template = __webpack_require__(/*! ./index.rtpl */ \"./index.rtpl\");\n\nvar html = template.render({\n  data: {\n    a: 1,\n    b: 2\n  }\n});\n\nconsole.log(html);\n\ndocument.body.innerHTML = html;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz80MWY1Il0sIm5hbWVzIjpbInRlbXBsYXRlIiwicmVxdWlyZSIsImh0bWwiLCJyZW5kZXIiLCJkYXRhIiwiYSIsImIiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJib2R5IiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFdBQVcsbUJBQUFDLENBQVEsa0NBQVIsQ0FBZjs7QUFFQSxJQUFJQyxPQUFPRixTQUFTRyxNQUFULENBQWdCO0FBQ3pCQyxRQUFNO0FBQ0pDLE9BQUcsQ0FEQztBQUVKQyxPQUFHO0FBRkM7QUFEbUIsQ0FBaEIsQ0FBWDs7QUFPQUMsUUFBUUMsR0FBUixDQUFZTixJQUFaOztBQUVBTyxTQUFTQyxJQUFULENBQWNDLFNBQWQsR0FBMEJULElBQTFCIiwiZmlsZSI6Ii4vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdGVtcGxhdGUgPSByZXF1aXJlKCcuL2luZGV4LnJ0cGwnKTtcblxudmFyIGh0bWwgPSB0ZW1wbGF0ZS5yZW5kZXIoe1xuICBkYXRhOiB7XG4gICAgYTogMSxcbiAgICBiOiAyXG4gIH1cbn0pO1xuXG5jb25zb2xlLmxvZyhodG1sKTtcblxuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBodG1sO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./index.rtpl":
/*!********************!*\
  !*** ./index.rtpl ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = undefined;\n\nvar _indexSub = __webpack_require__(/*! ./index-sub.rtpl */ \"./index-sub.rtpl\");\n\nvar subrtpl = _interopRequireWildcard(_indexSub);\n\nvar _plugin = __webpack_require__(/*! ./plugin */ \"./plugin.js\");\n\nvar plugin = _interopRequireWildcard(_plugin);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar list = [1, 2, 3];\n\nfunction render(opt) {\n  var data = opt.data;return ' <div> <span>' + data.a + '</span><span>' + data.b + '</span> <div>' + plugin.add(1, 2) + '</div> ' + subrtpl.render({ data: data }) + ' ' + list.map(function (item) {\n    return ' <div>' + item + '</div>';\n  }).join('\\n') + ' </div>';\n};exports.render = render;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5ydHBsPzhhZjUiXSwibmFtZXMiOlsic3VicnRwbCIsInBsdWdpbiIsImxpc3QiLCJyZW5kZXIiLCJvcHQiLCJkYXRhIiwiYSIsImIiLCJhZGQiLCJtYXAiLCJpdGVtIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOztJQUFZQSxPOztBQUNaOztJQUFZQyxNOzs7O0FBQ1osSUFBSUMsT0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFYOztBQUVGLFNBQVNDLE1BQVQsQ0FBaUJDLEdBQWpCLEVBQXVCO0FBQUMsTUFBSUMsT0FBT0QsSUFBSUMsSUFBZixDQUFxQix5QkFBdUJBLEtBQUtDLENBQTVCLHFCQUE2Q0QsS0FBS0UsQ0FBbEQscUJBQW1FTixPQUFPTyxHQUFQLENBQVcsQ0FBWCxFQUFhLENBQWIsQ0FBbkUsZUFBNkZSLFFBQVFHLE1BQVIsQ0FBZSxFQUFFRSxVQUFGLEVBQWYsQ0FBN0YsU0FBMkhILEtBQUtPLEdBQUwsQ0FBUyxVQUFTQyxJQUFULEVBQWM7QUFBRSxzQkFBZUEsSUFBZjtBQUE2QixHQUF0RCxFQUF3REMsSUFBeEQsQ0FBNkQsSUFBN0QsQ0FBM0g7QUFBd00sRSxRQUFVUixNLEdBQUFBLE0iLCJmaWxlIjoiLi9pbmRleC5ydHBsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCAqIGFzIHN1YnJ0cGwgZnJvbSAnLi9pbmRleC1zdWIucnRwbCc7XG4gIGltcG9ydCAqIGFzIHBsdWdpbiBmcm9tICcuL3BsdWdpbic7XG4gIHZhciBsaXN0ID0gWzEsMiwzXVxuXG5mdW5jdGlvbiByZW5kZXIoIG9wdCApIHt2YXIgZGF0YSA9IG9wdC5kYXRhOyByZXR1cm4gYCA8ZGl2PiA8c3Bhbj4ke2RhdGEuYX08L3NwYW4+PHNwYW4+JHtkYXRhLmJ9PC9zcGFuPiA8ZGl2PiR7cGx1Z2luLmFkZCgxLDIpfTwvZGl2PiAkeyBzdWJydHBsLnJlbmRlcih7IGRhdGEgfSkgfSAkeyBsaXN0Lm1hcChmdW5jdGlvbihpdGVtKXsgcmV0dXJuYCA8ZGl2PiR7aXRlbX08L2Rpdj5gIH0pLmpvaW4oJ1xcbicpIH0gPC9kaXY+YH07IGV4cG9ydCB7cmVuZGVyfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.rtpl\n");

/***/ }),

/***/ "./plugin.js":
/*!*******************!*\
  !*** ./plugin.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction add(a, b) {\n  return a + b;\n}\n\nexports.add = add;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wbHVnaW4uanM/MTlkYyJdLCJuYW1lcyI6WyJhZGQiLCJhIiwiYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSxHQUFULENBQWNDLENBQWQsRUFBaUJDLENBQWpCLEVBQW9CO0FBQ2xCLFNBQU9ELElBQUlDLENBQVg7QUFDRDs7UUFHQ0YsRyxHQUFBQSxHIiwiZmlsZSI6Ii4vcGx1Z2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYWRkIChhLCBiKSB7XG4gIHJldHVybiBhICsgYjtcbn1cblxuZXhwb3J0IHtcbiAgYWRkXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./plugin.js\n");

/***/ })

/******/ });