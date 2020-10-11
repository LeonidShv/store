import {elements, getElement} from './elements';
import {counters, storage, filters} from './counters';
import {openPopUp} from './makePopup';
import makeCatalog from './makeCatalog';
import {makePagination} from './makePagination';
import {writeAmountProducts, changeStorage} from './changeState';
import {openNav, writeBreadcrumbCategory} from './openNav';
import {openFilter, makeFilter} from './makeFilter';

function searchProduct(event: any) {
    let thisFind = elements.searchInput.value;
    for (let key in elements.information) {
        counters.choosenProduct = elements.information[key].products.find((product: any) => product.describe === thisFind);
        if (counters.choosenProduct) {
            break;
        }
    }
    
    if (counters.choosenProduct) {
        openPopUp(event);
    }
}

function chooseProduct(event: any) {
    let choosenProduct = event.target.innerHTML;
    let key  = null;
    for (key in elements.information) {
        if (choosenProduct === elements.information[key].title) {
            counters.kindCatalog = key;
            storage.products = elements.information[key].products;
        }
    }

    elements.information[counters.kindCatalog].feature.forEach((item: any) => {
        filters[item[0][1]] = [];
    });
    
    if (counters.changeAmount % 2 === 0) {
        makeCatalog(counters.kindCatalog, 0, counters.amountCardsMore);
        makePagination('mobileBatteries', counters.amountCardsMore)
    } else if (counters.changeAmount % 2 !== 0) {
        makeCatalog(counters.kindCatalog, 0, counters.amountCardsLess);
        makePagination('mobileBatteries', counters.amountCardsLess)
    } else {
        console.log('error in changeAmountCards()');
    }
    
    openNav(event);
    makeFilter();
    let btnFilters: any = document.querySelectorAll('.filter__btn');
    btnFilters.forEach((btn:any) => btn.addEventListener('click', openFilter));
    elements.navWrap.classList.toggle('v-hidden');
    elements.htmlContainer.classList.toggle('scroll-toggle');
    let filterPriceBtn = getElement('.filter__price_btn');
    filterPriceBtn.addEventListener('click', changeStorage);
    writeBreadcrumbCategory(counters.kindCatalog);
    writeAmountProducts();
}

export {searchProduct, chooseProduct};