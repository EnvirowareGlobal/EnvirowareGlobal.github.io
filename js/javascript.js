$(window).scroll(function() {
    if ($("#menu").offset().top > 1) {
        $("#menu").addClass("header-1");

    } else {
        $("#menu").removeClass("header-1");

    }
});