"use strict";
var mobileSlider = function () {
        $(".owl-carousel_mobile").length &&
            ($(".owl-carousel_mobile").addClass("owl-carousel"),
            $(".owl-carousel_mobile.owl-carousel").owlCarousel({ loop: !0, items: 1, touchDrag: !0, mouseDrag: !0, autoplay: !1, dots: !1, nav: !1, margin: 24, stagePadding: 39, autoHeight: !0 }));
    },
    destroyMobileSlider = function () {
        $(".owl-carousel_mobile").length && $(".owl-carousel_mobile").owlCarousel("destroy").removeClass("owl-carousel");
    },
    galleryMasonry = function () {
        var e = $(".gallery").masonry({ itemSelector: ".gallery__item", gutter: 32, percentPosition: !0 });
        e.imagesLoaded().progress(function () {
            e.masonry("layout");
        });
    },
    destroyMasonry = function () {
        $(".gallery").masonry("destroy");
    };
$('[data-fancybox="gallery"]').fancybox({ loop: !0, mobile: { backFocus: !1 } });
var targetModal = document.querySelector(".booking-modal-wrapper");
$('[data-modal="#booking-modal"]').click(function (e) {
    e.preventDefault();
    var o = $(this).attr("data-modal");
    $(o).css("display", "block").addClass("booking-modal_open"),
        $(".booking-modal__form").css("height", $(".booking-modal__step.active").height()),
        0 == $(".header__mobile-menu-display").length && bodyScrollLock.disableBodyScroll(targetModal);
}),
    $(".close-modal, .booking-modal-bg").click(function () {
        $("#booking-modal").removeClass("booking-modal_open"),
            setTimeout(function () {
                $("#booking-modal").css("display", "none"), 0 == $(".header__mobile-menu-display").length && bodyScrollLock.enableBodyScroll(targetModal);
            }, 300);
    }),
    $("body").on("keydown", function (e) {
        $(".booking-modal_open").length &&
            27 == e.keyCode &&
            ($("#booking-modal").removeClass("booking-modal_open"),
            setTimeout(function () {
                $("#booking-modal").css("display", "none"), 0 == $(".header__mobile-menu-display").length && bodyScrollLock.enableBodyScroll(targetModal);
            }, 300));
    });
var nextStep = function (e) {
        e.preventDefault(),
            $(".booking-modal__form-inner").css("transform", "translate3d(-50%, 0px, 0px)"),
            $(".booking-modal__step.active").removeClass("active").siblings().addClass("active"),
            $(".booking-modal__form").css("height", $(".booking-modal__step.active").height());
    },
    prevStep = function (e) {
        e.preventDefault(),
            $(".booking-modal__form-inner").css("transform", "translate3d(0px, 0px, 0px)"),
            $(".booking-modal__step.active").removeClass("active").siblings().addClass("active"),
            $(".booking-modal__form").css("height", $(".booking-modal__step.active").height());
    },
    successFormModal = function () {
        $(".booking-modal").css("display", "none"),
            $(".booking-modal-success").css("display", "flex"),
            setTimeout(function () {
                $(".booking-modal-success").css("opacity", "1");
            }, 70);
    },
    sizeState = { isPhone: $(window).innerWidth() <= 664 };
