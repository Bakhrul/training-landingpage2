$(function() {
    var header = $(".navbar-toggleable-md");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >350) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
  
});