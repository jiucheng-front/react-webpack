/**
 *  From m.jd.com
 * 
 *  .woff .ttf 手機端字體就2個就夠了！IOS和Android
 * 
 */
var global_bottom_bar_activity_bar_img;
var global_back_to_top;

var iphoneCompatibility = {
    isIphoneX: function () {
        return !!(window.devicePixelRatio && 3 == window.devicePixelRatio && 375 == document.documentElement.clientWidth && -1 < navigator.userAgent.indexOf("Safari"))
    },
    isIOS8: function () {
        return -1 < navigator.userAgent.indexOf("iPhone OS 8") && -1 < navigator.platform.indexOf("iPhone")
    },
    isIOS9: function () {
        return -1 < navigator.userAgent.indexOf("iPhone OS 9") && -1 < navigator.platform.indexOf("iPhone")
    },
    isIOS10: function () {
        return -1 < navigator.userAgent.indexOf("iPhone OS 10") && -1 < navigator.platform.indexOf("iPhone")
    },
    isUCBrowser: function () {
        return -1 < navigator.userAgent.indexOf("UCBrowser")
    }
};

var global_current_viewportHeight = window.innerHeight;

window.onscroll = function () {
    iphoneCompatibility.isIphoneX() && (global_back_to_top = document.querySelector("#mBack2Top"), window.innerHeight >
        global_current_viewportHeight ? global_back_to_top && (global_back_to_top.style.bottom = "82px") :
        global_back_to_top && (global_back_to_top.style.bottom = "62px"))
};

$(document).ready(function () {
    try {
        var i;
        if (iphoneCompatibility.isIOS8() || iphoneCompatibility.isIOS9())(i = document.querySelector(
            ".jd-search-box-cover")) && (i.style.height = "55px"), $("#index_search_submit").css("padding-top", "3px");
        if (iphoneCompatibility.isIOS8() || iphoneCompatibility.isIOS9() || iphoneCompatibility.isIOS10()) {
            var e = document.querySelector("#slider + div + #appcenter");
            e && (e.style.marginTop = "-1PX")
        }
    } catch (i) {}
});

window.onresize = function () {
    if (-1 < navigator.userAgent.indexOf("iPhone")) {
        var i = document.getElementById("index_search_head");
        document.getElementById("index_newkeyword");
        i.classList.contains("on-focus") ? window.scroll(0, 1) : i.style.marginTop = 0
    }
};