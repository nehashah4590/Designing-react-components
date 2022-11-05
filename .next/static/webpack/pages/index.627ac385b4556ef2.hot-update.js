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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n// import { resolve } from \"styled-jsx/css\";\nfunction SpeakersList(param) {\n    let { showSessions  } = param;\n    _s();\n    const [speakersData, setSpeakersData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function delayFunc() {\n            await delay(2000);\n            setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data);\n        }\n        delayFunc();\n    }, []);\n    function onFavoriteToggle(id) {\n        const speakersRecPrevious = speakersData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakerRecUpdated = {\n            ...speakersRecPrevious,\n            favorite: !speakersRecPrevious.favorite\n        };\n        const speakersDataNew = speakersData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakersData(speakersDataNew);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: ()=>{\n                        onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 40,\n                    columnNumber: 16\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakersList, \"Zlrz+J4Z0zDc4Jcoslr5YWQllw0=\");\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFnQztBQUNPO0FBQ0c7QUFDMUMsNENBQTRDO0FBRTVDLFNBQVNJLGFBQWEsS0FBYyxFQUFDO1FBQWYsRUFBQ0MsYUFBWSxFQUFDLEdBQWQ7O0lBRW5CLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFFbkQsTUFBTUssUUFBUSxDQUFDQyxLQUFNLElBQUlDLFFBQVEsQ0FBQ0MsVUFBWUMsV0FBV0QsU0FBU0Y7SUFFbEVQLGdEQUFTQSxDQUFDLElBQUs7UUFDZCxlQUFlVyxZQUFXO1lBQ3hCLE1BQU1MLE1BQU07WUFDWkQsZ0JBQWdCTiw4Q0FBSUE7UUFDdEI7UUFDQVk7SUFDRCxHQUFFLEVBQUU7SUFFSixTQUFTQyxpQkFBaUJDLEVBQUUsRUFBQztRQUM1QixNQUFNQyxzQkFBc0JWLGFBQWFXLElBQUksQ0FBQyxTQUFVQyxHQUFHLEVBQUM7WUFDMUQsT0FBT0EsSUFBSUgsRUFBRSxLQUFLQTtRQUNwQjtRQUNBLE1BQU1JLG9CQUFvQjtZQUN4QixHQUFHSCxtQkFBbUI7WUFDckJJLFVBQVUsQ0FBQ0osb0JBQW9CSSxRQUFRO1FBQzFDO1FBQ0EsTUFBTUMsa0JBQWtCZixhQUFhZ0IsR0FBRyxDQUFDLFNBQVVKLEdBQUcsRUFBRztZQUN2RCxPQUFPQSxJQUFJSCxFQUFFLEtBQUtBLEtBQUtJLG9CQUFvQkQsR0FBRztRQUNoRDtRQUVBWCxnQkFBZ0JjO0lBQ2pCO0lBRUMscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2YsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1p2QixrREFBUSxDQUFDLFNBQVV3QixPQUFPLEVBQUM7Z0JBQ3pCLHFCQUNFLDhEQUFDekIsZ0RBQU9BO29CQUVSeUIsU0FBU0E7b0JBQ1RwQixjQUFjQTtvQkFDZFMsa0JBQWtCLElBQUs7d0JBQ3RCQSxpQkFBaUJXLFFBQVFWLEVBQUU7b0JBQzVCO21CQUxNVSxRQUFRVixFQUFFOzs7OztZQU9yQjs7Ozs7Ozs7Ozs7QUFJVjtHQTlDU1g7S0FBQUE7QUFnRFQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzPzJhNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xyXG5pbXBvcnQge2RhdGF9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBTcGVha2Vyc0xpc3Qoe3Nob3dTZXNzaW9uc30pe1xyXG5cclxuICAgY29uc3QgW3NwZWFrZXJzRGF0YSwgc2V0U3BlYWtlcnNEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgIGNvbnN0IGRlbGF5ID0gKG1zKT0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcblxyXG4gICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKXtcclxuICAgICAgYXdhaXQgZGVsYXkoMjAwMCk7XHJcbiAgICAgIHNldFNwZWFrZXJzRGF0YShkYXRhKTtcclxuICAgIH1cclxuICAgIGRlbGF5RnVuYygpO1xyXG4gICB9LFtdKTtcclxuXHJcbiAgIGZ1bmN0aW9uIG9uRmF2b3JpdGVUb2dnbGUoaWQpe1xyXG4gICAgY29uc3Qgc3BlYWtlcnNSZWNQcmV2aW91cyA9IHNwZWFrZXJzRGF0YS5maW5kKGZ1bmN0aW9uIChyZWMpe1xyXG4gICAgICByZXR1cm4gcmVjLmlkID09PSBpZDtcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3BlYWtlclJlY1VwZGF0ZWQgPSB7XHJcbiAgICAgIC4uLnNwZWFrZXJzUmVjUHJldmlvdXMsXHJcbiAgICAgICBmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGVcclxuICAgIH07XHJcbiAgICBjb25zdCBzcGVha2Vyc0RhdGFOZXcgPSBzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChyZWMpICB7XHJcbiAgICAgIHJldHVybiByZWMuaWQgPT09IGlkID8gc3BlYWtlclJlY1VwZGF0ZWQgOiByZWM7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRTcGVha2Vyc0RhdGEoc3BlYWtlcnNEYXRhTmV3KTtcclxuICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtkYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcil7XHJcbiAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgIDxTcGVha2VyIFxyXG4gICAgICAgICAgICAgICBrZXkgPXtzcGVha2VyLmlkfSBcclxuICAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cclxuICAgICAgICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XHJcbiAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+e1xyXG4gICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKTtcclxuICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7Il0sIm5hbWVzIjpbIlNwZWFrZXIiLCJkYXRhIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJzcGVha2Vyc0RhdGEiLCJzZXRTcGVha2Vyc0RhdGEiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGVsYXlGdW5jIiwib25GYXZvcml0ZVRvZ2dsZSIsImlkIiwic3BlYWtlcnNSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlZCIsImZhdm9yaXRlIiwic3BlYWtlcnNEYXRhTmV3IiwibWFwIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BlYWtlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});