//header
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-circle-xmark');
    navbar.classList.toggle('active'); 
};

window.onscroll = () => {
    menu.classList.remove('fa-circle-xmark');
    navbar.classList.remove('active'); 
};

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

//home swiper
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  //review swiper 
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0:{
        slidersPerView: 1,
      },
      640:{
        slidersPerView: 2,
      },
      768:{
        slidersPerView: 2,
      },
      1024:{
        slidersPerView: 3,
      },
    },
  });

