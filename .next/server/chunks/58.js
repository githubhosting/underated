"use strict";
exports.id = 58;
exports.ids = [58];
exports.modules = {

/***/ 9058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInAHour = 60 * msInMinute;
const msInADay = 24 * msInAHour;
const getPartsofTimeDuration = (duration)=>{
    const days = Math.floor(duration / msInADay);
    const hours = Math.floor(duration % msInADay / msInAHour);
    const minutes = Math.floor(duration % msInAHour / msInMinute);
    const seconds = Math.floor(duration % msInMinute / msInSecond);
    return {
        days,
        hours,
        minutes,
        seconds
    };
};
const Time = (endDateTime)=>{
    const { 0: time , 1: setTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date().toLocaleTimeString());
    let date_ = new Date();
    date_.setDate(date_.getDate() + 7);
    date_ = moment__WEBPACK_IMPORTED_MODULE_0___default()(date_).format("M-D-YYYY, 00:00:00");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timeout = setTimeout(()=>{
            const date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000);
        return ()=>{
            clearTimeout(timeout);
        };
    }, [
        time
    ]);
    const now = Date.now(); // Number of milliseconds from begining of time
    const future = new Date(endDateTime ? endDateTime : date_); // The day we leave for Japan
    const timeDif = future.getTime() - now;
    let timeParts = getPartsofTimeDuration(timeDif);
    timeParts.days = timeParts.days <= 9 ? `0${timeParts.days}` : timeParts.days;
    timeParts.minutes = timeParts.minutes <= 9 ? `0${timeParts.minutes}` : timeParts.minutes;
    timeParts.hours = timeParts.hours <= 9 ? `0${timeParts.hours}` : timeParts.hours;
    timeParts.seconds = timeParts.seconds <= 9 ? `0${timeParts.seconds}` : timeParts.seconds;
    return timeParts;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Time);


/***/ })

};
;