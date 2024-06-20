if (document.querySelector('.popup')) {

    const popupWrap = document.querySelector('.popup-wrap');
    const openPopupButtons = document.querySelectorAll('.open-popup');
    const popupClose = document.querySelector('#popup-close');
    const popupBg = document.querySelector('#popup-bg');

    openPopupButtons.forEach(function (openPopupButton) {
        openPopupButton.addEventListener('click', function () {
            popupWrap.classList.add('active');
        });
    });

    popupClose.addEventListener('click', function () {
        popupWrap.classList.remove('active');
    });

    popupBg.addEventListener('click', function () {
        popupWrap.classList.remove('active');
    });
}