window.onload = function(){
var swiper = new Swiper(".mySwiper", {
    // cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
    pagination: {
      el: ".swiper-pagination",
      bulletClass:"custom-bullet",
      clickable:true,
    },
    // mousewheel: true,

  });
}