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
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./lib/posts.js":
/*!**********************!*\
  !*** ./lib/posts.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPost\": () => (/* binding */ getPost),\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts),\n/* harmony export */   \"getSlugs\": () => (/* binding */ getSlugs)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ \"marked\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_2__]);\nmarked__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function getPost(slug) {\n    const source = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(`content/posts/${slug}.md`, \"utf8\");\n    const { data: { date , title  } , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(source);\n    console.log(\"content bbbb\", content);\n    console.log(marked__WEBPACK_IMPORTED_MODULE_2__.marked);\n    const body = (0,marked__WEBPACK_IMPORTED_MODULE_2__.marked)(content);\n    return {\n        date,\n        title,\n        body\n    };\n}\nasync function getPosts() {\n    const slugs = await getSlugs();\n    const posts = [];\n    for (const slug of slugs){\n        const post = await getPost(slug);\n        posts.push({\n            slug,\n            ...post\n        });\n    }\n    return posts;\n}\nasync function getSlugs() {\n    const suffix = \".md\";\n    const files = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(\"content/posts\");\n    return files.filter((file)=>file.endsWith(suffix)).map((file)=>file.slice(0, -suffix.length));\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDWjtBQUNEO0FBQ3pCLGVBQWVLLFFBQVFDLElBQUksRUFBRTtJQUNsQyxNQUFNQyxTQUFTLE1BQU1OLGlEQUFXLENBQUMsQ0FBQyxjQUFjLEVBQUVLLEtBQUssR0FBRyxDQUFDLEVBQUU7SUFDN0QsTUFBTSxFQUNKRyxNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQ3JCQyxRQUFPLEVBQ1IsR0FBR1Qsa0RBQU1BLENBQUNJO0lBQ1hNLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JGO0lBQzVCQyxRQUFRQyxHQUFHLENBQUNWLDBDQUFNQTtJQUNsQixNQUFNVyxPQUFPWCw4Q0FBTUEsQ0FBQ1E7SUFDcEIsT0FBTztRQUFFRjtRQUFNQztRQUFPSTtJQUFLO0FBQzdCLENBQUM7QUFDTSxlQUFlQyxXQUFXO0lBQy9CLE1BQU1DLFFBQVEsTUFBTUM7SUFDcEIsTUFBTUMsUUFBUSxFQUFFO0lBQ2hCLEtBQUssTUFBTWIsUUFBUVcsTUFBTztRQUN4QixNQUFNRyxPQUFPLE1BQU1mLFFBQVFDO1FBQzNCYSxNQUFNRSxJQUFJLENBQUM7WUFBRWY7WUFBTSxHQUFHYyxJQUFJO1FBQUM7SUFDN0I7SUFDQSxPQUFPRDtBQUNULENBQUM7QUFDTSxlQUFlRCxXQUFXO0lBQy9CLE1BQU1JLFNBQVM7SUFDZixNQUFNQyxRQUFRLE1BQU10QixnREFBVSxDQUFDO0lBQy9CLE9BQU9zQixNQUNKQyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsUUFBUSxDQUFDSixTQUMvQkssR0FBRyxDQUFDLENBQUNGLE9BQVNBLEtBQUtHLEtBQUssQ0FBQyxHQUFHLENBQUNOLE9BQU9PLE1BQU07QUFDL0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYmxvZy8uL2xpYi9wb3N0cy5qcz9mNGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb21pc2VzIGFzIGZzLCByZWFkZGlyIH0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XHJcbmltcG9ydCB7IG1hcmtlZCB9IGZyb20gXCJtYXJrZWRcIjtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3Qoc2x1Zykge1xyXG4gIGNvbnN0IHNvdXJjZSA9IGF3YWl0IGZzLnJlYWRGaWxlKGBjb250ZW50L3Bvc3RzLyR7c2x1Z30ubWRgLCBcInV0ZjhcIik7XHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogeyBkYXRlLCB0aXRsZSB9LFxyXG4gICAgY29udGVudCxcclxuICB9ID0gbWF0dGVyKHNvdXJjZSk7XHJcbiAgY29uc29sZS5sb2coXCJjb250ZW50IGJiYmJcIiwgY29udGVudCk7XHJcbiAgY29uc29sZS5sb2cobWFya2VkKTtcclxuICBjb25zdCBib2R5ID0gbWFya2VkKGNvbnRlbnQpO1xyXG4gIHJldHVybiB7IGRhdGUsIHRpdGxlLCBib2R5IH07XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG4gIGNvbnN0IHNsdWdzID0gYXdhaXQgZ2V0U2x1Z3MoKTtcclxuICBjb25zdCBwb3N0cyA9IFtdO1xyXG4gIGZvciAoY29uc3Qgc2x1ZyBvZiBzbHVncykge1xyXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFBvc3Qoc2x1Zyk7XHJcbiAgICBwb3N0cy5wdXNoKHsgc2x1ZywgLi4ucG9zdCB9KTtcclxuICB9XHJcbiAgcmV0dXJuIHBvc3RzO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTbHVncygpIHtcclxuICBjb25zdCBzdWZmaXggPSBcIi5tZFwiO1xyXG4gIGNvbnN0IGZpbGVzID0gYXdhaXQgZnMucmVhZGRpcihcImNvbnRlbnQvcG9zdHNcIik7XHJcbiAgcmV0dXJuIGZpbGVzXHJcbiAgICAuZmlsdGVyKChmaWxlKSA9PiBmaWxlLmVuZHNXaXRoKHN1ZmZpeCkpXHJcbiAgICAubWFwKChmaWxlKSA9PiBmaWxlLnNsaWNlKDAsIC1zdWZmaXgubGVuZ3RoKSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInByb21pc2VzIiwiZnMiLCJyZWFkZGlyIiwibWF0dGVyIiwibWFya2VkIiwiZ2V0UG9zdCIsInNsdWciLCJzb3VyY2UiLCJyZWFkRmlsZSIsImRhdGEiLCJkYXRlIiwidGl0bGUiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJnZXRQb3N0cyIsInNsdWdzIiwiZ2V0U2x1Z3MiLCJwb3N0cyIsInBvc3QiLCJwdXNoIiwic3VmZml4IiwiZmlsZXMiLCJmaWx0ZXIiLCJmaWxlIiwiZW5kc1dpdGgiLCJtYXAiLCJzbGljZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/posts.js\n");

