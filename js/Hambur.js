$(document).ready(function () {
    $("#clickhambur").click(function () {
        let nav = $("#nav-responsive");
        nav.animate({
            right: 0
        }, 300);
        $('body').append('<div id="click-back"></div>');
        $("#click-back").click(function () {
            let nav = $("#nav-responsive");
            nav.animate({
                right: "-400px"
            }, 200);
            $(this).remove();



        })


    });



});