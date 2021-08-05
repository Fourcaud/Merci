/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./javascript/index.js":
/*!*****************************!*\
  !*** ./javascript/index.js ***!
  \*****************************/
/***/ (() => {

eval("const modalbg = document.querySelector(\".container\");\r\nconst modalBtn = document.querySelectorAll(\".fa-gift\");\r\nconst modalCake = document.querySelector(\".cake\");\r\nconst finDuFeu = document.querySelector(\".allFuego\");\r\nconst finDuFeuBlock = document.querySelectorAll(\".velas\");\r\n\r\nconst text = document.querySelector(\".textfin\");\r\n\r\nmodalBtn.forEach((btn) => btn.addEventListener(\"click\", launchModal));\r\n\r\nfunction launchModal() {\r\n  modalbg.style.display = \"none\";\r\n  modalCake.style.display = \"block\";\r\n}\r\n\r\nfinDuFeuBlock.forEach((btn) => btn.addEventListener(\"click\", fin));\r\n\r\nfunction fin() {\r\n  finDuFeu.style.display = \"none\";\r\n  text.style.display = \"block\";\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./javascript/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./javascript/index.js"]();
/******/ 	
/******/ })()
;