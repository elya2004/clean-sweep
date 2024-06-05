export function isMobile() {
    return window.innerWidth < 768;
}

export function isTablet() {
    return window.innerWidth > 767 && window.innerWidth < 1200;
}

export function isDesktop() {
    return window.innerWidth > 1199;
}