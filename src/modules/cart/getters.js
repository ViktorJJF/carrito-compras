export function totalCost(state) {
    let cart = state.cart;
    return cart.reduce((sum, product) => {
        let price = product.price.replace('$', '');
        let parsedPrice = parseFloat(price);
        let totalPrice = parsedPrice * product.qty + sum;
        return totalPrice;
    }, 0)
}