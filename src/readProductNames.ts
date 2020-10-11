function readProductName(node: any) {
    if (node.childNodes.length === 19) {
        for (let i = 0; i < 19; i++) {
            if (node.children[i]) {
                if (node.children[i].classList.value === 'card__info') {
                    return node.children[i].innerHTML;
                }
            }
        }
    }

    for (let i = 0; i < node.parentNode.childNodes.length; i++) {
        if (node.parentNode.children[i]) {
            if (node.parentNode.children[i].classList.value === 'card__info') {
                return node.parentNode.children[i].innerHTML;
            }
        }
    }
}

function readProductNameCart(node: any) {
    for (let i = 0; i < node.parentNode.parentNode.parentNode.children.length; i++) {
        if (node.parentNode.parentNode.parentNode.children[i].children[1].children[0]) {
            if (node.parentNode.parentNode.parentNode.children[i].children[1].children[0].classList.value === 'cart__info') {
                return node.parentNode.parentNode.parentNode.children[i].children[1].children[0].innerHTML;
            }
        }
    }
}

export {readProductName, readProductNameCart};