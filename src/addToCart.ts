import {elements, getElement, getElements} from './elements';
import {counters, storage} from './counters';
import {readProductName} from './readProductNames';
import {makeFooterInCart, makeCartHover, makeCartElements} from './makeCart';
import {findCurrentPrice, findTotalPrice, findCartPrices} from './findPrices';

let counter = 1;

function addToCart(event: any = '') {
    let equallyCount = 0;
    let popupTitle: any = '';
    if (event) {
        event.stopPropagation();
        counters.productName = readProductName(this);
    } else {
        popupTitle = getElement('.popup__title');
        counters.productName = popupTitle.textContent;
    }
    
    counters.cardElements.push(counters.productName);
    let choosenProduct = storage.products.find((product: any) => product.describe === counters.productName);
    elements.cartAmount = getElements('.cart__amount_input');
    
    for (let i = 0; i < elements.cartAmount.length; i++) {
        if (elements.cartAmount[i].value == choosenProduct.amount) {
            return;
        }
    }

    counters.itemsInCart++;

    for (let i = 0; i < counters.cardElements.length; i++) {
        equallyCount = 0;

        for (let j = 0; j < counters.cardElements.length; j++) {
            if (counters.cardElements[i] === counters.cardElements[j] && i !== j) { 
                counters.cardElements.splice(i, 1);
                equallyCount++;
            }
        }

        if (equallyCount) break;
    }
    
    if (findCartPrices(choosenProduct, equallyCount) === -1) {
        let totalPrice = getElement('.cart__check-price');
        let currentPrice: any;

        if (event) {
            currentPrice = this.parentElement.parentElement.children[1].children[1].textContent.split(' ');
        } else {
            currentPrice = '';
            counter++;

            if (counter === 5) {
                return;
            }
        }

        counters.currentPrice = currentPrice;
        counters.totalSum = parseInt(totalPrice.textContent);          
        findCurrentPrice(choosenProduct);
        findTotalPrice();
        makeCartHover();
        makeFooterInCart(); 
        return;
    }

    makeCartElements();
}

export default addToCart;