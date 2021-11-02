export default function() {
  return new Swiper(".abilities_inner_wrapper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    //   renderBullet: function(index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + "</span>";
    //   }
    },
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    effect: 'coverflow',
    grabCursor: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
          900: {
            slidesPerView: 1.2,
            
          },
          500:  {
              slidesPerView: 1,
            spaceBetween: 10,

          }
      }

    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });
}
