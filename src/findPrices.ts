import {elements, getElement, getElements} from './elements';
import {counters} from './counters';
import {readProductNameCart} from './readProductNames';

function findCurrentPrice(choosenProduct: any) {
    let cartDescribes = getElements('.cart__info');
    let cartItemPrices: any = getElements('.cart__product-price');
    
    for (let i = 0; i < cartItemPrices.length; i++) {
        if (cartDescribes[i].textContent === choosenProduct.describe) {
            cartItemPrices[i].textContent = String(parseInt(cartItemPrices[i].previousElementSibling.children[1].value) * choosenProduct.price) + ' грн';
        }
    }
}

function findTotalPrice() {
    let cartItemPrices: any = getElements('.cart__product-price');
    let cartTotalPrice = getElement('.cart__check-price');
    cartTotalPrice.textContent = '0';
    for (let i = 0; i < cartItemPrices.length; i++) {
        cartTotalPrice.textContent = parseInt(cartTotalPrice.textContent) + parseInt(cartItemPrices[i].textContent) + ' грн';
    }
}

function findCartPrices(choosenProduct: any, equallyCount: any) {
    for (let i = 0; i < counters.cardElements.length; i++) {
        if (elements.cartAmount[i] && readProductNameCart(elements.cartAmount[i]) === choosenProduct.describe) {
            if (Number(elements.cartAmount[i].value) === Number(choosenProduct.amount)) {
                return -1;
            }

            if (elements.cartAmount[i] && elements.cartAmount[i].value < Number(choosenProduct.amount)) {
                elements.cartAmount[i].value = String(++elements.cartAmount[i].value);
                findCurrentPrice(choosenProduct);
                findTotalPrice();
                
                if (equallyCount) {
                    return -1;
                }
                break;
            }
        }
    }
}

export {findCurrentPrice, findTotalPrice, findCartPrices};