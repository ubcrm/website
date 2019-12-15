$(document).ready(function(){
    var navbar = document.getElementById("robomaster-navbar");
    var heroImage = document.getElementById("robomaster-hero-image");
    var hero = document.getElementById("robomaster-hero");
    cropHero();

    function cropHero(){
        let d = window.innerHeight - heroImage.height;
        console.log(d);
        if(d < 0){
            hero.setAttribute("style", "margin-top:" + d + "px;"); 
        }
    }
});


$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
      $(".navbar").addClass("navbar-dark");
      $(".navbar").addClass("bg-dark");
  } else {
      $(".navbar").removeClass("bg-dark");
  }
});