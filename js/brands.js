let brandsIsFreeMode = false;

if (window.innerWidth < 768) {
    brandsIsFreeMode = true;
}

new Swiper('.brands .swiper', {
    slidesPerView: 6,
    loop: false,
    spaceBetween: 12,
    freeMode: brandsIsFreeMode,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.brands .swiper-button-left',
        nextEl: '.brands .swiper-button-right',
    },
    breakpoints: {
        320: {
            slidesPerView: 'auto',
        },
        768: {
            slidesPerView: 5,
        },
        992: {
            slidesPerView: 6,
        },
        1200: {
            spaceBetween: 30,
        }
    }
});
