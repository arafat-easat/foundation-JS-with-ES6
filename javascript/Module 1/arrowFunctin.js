// function payAmount(perPrice, quantity = 3) {
//     const total = perPrice * quantity;
//     return total;
// }

// const myAmount = payAmount(400);
// console.log(myAmount)


const payAmount = (perPrice, quantity) => {
    const total = perPrice * quantity;
    return total;
}
const payableAmount = payAmount(200, 3);
console.log(payableAmount)


const add = (a, b) => a + b;
const sum = add(12, 3);
console.log(sum)


function addition(a, b) {
    const sum = a + b;
    return sum;
}
const myAdd = addition(12, 3);
console.log(myAdd)