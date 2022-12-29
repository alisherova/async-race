/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_car3_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/car3.svg */ \"./assets/car3.svg\");\nlet header = document.createElement(\"div\");\nlet pagesDiv = document.createElement(\"div\");\nlet garagePageBtn = document.createElement(\"button\");\ngaragePageBtn.textContent = \"TO GARAGE\";\ngaragePageBtn.classList.add(\"header__button\");\nlet winnersPageBtn = document.createElement(\"button\");\nwinnersPageBtn.textContent = \"TO WINNERS\";\nwinnersPageBtn.classList.add(\"header__button\");\nlet title = document.createElement(\"p\");\ntitle.innerHTML = \"AS<span>YN</span>C RAC<span>E</span>\";\ntitle.classList.add(\"logo__title\");\npagesDiv.append(garagePageBtn, winnersPageBtn);\nheader.append(pagesDiv, title);\nheader.classList.add(\"header__wrapper\");\nlet root = document.createElement(\"div\");\nroot.setAttribute(\"id\", \"root\");\n\n\nlet carQuantity = null;\n\nconst writeCarContent = (carName) => {\n    return `<div class=\"garage__content\">\n      <div class=\"car\" data-id=\"2\">\n        <div class=\"car__options\">\n          <div class=\"car__buttons\">\n            <button class=\"button button-additional buttonSelect\">select</button>\n            <button class=\"button button-additional buttonRemove\" data-id=\"2\">remove</button>\n          </div>\n          <div class=\"car__wrapper\">\n            <div class=\"car__buttons\">\n              <button class=\"button button-basic buttonStart\"></button>\n              <button class=\"button button-basic buttonEnd\"></button>\n            </div>\n            <span class=\"text\">${carName}</span>\n         </div>\n        </div>\n        <div class=\"car__container\">\n        <img src=${_assets_car3_svg__WEBPACK_IMPORTED_MODULE_0__} alt=\"car\">\n    </div>\n      </div>`;\n  };\nfunction fetchData(callback){\n    fetch('http://127.0.0.1:3000/garage')\n    .then(res => res.json())\n    .then(data => {\n        carQuantity = data.length;\n        for(let i = 0; i < data.length; i++){ \n            root.innerHTML += callback(data[i].name);\n        }\n        console.log(data)\n    })\n} \n\nfetchData(writeCarContent)\n\n\nconst writeInputs = (input1, input2) => {\n  return `<div class=\"options\">\n    <div class=\"option create-car\">\n      <div class=\"option__wrapper\">\n        <input class=\"option__input option__input_text create-car__name\" type=\"text\">\n        <input class=\"option__input option__input_color create-car__color\" type=\"color\" value=\"#fb00ff\">\n      </div>\n      <button class=\"button button-additional option__button create-car__button\">${input1}</button>\n    </div>\n    <div class=\"option update-car\">\n      <div class=\"option__wrapper\">\n        <input class=\"option__input option__input_text update-car__name\" type=\"text\" disabled=\"\">\n        <input class=\"option__input option__input_color update-car__color\" type=\"color\" disabled=\"\">\n      </div>\n      <button class=\"button button-additional option__button update-car__button\" disabled=\"\">${input2}</button>\n    </div>\n  </div>`;\n};\n\n\n\nconst writeHeader = () => {\n  return `<div>\n  <div class=\"garage\">\n    <div class=\"wrapper\">\n      <div class=\"garage__options\"> \n        <div class=\"options__race\">\n          <button class=\"button option__button button-basic race\">Race</button>\n          <button class=\"button option__button button-basic reset\">Reset</button>\n          <button class=\"button option__button button-basic generate-cars\">Generate cars</button>\n        </div>\n      </div>\n      <h2 class=\"heading\">GARAGE (<span class=\"garage__carsTotal\">${carQuantity}</span>)</h2>\n    </div>\n  </div>\n        </div>`;\n};\n\nconst writePagination = () => {\n  return `<div class=\"garage__pagination pagination\">\n    <button class=\"button button-basic button-prev\" disabled=\"\">Prev</button>\n    <span class=\"pagination__page\">1</span>\n    <button class=\"button button-basic button-next\" disabled=\"\">Next</button>\n  </div>`;\n};\nroot.innerHTML += writeInputs(\"CREATE\", \"UPDATE\");\nroot.innerHTML += writeHeader();\nroot.innerHTML += writePagination();\n\n// export const writeGaragePage = () => {\n//     document.querySelector('body').innerHTML = `\n//         <div></div>\n//     `\n// }\n\n// export const writeWinnnersPage = () => {\n\n// }\ndocument.querySelector(\"body\").append(header, root);\n\n\n//# sourceURL=webpack://async-race-api/./src/UI.js?");

/***/ }),

/***/ "./assets/car3.svg":
/*!*************************!*\
  !*** ./assets/car3.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb165962a9d80cf7b03a.svg\";\n\n//# sourceURL=webpack://async-race-api/./assets/car3.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/UI.js");
/******/ 	
/******/ })()
;