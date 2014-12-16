function addToCartButton(name) {
    return $("<button>")
        .html("add to cart")
        .click(function () {
            addToCart(name);
        });
}

function addToCart(name) {
    if(isCartEmpty()){
    myCart.emptyCart();
    }
    if(!isItemExist(name,myCart)){
    Element cartRoot=myCart.getDocumentElement();
    Node cartNode=cartRoot.appendChild(clone)}
}

function goToCart() {

}
