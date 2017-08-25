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
                $(".brand-logo img").removeClass(" animated zoomOut");
                $(".brand-logo img").addClass(" animated zoomIn");
            }else{
                $(".brand-logo img").removeClass(" animated zoomIn");
                $(".brand-logo img").addClass(" animated zoomOut");
            }
        });
    }

});