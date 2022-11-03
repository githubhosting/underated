"use strict";
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 3483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/video.js
var context_video = __webpack_require__(6752);
;// CONCATENATED MODULE: ./src/components/VideoPopup.js



let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
const VideoPopup = ()=>{
    const videoContext = (0,external_react_.useContext)(context_video/* VideoContext */.l);
    const { video , hideVideo  } = videoContext;
    let domNode = useClickOutside(()=>{
        hideVideo();
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>hideVideo()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>hideVideo()
                                        ,
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        className: "mfp-iframe",
                                        src: video.id ? `//www.youtube.com/embed/${video.id}?autoplay=1` : "//www.youtube.com/embed/Y6MlVop80y0?autoplay=1",
                                        frameBorder: 0,
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const components_VideoPopup = (VideoPopup);

// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(8356);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/layout/Footer.js



const Footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        id: "footer-2",
        className: "footer division",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-5 col-lg-5 col-xl-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-info mb-40",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "images/logo.png",
                                        width: 172,
                                        height: 40,
                                        alt: "footer-logo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Aliquam orci a nullam tempor sapien gravida donec enim ipsum porta justo velna an auctor undo congue magna laoreet augue sapien"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-3 col-lg-3 col-xl-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-links mb-40",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "h5-md",
                                        children: "Quick Links"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "foo-links clearfix",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/about",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "About eTreeks"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/categories-list",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Courses Catalog"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/reviews",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Our Testimonials"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/pricing",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Premium Learning"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/blog-listing",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "From the Blog"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-4 col-lg-4 col-xl-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-links mb-40",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "h5-md",
                                        children: "Popular Categories"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "clearfix",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                        },
                                                        children: "Business English"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                        },
                                                        children: "Software Development"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                        },
                                                        children: "Finance & Accounting"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                        },
                                                        children: "Health and Fitness"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                        },
                                                        children: "Office Productivity"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-7 col-xl-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-form mb-20",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "h5-md",
                                        children: "Stay in Touch"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        className: "newsletter-form",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "input-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "email",
                                                        autoComplete: "off",
                                                        className: "form-control",
                                                        placeholder: "Your Email Address",
                                                        required: true
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "input-group-btn",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            type: "submit",
                                                            className: "btn btn-rose tra-rose-hover",
                                                            children: "Subscribe"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                className: "form-notification"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bottom-footer",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "bottom-footer-list",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "\xa9 Copyright eTreeks ",
                                                    new Date().getFullYear()
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                        },
                                                        href: "tel:123456789",
                                                        children: "508.746.9892"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "last-li",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                        },
                                                        href: "mailto:yourdomain@mail.com",
                                                        children: "hello@domain.com"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 text-right",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "foo-socials text-center clearfix",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                    },
                                                    className: "ico-facebook",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                    },
                                                    className: "ico-twitter",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                    },
                                                    className: "ico-google-plus",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-google-plus-g"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                    },
                                                    className: "ico-tumblr",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-tumblr"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const layout_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/dist/client/link.js
var client_link = __webpack_require__(8418);
;// CONCATENATED MODULE: ./src/layout/Footer2.js


const Footer2 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        id: "footer-1",
        className: "footer division",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-12 col-xl-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-info mb-40",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "images/logo.png",
                                    width: 172,
                                    height: 40,
                                    alt: "footer-logo"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-4 col-xl-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-links mb-40",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "foo-links clearfix",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                href: "/about",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "About eTreeks"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                href: "/reviews",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Our Testimonials"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                href: "/blog-listing",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "From the Blog"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-4 col-xl-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-links mb-40",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "clearfix",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                href: "/categories-list",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Courses Catalog"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                href: "/categories-list",
                                                children: "Popular Categories"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                href: "/pricing",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Premium Learning"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-4 col-xl-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-links mb-40",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "clearfix",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                    },
                                                    children: "Terms & Privacy"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                    },
                                                    children: "Site Map"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bottom-footer",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "bottom-footer-list",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "\xa9 Copyright eTreeks ",
                                                    new Date().getFullYear()
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                        },
                                                        href: "tel:123456789",
                                                        children: "508.746.9892"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "last-li",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                        },
                                                        href: "mailto:yourdomain@mail.com",
                                                        children: "hello@domain.com"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 text-right",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "foo-socials text-center clearfix",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                    },
                                                    className: "ico-facebook",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                    },
                                                    className: "ico-twitter",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                    },
                                                    className: "ico-google-plus",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-google-plus-g"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(client_link["default"], {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                    },
                                                    className: "ico-tumblr",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-tumblr"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const layout_Footer2 = (Footer2);

;// CONCATENATED MODULE: ./src/layout/Header.js



