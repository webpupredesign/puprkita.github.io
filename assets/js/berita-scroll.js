$(document).ready(() => {
    $("#berita-scroll").on('scroll', event => {
        let scrollRight = $("#scroll-inner").position().left < 0;

        if (scrollRight) {
            if ($(".judul-top").hasClass("hidden")) {
                $(".judul-top").removeClass("hidden");
            }

            if (!$(".judul").hasClass("hidden")) {
                $(".judul").addClass("hidden");
            }
        }
        else {
            if (!$(".judul-top").hasClass("hidden")) {
                $(".judul-top").addClass("hidden");
            }

            if ($(".judul").hasClass("hidden")) {
                $(".judul").removeClass("hidden");
            }
        }
    })
})