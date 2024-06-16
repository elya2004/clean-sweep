
if (document.querySelector('.swiper')) {
    new Swiper('.reviews .swiper', {
        slidesPerView: 3,
        loop: false,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            prevEl: '.reviews .swiper-button-left',
            nextEl: '.reviews .swiper-button-right',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                spaceBetween: 30,
            },
        }
    });
}