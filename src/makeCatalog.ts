import {getElement} from './elements';
import {counters, storage} from './counters';
import {openPopUp} from './makePopup';
import addToCart from './addToCart';

function makeCatalog(category='mobileBatteries', start = 0, end = 6) {
    let catalog: any = getElement('.catalog__products');
    catalog.innerHTML = '';
    let productInfo = storage.products;
    let emptyCatalog: any = getElement('.catalog__products_empty');
    let product, noticeStyle;

    if (productInfo.length === 0) {
        emptyCatalog.style.display = 'block';
        catalog.style.border = 'none';
    } else {
        emptyCatalog.style.display = 'none';
        catalog.style.borderTop = '1px solid #d2d2d2';
        catalog.style.borderLeft = '1px solid #d2d2d2';
    }

    for (let i = start; i < end; i++) {
        product = document.createElement('div');
        product.className = 'products__card card';

        if (productInfo[i] && productInfo[i].amount === 0) {
            product.className += ' disable';
        }

        if (!productInfo[i]) {
            break;
        }

        if (productInfo[i].notice === 'Топ продаж') {
            noticeStyle = 'card__notice_o'
        } else if (productInfo[i].notice === 'Акция' || productInfo[i].notice === '-25%') {
            noticeStyle = 'card__notice_r'
        } else {
            noticeStyle = '';
        }

        product.innerHTML = `
        <p class="card__notice ${noticeStyle}">${productInfo[i].notice}</p>
        <img src="${productInfo[i].image}" alt="product image" class="card__img">
        <button class="card__like">
            <img class="card__like-img" src="assets/icons/heartO.svg" alt="image, product likes">
        </button>
        <p class="card__info">${productInfo[i].describe}</p>
        <div class="rating">
            <div class="rating__stars"></div>
            <p class="rating__feedback"></p>
        </div>
        <p class="card__price_crosse">${productInfo[i].priceCrossed}</p>
        <p class="card__price">${productInfo[i].price}</p>
        <p class="card__state ${productInfo[i].state === 'Заканчивается' ? 'card__state_r' : 'card__state_g'}">${productInfo[i].state}</p>
        <button class="card__cart">
            <img src="assets/icons/cartO.svg" alt="cart icon, adding product to cart" class="card__cart_img">
        </button>
        `;

        catalog.append(product);
    }

    let cards:any = document.querySelectorAll('.card'); 
    let cardImgs:any = document.querySelectorAll('.card__img');  
    
    
    if (counters.changeAmount % 2 === 0) {
        cards.forEach((item: any) => item.classList.add('card-toggle'));
        cardImgs.forEach((item: any) => item.classList.add('card__img-toggle'));
    }

    counters.cardCarts = document.querySelectorAll('.card__cart');
    counters.cardCarts.forEach((btn:any) => btn.addEventListener('click', addToCart));
    cards = document.querySelectorAll('.products__card'); 
    cards.forEach((product:any) => product.addEventListener('click', openPopUp));
}

export default makeCatalog;