"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/group-page",{

/***/ "./src/component/GroupPage/EachGroup.tsx":
/*!***********************************************!*\
  !*** ./src/component/GroupPage/EachGroup.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_PeopleAlt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/PeopleAlt */ \"./node_modules/@mui/icons-material/PeopleAlt.js\");\n\n\n\n\n\n\nconst EachGroup = (param)=>{\n    let { image , groupName , member  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        sx: {\n            width: \"100%\",\n            display: \"flex\",\n            flexDirection: \"column\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                sx: {\n                    width: \"100%\",\n                    height: \"140px\",\n                    position: \"relative\",\n                    \"& img\": {\n                        borderTopLeftRadius: \"10px\",\n                        borderTopRightRadius: \"10px\"\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: image,\n                    fill: true,\n                    alt: \"group-image\",\n                    className: \"cover\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/fifa-world-cup/src/component/GroupPage/EachGroup.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/fifa-world-cup/src/component/GroupPage/EachGroup.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                sx: {\n                    width: \"100%\",\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    background: \"white\",\n                    mt: \"-15px\",\n                    px: 2,\n                    zIndex: \"10\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        sx: {\n                            fontFamily: \"Inter, sans-serif\",\n                            fontSize: \"14px\",\n                            fontWeight: \"600\"\n                        },\n                        children: groupName\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/fifa-world-cup/src/component/GroupPage/EachGroup.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        sx: {\n                            display: \"flex\",\n                            gap: 3,\n                            py: 1,\n                            justifyContent: \"center\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_PeopleAlt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                sx: {\n                                    color: \"#A161D4\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/fifa-world-cup/src/component/GroupPage/EachGroup.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                sx: {\n                                    fontFamily: \"Inter, sans-serif\",\n                                    fontSize: \"16px\",\n                                    fontWeight: \"600\",\n                                    color: \"#A161D4\"\n                                },\n                                children: member\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/fifa-world-cup/src/component/GroupPage/EachGroup.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Desktop/fifa-world-cup/src/component/GroupPage/EachGroup.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Desktop/fifa-world-cup/src/component/GroupPage/EachGroup.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/fifa-world-cup/src/component/GroupPage/EachGroup.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = EachGroup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EachGroup);\nvar _c;\n$RefreshReg$(_c, \"EachGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L0dyb3VwUGFnZS9FYWNoR3JvdXAudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1E7QUFDSDtBQUM4QjtBQUNIO0FBUTFELE1BQU1LLFlBQTZCLFNBQXlDO1FBQXhDLEVBQUVDLE1BQUssRUFBRUMsVUFBUyxFQUFFQyxPQUFNLEVBQVM7SUFDckUscUJBQ0UsOERBQUNQLDRDQUFHQTtRQUNGUSxJQUFJO1lBQ0ZDLE9BQU87WUFDUEMsU0FBUztZQUNUQyxlQUFlO1FBQ2pCOzswQkFFQSw4REFBQ1gsNENBQUdBO2dCQUNGUSxJQUFJO29CQUNGQyxPQUFPO29CQUNQRyxRQUFRO29CQUNSQyxVQUFVO29CQUNWLFNBQVM7d0JBQ1BDLHFCQUFxQjt3QkFDckJDLHNCQUFzQjtvQkFDeEI7Z0JBQ0Y7MEJBRUEsNEVBQUNkLG1EQUFLQTtvQkFBQ2UsS0FBS1g7b0JBQU9ZLElBQUk7b0JBQUNDLEtBQUk7b0JBQWNDLFdBQVU7Ozs7Ozs7Ozs7OzBCQUl0RCw4REFBQ25CLDRDQUFHQTtnQkFDRlEsSUFBSTtvQkFDRkMsT0FBTztvQkFDUEMsU0FBUztvQkFDVFUsZ0JBQWdCO29CQUNoQkMsWUFBWTtvQkFDWkMsWUFBWTtvQkFDWkMsSUFBSTtvQkFDSkMsSUFBSTtvQkFDSkMsUUFBUTtnQkFDVjs7a0NBRUEsOERBQUN2QixxREFBVUE7d0JBQ1RNLElBQUk7NEJBQ0ZrQixZQUFZOzRCQUNaQyxVQUFVOzRCQUNWQyxZQUFZO3dCQUNkO2tDQUVDdEI7Ozs7OztrQ0FFSCw4REFBQ04sNENBQUdBO3dCQUNGUSxJQUFJOzRCQUNGRSxTQUFTOzRCQUNUbUIsS0FBSzs0QkFDTEMsSUFBSTs0QkFDSlYsZ0JBQWdCOzRCQUNoQkMsWUFBWTt3QkFDZDs7MENBRUEsOERBQUNsQixxRUFBYUE7Z0NBQUNLLElBQUk7b0NBQUV1QixPQUFPO2dDQUFVOzs7Ozs7MENBQ3RDLDhEQUFDN0IscURBQVVBO2dDQUNUTSxJQUFJO29DQUNGa0IsWUFBWTtvQ0FDWkMsVUFBVTtvQ0FDVkMsWUFBWTtvQ0FDWkcsT0FBTztnQ0FDVDswQ0FFQ3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtLQXJFTUg7QUF1RU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9Hcm91cFBhZ2UvRWFjaEdyb3VwLnRzeD85NjljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL3N5c3RlbVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBpbWFnZUxpc3RDbGFzc2VzLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBQZW9wbGVBbHRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1Blb3BsZUFsdFwiO1xuXG5pbnRlcmZhY2UgcHJvcHMge1xuICBpbWFnZTogYW55O1xuICBncm91cE5hbWU6IGFueTtcbiAgbWVtYmVyOiBudW1iZXI7XG59XG5cbmNvbnN0IEVhY2hHcm91cDogUmVhY3QuRkM8cHJvcHM+ID0gKHsgaW1hZ2UsIGdyb3VwTmFtZSwgbWVtYmVyIH06IHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3g9e3tcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBzeD17e1xuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTQwcHhcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgIFwiJiBpbWdcIjoge1xuICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogXCIxMHB4XCIsXG4gICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCIxMHB4XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGZpbGwgYWx0PVwiZ3JvdXAtaW1hZ2VcIiBjbGFzc05hbWU9XCJjb3ZlclwiPjwvSW1hZ2U+XG4gICAgICA8L0JveD5cblxuICAgICAgey8qID09PT09PT09Pmdyb3VwIGRldGFpbCAqL31cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuICAgICAgICAgIG10OiBcIi0xNXB4XCIsXG4gICAgICAgICAgcHg6IDIsXG4gICAgICAgICAgekluZGV4OiBcIjEwXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSW50ZXIsIHNhbnMtc2VyaWZcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtncm91cE5hbWV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGdhcDogMyxcbiAgICAgICAgICAgIHB5OiAxLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8UGVvcGxlQWx0SWNvbiBzeD17eyBjb2xvcjogXCIjQTE2MUQ0XCIgfX0gLz5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJJbnRlciwgc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNBMTYxRDRcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge21lbWJlcn1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFYWNoR3JvdXA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJJbWFnZSIsIlR5cG9ncmFwaHkiLCJQZW9wbGVBbHRJY29uIiwiRWFjaEdyb3VwIiwiaW1hZ2UiLCJncm91cE5hbWUiLCJtZW1iZXIiLCJzeCIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJwb3NpdGlvbiIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsInNyYyIsImZpbGwiLCJhbHQiLCJjbGFzc05hbWUiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJiYWNrZ3JvdW5kIiwibXQiLCJweCIsInpJbmRleCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJnYXAiLCJweSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/component/GroupPage/EachGroup.tsx\n"));

/***/ })

});