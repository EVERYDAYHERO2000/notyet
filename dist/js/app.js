/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.scss */ \"./src/app.scss\");\n/* harmony import */ var _partials_feature_feature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/feature/feature.js */ \"./src/partials/feature/feature.js\");\n\n\n(0,_partials_feature_feature_js__WEBPACK_IMPORTED_MODULE_1__.renderFeature)();\nconsole.log(\"Lets rock\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OT1RZRVQvLi9zcmMvYXBwLmpzPzExMTIiXSwibmFtZXMiOlsicmVuZGVyRmVhdHVyZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBRUE7QUFFQUEsMkVBQWE7QUFFYkMsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWiIsImZpbGUiOiIuL3NyYy9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYXBwLnNjc3MnO1xuXG5pbXBvcnQge3JlbmRlckZlYXR1cmV9IGZyb20gJy4vcGFydGlhbHMvZmVhdHVyZS9mZWF0dXJlLmpzJztcblxucmVuZGVyRmVhdHVyZSgpO1xuXG5jb25zb2xlLmxvZyhcIkxldHMgcm9ja1wiKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/partials/feature/feature.js":
/*!*****************************************!*\
  !*** ./src/partials/feature/feature.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderFeature\": () => (/* binding */ renderFeature)\n/* harmony export */ });\nconst renderFeature = () => {\n  const $features = document.querySelectorAll(\".feature\");\n  window.addEventListener(\"scroll\", e => {\n    if (window.innerWidth <= 580) {\n      for (let i = 0; i < $features.length; i++) {\n        const $currentFeature = $features[i];\n        const $nextFeature = $features[i + 1] || null;\n        const $currentScreen = $currentFeature.querySelector(\".screen\");\n        const nextBBtop = $nextFeature ? $nextFeature.getBoundingClientRect().top : null;\n        const windowHeight = window.innerHeight;\n\n        if ($nextFeature) {\n          if (nextBBtop < windowHeight) {\n            $currentScreen.classList.add(\"screen__end-scroll\");\n          } else {\n            $currentScreen.classList.remove(\"screen__end-scroll\");\n          }\n        }\n      }\n    }\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OT1RZRVQvLi9zcmMvcGFydGlhbHMvZmVhdHVyZS9mZWF0dXJlLmpzPzhkZGMiXSwibmFtZXMiOlsicmVuZGVyRmVhdHVyZSIsIiRmZWF0dXJlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaW5uZXJXaWR0aCIsImkiLCJsZW5ndGgiLCIkY3VycmVudEZlYXR1cmUiLCIkbmV4dEZlYXR1cmUiLCIkY3VycmVudFNjcmVlbiIsInF1ZXJ5U2VsZWN0b3IiLCJuZXh0QkJ0b3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGFBQWEsR0FBRyxNQUFNO0FBQ2pDLFFBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixVQUExQixDQUFsQjtBQUVBQyxRQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQW1DQyxDQUFELElBQU87QUFDdkMsUUFBSUYsTUFBTSxDQUFDRyxVQUFQLElBQXFCLEdBQXpCLEVBQThCO0FBQzVCLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1AsU0FBUyxDQUFDUSxNQUE5QixFQUFzQ0QsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QyxjQUFNRSxlQUFlLEdBQUdULFNBQVMsQ0FBQ08sQ0FBRCxDQUFqQztBQUNBLGNBQU1HLFlBQVksR0FBR1YsU0FBUyxDQUFDTyxDQUFDLEdBQUcsQ0FBTCxDQUFULElBQW9CLElBQXpDO0FBQ0EsY0FBTUksY0FBYyxHQUFHRixlQUFlLENBQUNHLGFBQWhCLENBQThCLFNBQTlCLENBQXZCO0FBQ0EsY0FBTUMsU0FBUyxHQUFHSCxZQUFZLEdBQzFCQSxZQUFZLENBQUNJLHFCQUFiLEdBQXFDQyxHQURYLEdBRTFCLElBRko7QUFHQSxjQUFNQyxZQUFZLEdBQUdiLE1BQU0sQ0FBQ2MsV0FBNUI7O0FBRUEsWUFBSVAsWUFBSixFQUFrQjtBQUNoQixjQUFJRyxTQUFTLEdBQUdHLFlBQWhCLEVBQThCO0FBQzVCTCwwQkFBYyxDQUFDTyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixvQkFBN0I7QUFDRCxXQUZELE1BRU87QUFDTFIsMEJBQWMsQ0FBQ08sU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0Msb0JBQWhDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFDRixHQXBCRDtBQXFCRCxDQXhCTSIsImZpbGUiOiIuL3NyYy9wYXJ0aWFscy9mZWF0dXJlL2ZlYXR1cmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmVuZGVyRmVhdHVyZSA9ICgpID0+IHtcbiAgY29uc3QgJGZlYXR1cmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mZWF0dXJlXCIpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDU4MCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgJGN1cnJlbnRGZWF0dXJlID0gJGZlYXR1cmVzW2ldO1xuICAgICAgICBjb25zdCAkbmV4dEZlYXR1cmUgPSAkZmVhdHVyZXNbaSArIDFdIHx8IG51bGw7XG4gICAgICAgIGNvbnN0ICRjdXJyZW50U2NyZWVuID0gJGN1cnJlbnRGZWF0dXJlLnF1ZXJ5U2VsZWN0b3IoXCIuc2NyZWVuXCIpO1xuICAgICAgICBjb25zdCBuZXh0QkJ0b3AgPSAkbmV4dEZlYXR1cmVcbiAgICAgICAgICA/ICRuZXh0RmVhdHVyZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcbiAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICBpZiAoJG5leHRGZWF0dXJlKSB7XG4gICAgICAgICAgaWYgKG5leHRCQnRvcCA8IHdpbmRvd0hlaWdodCkge1xuICAgICAgICAgICAgJGN1cnJlbnRTY3JlZW4uY2xhc3NMaXN0LmFkZChcInNjcmVlbl9fZW5kLXNjcm9sbFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGN1cnJlbnRTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcInNjcmVlbl9fZW5kLXNjcm9sbFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/feature/feature.js\n");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OT1RZRVQvLi9zcmMvYXBwLnNjc3M/NGJiYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEiLCJmaWxlIjoiLi9zcmMvYXBwLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.scss\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;