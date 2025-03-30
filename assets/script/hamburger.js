$(document).ready(function () {
    $("#nav__button").on("click", function () {
        $(".nav").slideToggle();
    });
});


$('.nav-list a[href]').on('click', function (event) {
    $('.nav__button').trigger('click');
});
