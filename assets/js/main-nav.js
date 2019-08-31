$(document).ready(() => {
    let navItemTop = $(".nav-item-container").children().clone();
    let elemen = $("<div class='mobile-menu'></div>").append(navItemTop);
    
    $("#nav-drawer-inner").prepend(elemen);

    $("#hamburger").on("click", event => {
        if ($("#main-nav").hasClass("show-drawer")) {
            $("#main-nav").removeClass("show-drawer");
        }
        else {
            $("#main-nav").addClass("show-drawer");
        }

        $(".sub").removeClass("show-sub");
        $(".open-sub").removeClass("open-sub");
    })

    $(".sub-parent").on("click", event => {
        let $this = $(event.currentTarget)
        let $thisSub = $this.next();

        if (!$thisSub.hasClass("show-sub")) {
            $(".show-sub").removeClass("show-sub");
            $(".open-sub").removeClass("open-sub");
            $thisSub.addClass("show-sub");
            $this.addClass("open-sub");
        }
        else {
            $thisSub.removeClass("show-sub");
            $this.removeClass("open-sub");
        }
    })

    $("#nav-drawer-holder").on("click", event => {
        $("#main-nav").removeClass("show-drawer");
        $(".sub").removeClass("show-sub");
        $(".open-sub").removeClass("open-sub");
    })
})