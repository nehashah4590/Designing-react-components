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

/***/ "./src/contexts/ThemeContext.js":
/*!**************************************!*\
  !*** ./src/contexts/ThemeContext.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": function() { return /* binding */ ThemeContext; },\n/* harmony export */   \"ThemeProvider\": function() { return /* binding */ ThemeProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useTheme */ \"./src/hooks/useTheme.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction ThemeProvider(param) {\n    let { children , startingTheme  } = param;\n    _s();\n    const { theme , setTheme  } = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(startingTheme);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            setTheme,\n            theme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\designing_components\\\\src\\\\contexts\\\\ThemeContext.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(ThemeProvider, \"5ABGV54qnXKp6rHn7MS/8MjwRhQ=\", false, function() {\n    return [\n        _hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ThemeProvider;\n\nvar _c;\n$RefreshReg$(_c, \"ThemeProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvVGhlbWVDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkM7QUFFSjtBQUVsQyxNQUFNRyw2QkFBZUYsb0RBQWFBLEdBQUc7QUFFNUMsU0FBU0csY0FBYyxLQUEyQixFQUFFO1FBQTdCLEVBQUVDLFNBQVEsRUFBRUMsY0FBYSxFQUFFLEdBQTNCOztJQUNyQixNQUFNLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdOLDJEQUFRQSxDQUFDSTtJQUVyQyxxQkFDRSw4REFBQ0gsYUFBYU0sUUFBUTtRQUFDQyxPQUFPO1lBQUVGO1lBQVVEO1FBQU07a0JBQzdDRjs7Ozs7O0FBR1A7R0FSU0Q7O1FBQ3FCRix1REFBUUE7OztLQUQ3QkU7QUFVZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1RoZW1lQ29udGV4dC5qcz80ZWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgdXNlVGhlbWUgZnJvbSBcIi4uL2hvb2tzL3VzZVRoZW1lXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZnVuY3Rpb24gVGhlbWVQcm92aWRlcih7IGNoaWxkcmVuLCBzdGFydGluZ1RoZW1lIH0pIHtcclxuICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlVGhlbWUoc3RhcnRpbmdUaGVtZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNldFRoZW1lLCB0aGVtZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgVGhlbWVQcm92aWRlciB9OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VUaGVtZSIsIlRoZW1lQ29udGV4dCIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXJ0aW5nVGhlbWUiLCJ0aGVtZSIsInNldFRoZW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ThemeContext.js\n"));

/***/ }),

/***/ "./src/hooks/useTheme.js":
/*!*******************************!*\
  !*** ./src/hooks/useTheme.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nfunction useTheme() {\n    let startingTheme = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"light\";\n    _s();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingTheme);\n    function validateTheme(themeValue) {\n        if (themeValue === \"dark\") {\n            setTheme(\"dark\");\n        } else {\n            setTheme(\"light\");\n        }\n    }\n    return {\n        theme,\n        setTheme: validateTheme\n    };\n}\n_s(useTheme, \"7D3nJYxe783JeXHORkFR9pg9dCU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useTheme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFBaUM7QUFFakMsU0FBU0MsV0FBa0M7UUFBekJDLGdCQUFBQSxpRUFBZ0IsT0FBTzs7SUFDdkMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDRTtJQUVuQyxTQUFTRyxjQUFjQyxVQUFVLEVBQUU7UUFDakMsSUFBSUEsZUFBZSxRQUFRO1lBQ3pCRixTQUFTO1FBQ1gsT0FBTztZQUNMQSxTQUFTO1FBQ1gsQ0FBQztJQUNIO0lBRUEsT0FBTztRQUNMRDtRQUNBQyxVQUFVQztJQUNaO0FBQ0Y7R0FmU0o7QUFpQlQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVRoZW1lLmpzPzMxN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZVRoZW1lKHN0YXJ0aW5nVGhlbWUgPSBcImxpZ2h0XCIpIHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKHN0YXJ0aW5nVGhlbWUpO1xyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZVRoZW1lKHRoZW1lVmFsdWUpIHtcclxuICAgIGlmICh0aGVtZVZhbHVlID09PSBcImRhcmtcIikge1xyXG4gICAgICBzZXRUaGVtZShcImRhcmtcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaGVtZShcImxpZ2h0XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRoZW1lLFxyXG4gICAgc2V0VGhlbWU6IHZhbGlkYXRlVGhlbWUsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlVGhlbWU7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlVGhlbWUiLCJzdGFydGluZ1RoZW1lIiwidGhlbWUiLCJzZXRUaGVtZSIsInZhbGlkYXRlVGhlbWUiLCJ0aGVtZVZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useTheme.js\n"));

/***/ })

});