const Header = ({ headerBtn  })=>{
    const { 0: openSubMen , 1: setOpenSubMen  } = (0,external_react_.useState)(null);
    const onClick = ()=>{
        const body = document.querySelector("body");
        body.classList.toggle("wsactive");
    };
    const activeFun = (name)=>setOpenSubMen(name === openSubMen ? "" : name)
    ;
    const activeLi = (name)=>name === openSubMen ? "d-block" : "d-md-block d-sm-none"
    ;
    const iconChange = (name)=>name === openSubMen ? "ws-activearrow" : ""
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx("header", {
        id: "header",
        className: "header white-menu navbar-dark",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "header-wrapper",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "wsmobileheader clearfix",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                onClick: ()=>onClick()
                                ,
                                id: "wsnavtoggle",
                                className: "wsanimated-arrow",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "smllogo smllogo-black",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "images/logo.png",
                                width: 172,
                                height: 40,
                                alt: "mobile-logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "smllogo smllogo-white",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "images/logo-white.png",
                                width: 172,
                                height: 40,
                                alt: "mobile-logo"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "wsmainfull menu clearfix",
                    id: "wsmainfull",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "wsmainwp clearfix",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "desktoplogo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/demo-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#hero-3",
                                        className: "logo-black",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "images/logo.png",
                                            width: 172,
                                            height: 40,
                                            alt: "header-logo"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "desktoplogo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "d#hero-3",
                                        className: "logo-white",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "images/logo-white.png",
                                            width: 172,
                                            height: 40,
                                            alt: "header-logo"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                className: "wsmenu clearfix",
                                style: {
                                    maxHeight: "700px"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "overlapblackbg",
                                        onClick: ()=>onClick()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "wsmenu-list",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nl-simple",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/about",
                                                    children: "About"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                onClick: ()=>activeFun("pages")
                                                ,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: `wsmenu-click ${iconChange("pages")}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "wsmenu-arrow"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#",
                                                        children: [
                                                            "Pages ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "wsarrow"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `wsmegamenu clearfix halfmenu ${activeLi("pages")}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "container-fluid",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "row",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        className: "col-lg-6 col-md-12 col-xs-12 link-list left-link-list",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "about",
                                                                                    children: "About Us Page"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "categories-list",
                                                                                    children: "Categories Listing"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "category-details",
                                                                                    children: "Category Details"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "courses-list",
                                                                                    children: "Courses Listing"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "course-details",
                                                                                    children: "Course Details"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "teachers-list",
                                                                                    children: "Teachers Listing"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "teacher-profile",
                                                                                    children: "Teacher Profile"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        className: "col-lg-6 col-md-12 col-xs-12 link-list",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "become-a-teacher",
                                                                                    children: "Become A Teacher"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "pricing",
                                                                                    children: "Pricing Plans Page"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "reviews",
                                                                                    children: "Reviews Page"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "faqs",
                                                                                    children: "FAQs Page"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "blog-listing",
                                                                                    children: "Blog Listing"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "single-post",
                                                                                    children: "Single Post"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: "contacts",
                                                                                    children: "Contacts Page"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            " ",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                onClick: ()=>activeFun("Categories")
                                                ,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: `wsmenu-click ${iconChange("Categories")}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "wsmenu-arrow"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#",
                                                        children: [
                                                            "Categories ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "wsarrow"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: `sub-menu ${activeLi("Categories")}`,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "courses-list",
                                                                    children: "Development"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "courses-list",
                                                                    children: "Finance & Accounting"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "courses-list",
                                                                    children: "IT & Software"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "courses-list",
                                                                    children: "Office Productivity"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "courses-list",
                                                                    children: "Photography"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "courses-list",
                                                                    children: "Math & Science"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "courses-list",
                                                                    children: "Languages"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "courses-list",
                                                                    children: "Marketing"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "courses-list",
                                                                    children: "Health & Fitness"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            " ",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                onClick: ()=>activeFun("Mega")
                                                ,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: `wsmenu-click ${iconChange("Mega")}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "wsmenu-arrow"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#",
                                                        children: [
                                                            "Mega Menu ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "wsarrow"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: `wsmegamenu clearfix ${activeLi("Mega")}`,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "container",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "row",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "col-md-12 col-lg-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                                        className: "title",
                                                                                        children: "Top 5 Online Courses:"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                        className: "link-list clearfix",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                                    href: "course-details",
                                                                                                    children: "English for Tourism"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                                    href: "course-details",
                                                                                                    children: "Python Programming - Working with Lists and Files"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                                    href: "course-details",
                                                                                                    children: "Computer Networking - Wired and Wireless Networks"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                                    href: "course-details",
                                                                                                    children: "Digital Marketing: The Ultimate Guide to Strategic"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                                    href: "course-details",
                                                                                                    children: "The Complete iOS 10 & Swift 3 Developer Course"
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "col-md-12 col-lg-5",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                                        className: "title",
                                                                                        children: "Featured News:"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "fluid-width-video-wrapper mb-15",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                            src: "images/blog/featured-news.jpg",
                                                                                            alt: "featured-news"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                                        className: "h5-md",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                            href: "single-post",
                                                                                            children: "Study smart and save time with these 5 tips"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        className: "wsmwnutxt",
                                                                                        children: "Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor impedit magna..."
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            " ",
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "col-md-12 col-lg-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                                        className: "title",
                                                                                        children: "Latest News:"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                        className: "latest-news",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                className: "clearfix d-flex align-items-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                                        className: "img-fluid",
                                                                                                        src: "images/blog/latest-post-1.jpg",
                                                                                                        alt: "blog-post-preview"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                        className: "post-summary",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                                                href: "single-post",
                                                                                                                children: "Etiam sapien risus ante auctor tempus an accumsan..."
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                                                children: "18 hours ago"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                className: "clearfix d-flex align-items-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                                        className: "img-fluid",
                                                                                                        src: "images/blog/latest-post-2.jpg",
                                                                                                        alt: "blog-post-preview"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                        className: "post-summary",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                                                href: "single-post",
                                                                                                                children: "Blandit tempor sapien ipsum, porta risus auctor justo..."
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                                                children: "Feb 17, 2020"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                                className: "clearfix d-flex align-items-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                                        className: "img-fluid",
                                                                                                        src: "images/blog/latest-post-3.jpg",
                                                                                                        alt: "blog-post-preview"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                        className: "post-summary",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                                                href: "single-post",
                                                                                                                children: "Cursus risus an auctor risus laoreet undo auctor varius..."
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                                                children: "Feb 07, 2020"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    " "
                                                                ]
                                                            }),
                                                            " "
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nl-simple",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "blog-listing",
                                                    children: "Blog"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nl-simple",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "contacts",
                                                    children: "Contacts"
                                                })
                                            }),
                                            headerBtn ? /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nl-simple",
                                                "aria-haspopup": "true",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/pricing",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "btn btn-rose tra-black-hover last-link",
                                                        children: "Get Started"
                                                    })
                                                })
                                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                onClick: ()=>activeFun("En")
                                                ,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: `wsmenu-click ${iconChange("En")}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "wsmenu-arrow"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#",
                                                        className: "lang-select",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "images/icons/flags/uk.png",
                                                                alt: "flag-icon"
                                                            }),
                                                            " En",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "wsarrow"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: `sub-menu last-sub-menu ${activeLi("En")}`,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "images/icons/flags/germany.png",
                                                                            alt: "flag-icon"
                                                                        }),
                                                                        " ",
                                                                        "Deutch"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "images/icons/flags/spain.png",
                                                                            alt: "flag-icon"
                                                                        }),
                                                                        " ",
                                                                        "Espa\xf1ol"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "images/icons/flags/france.png",
                                                                            alt: "flag-icon"
                                                                        }),
                                                                        " ",
                                                                        "Fran\xe7ais"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "images/icons/flags/italy.png",
                                                                            alt: "flag-icon"
                                                                        }),
                                                                        " ",
                                                                        "Italiano"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "images/icons/flags/russia.png",
                                                                            alt: "flag-icon"
                                                                        }),
                                                                        " ",
                                                                        "Русский"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "images/icons/flags/china.png",
                                                                            alt: "flag-icon"
                                                                        }),
                                                                        " ",
                                                                        "简体中文"
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            " "
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const layout_Header = (Header);

;// CONCATENATED MODULE: ./src/layout/Layout.js








const Layout = ({ children , footer , headerBtn  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* aTagClick */.jd)();
        window.addEventListener("scroll", utils/* stickNav */.Td);
    });
    const videoContext = (0,external_react_.useContext)(context_video/* VideoContext */.l);
    const { video  } = videoContext;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "page",
        id: "page",
        children: [
            video.show && /*#__PURE__*/ jsx_runtime_.jsx(components_VideoPopup, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {
                headerBtn: headerBtn
            }),
            children,
            footer === 2 ? /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer2, {
            }) : /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {
            })
        ]
    }));
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 8356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Td": () => (/* binding */ stickNav),
/* harmony export */   "jd": () => (/* binding */ aTagClick),
/* harmony export */   "nd": () => (/* binding */ isotopLayout),
/* harmony export */   "oA": () => (/* binding */ pagination),
/* harmony export */   "ot": () => (/* binding */ getPagination)
/* harmony export */ });
const stickNav = ()=>{
    let offset = window.scrollY;
    const sticky = document.querySelector("#wsmainfull");
    if (sticky) {
        if (offset > 80) {
            sticky.classList.add("scroll");
        } else {
            sticky.classList.remove("scroll");
        }
    }
};
const aTagClick = ()=>{
    const aTag = document.querySelectorAll("[href='#']");
    for(let i = 0; i < aTag.length; i++){
        const a = aTag[i];
        a.addEventListener("click", (e)=>{
            e.preventDefault();
        });
    }
};
const isotopLayout = (container, item)=>{
    setTimeout(()=>{
        if (false) {}
    }, 1000);
};
const pagination = (listClass, sort, active)=>{
    let list = document.querySelectorAll(listClass);
    for(let i = 0; i < list.length; i++){
        const element = list[i];
        if (active === 1) {
            if (i < sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        } else {
            if (i >= (active - 1) * sort && i < active * sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        }
    }
};
const getPagination = (totalNumber, sort)=>{
    let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx)=>idx + 1
    );
    return arr;
};


/***/ })

};
;