function mapInitialization() {
    var e = new google.maps.Map(document.getElementById("map-container"), {
        center: mapCoordinates,
        zoom: 15,
        styles: [
            { featureType: "all", elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#000000" }, { lightness: 40 }] },
            { featureType: "all", elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }] },
            { featureType: "all", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
            { featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 20 }] },
            { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }] },
            { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 20 }] },
            { featureType: "poi", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 21 }] },
            { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 17 }] },
            { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: 0.2 }] },
            { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 18 }] },
            { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 16 }] },
            { featureType: "transit", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 19 }] },
            { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 17 }] },
        ],
    });
    new google.maps.Marker({ position: mapCoordinates, map: e, icon: { url: "../img/marker.svg", scaledSize: new google.maps.Size(64, 64), origin: new google.maps.Point(0, 0), anchor: new google.maps.Point(32, 32) } });
}
$(document).ready(function () {
    sizeState.isPhone ? mobileSlider() : galleryMasonry();
    !(function () {
        $(".main-slider").length &&
            1 < $(".main-slider").find(".main-slider__item").length &&
            ($(".main-slider").addClass("owl-carousel"), $(".main-slider.owl-carousel").owlCarousel({ loop: !0, items: 1, touchDrag: !0, mouseDrag: !0, smartSpeed: 500, autoplay: !0, autoplayTimeout: 5e3, margin: 0, dots: !0 }));
        $(".main-slider").removeClass("main-slider_hidden");
    })(),
        0 == $(".parallax-wrap").length && $(".parallax-img").paroller(),
        $(function () {
           /*  $("select").selectric(); */
        }),
        $("a[href='#top']").click(function () {
            return $("html, body").animate({ scrollTop: 0 }, "slow"), !1;
        });
    var e = document.querySelector(".header__mobile-menu");
    $(".header__burger").click(function () {
        $(".header__mobile-menu-outer").toggleClass("header__mobile-menu-display"), bodyScrollLock.disableBodyScroll(e), bodyScrollLock.disableBodyScroll(document.querySelector(".booking-modal-wrapper"));
    }),
        $(".header__close-mobile").click(function () {
            $(".header__mobile-menu-outer").toggleClass("header__mobile-menu-display"), bodyScrollLock.clearAllBodyScrollLocks();
        });
    $(".gallery-carousel").length &&
        $(".gallery-carousel.owl-carousel").owlCarousel({
            loop: !0,
            items: 1,
            touchDrag: !0,
            mouseDrag: !0,
            autoplay: !1,
            margin: 0,
            dots: !1,
            nav: !0,
            navElement: "div",
            navText: [
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" height="80" viewBox="0 0 42 80"><defs><path id="z3uea" fill="#fff" d="M238.027 1707.02l.02-.02 2.745.04.02.021-1.413 1.409zm3.973 77.232l-36.638-36.519L242 1711.217l-2.601-2.747L200 1747.734 239.399 1787z"/></defs><g><g transform="translate(-200 -1707)"><use xlink:href="#z3uea"/></g></g></svg>',
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" height="80" viewBox="0 0 42 80"><defs><path id="art2a" fill="#fff" d="M1201.973 1706.02l-.02-.02-2.745.04-.02.021 1.413 1.409zm-3.973 77.232l36.638-36.519-36.638-36.516 2.601-2.747 39.399 39.264-39.399 39.266z"/></defs><g><g transform="translate(-1198 -1706)"><use xlink:href="#art2a"/></g></g></svg>',
            ],
        });
    var o = document.getElementById("arrival-date"),
        l = document.getElementById("departure-date");
    pickmeup(o, { format: "d.m.Y", default_date: !1, select_year: !1, min: new Date(), hide_on_select: !0, locale: calendarLang }),
        o.addEventListener("pickmeup-change", function (o) {
            $(o.target).hasClass("changed") ? (pickmeup(l).destroy(), ($(l)[0].value = "")) : $(o.target).addClass("changed"),
                pickmeup(l, {
                    date: o.detail.date,
                    format: "d.m.Y",
                    default_date: !1,
                    select_year: !1,
                    hide_on_select: !0,
                    locale: calendarLang,
                    render: function (e) {
                        return e < o.detail.date ? { disabled: !0 } : {};
                    },
                }),
                $(l).trigger("click");
        }),
        jQuery(
            '<div class="field-number-nav">\n\n                <div class="field-number-button field-number-up">\n\n                    <svg width="14px" height="9px" viewBox="0 0 14 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\n                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n\n                            <g id="Book-now-modal" transform="translate(-378.000000, -414.000000)" fill="#D8D8D8" fill-rule="nonzero" stroke="#E6E6E6" stroke-width="0.5">\n\n                                <g id="1st-step" transform="translate(160.000000, 149.000000)">\n\n                                    <polygon id="Path-Copy-3" transform="translate(225.000000, 269.500000) rotate(90.000000) translate(-225.000000, -269.500000) " points="228.5 276.010104 222.393711 269.499768 228.499972 262.989747 228.066475 262.5 221.5 269.499782 228.066459 276.5"></polygon>\n\n                                </g>\n\n                            </g>\n\n                        </g>\n\n                    </svg>\n\n                </div>\n\n                <div class="field-number-button field-number-down">\n\n                    <svg width="14px" height="9px" viewBox="0 0 14 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\n                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n\n                            <g id="Book-now-modal" transform="translate(-378.000000, -431.000000)" fill="#D8D8D8" fill-rule="nonzero" stroke="#E6E6E6" stroke-width="0.5">\n\n                                <g id="1st-step" transform="translate(160.000000, 149.000000)">\n\n                                    <polygon id="Path-Copy-6" transform="translate(225.000000, 286.500000) scale(1, -1) rotate(90.000000) translate(-225.000000, -286.500000) " points="228.5 293.010104 222.393711 286.499768 228.499972 279.989747 228.066475 279.5 221.5 286.499782 228.066459 293.5"></polygon>\n\n                                </g>\n\n                            </g>\n\n                        </g>\n\n                    </svg>\n\n                </div>\n\n            </div>'
        ).insertAfter(".field-number-outer input"),
        jQuery(".field-number-outer").each(function () {
            var l = jQuery(this),
                a = l.find('input[type="number"]'),
                e = l.find(".field-number-up"),
                o = l.find(".field-number-down"),
                t = a.attr("min"),
                n = a.attr("max");
            e.click(function () {
                var e = parseFloat(a.val()) || 0;
                if (n <= e) var o = e;
                else o = e + 1;
                l.find("input").val(o), l.find("input").trigger("change");
            }),
                o.click(function () {
                    var e = parseFloat(a.val());
                    if (e <= t) var o = e;
                    else o = e - 1;
                    l.find("input").val(o), l.find("input").trigger("change");
                });
        });
}),
    $(window).on("load", function () {
        if ($(".parallax-wrap").length) {
            for (var e = $(".parallax-wrap").height(), o = 0, l = 0; o < e - 100; )
                3 < l ? (l = 1) : l++,
                    $(".parallax-wrap").append(
                        '\n\n                <div class="parallax-img parallax-img_'
                            .concat(l % 2 == 0 ? "right" : "left", '" data-paroller-factor="-0.1" data-paroller-type="foreground" style="top: ')
                            .concat(0 == o ? "100" : o, 'px">\n\n                    <img src="/img/parallax-img-')
                            .concat(l, '.svg" alt="">\n\n                </div>')
                    ),
                    (o += 480);
            $(".parallax-img").paroller();
        }
    }),
    $(window).resize(function () {
        var e = { isPhone: $(window).innerWidth() <= 664 };
        e.isPhone != sizeState.isPhone && ((sizeState = e).isPhone ? (destroyMasonry(), mobileSlider()) : (destroyMobileSlider(), galleryMasonry())),
            1009 < $(window).innerWidth() && (bodyScrollLock.clearAllBodyScrollLocks(), $(".header__mobile-menu-outer").removeClass("header__mobile-menu-display"));
    });
var timer = setInterval(function () {
    mapInitFlag && (mapInitialization(), clearInterval(timer));
}, 300);
