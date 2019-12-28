(function($) {
  ("use strict");
  // Load content
  jQuery(window).scroll(function() {
    var upor = jQuery(window).scrollTop();
    if (upor > 350) {
      jQuery("#cr-course,#st-highlight").css({ display: "block" });
    }
    if (upor > 615) {
      jQuery("#ins-spotlight,#st-workplace").css({ display: "block" });
    }
    if (upor > 1033) {
      jQuery("#up-seminar").css({ display: "block" });
    }
    if (upor > 1383) {
      jQuery("#students").css({ display: "block" });
    }
    if (upor > 1740) {
      jQuery(".footer-top").css({ display: "block" });
    }
  });
  // mobile responsive navbar
  jQuery("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "767"
  });
  // slider1
  $(".carousel").carousel({
    interval: 5000,
    pause: "hover",
    wrap: true,
    keyboard: true,
    ride: false
  });
})(jQuery);
