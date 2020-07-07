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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const signIn = __webpack_require__(/*! ./js/auth/signin */ \"./src/js/auth/signin.js\").signIn;\r\nconst signUp = __webpack_require__(/*! ./js/auth/signup */ \"./src/js/auth/signup.js\").signUp;\r\nconst getAllUsers = __webpack_require__(/*! ./js/auth/getAllUsers */ \"./src/js/auth/getAllUsers.js\").getAllUsers;\r\n\r\nconst inputLogin = document.querySelector('#login-text');\r\nconst inputPassword = document.querySelector('#password-text');\r\nconst signinButton = document.querySelector('#signin-btn');\r\nconst signupButton = document.querySelector('#signup-btn');\r\n\r\nsigninButton.addEventListener('click', () => signIn(inputLogin.value, inputPassword.value));\r\nsignupButton.addEventListener('click', () => signUp(inputLogin.value, inputPassword.value));\r\n\r\nconst getAllArticles = __webpack_require__(/*! ./js/articles/getAllArticles */ \"./src/js/articles/getAllArticles.js\").getAllArticles;\r\nconst searchArticles = __webpack_require__(/*! ./js/articles/searchArticles */ \"./src/js/articles/searchArticles.js\").searchArticles;\r\n\r\nconst inputSearchSite = document.querySelector('#search-text-site');\r\nconst searchButtonSite = document.querySelector('#get-articles-site');\r\nconst showAllArticles = document.querySelector('#show-all-site');\r\n\r\nsearchButtonSite.addEventListener('click', () => searchArticles(inputSearchSite.value));\r\nshowAllArticles.addEventListener('click', () => getAllArticles());\r\n\r\nconst searchInWeb = __webpack_require__(/*! ./js/search/searchInWeb */ \"./src/js/search/searchInWeb.js\").searchInWeb;\r\nconst getSearchFromDb = __webpack_require__(/*! ./js/search/getSearchFromDb */ \"./src/js/search/getSearchFromDb.js\").getSearchFromDb;\r\n\r\nconst inputSearchWeb = document.querySelector('#search-text-web');\r\nconst searchButtonWeb = document.querySelector('#get-articles-web');\r\nconst showAllWeb = document.querySelector('#show-all-web');\r\n\r\nsearchButtonWeb.addEventListener('click', () => searchInWeb(inputSearchWeb.value));\r\nshowAllWeb.addEventListener('click', () => getSearchFromDb());\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/articles/getAllArticles.js":
/*!*******************************************!*\
  !*** ./src/js/articles/getAllArticles.js ***!
  \*******************************************/
/*! exports provided: getAllArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllArticles\", function() { return getAllArticles; });\nconst renderArray = __webpack_require__(/*! ../render-search-results */ \"./src/js/render-search-results.js\").renderArray;\r\n\r\nasync function getAllArticles() {\r\n    var requestOptions = {\r\n        method: 'GET',\r\n        redirect: 'follow'\r\n    };\r\n\r\n    fetch(\"http://localhost:3000/articles\", requestOptions)\r\n        .then(response => response.json())\r\n        .then(result => renderArray(result))\r\n        .catch(error => console.log('error', error));\r\n}\n\n//# sourceURL=webpack:///./src/js/articles/getAllArticles.js?");

/***/ }),

/***/ "./src/js/articles/searchArticles.js":
/*!*******************************************!*\
  !*** ./src/js/articles/searchArticles.js ***!
  \*******************************************/
/*! exports provided: searchArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchArticles\", function() { return searchArticles; });\nconst renderArray = __webpack_require__(/*! ../render-search-results */ \"./src/js/render-search-results.js\").renderArray;\r\n\r\nasync function searchArticles(content) {\r\n    var requestOptions = {\r\n        method: 'GET',\r\n        redirect: 'follow'\r\n    };\r\n\r\n    fetch(\"http://localhost:3000/articles/find?content=\" + content, requestOptions)\r\n        .then(response => response.json())\r\n        .then(result => {\r\n            if (Array.isArray(result)) {\r\n                renderArray(result);\r\n            }\r\n        })\r\n        .catch(error => console.log('error', error));\r\n}\n\n//# sourceURL=webpack:///./src/js/articles/searchArticles.js?");

/***/ }),

/***/ "./src/js/auth/getAllUsers.js":
/*!************************************!*\
  !*** ./src/js/auth/getAllUsers.js ***!
  \************************************/
/*! exports provided: getAllUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllUsers\", function() { return getAllUsers; });\nasync function getAllUsers(){\r\n    var requestOptions = {\r\n        method: 'GET',\r\n        redirect: 'follow'\r\n      };\r\n      \r\n      return fetch(\"http://localhost:3000/auth\", requestOptions)\r\n        .then(response => response.text())\r\n        .catch(error => console.log('error', error));\r\n}\n\n//# sourceURL=webpack:///./src/js/auth/getAllUsers.js?");

/***/ }),

/***/ "./src/js/auth/signin.js":
/*!*******************************!*\
  !*** ./src/js/auth/signin.js ***!
  \*******************************/
