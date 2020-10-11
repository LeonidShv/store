import {elements} from './elements';

interface Counters {
    changeAmount: number;
    amountCardsLess: number;
    amountCardsMore: number;
    openFilter: number;
    productName: string;
    cardCarts: any;
    delProducts: any;
    totalSum: number;
    itemsInCart: number;
    cardElements: string[];
    amountCards: number;
    kindCatalog: string;
    choosenProduct: object;
    cartAmountProducts: number;
    currentPrice: any;
}

let counters:Counters = {
    changeAmount: 1,
    amountCardsLess: 6,
    amountCardsMore: 16,
    openFilter: 0,
    productName: '',
    cardCarts: '',
    delProducts: '',
    totalSum: 0,
    itemsInCart: 0,
    cardElements: [],
    amountCards: 6,
    kindCatalog: 'mobileBatteries',
    choosenProduct: {},
    cartAmountProducts: 1,
    currentPrice: 0
}

let storage = {
    products: elements.information[counters.kindCatalog].products
};

interface Filters {
    [n: string]: any
};

let filters: Filters = {};

elements.information[counters.kindCatalog].feature.forEach((item: any) => {
    filters[item[0][1]] = [];
});

export {counters, storage, filters};