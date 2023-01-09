"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/posts.js":
/*!**********************!*\
  !*** ./lib/posts.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPost\": () => (/* binding */ getPost),\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts),\n/* harmony export */   \"getSlugs\": () => (/* binding */ getSlugs)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ \"marked\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_2__]);\nmarked__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function getPost(slug) {\n    const source = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(`content/posts/${slug}.md`, \"utf8\");\n    const { data: { date , title  } , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(source);\n    console.log(\"content bbbb\", content);\n    console.log(marked__WEBPACK_IMPORTED_MODULE_2__.marked);\n    const body = (0,marked__WEBPACK_IMPORTED_MODULE_2__.marked)(content);\n    return {\n        date,\n        title,\n        body\n    };\n}\nasync function getPosts() {\n    const slugs = await getSlugs();\n    const posts = [];\n    for (const slug of slugs){\n        const post = await getPost(slug);\n        posts.push({\n            slug,\n            ...post\n        });\n    }\n    return posts;\n}\nasync function getSlugs() {\n    const suffix = \".md\";\n    const files = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(\"content/posts\");\n    return files.filter((file)=>file.endsWith(suffix)).map((file)=>file.slice(0, -suffix.length));\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDWjtBQUNEO0FBQ3pCLGVBQWVLLFFBQVFDLElBQUksRUFBRTtJQUNsQyxNQUFNQyxTQUFTLE1BQU1OLGlEQUFXLENBQUMsQ0FBQyxjQUFjLEVBQUVLLEtBQUssR0FBRyxDQUFDLEVBQUU7SUFDN0QsTUFBTSxFQUNKRyxNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQ3JCQyxRQUFPLEVBQ1IsR0FBR1Qsa0RBQU1BLENBQUNJO0lBQ1hNLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JGO0lBQzVCQyxRQUFRQyxHQUFHLENBQUNWLDBDQUFNQTtJQUNsQixNQUFNVyxPQUFPWCw4Q0FBTUEsQ0FBQ1E7SUFDcEIsT0FBTztRQUFFRjtRQUFNQztRQUFPSTtJQUFLO0FBQzdCLENBQUM7QUFDTSxlQUFlQyxXQUFXO0lBQy9CLE1BQU1DLFFBQVEsTUFBTUM7SUFDcEIsTUFBTUMsUUFBUSxFQUFFO0lBQ2hCLEtBQUssTUFBTWIsUUFBUVcsTUFBTztRQUN4QixNQUFNRyxPQUFPLE1BQU1mLFFBQVFDO1FBQzNCYSxNQUFNRSxJQUFJLENBQUM7WUFBRWY7WUFBTSxHQUFHYyxJQUFJO1FBQUM7SUFDN0I7SUFDQSxPQUFPRDtBQUNULENBQUM7QUFDTSxlQUFlRCxXQUFXO0lBQy9CLE1BQU1JLFNBQVM7SUFDZixNQUFNQyxRQUFRLE1BQU10QixnREFBVSxDQUFDO0lBQy9CLE9BQU9zQixNQUNKQyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsUUFBUSxDQUFDSixTQUMvQkssR0FBRyxDQUFDLENBQUNGLE9BQVNBLEtBQUtHLEtBQUssQ0FBQyxHQUFHLENBQUNOLE9BQU9PLE1BQU07QUFDL0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYmxvZy8uL2xpYi9wb3N0cy5qcz9mNGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb21pc2VzIGFzIGZzLCByZWFkZGlyIH0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XHJcbmltcG9ydCB7IG1hcmtlZCB9IGZyb20gXCJtYXJrZWRcIjtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3Qoc2x1Zykge1xyXG4gIGNvbnN0IHNvdXJjZSA9IGF3YWl0IGZzLnJlYWRGaWxlKGBjb250ZW50L3Bvc3RzLyR7c2x1Z30ubWRgLCBcInV0ZjhcIik7XHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogeyBkYXRlLCB0aXRsZSB9LFxyXG4gICAgY29udGVudCxcclxuICB9ID0gbWF0dGVyKHNvdXJjZSk7XHJcbiAgY29uc29sZS5sb2coXCJjb250ZW50IGJiYmJcIiwgY29udGVudCk7XHJcbiAgY29uc29sZS5sb2cobWFya2VkKTtcclxuICBjb25zdCBib2R5ID0gbWFya2VkKGNvbnRlbnQpO1xyXG4gIHJldHVybiB7IGRhdGUsIHRpdGxlLCBib2R5IH07XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG4gIGNvbnN0IHNsdWdzID0gYXdhaXQgZ2V0U2x1Z3MoKTtcclxuICBjb25zdCBwb3N0cyA9IFtdO1xyXG4gIGZvciAoY29uc3Qgc2x1ZyBvZiBzbHVncykge1xyXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFBvc3Qoc2x1Zyk7XHJcbiAgICBwb3N0cy5wdXNoKHsgc2x1ZywgLi4ucG9zdCB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHBvc3RzO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTbHVncygpIHtcclxuICBjb25zdCBzdWZmaXggPSBcIi5tZFwiO1xyXG4gIGNvbnN0IGZpbGVzID0gYXdhaXQgZnMucmVhZGRpcihcImNvbnRlbnQvcG9zdHNcIik7XHJcbiAgcmV0dXJuIGZpbGVzXHJcbiAgICAuZmlsdGVyKChmaWxlKSA9PiBmaWxlLmVuZHNXaXRoKHN1ZmZpeCkpXHJcbiAgICAubWFwKChmaWxlKSA9PiBmaWxlLnNsaWNlKDAsIC1zdWZmaXgubGVuZ3RoKSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInByb21pc2VzIiwiZnMiLCJyZWFkZGlyIiwibWF0dGVyIiwibWFya2VkIiwiZ2V0UG9zdCIsInNsdWciLCJzb3VyY2UiLCJyZWFkRmlsZSIsImRhdGEiLCJkYXRlIiwidGl0bGUiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJnZXRQb3N0cyIsInNsdWdzIiwiZ2V0U2x1Z3MiLCJwb3N0cyIsInBvc3QiLCJwdXNoIiwic3VmZml4IiwiZmlsZXMiLCJmaWx0ZXIiLCJmaWxlIiwiZW5kc1dpdGgiLCJtYXAiLCJzbGljZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/posts.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/posts */ \"./lib/posts.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_3__]);\n_lib_posts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nasync function getStaticProps() {\n    const posts = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_3__.getPosts)();\n    return {\n        props: {\n            posts\n        }\n    };\n}\nfunction IndexPage({ posts  }) {\n    console.log(\"home page render\", posts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"My Blog\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\NextJS\\\\next-blogs\\\\pages\\\\index.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\next-blogs\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"My Blog\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\next-blogs\\\\pages\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: `/posts/${post.slug}`,\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\NextJS\\\\next-blogs\\\\pages\\\\index.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, this)\n                            }, post.slug, false, {\n                                fileName: \"D:\\\\NextJS\\\\next-blogs\\\\pages\\\\index.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\next-blogs\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\NextJS\\\\next-blogs\\\\pages\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNBO0FBQ1c7QUFDakMsZUFBZUcsaUJBQWlCO0lBQ3JDLE1BQU1DLFFBQVEsTUFBTUYsb0RBQVFBO0lBQzVCLE9BQU87UUFDTEcsT0FBTztZQUFFRDtRQUFNO0lBQ2pCO0FBQ0YsQ0FBQztBQUNELFNBQVNFLFVBQVUsRUFBRUYsTUFBSyxFQUFFLEVBQUU7SUFDNUJHLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JKO0lBQ2hDLHFCQUNFOzswQkFDRSw4REFBQ0osa0RBQUlBOzBCQUNILDRFQUFDUzs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNDOztrQ0FDQyw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7a0NBQ0VSLE1BQU1TLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0M7MENBQ0MsNEVBQUNkLGtEQUFJQTtvQ0FBQ2UsTUFBTSxDQUFDLE9BQU8sRUFBRUYsS0FBS0csSUFBSSxDQUFDLENBQUM7OENBQUdILEtBQUtMLEtBQUs7Ozs7OzsrQkFEdkNLLEtBQUtHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE5QjtBQUNBLGlFQUFlWCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ibG9nLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tIFwiLi4vbGliL3Bvc3RzXCI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldFBvc3RzKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHBvc3RzIH0sXHJcbiAgfTtcclxufVxyXG5mdW5jdGlvbiBJbmRleFBhZ2UoeyBwb3N0cyB9KSB7XHJcbiAgY29uc29sZS5sb2coXCJob21lIHBhZ2UgcmVuZGVyXCIsIHBvc3RzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk15IEJsb2c8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3Quc2x1Z30+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8ke3Bvc3Quc2x1Z31gfT57cG9zdC50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiZ2V0UG9zdHMiLCJnZXRTdGF0aWNQcm9wcyIsInBvc3RzIiwicHJvcHMiLCJJbmRleFBhZ2UiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJtYWluIiwiaDEiLCJ1bCIsIm1hcCIsInBvc3QiLCJsaSIsImhyZWYiLCJzbHVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/Link");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("marked");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();