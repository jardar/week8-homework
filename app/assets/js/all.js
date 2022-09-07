$(function () {
  console.log('Hello Bootstrap5');


  const swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    loop: true,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    breakpoints: {

      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1.75,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  const swiperArt = new Swiper('.swiper-art-container', {
    centeredSlides: true,
    loop: true,
    speed: 500,
    slidesPerView: 2.25,
    spaceBetween: 24,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-art-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    breakpoints: {

      640: {
        slidesPerView: 2.25,
      },
      768: {
        slidesPerView: 2.25,
      },
      992: {
        slidesPerView: 4.25,
      },
      1024: {
        slidesPerView: 4.25,
      },
    },
  });


  // // 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋
  // $('.masonry-row').imagesLoaded().progress(function () {
  //   $('.masonry-row').masonry(); // 渲染整體畫面
  // });

  $('.masonryTab').on('shown.bs.tab', function () {
    let msnry = Masonry.data($('.masonry-row')[0]);
    $('.masonry-row').imagesLoaded(function () {
      msnry.layout(); // 渲染整體畫面
    });
  });
});