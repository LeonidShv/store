import {elements, getElement, getElements} from './elements';
import {counters, storage} from './counters';
import {readProductNameCart} from './readProductNames';
import makeCatalog from './makeCatalog';

function buyProducts() {
    elements.cartAmount = getElements('.cart__amount_input');
    let productName = '';
    let choosenProduct: any = {};

    for (let i = 0; i < elements.cartAmount.length; i++) {
        productName = readProductNameCart(elements.cartAmount[i]);
        choosenProduct = storage.products.find((product: any) => product.describe === productName);
        choosenProduct.amount -= parseInt(elements.cartAmount[i].value);
        console.log(choosenProduct);
    }

    makeCatalog(counters.kindCatalog, 0, counters.amountCardsMore);
    let cartTotalPrice = getElement('.cart__check-price');
    counters.totalSum = 0;
    cartTotalPrice.innerHTML = '0 грн';
    let productsInCart: any = getElements('.cart__product');

    for (let i = 0; i < productsInCart.length; i++) {
        productsInCart[i].remove();
    }

    counters.itemsInCart = 0;
}

export default buyProducts;