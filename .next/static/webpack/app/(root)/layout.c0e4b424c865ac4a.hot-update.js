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

/***/ "(app-pages-browser)/./components/ui/MobileNav.tsx":
/*!*************************************!*\
  !*** ./components/ui/MobileNav.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_ui_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/sheet */ \"(app-pages-browser)/./components/ui/sheet.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst MobileNav = (param)=>{\n    let { user } = param;\n    _s();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full max-w-[264px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_3__.Sheet, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_3__.SheetTrigger, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: \"/icons/hamburger.svg\",\n                        width: 30,\n                        height: 30,\n                        alt: \"menu\",\n                        className: \"cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/MobileNav.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/MobileNav.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_3__.SheetContent, {\n                    className: \"border-none bg-white\",\n                    side: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: \"/\",\n                            className: \"flex cursor-pointer items-center gap-1 px-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/icons/logo.svg\",\n                                    width: 34,\n                                    height: 34,\n                                    alt: \"Horizon logo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/MobileNav.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-26 font-ibm-plex-serif font-bold text-black-1\",\n                                    children: \"Horizon\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/MobileNav.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/MobileNav.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        _constants__WEBPACK_IMPORTED_MODULE_5__.sidebarLinks.map((item)=>{\n                            const isActive = pathName === item.route || pathName.startsWith(\"\".concat(item.route, \"/\"));\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: item.route,\n                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)(\"sidebar-link\", {\n                                    \"bg-bank-gradient\": isActive\n                                }),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative size-6\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: item.imgURL,\n                                            alt: item.label,\n                                            fill: true,\n                                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)({\n                                                \"brightness-[3] invert-0\": isActive\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/MobileNav.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/MobileNav.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)(\"sidebar-label\", {\n                                            \"!text-white\": isActive\n                                        }),\n                                        children: item.label\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/MobileNav.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, item.label, true, {\n                                fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/MobileNav.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, undefined);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/MobileNav.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/MobileNav.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ladekolawole/dev-projects/horizon/Horizon/components/ui/MobileNav.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MobileNav, \"28xf+Q/MMfpBebWfp+J7Y3ZZbws=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname\n    ];\n});\n_c = MobileNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileNav);\nvar _c;\n$RefreshReg$(_c, \"MobileNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvTW9iaWxlTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMEI7QUFDSztBQVFBO0FBQ0Y7QUFDYztBQUNHO0FBQ2I7QUFHakMsTUFBTVMsWUFBWTtRQUFDLEVBQUVDLElBQUksRUFBa0I7O0lBQ3pDLE1BQU1DLFdBQVdKLDREQUFXQTtJQUU1QixxQkFDRSw4REFBQ0s7UUFBUUMsV0FBVTtrQkFDakIsNEVBQUNYLHVEQUFLQTs7OEJBQ0osOERBQUNFLDhEQUFZQTs4QkFDWCw0RUFBQ0gsa0RBQUtBO3dCQUFDYSxLQUFJO3dCQUF1QkMsT0FBTzt3QkFBSUMsUUFBUTt3QkFBSUMsS0FBSTt3QkFBT0osV0FBVTs7Ozs7Ozs7Ozs7OEJBRWhGLDhEQUFDViw4REFBWUE7b0JBQUNVLFdBQVU7b0JBQXVCSyxNQUFLOztzQ0FDbEQsOERBQUNiLGlEQUFJQTs0QkFBQ2MsTUFBSzs0QkFBSU4sV0FBVTs7OENBQ3ZCLDhEQUFDWixrREFBS0E7b0NBQUNhLEtBQUk7b0NBQWtCQyxPQUFPO29DQUFJQyxRQUFRO29DQUFJQyxLQUFJOzs7Ozs7OENBQ3hELDhEQUFDRztvQ0FBR1AsV0FBVTs4Q0FBcUQ7Ozs7Ozs7Ozs7Ozt3QkFFcEVQLG9EQUFZQSxDQUFDZSxHQUFHLENBQUMsQ0FBQ0M7NEJBQ2pCLE1BQU1DLFdBQVdaLGFBQWFXLEtBQUtFLEtBQUssSUFBSWIsU0FBU2MsVUFBVSxDQUFDLEdBQWMsT0FBWEgsS0FBS0UsS0FBSyxFQUFDOzRCQUNoRixxQkFDQSw4REFBQ25CLGlEQUFJQTtnQ0FBQ2MsTUFBTUcsS0FBS0UsS0FBSztnQ0FBbUJYLFdBQVdMLDhDQUFFQSxDQUFDLGdCQUFnQjtvQ0FBQyxvQkFBcUJlO2dDQUFROztrREFDbkcsOERBQUNHO3dDQUFJYixXQUFVO2tEQUNiLDRFQUFDWixrREFBS0E7NENBQUNhLEtBQUtRLEtBQUtLLE1BQU07NENBQUVWLEtBQUtLLEtBQUtNLEtBQUs7NENBQUVDLElBQUk7NENBQUNoQixXQUFXTCw4Q0FBRUEsQ0FBQztnREFBQywyQkFBNEJlOzRDQUFROzs7Ozs7Ozs7OztrREFFcEcsOERBQUNPO3dDQUFFakIsV0FBV0wsOENBQUVBLENBQUMsaUJBQWlCOzRDQUFFLGVBQWVlO3dDQUFTO2tEQUFLRCxLQUFLTSxLQUFLOzs7Ozs7OytCQUpoRE4sS0FBS00sS0FBSzs7Ozs7d0JBTXhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVDtHQTVCTW5COztRQUNhRix3REFBV0E7OztLQUR4QkU7QUE4Qk4sK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9Nb2JpbGVOYXYudHN4PzY0ODAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7XG4gIFNoZWV0LFxuICBTaGVldENvbnRlbnQsXG4gIFNoZWV0RGVzY3JpcHRpb24sXG4gIFNoZWV0SGVhZGVyLFxuICBTaGVldFRpdGxlLFxuICBTaGVldFRyaWdnZXIsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2hlZXRcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBzaWRlYmFyTGlua3MgfSBmcm9tICdAL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBjbiB9IGZyb20gJ0AvbGliL3V0aWxzJztcblxuXG5jb25zdCBNb2JpbGVOYXYgPSAoeyB1c2VyIH06IE1vYmlsZU5hdlByb3BzKSA9PiB7XG4gIGNvbnN0IHBhdGhOYW1lID0gdXNlUGF0aG5hbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1bMjY0cHhdXCI+XG4gICAgICA8U2hlZXQ+XG4gICAgICAgIDxTaGVldFRyaWdnZXI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pY29ucy9oYW1idXJnZXIuc3ZnXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSBhbHQ9XCJtZW51XCIgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiAvPlxuICAgICAgICA8L1NoZWV0VHJpZ2dlcj5cbiAgICAgICAgPFNoZWV0Q29udGVudCBjbGFzc05hbWU9XCJib3JkZXItbm9uZSBiZy13aGl0ZVwiIHNpZGU9XCJyaWdodFwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiZmxleCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTEgcHgtNFwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pY29ucy9sb2dvLnN2Z1wiIHdpZHRoPXszNH0gaGVpZ2h0PXszNH0gYWx0PVwiSG9yaXpvbiBsb2dvXCIgLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTI2IGZvbnQtaWJtLXBsZXgtc2VyaWYgZm9udC1ib2xkIHRleHQtYmxhY2stMVwiPkhvcml6b248L2gxPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7c2lkZWJhckxpbmtzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBwYXRoTmFtZSA9PT0gaXRlbS5yb3V0ZSB8fCBwYXRoTmFtZS5zdGFydHNXaXRoKGAke2l0ZW0ucm91dGV9L2ApXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnJvdXRlfSBrZXk9e2l0ZW0ubGFiZWx9IGNsYXNzTmFtZT17Y24oJ3NpZGViYXItbGluaycsIHsnYmctYmFuay1ncmFkaWVudCcgOiBpc0FjdGl2ZX0pfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc2l6ZS02XCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nVVJMfSBhbHQ9e2l0ZW0ubGFiZWx9IGZpbGwgY2xhc3NOYW1lPXtjbih7J2JyaWdodG5lc3MtWzNdIGludmVydC0wJyA6IGlzQWN0aXZlfSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y24oXCJzaWRlYmFyLWxhYmVsXCIsIHsgXCIhdGV4dC13aGl0ZVwiOiBpc0FjdGl2ZSB9KX0+e2l0ZW0ubGFiZWx9PC9wPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX0pfVxuICAgICAgICA8L1NoZWV0Q29udGVudD5cbiAgICAgIDwvU2hlZXQ+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU5hdiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiU2hlZXQiLCJTaGVldENvbnRlbnQiLCJTaGVldFRyaWdnZXIiLCJMaW5rIiwic2lkZWJhckxpbmtzIiwidXNlUGF0aG5hbWUiLCJjbiIsIk1vYmlsZU5hdiIsInVzZXIiLCJwYXRoTmFtZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNpZGUiLCJocmVmIiwiaDEiLCJtYXAiLCJpdGVtIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInN0YXJ0c1dpdGgiLCJkaXYiLCJpbWdVUkwiLCJsYWJlbCIsImZpbGwiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/MobileNav.tsx\n"));

/***/ })

});