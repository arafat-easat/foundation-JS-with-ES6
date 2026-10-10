const student = {
    name: "Abir",
    age: 25,
    city: "Dhaka",
};


const { name, age, city } = student;

// console.log(name)

const student1 = {
    name: "Fahim",
    age: 25,
    city: "Dhaka",
    address: {
        devision: 'Dhaka',
        thana: 'Jatrabari',
    }
};
const {
    name: stdName,
    address: { devision, thana },
} = student1;

// console.log(devision,stdName,thana);

const arr = ['red', 'green', 'blue'];
const [, , third] = arr;

console.log(third);