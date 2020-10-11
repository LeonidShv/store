import {elements, getElement, getElements} from './elements';
import {counters, storage} from './counters';
import {openCart} from './makeCart';
import {openFilter, makeFilter} from './makeFilter';
import {openPopUp} from './makePopup';
import addToCart from './addToCart';
import makeCatalog from './makeCatalog';
import {makePagination} from './makePagination';
import {changeAmountCards, writeAmountProducts, changeStorage} from './changeState';
import {openNav, makeNav, writeBreadcrumbCategory} from './openNav';
import {searchProduct} from './searcProduct';

makeBlocks();
let btnFilters: any = getElements('.filter__btn');    

function sortBySelected(event: any) {
    let key = event.target.value;

    if (key === 'cheap') {
        storage.products.sort((a: any,b: any) => a.price - b.price);
    } else if (key === 'expensive') {
        storage.products.sort((a: any,b: any) => b.price - a.price);
    } else if (key === 'rating') {
        storage.products.sort((a: any,b: any) => a.rate - b.rate);
    }

    if (counters.changeAmount % 2 === 0) {
        makeCatalog(counters.kindCatalog, 0, counters.amountCardsMore);
        makePagination('mobileBatteries', counters.amountCardsMore)
    } else if (counters.changeAmount % 2 !== 0) {
        makeCatalog(counters.kindCatalog, 0, counters.amountCardsLess);
        makePagination('mobileBatteries', counters.amountCardsLess)
    } else {
        console.log('error in changeAmountCards()');
    } 
}

function main() {
    writeAmountProducts();
    elements.catalogBtn.addEventListener('click', openNav);
    elements.breadCatalog.addEventListener('click', openNav);
    elements.navWrap.addEventListener('click', openNav);
    elements.btnCart.addEventListener('click', openCart);
    elements.cartWrap.addEventListener('click', openCart);
    elements.btnHeart.addEventListener('click', openCart);
    elements.btnAmountCards.addEventListener('click', changeAmountCards);
    btnFilters.forEach((btn:any) => btn.addEventListener('click', openFilter));
    counters.cardCarts = document.querySelectorAll('.card__cart');
    counters.cardCarts.forEach((btn:any) => btn.addEventListener('click', addToCart));
    let filterPriceBtn = getElement('.filter__price_btn');
    filterPriceBtn.addEventListener('click', changeStorage);
    elements.setSelect.addEventListener("change", sortBySelected);
    let cards:any = document.querySelectorAll('.products__card'); 
    cards.forEach((product:any) => product.addEventListener('click', openPopUp));
    elements.popupWrap.addEventListener('click', openPopUp);
    elements.searchBtn.addEventListener('click', searchProduct);
}

function makeBlocks() {
    makeFilter();
    makeNav();
    makePagination(counters.kindCatalog);
    makeCatalog(counters.kindCatalog, 0, 6);
    writeBreadcrumbCategory(counters.kindCatalog);
}

export default main;