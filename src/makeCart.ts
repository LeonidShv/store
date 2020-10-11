import {elements, getElement, getElements} from './elements';
import {counters, storage} from './counters';
import {findCurrentPrice, findTotalPrice} from './findPrices';
import {readProductNameCart} from './readProductNames';
import buyProducts from './buyProducts';

function makeCardInCart(productName: any) {
    let cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    let listProducts = elements.information[counters.kindCatalog].products;

    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].describe === productName) {
            counters.totalSum += +listProducts[i].price;
            cartProduct.innerHTML = `
                <div class="d-flex">
                    <img src="${listProducts[i].image}" alt="" class="cart__img">
                    <div class="cart__info-block">
                        <p class="cart__info">${listProducts[i].describe}</p>
                        <p class="cart__info_grey">Awesome</p>
                    </div>
                    <button class="cart__del">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469s-132.667969 26.628906-181.019531 74.980469c-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531 0 68.382812 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.636719 74.980469-181.019531 0-68.378906-26.628906-132.667969-74.980469-181.019531zm-70.292969 256.386719c9.761719 9.765624 9.761719 25.59375 0 35.355468-4.882812 4.882813-11.28125 7.324219-17.679687 7.324219s-12.796875-2.441406-17.679687-7.324219l-75.367188-75.367187-75.367188 75.371093c-4.882812 4.878907-11.28125 7.320313-17.679687 7.320313s-12.796875-2.441406-17.679687-7.320313c-9.761719-9.765624-9.761719-25.59375 0-35.355468l75.371093-75.371094-75.371093-75.367188c-9.761719-9.765624-9.761719-25.59375 0-35.355468 9.765624-9.765625 25.59375-9.765625 35.355468 0l75.371094 75.367187 75.367188-75.367187c9.765624-9.761719 25.59375-9.765625 35.355468 0 9.765625 9.761718 9.765625 25.589844 0 35.355468l-75.367187 75.367188zm0 0"/></svg>
                    </button>
                </div>

                <div class="d-flex">
                    <div class="cart__amount d-flex">
                        <button class="cart__amount_change">-</button>
                        <input type="text" class="cart__amount_input" value="1" readonly>
                        <button class="cart__amount_change">+</button>
                    </div>    
                    <p class="cart__product-price">${listProducts[i].price} <span class="cart__price-grn">грн</span></p>
                </div>
            `;

            elements.cart.append(cartProduct);
            break;
        }
    }
}

function makeFooterInCart() {
    let cartFooterOld = getElements('.cart__footer');
    cartFooterOld.forEach((footer: any) => footer.remove());
    let cartFooter = document.createElement('div');
    cartFooter.classList.add('cart__footer');
    counters.totalSum = counters.totalSum ? counters.totalSum : 0;
    cartFooter.innerHTML = `
        <button class="cart__btn">Продолжить покупки</button>
        <div class="cart__checkout d-flex">
            <p class="cart__check-price">${counters.totalSum} <span class="cart__price-grn">грн</span></p>
            <button class="cart__check-btn">Купить</button>
        </div>
    `;

    elements.cart.append(cartFooter);
}

function dellFromCart() {
    let amountProducts = this.parentElement.nextElementSibling.children[0].children[1].value;
    let hoverCartPrices = getElements('.header__hover-text_grey');
    let hoverCartAmount = getElements('.header__hover-text')
    let amountElements = this.parentElement.parentElement.parentElement.children.length;
    let currentPrice = this.parentElement.parentElement.children[1].children[1].textContent.split(' ');
    counters.totalSum -= Number(currentPrice[0]);
    counters.totalSum = counters.totalSum ? counters.totalSum : 0;
    let textOfDeleted = this.parentElement.parentElement.children[0].children[1].children[0].innerHTML;

    for (let i = 0; i < counters.cardElements.length; i++) {
        if (counters.cardElements[i] === textOfDeleted) {
            counters.cardElements.splice(i, 1);
        }
    }

    this.parentElement.parentElement.remove();
    makeFooterInCart();

    if (amountElements === 4) {
        elements.cartEmpty.classList.toggle('cart__empty-toggle');
    }

    counters.itemsInCart -= Number(amountProducts);        
    hoverCartPrices[1].innerHTML = `На сумму ${counters.totalSum} грн`;
    hoverCartAmount[1].innerHTML = `В корзине ${counters.itemsInCart} товар`;

    if (!counters.itemsInCart) {
        elements.cartHoverEmpty.classList.remove('toggle-none');
        elements.cartHoverFull.classList.add('toggle-none');
    }
}