/*! exports provided: signIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signIn\", function() { return signIn; });\nfunction signIn(login, password) {\r\n    var myHeaders = new Headers();\r\n    myHeaders.append(\"Content-Type\", \"application/x-www-form-urlencoded\");\r\n\r\n    var urlencoded = new URLSearchParams();\r\n    urlencoded.append(\"login\", login);\r\n    urlencoded.append(\"password\", password);\r\n\r\n    var requestOptions = {\r\n        method: 'POST',\r\n        headers: myHeaders,\r\n        body: urlencoded,\r\n        redirect: 'follow'\r\n    };\r\n\r\n    fetch(\"http://localhost:3000/auth/signin\", requestOptions)\r\n        .then(response => response.json())\r\n        .then(result => {\r\n            if (result.error) {\r\n                throw new Error(result.message);\r\n            } else {\r\n                success(result.username);\r\n            }\r\n        })\r\n        .catch(error => alert(error));\r\n}\r\n\r\nfunction success(username) {\r\n    document.querySelector('#login-text').disabled = true;\r\n    document.querySelector('#password-text').disabled = true;\r\n    alert(`Привет ${username}`);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/auth/signin.js?");

/***/ }),

/***/ "./src/js/auth/signup.js":
/*!*******************************!*\
  !*** ./src/js/auth/signup.js ***!
  \*******************************/
/*! exports provided: signUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUp\", function() { return signUp; });\nfunction signUp(login, password) {\r\n    var myHeaders = new Headers();\r\n    myHeaders.append(\"Content-Type\", \"application/x-www-form-urlencoded\");\r\n\r\n    var urlencoded = new URLSearchParams();\r\n    urlencoded.append(\"login\", login);\r\n    urlencoded.append(\"password\", password);\r\n\r\n    var requestOptions = {\r\n        method: 'POST',\r\n        headers: myHeaders,\r\n        body: urlencoded,\r\n        redirect: 'follow'\r\n    };\r\n\r\n    fetch(\"http://localhost:3000/auth/signup\", requestOptions)\r\n        .then(response => {\r\n            if (!response.ok) {\r\n                throw new Error(`${response.status}\\nНенадежный пароль`);\r\n            }\r\n            else {\r\n                alert('Пользователь зарегистрирован')\r\n            }\r\n        })\r\n        .catch(error => alert(error));\r\n}\n\n//# sourceURL=webpack:///./src/js/auth/signup.js?");

/***/ }),

/***/ "./src/js/render-search-results.js":
/*!*****************************************!*\
  !*** ./src/js/render-search-results.js ***!
  \*****************************************/
/*! exports provided: renderOne, renderArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderOne\", function() { return renderOne; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderArray\", function() { return renderArray; });\nconst wrapper = document.querySelector('.articles-wrapper');\r\n\r\nfunction renderOne(title = 'что-то', link = 'из дб', snippet) {\r\n    wrapper.innerHTML +=\r\n    `\r\n        <div class=\"articles-container\">\r\n            <div class=\"article-title\">${title}</div>\r\n            <div class=\"link\">${\r\n                link === 'из дб' ? 'из дб' : `<a href=\"${link}\" target=\"_blank\">Ссылка на результат</a>`\r\n            }</div>\r\n            <div class=\"snippet\">${snippet}</div>\r\n        </div>\r\n    `;\r\n}\r\n\r\nfunction renderArray(arr) {\r\n    wrapper.innerHTML = '';\r\n    wrapper.innerHTML += '<div class=\"title\">Результаты</div>';\r\n\r\n    arr.forEach(el => {\r\n        if (el.content) {\r\n            renderOne(undefined, undefined, el.content);\r\n        } else if (el.snippet) {\r\n            renderOne(el.title, el.link, el.snippet);\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/render-search-results.js?");

/***/ }),

/***/ "./src/js/search/getSearchFromDb.js":
/*!******************************************!*\
  !*** ./src/js/search/getSearchFromDb.js ***!
  \******************************************/
/*! exports provided: getSearchFromDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSearchFromDb\", function() { return getSearchFromDb; });\nconst renderArray = __webpack_require__(/*! ../render-search-results */ \"./src/js/render-search-results.js\").renderArray;\r\n\r\nasync function getSearchFromDb() {\r\n    var requestOptions = {\r\n        method: 'GET',\r\n        redirect: 'follow'\r\n    };\r\n\r\n    fetch(\"http://localhost:3000/search/db\", requestOptions)\r\n        .then(response => response.json())\r\n        .then(result => renderArray(result))\r\n        .catch(error => console.log('error', error));\r\n}\n\n//# sourceURL=webpack:///./src/js/search/getSearchFromDb.js?");

/***/ }),

/***/ "./src/js/search/searchInWeb.js":
/*!**************************************!*\
  !*** ./src/js/search/searchInWeb.js ***!
  \**************************************/
/*! exports provided: searchInWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchInWeb\", function() { return searchInWeb; });\nconst renderArray = __webpack_require__(/*! ../render-search-results */ \"./src/js/render-search-results.js\").renderArray;\r\n\r\nasync function searchInWeb(text) {\r\n    var requestOptions = {\r\n        method: 'GET',\r\n        redirect: 'follow'\r\n    };\r\n\r\n    fetch(\"http://localhost:3000/search/?query=\" + text, requestOptions)\r\n        .then(response => response.json())\r\n        .then(result => renderArray(result))\r\n        .catch(error => console.log('error', error));\r\n}\n\n//# sourceURL=webpack:///./src/js/search/searchInWeb.js?");

/***/ })

/******/ });
