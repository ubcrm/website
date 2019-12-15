$(document).ready(function(){
    var $navbar = $("#robomaster-navbar");
    var $heroImage = $("#robomaster-hero-image");
    var $hero = $("#robomaster-hero");
    let heroOffset = 0;
    cropHero();

    function cropHero(){
        heroOffset = window.innerHeight - $heroImage.height();
        if(heroOffset < 0){
            $hero.css("margin-top", heroOffset + "px"); 
        }
    }
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
      
        if (scroll >= window.innerHeight - 60){
            $(".navbar").addClass("navbar-dark");
            $(".navbar").addClass("bg-dark");
        } else {
            $(".navbar").removeClass("bg-dark");
        }
      });
});