function makeCartHover(amount: any = -1) {
    let hoverCartPrices = getElements('.header__hover-text_grey');
    let hoverCartAmount = getElements('.header__hover-text');
    elements.cartHoverEmpty.classList.add('toggle-none');
    elements.cartHoverFull.classList.remove('toggle-none');
    counters.totalSum = counters.totalSum ? counters.totalSum : 0;
    hoverCartPrices[1].innerHTML = `На сумму ${counters.totalSum} грн`;
    hoverCartAmount[1].innerHTML = `В корзине ${counters.itemsInCart} товар`;
}

let cartSigns: any;

function makeCartElements() {
    makeCardInCart(counters.productName);
    elements.cartEmpty.classList.add('cart__empty-toggle');
    makeFooterInCart();        
    makeCartHover();
    counters.delProducts = getElements('.cart__del');
    counters.delProducts.forEach((btn:any) => btn.addEventListener('click', dellFromCart));
    cartSigns = getElements('.cart__amount_change');
    cartSigns.forEach((sign: any) => sign.addEventListener('click', changeCartAmount));
}

function changeCartAmount(event: any) {
    let totalPrice = getElement('.cart__check-price');
    counters.totalSum = parseInt(totalPrice.textContent);
    let productName = readProductNameCart(this);
    let choosenProduct = storage.products.find((product: any) => product.describe === productName);

    if (event.target.textContent === '+' && Number(event.target.previousElementSibling.value) < Number(choosenProduct.amount)) {
        event.target.previousElementSibling.value++;
        counters.cartAmountProducts++;
        counters.totalSum += Number(choosenProduct.price);
        counters.itemsInCart++;
    } else if (event.target.textContent === '-' && Number(event.target.nextElementSibling.value) > 1) {
        event.target.nextElementSibling.value--;
        counters.cartAmountProducts--;
        counters.totalSum -= Number(choosenProduct.price);
        counters.itemsInCart--;
    }     

    findCurrentPrice(choosenProduct);
    findTotalPrice();
    makeCartHover();
}

function openCart(event:any) {
    let classList = event.target.classList;

    if (classList[0] === 'header__btn-select' || classList[1] === 'header__icon_cart') {
        elements.cartWrap.classList.toggle('v-hidden');
        elements.htmlContainer.classList.toggle('scroll-toggle');
    } else if (event.target.className === 'cart-wrap') {
        elements.cartWrap.classList.toggle('v-hidden');
        elements.htmlContainer.classList.toggle('scroll-toggle');
    } else if (classList[0] === 'cart__close_icon' || classList[0] === 'cart__close' || classList[0] === 'closeCart') {
        elements.cartWrap.classList.toggle('v-hidden');
        elements.htmlContainer.classList.toggle('scroll-toggle');
    } else if (classList[0] === 'cart__btn') {
        elements.cartWrap.classList.toggle('v-hidden');
        elements.htmlContainer.classList.toggle('scroll-toggle');
    } else if (classList[0] === 'cart__check-btn') {
        buyProducts();

        if (!counters.itemsInCart) {
            elements.cartHoverEmpty.classList.toggle('toggle-none');
            elements.cartHoverFull.classList.toggle('toggle-none');
            elements.cartEmpty.classList.remove('cart__empty-toggle');
        } else {
            elements.cartEmpty.classList.toggle('cart__empty-toggle');
        }

        elements.cartWrap.classList.toggle('v-hidden');
        elements.htmlContainer.classList.toggle('scroll-toggle');
    }
}

export {makeCardInCart, makeFooterInCart, dellFromCart, makeCartHover, makeCartElements, openCart};