/***/ }),

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/posts */ \"./lib/posts.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_2__]);\n_lib_posts__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function getStaticPaths() {\n    const slugs = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_2__.getSlugs)();\n    return {\n        paths: slugs.map((slug)=>({\n                params: {\n                    slug\n                }\n            })),\n        // paths: [\n        //   { params: { slug: \"first-post\" } },\n        //   { params: { slug: \"second-post\" } },\n        // ],\n        fallback: false\n    };\n}\nasync function getStaticProps({ params: { slug  }  }) {\n    console.log(\"[PostPage] getStaticProps()\", slug);\n    const post = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_2__.getPost)(slug);\n    return {\n        props: {\n            post\n        }\n    };\n}\nfunction PostPage({ post  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        post.title,\n                        \"-My Blog\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\NextJS\\\\next-blogs\\\\pages\\\\posts\\\\[slug].js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJS\\\\next-blogs\\\\pages\\\\posts\\\\[slug].js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.date\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\next-blogs\\\\pages\\\\posts\\\\[slug].js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\next-blogs\\\\pages\\\\posts\\\\[slug].js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        dangerouslySetInnerHTML: {\n                            __html: post.body\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NextJS\\\\next-blogs\\\\pages\\\\posts\\\\[slug].js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\NextJS\\\\next-blogs\\\\pages\\\\posts\\\\[slug].js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUN1QjtBQUM3QyxlQUFlRyxpQkFBaUI7SUFDckMsTUFBTUMsUUFBUSxNQUFNRixvREFBUUE7SUFDNUIsT0FBTztRQUNMRyxPQUFPRCxNQUFNRSxHQUFHLENBQUMsQ0FBQ0MsT0FBVTtnQkFDMUJDLFFBQVE7b0JBQUVEO2dCQUFLO1lBQ2pCO1FBQ0EsV0FBVztRQUNYLHdDQUF3QztRQUN4Qyx5Q0FBeUM7UUFDekMsS0FBSztRQUNMRSxVQUFVLEtBQUs7SUFDakI7QUFDRixDQUFDO0FBQ00sZUFBZUMsZUFBZSxFQUFFRixRQUFRLEVBQUVELEtBQUksRUFBRSxHQUFFLEVBQUU7SUFDekRJLFFBQVFDLEdBQUcsQ0FBQywrQkFBK0JMO0lBQzNDLE1BQU1NLE9BQU8sTUFBTVosbURBQU9BLENBQUNNO0lBQzNCLE9BQU87UUFDTE8sT0FBTztZQUFFRDtRQUFLO0lBQ2hCO0FBQ0YsQ0FBQztBQUNELFNBQVNFLFNBQVMsRUFBRUYsS0FBSSxFQUFFLEVBQUU7SUFDMUIscUJBQ0U7OzBCQUNFLDhEQUFDYixrREFBSUE7MEJBQ0gsNEVBQUNnQjs7d0JBQU9ILEtBQUtHLEtBQUs7d0JBQUM7Ozs7Ozs7Ozs7OzswQkFFckIsOERBQUNDOztrQ0FDQyw4REFBQ0M7a0NBQUdMLEtBQUtNLElBQUk7Ozs7OztrQ0FDYiw4REFBQ0M7a0NBQUlQLEtBQUtHLEtBQUs7Ozs7OztrQ0FDZiw4REFBQ0s7d0JBQVFDLHlCQUF5Qjs0QkFBRUMsUUFBUVYsS0FBS1csSUFBSTt3QkFBQzs7Ozs7Ozs7Ozs7Ozs7QUFJOUQ7QUFDQSxpRUFBZVQsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYmxvZy8uL3BhZ2VzL3Bvc3RzL1tzbHVnXS5qcz82OTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgZ2V0UG9zdCwgZ2V0U2x1Z3MgfSBmcm9tIFwiLi4vLi4vbGliL3Bvc3RzXCI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBzbHVncyA9IGF3YWl0IGdldFNsdWdzKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBzbHVncy5tYXAoKHNsdWcpID0+ICh7XHJcbiAgICAgIHBhcmFtczogeyBzbHVnIH0sXHJcbiAgICB9KSksXHJcbiAgICAvLyBwYXRoczogW1xyXG4gICAgLy8gICB7IHBhcmFtczogeyBzbHVnOiBcImZpcnN0LXBvc3RcIiB9IH0sXHJcbiAgICAvLyAgIHsgcGFyYW1zOiB7IHNsdWc6IFwic2Vjb25kLXBvc3RcIiB9IH0sXHJcbiAgICAvLyBdLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSB7XHJcbiAgY29uc29sZS5sb2coXCJbUG9zdFBhZ2VdIGdldFN0YXRpY1Byb3BzKClcIiwgc2x1Zyk7XHJcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFBvc3Qoc2x1Zyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHBvc3QgfSxcclxuICB9O1xyXG59XHJcbmZ1bmN0aW9uIFBvc3RQYWdlKHsgcG9zdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX0tTXkgQmxvZzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPHA+e3Bvc3QuZGF0ZX08L3A+XHJcbiAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgPGFydGljbGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmJvZHkgfX0gLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZTtcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJnZXRQb3N0IiwiZ2V0U2x1Z3MiLCJnZXRTdGF0aWNQYXRocyIsInNsdWdzIiwicGF0aHMiLCJtYXAiLCJzbHVnIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwicHJvcHMiLCJQb3N0UGFnZSIsInRpdGxlIiwibWFpbiIsInAiLCJkYXRlIiwiaDEiLCJhcnRpY2xlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[slug].js"));
module.exports = __webpack_exports__;

})();