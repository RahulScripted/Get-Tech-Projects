// <----------- Swiper JS -------------->
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    breakpoints:{
        500:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    }
});