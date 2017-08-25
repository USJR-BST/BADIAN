$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.parallax1').parallax();

    if (window.matchMedia('(max-width: 979px)').matches) {
        $(window).scroll(function()
        {
            var div = $(this);
            if(div.scrollTop() === 0)
            {
                $(".brand-logo img").removeClass(" animated slideOutUp");
                $(".brand-logo img").addClass(" animated slideInDown");
            }else{
                $(".brand-logo img").removeClass(" animated slideInDown");
                $(".brand-logo img").addClass(" animated slideOutUp");
            }
        });
    }

});