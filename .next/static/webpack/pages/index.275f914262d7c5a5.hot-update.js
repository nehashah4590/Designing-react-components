"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Session(param) {\n    let { title , room  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 4,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 3,\n        columnNumber: 7\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    let { sessions  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n            ...sessions[0]\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 11,\n        columnNumber: 8\n    }, this);\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    let { id , first , last  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 19,\n        columnNumber: 7\n    }, this);\n}\n_c2 = SpeakerImage;\nfunction SpeakerFavorite(param) {\n    let { favorite , onFavoriteToggle  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: onFavoriteToggle,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this),\n                \" \",\n                \"Favorite\",\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 33,\n        columnNumber: 7\n    }, this);\n}\n_c3 = SpeakerFavorite;\nfunction SpeakerDemographics(param) {\n    let { first , last , bio , company , twitterHandle , favorite , onFavoriteToggle  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite,\n                onFavoriteToggle: onFavoriteToggle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 44,\n        columnNumber: 7\n    }, this);\n}\n_c4 = SpeakerDemographics;\nfunction Speaker(param) {\n    let { speaker , showSessions , onFavoriteToggle  } = param;\n    const { id , first , last , sessions  } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {\n                        ...speaker,\n                        onFavoriteToggle: onFavoriteToggle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 80,\n                columnNumber: 34\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 75,\n        columnNumber: 7\n    }, this);\n}\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHdEU7TUFYU3VCO0FBYVQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcz8yOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFNlc3Npb24gKHt0aXRsZSAsIHJvb219KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XHJcbiAgICAgICAge3RpdGxlfSA8c3Ryb25nPlJvb206IHtyb29tLm5hbWV9IDwvc3Ryb25nPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBTZXNzaW9ucyh7IHNlc3Npb25zIH0pe1xyXG4gICAgIHJldHVybihcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgICAgPFNlc3Npb24gey4uLnNlc3Npb25zWzBdfSAvPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gU3BlYWtlckltYWdlICh7aWQgLCBmaXJzdCAsIGxhc3R9KXtcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcclxuICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTcGVha2VyRmF2b3JpdGUoeyBmYXZvcml0ZSAsIG9uRmF2b3JpdGVUb2dnbGV9KSB7XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHBhZEIxXCI+XHJcbiAgICAgICAgPHNwYW4gb25DbGljaz17b25GYXZvcml0ZVRvZ2dsZX0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9e2Zhdm9yaXRlID09PSB0cnVlID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJ9Lz57XCIgXCJ9XHJcbiAgICAgICAgICBGYXZvcml0ZXtcIiBcIn1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKHtmaXJzdCAsIGxhc3QsIGJpbyAsIGNvbXBhbnkgLCB0d2l0dGVySGFuZGxlLCBmYXZvcml0ZSAsIG9uRmF2b3JpdGVUb2dnbGV9KSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgICAgICA8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNwZWFrZXJGYXZvcml0ZSBcclxuICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfSBcclxuICAgICAgb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX0gLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIHtiaW99IFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCBkLWZsZXggZmxleC1yb3cgbXQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnkgIFwiPlxyXG4gICAgICAgICAgICAgICAgPGg1PkNvbXBhbnk8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGg2Pntjb21wYW55fTwvaDY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDU+VHdpdHRlcjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDY+e3R3aXR0ZXJIYW5kbGV9PC9oNj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBTcGVha2VyKHtzcGVha2VyICwgc2hvd1Nlc3Npb25zICwgb25GYXZvcml0ZVRvZ2dsZX0pIHtcclxuICAgIGNvbnN0IHtpZCAsIGZpcnN0ICwgbGFzdCAsIHNlc3Npb25zfSA9IHNwZWFrZXI7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxyXG4gICAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cclxuICAgICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIHsuLi5zcGVha2VyfSBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsgc2hvd1Nlc3Npb25zID09PSB0cnVlPyA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfSAvPiA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IFNwZWFrZXI7Il0sIm5hbWVzIjpbIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJzcGFuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJkaXYiLCJTcGVha2VySW1hZ2UiLCJpZCIsImZpcnN0IiwibGFzdCIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiU3BlYWtlckZhdm9yaXRlIiwiZmF2b3JpdGUiLCJvbkZhdm9yaXRlVG9nZ2xlIiwib25DbGljayIsImkiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJoMyIsInAiLCJoNSIsImg2IiwiU3BlYWtlciIsInNwZWFrZXIiLCJzaG93U2Vzc2lvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});