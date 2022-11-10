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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Session(param) {\n    let { title , room  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 6,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 5,\n        columnNumber: 7\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    let { sessions  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n            ...sessions[0]\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 13,\n        columnNumber: 8\n    }, this);\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    let { id , first , last  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, this);\n}\n_c2 = SpeakerImage;\nfunction SpeakerFavorite(param) {\n    let { favorite , onFavoriteToggle  } = param;\n    _s();\n    const [inTransition, setInTransition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function doneCallback() {\n        setInTransition(false);\n        console.log(\"In SpeakerFavorite:doneCallBack  \".concat(new Data().getMilliseconds()));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: function() {\n                setInTransition(true);\n                return onFavoriteToggle(doneCallback);\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this),\n                \" \",\n                \"Favorite\",\n                \" \",\n                inTransition ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"fas fa-circle-notch fa-spin\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 45,\n                    columnNumber: 28\n                }, this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 38,\n        columnNumber: 7\n    }, this);\n}\n_s(SpeakerFavorite, \"gfuw24RZcQ1VLKTCbiMf9MKfd+I=\");\n_c3 = SpeakerFavorite;\nfunction SpeakerDemographics(param) {\n    let { first , last , bio , company , twitterHandle , favorite , onFavoriteToggle  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite,\n                onFavoriteToggle: onFavoriteToggle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 53,\n        columnNumber: 7\n    }, this);\n}\n_c4 = SpeakerDemographics;\nfunction Speaker(param) {\n    let { speaker , showSessions , onFavoriteToggle  } = param;\n    const { id , first , last , sessions  } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {\n                        ...speaker,\n                        onFavoriteToggle: onFavoriteToggle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, this),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 89,\n                columnNumber: 34\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 84,\n        columnNumber: 7\n    }, this);\n}\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBSyxFQUFHQyxLQUFJLEVBQUdMLFNBQVEsRUFBQyxHQUFHK0I7SUFDdkMscUJBQ0UsOERBQUM5QjtRQUFJTCxXQUFVOzswQkFDYiw4REFBQ0s7Z0JBQUlMLFdBQVU7O2tDQUNiLDhEQUFDTTt3QkFBYUMsSUFBSUE7d0JBQUlDLE9BQU9BO3dCQUFPQyxNQUFNQTs7Ozs7O2tDQUMxQyw4REFBQ2lCO3dCQUFxQixHQUFHUyxPQUFPO3dCQUFFbkIsa0JBQWtCQTs7Ozs7Ozs7Ozs7O1lBRXBEb0IsaUJBQWlCLElBQUksaUJBQUUsOERBQUNqQztnQkFBU0MsVUFBVUE7Ozs7O3VCQUFlLElBQUk7Ozs7Ozs7QUFHdEU7TUFYUzhCO0FBYVQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcz8yOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmZ1bmN0aW9uIFNlc3Npb24gKHt0aXRsZSAsIHJvb219KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XHJcbiAgICAgICAge3RpdGxlfSA8c3Ryb25nPlJvb206IHtyb29tLm5hbWV9IDwvc3Ryb25nPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBTZXNzaW9ucyh7IHNlc3Npb25zIH0pe1xyXG4gICAgIHJldHVybihcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgICAgPFNlc3Npb24gey4uLnNlc3Npb25zWzBdfSAvPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gU3BlYWtlckltYWdlICh7aWQgLCBmaXJzdCAsIGxhc3R9KXtcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcclxuICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTcGVha2VyRmF2b3JpdGUoeyBmYXZvcml0ZSAsIG9uRmF2b3JpdGVUb2dnbGV9KSB7XHJcbiAgY29uc3QgW2luVHJhbnNpdGlvbiwgc2V0SW5UcmFuc2l0aW9uXT0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGZ1bmN0aW9uIGRvbmVDYWxsYmFjaygpe1xyXG4gICAgc2V0SW5UcmFuc2l0aW9uKGZhbHNlKTtcclxuICAgIGNvbnNvbGUubG9nKGBJbiBTcGVha2VyRmF2b3JpdGU6ZG9uZUNhbGxCYWNrICAke25ldyBEYXRhKCkuZ2V0TWlsbGlzZWNvbmRzKCl9YCk7XHJcbiAgfSAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHBhZEIxXCI+XHJcbiAgICAgICAgPHNwYW4gb25DbGljaz17ZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHNldEluVHJhbnNpdGlvbih0cnVlKTtcclxuICAgICAgICAgIHJldHVybiBvbkZhdm9yaXRlVG9nZ2xlKGRvbmVDYWxsYmFjayk7XHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9e2Zhdm9yaXRlID09PSB0cnVlID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJ9Lz57XCIgXCJ9XHJcbiAgICAgICAgICBGYXZvcml0ZXtcIiBcIn1cclxuICAgICAgICAgIHtpblRyYW5zaXRpb24gPyAoPHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluXCI+PC9zcGFuPik6IG51bGx9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gU3BlYWtlckRlbW9ncmFwaGljcyh7Zmlyc3QgLCBsYXN0LCBiaW8gLCBjb21wYW55ICwgdHdpdHRlckhhbmRsZSwgZmF2b3JpdGUgLCBvbkZhdm9yaXRlVG9nZ2xlfSkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxTcGVha2VyRmF2b3JpdGUgXHJcbiAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX0gXHJcbiAgICAgIG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9IC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICB7YmlvfSBcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55ICBcIj5cclxuICAgICAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cclxuICAgICAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gU3BlYWtlcih7c3BlYWtlciAsIHNob3dTZXNzaW9ucyAsIG9uRmF2b3JpdGVUb2dnbGV9KSB7XHJcbiAgICBjb25zdCB7aWQgLCBmaXJzdCAsIGxhc3QgLCBzZXNzaW9uc30gPSBzcGVha2VyO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cclxuICAgICAgICAgIDxTcGVha2VySW1hZ2UgaWQ9e2lkfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IC8+XHJcbiAgICAgICAgICA8U3BlYWtlckRlbW9ncmFwaGljcyB7Li4uc3BlYWtlcn0gb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IHNob3dTZXNzaW9ucyA9PT0gdHJ1ZT8gPFNlc3Npb25zIHNlc3Npb25zPXtzZXNzaW9uc30gLz4gOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBTcGVha2VyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsInNwYW4iLCJjbGFzc05hbWUiLCJzdHJvbmciLCJuYW1lIiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsImRpdiIsIlNwZWFrZXJJbWFnZSIsImlkIiwiZmlyc3QiLCJsYXN0IiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJTcGVha2VyRmF2b3JpdGUiLCJmYXZvcml0ZSIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0YSIsImdldE1pbGxpc2Vjb25kcyIsIm9uQ2xpY2siLCJpIiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiaDMiLCJwIiwiaDUiLCJoNiIsIlNwZWFrZXIiLCJzcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});