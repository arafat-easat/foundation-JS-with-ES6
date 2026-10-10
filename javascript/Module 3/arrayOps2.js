// find
const user = [
    { name: 'Al Arafat', roll: '76', dept: 'cst' },
    { name: 'B', roll: '7', dept: 'cst' },
    { name: 'C', roll: '6', dept: 'cst' },
];

let fruits = ['apple', 'banana', 'orange', 'jackfruit'];

let f = fruits.find((f) => f.length > 6);
console.log(f)