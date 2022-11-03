"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/video.js
var video = __webpack_require__(6752);
;// CONCATENATED MODULE: ./src/layout/PreLoader.js

const PreLoader = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "loader-wrapper",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "loading",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "loading-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "cssload-loading",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const layout_PreLoader = (PreLoader);

;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps  }) {
    const { 0: loader , 1: setLoader  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoader(false);
        }, 2000);
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(video/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "eTreeks - Education & Courses Landing Page Template"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "images/favicon.ico",
                        type: "image/x-icon"
                    })
                ]
            }),
            loader && /*#__PURE__*/ jsx_runtime_.jsx(layout_PreLoader, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "wsmenucontainer",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [752], () => (__webpack_exec__(2413)));
module.exports = __webpack_exports__;

})();