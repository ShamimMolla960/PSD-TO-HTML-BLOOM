let navbar = document.querySelector("#navbar");
let back_to_top = document.querySelector(".back_to_top")


window.addEventListener("scroll",function(){
    let scroll_value = window.scrollY;

    if (scroll_value > 150) {
        navbar.classList.add('sticky');
        back_to_top.classList.add('show');
        
    } else {
        navbar.classList.remove('sticky');
        back_to_top.classList.remove('show')
    }

})

AOS.init();

$('#banar_area').slick({
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed:1000,
    dots:true,
    arrows:false

    
  });