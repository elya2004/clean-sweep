const footerItems = document.querySelectorAll('.footer__item');
const footerTitles = document.querySelectorAll('.footer__item .h3');

footerTitles.forEach(function (footerTitle) {
    footerTitle.addEventListener('click', function () {
        let footerTitleActive = this;

        footerItems.forEach(function (footerItem) {
            if (footerItem !== footerTitleActive.parentNode) {
                footerItem.classList.remove('active');
            }
        });

        this.parentNode.classList.toggle('active');
    });
});