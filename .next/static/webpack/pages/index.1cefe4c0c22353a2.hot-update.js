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

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n// import Speaker from \"./Speaker\";\n\n// import { resolve } from \"styled-jsx/css\";\n\n\nfunction SpeakersList(param) {\n    let { showSessions  } = param;\n    _s();\n    const { data: speakersData , requestStatus , error , updateRecord  } = useRequestD(2000);\n    if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.FAILURE) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-danger\",\n            children: [\n                \"ERROR: \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"loading Speaker data Failed \",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 22,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this);\n    }\n    //  if (isLoading === true) return <div>Loading...</div>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            type: \"media\",\n            rows: 15,\n            className: \"speakerslist-placeholder\",\n            ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.SUCCESS,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: _SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data.map(function(speaker) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speaker: speaker,\n                        showSessions: showSessions,\n                        onFavoriteToggle: ()=>{\n                            onFavoriteToggle(speaker.id);\n                        }\n                    }, speaker.id, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\SpeakersList.js\",\n                        lineNumber: 39,\n                        columnNumber: 16\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\SpeakersList.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 30,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakersList, \"1wUdUlSRl6KKTSh49U6QOJhEJp0=\", true);\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFnQztBQUNPO0FBQ3ZDLG1DQUFtQztBQUN3QztBQUMzRSw0Q0FBNEM7QUFDSztBQUNTO0FBRTFELFNBQVNNLGFBQWEsS0FBYyxFQUFDO1FBQWYsRUFBQ0MsYUFBWSxFQUFDLEdBQWQ7O0lBRXBCLE1BQU0sRUFDSk4sTUFBT08sYUFBWSxFQUNuQkMsY0FBYSxFQUNaQyxNQUFLLEVBQ05DLGFBQVksRUFDYixHQUFHQyxZQUFZO0lBR2YsSUFBR0gsa0JBQWtCTiwwRUFBc0IsRUFBQztRQUMzQyxxQkFDRSw4REFBQ1c7WUFBSUMsV0FBVTs7Z0JBQWM7OEJBQ3BCLDhEQUFDQzs7d0JBQUU7d0JBQTZCTjs7Ozs7Ozs7Ozs7OztJQUc1QyxDQUFDO0lBQ0Ysd0RBQXdEO0lBRXRELHFCQUNJLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDWCx5REFBZ0JBO1lBQ2pCYSxNQUFPO1lBQ1BDLE1BQVE7WUFDUkgsV0FBVTtZQUNWSSxPQUFPVixrQkFBa0JOLDBFQUFzQjtzQkFFakQsNEVBQUNXO2dCQUFJQyxXQUFVOzBCQUNaZCxrREFBUSxDQUFDLFNBQVVxQixPQUFPLEVBQUM7b0JBQ3pCLHFCQUNFLDhEQUFDdEIsZ0RBQU9BO3dCQUVSc0IsU0FBU0E7d0JBQ1RmLGNBQWNBO3dCQUNkZ0Isa0JBQWtCLElBQUs7NEJBQ3RCQSxpQkFBaUJELFFBQVFFLEVBQUU7d0JBQzVCO3VCQUxNRixRQUFRRSxFQUFFOzs7OztnQkFPckI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVjtHQTNDU2xCO0tBQUFBO0FBNkNULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcz8yYTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyIGZyb20gXCIuL1NwZWFrZXJcIjtcclxuaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcclxuLy8gaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xyXG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xyXG4vLyBpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcbmltcG9ydCBSZWFjdFBsYWNlSG9sZGVyIGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlclwiO1xyXG5pbXBvcnQgdXNlUmVxdWVzdFNwZWFrZXJzIGZyb20gXCIuLi9ob29rcy91c2VSZXF1ZXN0RGVsYXlcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCh7c2hvd1Nlc3Npb25zfSl7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGRhdGEgOiBzcGVha2Vyc0RhdGEgLCBcclxuICAgIHJlcXVlc3RTdGF0dXMsXHJcbiAgICAgZXJyb3IsXHJcbiAgICB1cGRhdGVSZWNvcmQsXHJcbiAgfSA9IHVzZVJlcXVlc3REKDIwMDApXHJcblxyXG4gICBcclxuICAgaWYocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICBFUlJPUjogPGI+bG9hZGluZyBTcGVha2VyIGRhdGEgRmFpbGVkIHtlcnJvcn08L2I+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICB9XHJcbiAgLy8gIGlmIChpc0xvYWRpbmcgPT09IHRydWUpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG4gICAgICAgICAgPFJlYWN0UGxhY2VIb2xkZXJcclxuICAgICAgICAgIHR5cGUgPSBcIm1lZGlhXCJcclxuICAgICAgICAgIHJvd3MgPSB7MTV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzcGVha2Vyc2xpc3QtcGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgcmVhZHk9e3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1N9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtkYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcil7XHJcbiAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgIDxTcGVha2VyIFxyXG4gICAgICAgICAgICAgICBrZXkgPXtzcGVha2VyLmlkfSBcclxuICAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cclxuICAgICAgICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XHJcbiAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+e1xyXG4gICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKTtcclxuICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0UGxhY2VIb2xkZXI+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzTGlzdDsiXSwibmFtZXMiOlsiU3BlYWtlciIsImRhdGEiLCJ1c2VSZXF1ZXN0RGVsYXkiLCJSRVFVRVNUX1NUQVRVUyIsIlJlYWN0UGxhY2VIb2xkZXIiLCJ1c2VSZXF1ZXN0U3BlYWtlcnMiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJzcGVha2Vyc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJ1c2VSZXF1ZXN0RCIsIkZBSUxVUkUiLCJkaXYiLCJjbGFzc05hbWUiLCJiIiwidHlwZSIsInJvd3MiLCJyZWFkeSIsIlNVQ0NFU1MiLCJtYXAiLCJzcGVha2VyIiwib25GYXZvcml0ZVRvZ2dsZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});