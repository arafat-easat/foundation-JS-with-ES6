function add(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
// console.log(add(1, 3, 5, 6, 22));


const user = {
    name: 'Abir',
    age: 25,
    city: 'dhaka',
    occapation: 'developer'
};
const { name, ...restDetails } = user;

// console.log(restDetails)

const arr = [1, 3, 4, 5, 6, 100];
const [, , , , ...rest] = arr;

console.log(rest)