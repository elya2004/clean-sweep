const ourServicesTabs = document.querySelectorAll('.our-services__tab');

ourServicesTabs.forEach(function (tabButton) {
    tabButton.addEventListener('click', function (event) {

        ourServicesTabs.forEach(function (tabButton) {
            tabButton.classList.remove('our-services__tab-active');
        })

        this.classList.add('our-services__tab-active');

        let tabButtonTrigger = this.getAttribute('data-trigger');
        let tabButtonTriggerElement = document.querySelector(tabButtonTrigger);

        const ourServicesTabContent = document.querySelectorAll('.our-services-tab-content');

        ourServicesTabContent.forEach(function (tabContent) {
            tabContent.classList.remove('our-services-tab-content-active');
        });


        tabButtonTriggerElement.classList.add('our-services-tab-content-active');
    });
});

if (window.innerWidth < 768) {
    new Swiper('.our-services .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        freeMode: true,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });
}