"use strict";
exports.id = 752;
exports.ids = [752];
exports.modules = {

/***/ 6752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "l": () => (/* binding */ VideoContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const type = {
    VIDEO: "VIDEO"
};
const VideoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const videoReducer = (state, action)=>{
    switch(action.type){
        case type.VIDEO:
            return {
                ...state,
                video: action.payload
            };
        default:
            return state;
    }
};
const VideoState = (props)=>{
    const initialState = {
        video: {
            show: false,
            videoId: null
        }
    };
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(videoReducer, initialState);
    const showVideo = (id)=>{
        dispatch({
            type: type.VIDEO,
            payload: {
                show: true,
                id
            }
        });
    };
    const hideVideo = ()=>{
        dispatch({
            type: type.VIDEO,
            payload: {
                show: false,
                videoId: null
            }
        });
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VideoContext.Provider, {
        value: {
            showVideo: showVideo,
            hideVideo: hideVideo,
            video: state.video
        },
        children: props.children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoState);



/***/ })

};
;