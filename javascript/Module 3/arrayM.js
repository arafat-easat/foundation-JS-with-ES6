const products = [
    { name: 'phone', price: 24000, color: 'black' },
    { name: 'laptop', price: 80000, color: 'black' },
    { name: 'watch', price: 4000, color: 'black' },
];

let productList = products.sort((a, b) => b.price - a.price);
// console.log(productList)


let totalPrice = products.reduce((total, item) => total + item.price, 0);
console.log(totalPrice)