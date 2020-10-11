import {elements, getElement} from './elements';
import {counters, storage} from './counters';
import {readProductName} from './readProductNames';
import addToCart from './addToCart';

function makePopup(product: any) {
    return `
            <div class="popup">
                <div class="popup__header">
                    <h1 class="popup__title">${product.describe}</h1>
                    <button class="cart__close">
                        <svg class="cart__close_icon" viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg"><path class="closeCart" d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"></path></svg>
                    </button>
                </div>
                <img src="${product.image}" alt="choosen product" class="popup__img">
                <p class="popup__info">${product.describe}</p>
                <p class="popup__info">${product.feature}</p>
                <p class="popup__info">${product.color}</p>
                <p class="popup__info">${product.country}</p>

                <div class="cart__footer">
                    <button class="cart__btn">Продолжить покупки</button>
                    <div class="cart__checkout d-flex">
                        <p class="cart__check-price1">${product.price} <span class="cart__price-grn">грн</span></p>
                        <button class="popup__btn cart__check-btn">Добавить в корзину</button>
                    </div>
                </div>
            </div>
    `;
}

function openPopUp(event: any) {
    let classList = event.target.classList;
    let lengthSearchProduct = Object.values(counters.choosenProduct).length;
    let btnPopUp = getElement('.popup__btn');
    if (lengthSearchProduct) {
        elements.popUp.classList.toggle('toggle-none');
        elements.htmlContainer.classList.toggle('scroll-toggle');
        elements.popUp.innerHTML = makePopup(counters.choosenProduct);
        return;
    }

    let productName = readProductName(this);
    let choosenProduct = storage.products.find((product: any) => product.describe === productName);

    if (classList[1] === 'cart__check-btn') {
        addToCart();
    }

    if (classList[0] === 'popup-wrap') {
        elements.popUp.classList.toggle('toggle-none');
        elements.htmlContainer.classList.toggle('scroll-toggle');
    } else if (classList[0] === 'cart__close_icon' || classList[0] === 'cart__close' || classList[0] === 'closeCart') {
        elements.popUp.classList.toggle('toggle-none');
        elements.htmlContainer.classList.toggle('scroll-toggle');
    } else if (classList[0] === 'cart__btn') {
        elements.popUp.classList.toggle('toggle-none');
        elements.htmlContainer.classList.toggle('scroll-toggle');
    }else if (classList[0] === 'popup__btn') {
        elements.popUp.classList.toggle('toggle-none');
        elements.htmlContainer.classList.toggle('scroll-toggle');
    } else if (classList[0] === 'products__card' || classList[0] === 'card__img') { 
        elements.popUp.classList.toggle('toggle-none');
        elements.htmlContainer.classList.toggle('scroll-toggle');
        elements.popUp.innerHTML = makePopup(lengthSearchProduct ? counters.choosenProduct : choosenProduct);
    }
}

export {makePopup, openPopUp};