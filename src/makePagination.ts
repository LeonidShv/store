import {getElement} from './elements';
import {counters, storage} from './counters';
import makeCatalog from './makeCatalog';

function makePagination(category='mobileBatteries', amountCards = 6) {
    let pagination = getElement('.pagination__nav');
    let paginationLeft = getElement('.pagination__left');
    let paginationRight = getElement('.pagination__right');
    let productInfo = storage.products; 
    let lengthPagination = Math.ceil(productInfo.length / amountCards);
    let btn;
    pagination.innerHTML = '';

    for (let i = 1; i <= lengthPagination; i++) {
        btn = document.createElement('li');
        btn.className = 'pagination__item';
        btn.innerHTML = `<button class="pagination__btn">${i}</button>`;
        pagination.append(btn);
    }
    
    let paginationBtns:any = document.querySelectorAll('.pagination__btn');

    for (let i = 0; i < paginationBtns.length; i++) {
        paginationBtns[i].addEventListener('click', doPagination);
    }
    if (paginationBtns.length) {
        paginationBtns[0].style.borderColor = 'rgb(0, 160, 70)';
    }
    
    paginationLeft.addEventListener('click', choosePrev);
    paginationRight.addEventListener('click', chooseNext);
}

function choosePrev() {
    let paginationBtns:any = document.querySelectorAll('.pagination__btn');
    let {amountCardsLess, amountCardsMore} = counters;
    let amount:number = counters.changeAmount % 2 === 0 ? amountCardsMore : amountCardsLess;
    let start = 0;
    let end = 6;

    for (let i = 0; i < paginationBtns.length; i++) {
        if (paginationBtns[i].style.borderColor === 'rgb(0, 160, 70)' && i == 0) {
            return;
        }
        
        if (paginationBtns[i].style.borderColor === 'rgb(0, 160, 70)' && i > 0) {
            paginationBtns[i - 1].style.borderColor = 'rgb(0, 160, 70)';
            paginationBtns[i].style.borderColor = '#e9e9e9';
            start = (paginationBtns[i - 1].innerHTML) * amount - amount;
            end = (paginationBtns[i - 1].innerHTML) * amount;
            break;
        }
    }

    makeCatalog(counters.kindCatalog, start, end);
}

function chooseNext() {
    let paginationBtns:any = document.querySelectorAll('.pagination__btn');
    let {amountCardsLess, amountCardsMore} = counters;      
    let amount:number = counters.changeAmount % 2 === 0 ? amountCardsMore : amountCardsLess;
    
    let start = paginationBtns.length * amount - amount; // 6 or 16
    let end = paginationBtns.length * amount;

    for (let i = 0; i < paginationBtns.length - 1; i++) {
        if (paginationBtns[i].style.borderColor === 'rgb(0, 160, 70)') {
            paginationBtns[i+1].style.borderColor = 'rgb(0, 160, 70)';
            paginationBtns[i].style.borderColor = '#e9e9e9';

            if (paginationBtns[i].style.borderColor === 'rgb(0, 160, 70)' && i == paginationBtns.length - 2) {
                makeCatalog(counters.kindCatalog, start, end);
                return;
            }

            start = (paginationBtns[i+1].innerHTML) * amount - amount;
            end = (paginationBtns[i+1].innerHTML) * amount;
            break;
        }
    }
    
    makeCatalog(counters.kindCatalog, start, end);
}

function doPagination(event:any) {
    let paginationBtns:any = document.querySelectorAll('.pagination__btn');
    let {amountCardsLess, amountCardsMore} = counters;
    counters.amountCards = counters.changeAmount % 2 === 0 ? amountCardsMore : amountCardsLess;

    for (let i = 0; i < paginationBtns.length; i++) {
        paginationBtns[i].style.borderColor = '#e9e9e9';
    }

    let start = event.target.innerHTML * counters.amountCards - counters.amountCards;
    let end = event.target.innerHTML * counters.amountCards;
    makeCatalog(counters.kindCatalog, start, end);
    event.target.style.borderColor = '#00a046';
}

export {doPagination, chooseNext, choosePrev, makePagination};