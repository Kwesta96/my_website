// navbar background
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    // typing animation
     var typed = new Typed(".typing", {
         strings: ["Freelancer", "Web Developer", "Designer"],
         typeSpeed: 100,
         backSpeed: 60,
         loop: true
     });

     $(window).on('hashchange', function(e){
        history.replaceState ("", document.title, e.originalEvent.oldURL);
    });
});