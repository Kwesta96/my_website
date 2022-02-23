// menu button
$(document).ready(function () {
    $('.menu-btn').click(function () {
        $('.navbar .menu-items').toggleClass("active");
        $('.navbar i').toggleClass("active");
    });
});