import {elements} from './elements';
import {counters, storage} from './counters';
import {checkChangeStore} from './checkState';
import makeCatalog from './makeCatalog';
import {makePagination} from './makePagination';

function changeAmountCards() {
    counters.changeAmount++;
    if (counters.changeAmount % 2 === 0) {
        makeCatalog(counters.kindCatalog, 0, counters.amountCardsMore);
        makePagination('mobileBatteries', counters.amountCardsMore);
    } else if (counters.changeAmount % 2 !== 0) {
        makeCatalog(counters.kindCatalog, 0, counters.amountCardsLess);
        makePagination('mobileBatteries', counters.amountCardsLess);
    } else {
        console.log('error in changeAmountCards()');
    }
}

function writeAmountProducts() {
    elements.amountProducts.innerHTML = storage.products.length;
}

function changeStorage(element: any) {
    storage.products = elements.information[counters.kindCatalog].products.filter((product: any, i: number) => {
        return checkChangeStore(product);
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

    writeAmountProducts();
}

export {changeAmountCards, writeAmountProducts, changeStorage};