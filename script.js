$("nav ul li").on("click", function () {
    const getSectionID = '#' + $(this).attr("class");
    $("body, html").animate({
        scrollTop: $(getSectionID).offset().top
    }, 1000);
})


function stickMenu() {
    const scrollPosition = $(document).scrollTop();
    const stickHere = $("main").offset().top;

    if (scrollPosition >= stickHere) {
        $("nav").addClass("stick");
    } else {
        $("nav").removeClass("stick");
    }
}

$(document).on("scroll", stickMenu);