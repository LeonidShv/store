import {elements, getElement} from './elements';
import {searchProduct, chooseProduct} from './searcProduct';

function openNav(event:any) {
    let className = event.target.className;
    event.preventDefault();

    if (className === 'header__btn m-r-24') {
        elements.navWrap.classList.toggle('v-hidden');
        elements.htmlContainer.classList.toggle('scroll-toggle');
    } else if (className === 'nav-wrap' || className === 'nav__item') {
        elements.navWrap.classList.toggle('v-hidden');
        elements.htmlContainer.classList.toggle('scroll-toggle');
    } else if (event.target.classList[1] === 'breadcrumb__catalog') {
        elements.navWrap.classList.toggle('v-hidden');
        elements.htmlContainer.classList.toggle('scroll-toggle');
    }
}

function makeNav() {
    let nav = getElement('.nav');
    let navList:any = null,
        navItem: any = null;
    let inavItemCounter = 0;

    for (let key in elements.information) {
        if (inavItemCounter % 10 === 0) { // when 1 == 0 and i 1 == 10
            navList = document.createElement('ul');
            navList.classList.add('nav__list');
        }

        navItem = document.createElement('li');
        navItem.classList.add('nav__item');
        navItem.innerHTML = `<button class="nav__btn">${elements.information[key].title}</button>`;
        navList.append(navItem);
        inavItemCounter++;
    }

    nav.append(navList);
    let navBtns = document.querySelectorAll('.nav__btn');
    navBtns.forEach((btn: any) => btn.addEventListener('click', chooseProduct));
}

function writeBreadcrumbCategory(kindCatalog: any) {
    elements.breadcrumbLink.innerHTML = `${elements.information[kindCatalog].title}`;
    elements.mainTitle.innerHTML = `${elements.information[kindCatalog].title}`;
}

export {openNav, makeNav, writeBreadcrumbCategory};