import infoJson  from '../dist/obj';

let elements: any = {
    information: JSON.parse(infoJson),
    catalogBtn: getElement('.header__btn'),
    navWrap: getElement('.nav-wrap'),
    btnCart: getElement('.header__icon_cart'),
    cartWrap: getElement('.cart-wrap'),
    btnHeart: getElement('.header__icon_heart'),
    heartWrap: getElement('.likes-wrap'),
    btnAmountCards: getElement('.set__ui'),
    htmlContainer: getElement('.scroll'),
    cartEmpty: getElement('.cart__empty'),
    cart: getElement('.cart'),
    cartHoverEmpty: getElement('.header__hover-cart_empty'),
    cartHoverFull: getElement('.header__hover-cart_full'),
    filter: getElement('.filter'),
    breadcrumbLink: getElement('.breadcrumb__link-toggle'),
    setSelect: getElement('.set__select'),
    popUp: getElement('.popup-wrap'),
    popupWrap: getElement('.popup-wrap'),
    searchInput: <HTMLInputElement>getElement('.search__input'),
    searchBtn: getElement('.search__btn'),
    mainTitle: getElement('.main__title'),
    breadCatalog: getElement('.breadcrumb__catalog'),
    amountProducts: getElement('.amount-product'),
    cartAmount: getElements('.cart__amount_input'),
}

function getElement(selector:string) {
    return document.querySelector(selector);
}

function getElements(selector:string) {
    return document.querySelectorAll(selector);
}

export {elements, getElement, getElements};