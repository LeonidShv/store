import {getElement} from './elements';
import {filters} from './counters';

function checkChangeStore(product: any) {
    let bool = false;
    let counter = 0;
    let checkCounter = 0;

    for (let key in filters) {
        if (filters[key].length > 0) {
            checkCounter++;
        }

        bool = filters[key].some((property: any, i: number) => {
            if (property.length === 2) {
                if (property[0] === 'Более') {
                    return product[key] >= parseInt(property[1]);
                } else if (property[0] === 'Менее') {
                    return product[key] <= parseInt(property[1]);
                } else {
                    return product[key] > parseInt(property[1]) && product[key] <= parseInt(property[0]);
                }
            } else {
                return property === product[key];
            }
        });

        if (bool) {
            counter++;
        }
    }

    return checkCounter === counter && checkPrice(product);
}

function checkPrice(product: any) {
    let inputPriceFirst = <HTMLInputElement>getElement('.filter__price-first');
    let inputPriceSecond = <HTMLInputElement>getElement('.filter__price-second');
    return product.price >= Number(inputPriceFirst.value) && product.price <= Number(inputPriceSecond.value);
}

export {checkChangeStore, checkPrice};