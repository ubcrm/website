$(document).ready(function(){
    window.onscroll = function() {setSticky()};

    var navbar = document.getElementById("robomaster-navbar");
    var heroImage = document.getElementById("robomaster-hero-image");
    var hero = document.getElementById("robomaster-hero");
    cropHero();

    var sticky = navbar.offsetTop;
    
    function cropHero(){
        let d = window.innerHeight - heroImage.height;
        console.log(d);
        if(d < 0){
            hero.setAttribute("style", "margin-top:" + d + "px;"); 
        }
    }

    // Add the sticky class to the navbar when you reach its scroll position. Remove "navbar-sticky" when you leave the scroll position
    function setSticky() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("navbar-sticky");
      } else {
        navbar.classList.remove("navbar-sticky");
      }
    }
});
