"use strict";
exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 9474:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kp": () => (/* binding */ home1HeroProps),
/* harmony export */   "Hu": () => (/* binding */ home1CategoryProps),
/* harmony export */   "Mn": () => (/* binding */ home1CoursesProps),
/* harmony export */   "Yl": () => (/* binding */ home3ReviewProps),
/* harmony export */   "OT": () => (/* binding */ teamcarousel),
/* harmony export */   "TD": () => (/* binding */ brandcarousel)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay
]);
const home1HeroProps = {
    className: "slider swiper-container owl-carousel d-block",
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    speed: 800
};
const home1CategoryProps = {
    className: "owl-carousel owl-theme owl-loaded categories-carousel",
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    autoplay: true,
    speed: 800,
    pagination: {
        el: ".indicators",
        clickable: true
    },
    navigation: {
        nextEl: ".owl-next",
        prevEl: ".owl-prev"
    },
    breakpoints: {
        1100: {
            slidesPerView: 5
        },
        992: {
            slidesPerView: 4
        },
        767: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 2
        },
        550: {
            slidesPerView: 2
        }
    }
};
const home1CoursesProps = {
    className: "owl-carousel owl-theme owl-loaded courses-carousel",
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    autoplay: true,
    speed: 800,
    pagination: {
        el: ".indicators",
        clickable: true
    },
    navigation: {
        nextEl: ".owl-next",
        prevEl: ".owl-prev"
    },
    breakpoints: {
        1100: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 3
        },
        767: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        550: {
            slidesPerView: 1
        }
    }
};
const home3ReviewProps = {
    className: "owl-carousel owl-theme reviews-holder",
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: true,
    speed: 800,
    pagination: {
        el: ".owl-dots",
        clickable: true
    },
    navigation: {
        nextEl: ".owl-next",
        prevEl: ".owl-prev"
    },
    breakpoints: {
        1000: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 3
        },
        767: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        550: {
            slidesPerView: 1
        }
    }
};
const teamcarousel = {
    className: "owl-carousel owl-theme reviews-holder",
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: true,
    speed: 800,
    pagination: {
        el: ".owl-dots",
        clickable: true
    },
    navigation: {
        nextEl: ".owl-next",
        prevEl: ".owl-prev"
    },
    breakpoints: {
        1000: {
            slidesPerView: 4
        },
        991: {
            slidesPerView: 3
        },
        767: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        550: {
            slidesPerView: 1
        }
    }
};
const brandcarousel = {
    className: "owl-carousel owl-theme reviews-holder",
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    speed: 800,
    pagination: {
        el: ".owl-dots",
        clickable: true
    },
    navigation: {
        nextEl: ".owl-next",
        prevEl: ".owl-prev"
    },
    breakpoints: {
        1000: {
            slidesPerView: 5
        },
        991: {
            slidesPerView: 4
        },
        767: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 3
        },
        550: {
            slidesPerView: 2
        },
        530: {
            slidesPerView: 1
        }
    }
};

});

/***/ })

};
;