import {elements, getElements} from './elements';
import {counters, filters} from './counters';
import {changeStorage} from './changeState';

function makeFilterSubs(features: any) {
    let filterItems = document.createElement('div');
    filterItems.classList.add('filter__swap-item');

    for (let i = 1; i < features.length; i++) {
        let label = document.createElement('label');
        label.classList.add('filter__swap-label');
        label.innerHTML = `
            <input class="filter__swap-input" type="checkbox" value="${features[0][1]}" name="simple">
            <span>${features[i]}</span>
        `;

        if (features[0].length === 3 && features[0][2] === 'range') {
            label.innerHTML = `
                <input class="filter__swap-input" type="checkbox" value="${features[0][1]}" name="${features[0][2]}">
                <span>${features[i]}</span>
            `;
        }

        filterItems.append(label);
    }

    return filterItems;
}

function makeFilterBtn(features: any) {
    let filterBtn = document.createElement('button');
    filterBtn.classList.add('filter__btn');
    filterBtn.textContent = `${features[0][0]}`;

    return filterBtn;
}

function makeFilterCost() {
    let itemCost = document.createElement('li');
    itemCost.classList.add('filter__item');
    itemCost.innerHTML = `<button class="filter__btn">Цена</button>
    <div class="filter__swap-price">
        <input type="text" class="filter__price filter__price-first" value="1">
        &#160;&#8211;&#160;
        <input type="text" class="filter__price filter__price-second" value="50000">
        <button class="filter__price_btn">OK</button>
    </div>`;

    return itemCost;
}

function openFilter() {
    if (!this.nextElementSibling) return;
    this.nextElementSibling.classList.toggle('filter__swap-item-active');
}

function makeFilter() {
    let filterItem = null;
    elements.filter.innerHTML = '';
    elements.filter.append(makeFilterCost());
    let features = elements.information[counters.kindCatalog].feature;
    for (let i = 0; i < elements.information[counters.kindCatalog].feature.length; i++) {
        filterItem = document.createElement('li');
        filterItem.classList.add('filter__item');
        filterItem.append(makeFilterBtn(features[i]));
        elements.filter.append(filterItem);
        filterItem.append(makeFilterSubs(features[i]));
    }


    let filterSwapInputs = getElements('.filter__swap-input');
    filterSwapInputs.forEach((input) => input.addEventListener('click', filterCheck));

    filterItem = document.createElement('li');
    filterItem.className = 'filter__toggle-btn filter__toggle ';
    
    filterItem.innerHTML = `
    <button class="filter__btn">Фильтры</button>
    `;
    
    elements.filter.before(filterItem);
    
    if(filterItem.previousElementSibling) {
        filterItem.previousElementSibling.remove();
    }
    
    filterItem.onclick = toggleFilter;

    function toggleFilter() {
        elements.filter.classList.toggle('catalog__filter');
    }
}

function filterCheck() {
    let filterText = this.parentElement.children[1].textContent;
    if (this.name === 'range') { /*атрибут на инпутe mainFeature*/
        let arr = filterText.split(/\s-\s|\s/);
        if (this.checked) {
            filters[this.value].push([arr[0], arr[1]]);
        } else {
            filters[this.value] = filters[this.value].filter((item: any) => !(item[0] === arr[0] && item[1] === arr[1]));
        }
    } else if (this.name === "simple") {
        if(this.checked) {
            filters[this.value].push(filterText);
        } else {
            filters[this.value] = filters[this.value].filter((item: any) => !(item === filterText));
        }
    }
    
    changeStorage(this);
}

export {makeFilterSubs, makeFilterBtn, makeFilterCost, openFilter, makeFilter, filterCheck};