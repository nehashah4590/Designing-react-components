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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// import { resolve } from \"styled-jsx/css\";\n\nfunction SpeakersList(param) {\n    let { showSessions  } = param;\n    _s();\n    conat;\n    const [speakersData, setSpeakersData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [hasErrored, setHasErrored] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function delayFunc() {\n            try {\n                await delay(2000);\n                setIsLoading(false);\n                setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data);\n            } catch (e) {\n                setIsLoading(false);\n                setHasErrored(true);\n                setError(e);\n            }\n        }\n        delayFunc();\n    }, []);\n    function onFavoriteToggle(id) {\n        const speakersRecPrevious = speakersData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakerRecUpdated = {\n            ...speakersRecPrevious,\n            favorite: !speakersRecPrevious.favorite\n        };\n        const speakersDataNew = speakersData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakersData(speakersDataNew);\n    }\n    if (hasErrored === true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-danger\",\n            children: [\n                \"ERROR: \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"loading Speaker data Failed \",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 52,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this);\n    }\n    //  if (isLoading === true) return <div>Loading...</div>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            type: \"media\",\n            rows: 15,\n            className: \"speakerslist-placeholder\",\n            ready: isLoading === false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: _SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data.map(function(speaker) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speaker: speaker,\n                        showSessions: showSessions,\n                        onFavoriteToggle: ()=>{\n                            onFavoriteToggle(speaker.id);\n                        }\n                    }, speaker.id, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\SpeakersList.js\",\n                        lineNumber: 69,\n                        columnNumber: 16\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\SpeakersList.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 60,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakersList, \"cVRSLiRcoM+S4KaMcFe/oXQD0kk=\");\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBZ0M7QUFDTztBQUNHO0FBQzFDLDRDQUE0QztBQUNLO0FBRWpELFNBQVNLLGFBQWEsS0FBYyxFQUFDO1FBQWYsRUFBQ0MsYUFBWSxFQUFDLEdBQWQ7O0lBRXBCQztJQUVDLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDLElBQUk7SUFDL0MsTUFBTSxDQUFDUyxZQUFhQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDbkQsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1hLFFBQVEsQ0FBQ0MsS0FBTyxJQUFJQyxRQUFRLENBQUNDLFVBQVlDLFdBQVdELFNBQVNGO0lBRW5FZixnREFBU0EsQ0FBQyxJQUFNO1FBRWYsZUFBZW1CLFlBQVc7WUFDekIsSUFBSTtnQkFDSCxNQUFNTCxNQUFNO2dCQUNaTCxhQUFhLEtBQUs7Z0JBQ2xCRixnQkFBZ0JSLDhDQUFJQTtZQUN0QixFQUFFLE9BQU9xQixHQUFHO2dCQUNWWCxhQUFhLEtBQUs7Z0JBQ2xCRSxjQUFjLElBQUk7Z0JBQ2xCRSxTQUFTTztZQUNYO1FBQ0E7UUFDQUQ7SUFDRCxHQUFFLEVBQUU7SUFFSixTQUFTRSxpQkFBaUJDLEVBQUUsRUFBQztRQUM1QixNQUFNQyxzQkFBc0JqQixhQUFha0IsSUFBSSxDQUFDLFNBQVVDLEdBQUcsRUFBQztZQUMxRCxPQUFPQSxJQUFJSCxFQUFFLEtBQUtBO1FBQ3BCO1FBQ0EsTUFBTUksb0JBQW9CO1lBQ3hCLEdBQUdILG1CQUFtQjtZQUNyQkksVUFBVSxDQUFDSixvQkFBb0JJLFFBQVE7UUFDMUM7UUFDQSxNQUFNQyxrQkFBa0J0QixhQUFhdUIsR0FBRyxDQUFDLFNBQVVKLEdBQUcsRUFBRztZQUN2RCxPQUFPQSxJQUFJSCxFQUFFLEtBQUtBLEtBQUtJLG9CQUFvQkQsR0FBRztRQUNoRDtRQUVBbEIsZ0JBQWdCcUI7SUFDakI7SUFFQSxJQUFHbEIsZUFBZSxJQUFJLEVBQUM7UUFDdEIscUJBQ0UsOERBQUNvQjtZQUFJQyxXQUFVOztnQkFBYzs4QkFDcEIsOERBQUNDOzt3QkFBRTt3QkFBNkJwQjs7Ozs7Ozs7Ozs7OztJQUc1QyxDQUFDO0lBQ0Ysd0RBQXdEO0lBRXRELHFCQUNJLDhEQUFDa0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQzdCLHlEQUFnQkE7WUFDakIrQixNQUFPO1lBQ1BDLE1BQVE7WUFDUkgsV0FBVTtZQUNWSSxPQUFPM0IsY0FBYyxLQUFLO3NCQUU1Qiw0RUFBQ3NCO2dCQUFJQyxXQUFVOzBCQUNaaEMsa0RBQVEsQ0FBQyxTQUFVcUMsT0FBTyxFQUFDO29CQUN6QixxQkFDRSw4REFBQ3RDLGdEQUFPQTt3QkFFUnNDLFNBQVNBO3dCQUNUaEMsY0FBY0E7d0JBQ2RpQixrQkFBa0IsSUFBSzs0QkFDdEJBLGlCQUFpQmUsUUFBUWQsRUFBRTt3QkFDNUI7dUJBTE1jLFFBQVFkLEVBQUU7Ozs7O2dCQU9yQjs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBM0VTbkI7S0FBQUE7QUE2RVQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzPzJhNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xyXG5pbXBvcnQge2RhdGF9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcbmltcG9ydCBSZWFjdFBsYWNlSG9sZGVyIGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlclwiO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHtzaG93U2Vzc2lvbnN9KXtcclxuXHJcbiAgY29uYXRcclxuXHJcbiAgIGNvbnN0IFtzcGVha2Vyc0RhdGEsIHNldFNwZWFrZXJzRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgY29uc3QgW2hhc0Vycm9yZWQgLCBzZXRIYXNFcnJvcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG5cclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKXtcclxuICAgICB0cnkgeyBcclxuICAgICAgYXdhaXQgZGVsYXkoMjAwMCk7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFNwZWFrZXJzRGF0YShkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0SGFzRXJyb3JlZCh0cnVlKTtcclxuICAgICAgc2V0RXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBkZWxheUZ1bmMoKTtcclxuICAgfSxbXSk7XHJcblxyXG4gICBmdW5jdGlvbiBvbkZhdm9yaXRlVG9nZ2xlKGlkKXtcclxuICAgIGNvbnN0IHNwZWFrZXJzUmVjUHJldmlvdXMgPSBzcGVha2Vyc0RhdGEuZmluZChmdW5jdGlvbiAocmVjKXtcclxuICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQ7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHNwZWFrZXJSZWNVcGRhdGVkID0ge1xyXG4gICAgICAuLi5zcGVha2Vyc1JlY1ByZXZpb3VzLFxyXG4gICAgICAgZmF2b3JpdGU6ICFzcGVha2Vyc1JlY1ByZXZpb3VzLmZhdm9yaXRlXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3BlYWtlcnNEYXRhTmV3ID0gc3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAocmVjKSAge1xyXG4gICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNVcGRhdGVkIDogcmVjO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0U3BlYWtlcnNEYXRhKHNwZWFrZXJzRGF0YU5ldyk7XHJcbiAgIH1cclxuXHJcbiAgIGlmKGhhc0Vycm9yZWQgPT09IHRydWUpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgRVJST1I6IDxiPmxvYWRpbmcgU3BlYWtlciBkYXRhIEZhaWxlZCB7ZXJyb3J9PC9iPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgfVxyXG4gIC8vICBpZiAoaXNMb2FkaW5nID09PSB0cnVlKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgICAgIDxSZWFjdFBsYWNlSG9sZGVyXHJcbiAgICAgICAgICB0eXBlID0gXCJtZWRpYVwiXHJcbiAgICAgICAgICByb3dzID0gezE1fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3BlYWtlcnNsaXN0LXBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgIHJlYWR5PXtpc0xvYWRpbmcgPT09IGZhbHNlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpe1xyXG4gICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICA8U3BlYWtlciBcclxuICAgICAgICAgICAgICAga2V5ID17c3BlYWtlci5pZH0gXHJcbiAgICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XHJcbiAgICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxyXG4gICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXsoKSA9PntcclxuICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCk7XHJcbiAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7Il0sIm5hbWVzIjpbIlNwZWFrZXIiLCJkYXRhIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZWFjdFBsYWNlSG9sZGVyIiwiU3BlYWtlcnNMaXN0Iiwic2hvd1Nlc3Npb25zIiwiY29uYXQiLCJzcGVha2Vyc0RhdGEiLCJzZXRTcGVha2Vyc0RhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYXNFcnJvcmVkIiwic2V0SGFzRXJyb3JlZCIsImVycm9yIiwic2V0RXJyb3IiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGVsYXlGdW5jIiwiZSIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpZCIsInNwZWFrZXJzUmVjUHJldmlvdXMiLCJmaW5kIiwicmVjIiwic3BlYWtlclJlY1VwZGF0ZWQiLCJmYXZvcml0ZSIsInNwZWFrZXJzRGF0YU5ldyIsIm1hcCIsImRpdiIsImNsYXNzTmFtZSIsImIiLCJ0eXBlIiwicm93cyIsInJlYWR5Iiwic3BlYWtlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});