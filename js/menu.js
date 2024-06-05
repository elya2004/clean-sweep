import {isDesktop, isTablet, isMobile} from "./functions.js";

// Переносим меню
const headerMenu = document.querySelector('#header-menu');
const mobileMenuContent = document.querySelector('#mobile-menu-content');
const headerLogo = document.querySelector('.header__logo');

const headerInner = document.querySelector('.header__inner');
const headerContacts = document.querySelector('#header-contacts');
const headerButton = document.querySelector('#header-button');
const mobileMenuFooter = document.querySelector('#mobile-menu-footer');

const mobileMenuWrapper = document.querySelector('#mobile-menu-wrapper');
const mobileMenuButton = document.querySelector('#mobile-menu-button');
const headerMenuArrows = document.querySelectorAll('.header-menu__arrow');
const mobileMenuButtonClose = document.querySelector('#mobile-menu-button-close');
const mobileMenuBg = document.querySelector('#mobile-menu-bg');

if (window.innerWidth < 1200) {
    mobileMenuContent.appendChild(headerMenu)
}

// Переносим контакты и кнопку
if (window.innerWidth < 767) {
    mobileMenuFooter.appendChild(headerContacts)
    mobileMenuFooter.appendChild(headerButton)
}

const isDesktopResult = isDesktop();
const isTabletResult = isTablet();
const isMobileResult = isMobile();


window.addEventListener('resize', function () {
    if (window.innerWidth < 1200 && isDesktopResult ||
        window.innerWidth > 1199 && isTabletResult ||
        window.innerWidth < 768 && isTabletResult ||
        window.innerWidth > 767 && isMobileResult) {
        location.reload();
    }
});


// открытие меню
mobileMenuButton.addEventListener("click", function () {
    mobileMenuWrapper.classList.add('active')
});

// открытие подменю
headerMenuArrows.forEach(function (headerMenuArrow) {
    headerMenuArrow.addEventListener('click', function () {
        this.parentNode.classList.toggle('active');
    });
});

// закрытие меню по крестику
mobileMenuButtonClose.addEventListener("click", function () {
    mobileMenuWrapper.classList.remove('active')
});

// закрытие меню по темному фону
mobileMenuBg.addEventListener("click", function () {
    mobileMenuWrapper.classList.remove('active')
});