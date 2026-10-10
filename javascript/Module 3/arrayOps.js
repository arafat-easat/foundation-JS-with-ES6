// foreach, map

// foreach

let fruits = ['apple', 'banana', 'orange', 'jackfruit'];

const user = [
    { name: 'Al Arafat', roll: '76', dept: 'cst' },
    { name: 'B', roll: '7', dept: 'cst' },
    { name: 'C', roll: '6', dept: 'cst' },
];

fruits.forEach((fruit, idx) => {
    console.log(`${idx + 1} -> ${fruit}`);
});

// map
let f = fruits.map((f) => f.toUpperCase());
console.log(f, '\n', fruits);

let userNames = user.map((userNames) =>userNames.name);
console.log(userNames)
