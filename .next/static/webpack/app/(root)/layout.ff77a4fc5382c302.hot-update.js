"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./components/ui/Sidebar.tsx":
/*!***********************************!*\
  !*** ./components/ui/Sidebar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\"user client\";\n\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { user } = param;\n    _s();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"sidebar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        href: \"/\",\n                        className: \"mb-12 flex cursor-pointer items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                src: \"/icons/logo.svg\",\n                                width: 34,\n                                height: 34,\n                                alt: \"Horizon logo\",\n                                className: \"size-[24px] max-xl:size-14\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/Sidebar.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"sidebar-logo\",\n                                children: \"Horizon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/Sidebar.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/Sidebar.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    _constants__WEBPACK_IMPORTED_MODULE_1__.sidebarLinks.map((item)=>{\n                        const isActive = pathName === item.route || pathName.startsWith(\"\".concat(item.route, \"/\"));\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: item.route,\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"sidebar-link\", {\n                                \"bg-bank-gradient\": isActive\n                            }),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative size-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        src: item.imgURL,\n                                        alt: item.label,\n                                        fill: true,\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)({\n                                            \"brightness-[3] invert-0\": isActive\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/Sidebar.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 13\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/Sidebar.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"sidebar-label\", {\n                                        \"!text-white\": isActive\n                                    }),\n                                    children: item.label\n                                }, void 0, false, {\n                                    fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/Sidebar.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, item.label, true, {\n                            fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/Sidebar.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/Sidebar.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            \"USER \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(INFO, {}, void 0, false, {\n                fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/Sidebar.tsx\",\n                lineNumber: 31,\n                columnNumber: 12\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/Sidebar.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"28xf+Q/MMfpBebWfp+J7Y3ZZbws=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUMwQztBQUNWO0FBQ0Y7QUFDRjtBQUNpQjtBQUNwQjtBQUV6QixNQUFNTSxVQUFVO1FBQUMsRUFBRUMsSUFBSSxFQUFpQjs7SUFDdEMsTUFBTUMsV0FBV0osNERBQVdBO0lBRTVCLHFCQUNFLDhEQUFDSztRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ1AsaURBQUlBO3dCQUFDUyxNQUFLO3dCQUFJRixXQUFVOzswQ0FDdkIsOERBQUNSLGtEQUFLQTtnQ0FBQ1csS0FBSTtnQ0FBa0JDLE9BQU87Z0NBQUlDLFFBQVE7Z0NBQUlDLEtBQUk7Z0NBQWVOLFdBQVU7Ozs7OzswQ0FDakYsOERBQUNPO2dDQUFHUCxXQUFVOzBDQUFlOzs7Ozs7Ozs7Ozs7b0JBRTlCVixvREFBWUEsQ0FBQ2tCLEdBQUcsQ0FBQyxDQUFDQzt3QkFDakIsTUFBTUMsV0FBV1osYUFBYVcsS0FBS0UsS0FBSyxJQUFJYixTQUFTYyxVQUFVLENBQUMsR0FBYyxPQUFYSCxLQUFLRSxLQUFLLEVBQUM7d0JBQ2hGLHFCQUNBLDhEQUFDbEIsaURBQUlBOzRCQUFDUyxNQUFNTyxLQUFLRSxLQUFLOzRCQUFtQlgsV0FBV1QsOENBQUVBLENBQUMsZ0JBQWdCO2dDQUFDLG9CQUFxQm1COzRCQUFROzs4Q0FDbkcsOERBQUNHO29DQUFJYixXQUFVOzhDQUNiLDRFQUFDUixrREFBS0E7d0NBQUNXLEtBQUtNLEtBQUtLLE1BQU07d0NBQUVSLEtBQUtHLEtBQUtNLEtBQUs7d0NBQUVDLElBQUk7d0NBQUNoQixXQUFXVCw4Q0FBRUEsQ0FBQzs0Q0FBQywyQkFBNEJtQjt3Q0FBUTs7Ozs7Ozs7Ozs7OENBRXBHLDhEQUFDTztvQ0FBRWpCLFdBQVdULDhDQUFFQSxDQUFDLGlCQUFpQjt3Q0FBRSxlQUFlbUI7b0NBQVM7OENBQUtELEtBQUtNLEtBQUs7Ozs7Ozs7MkJBSmhETixLQUFLTSxLQUFLOzs7OztvQkFNeEM7Ozs7Ozs7WUFDSzswQkFFRCw4REFBQ0c7Ozs7Ozs7Ozs7O0FBR1o7R0F6Qk10Qjs7UUFDYUYsd0RBQVdBOzs7S0FEeEJFO0FBMkJOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvU2lkZWJhci50c3g/MjZhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlciBjbGllbnQnO1xuaW1wb3J0IHsgc2lkZWJhckxpbmtzIH0gZnJvbSAnQC9jb25zdGFudHMnXG5pbXBvcnQgeyBjbiB9IGZyb20gJ0AvbGliL3V0aWxzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgU2lkZWJhciA9ICh7IHVzZXIgfTogU2lkZXJiYXJQcm9wcykgPT4ge1xuICBjb25zdCBwYXRoTmFtZSA9IHVzZVBhdGhuYW1lKClcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIm1iLTEyIGZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pY29ucy9sb2dvLnN2Z1wiIHdpZHRoPXszNH0gaGVpZ2h0PXszNH0gYWx0PVwiSG9yaXpvbiBsb2dvXCIgY2xhc3NOYW1lPVwic2l6ZS1bMjRweF0gbWF4LXhsOnNpemUtMTRcIiAvPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaWRlYmFyLWxvZ29cIj5Ib3Jpem9uPC9oMT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7c2lkZWJhckxpbmtzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gcGF0aE5hbWUgPT09IGl0ZW0ucm91dGUgfHwgcGF0aE5hbWUuc3RhcnRzV2l0aChgJHtpdGVtLnJvdXRlfS9gKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXtpdGVtLnJvdXRlfSBrZXk9e2l0ZW0ubGFiZWx9IGNsYXNzTmFtZT17Y24oJ3NpZGViYXItbGluaycsIHsnYmctYmFuay1ncmFkaWVudCcgOiBpc0FjdGl2ZX0pfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNpemUtNlwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pbWdVUkx9IGFsdD17aXRlbS5sYWJlbH0gZmlsbCBjbGFzc05hbWU9e2NuKHsnYnJpZ2h0bmVzcy1bM10gaW52ZXJ0LTAnIDogaXNBY3RpdmV9KX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NuKFwic2lkZWJhci1sYWJlbFwiLCB7IFwiIXRleHQtd2hpdGVcIjogaXNBY3RpdmUgfSl9PntpdGVtLmxhYmVsfTwvcD5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKX0pfVxuICAgICAgPC9uYXY+XG5cbiAgICAgIFVTRVIgPElORk8+PC9JTkZPPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyIl0sIm5hbWVzIjpbInNpZGViYXJMaW5rcyIsImNuIiwiSW1hZ2UiLCJMaW5rIiwidXNlUGF0aG5hbWUiLCJSZWFjdCIsIlNpZGViYXIiLCJ1c2VyIiwicGF0aE5hbWUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibmF2IiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDEiLCJtYXAiLCJpdGVtIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInN0YXJ0c1dpdGgiLCJkaXYiLCJpbWdVUkwiLCJsYWJlbCIsImZpbGwiLCJwIiwiSU5GTyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/Sidebar.tsx\n"));

/***/ })

});