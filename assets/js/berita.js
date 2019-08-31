$(document).ready(() => {
    let bgImage = $(".berita-text img").first().attr("src");
    if (bgImage !== undefined) {
        $(".berita-text img").first().css("display", "none");
        $(".berita-image").css("background-image", "url('"+ bgImage +"')");
    }
})