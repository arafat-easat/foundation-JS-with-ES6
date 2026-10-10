let marks = [55, 32, 35, 87, 99, 25];


// linear search
// let max = marks[0];
// for (i = 1; i < marks.length; i++) {
//     if (max < marks[i]) {
//         max = marks[i];
//     }
// }
// console.log(max)

// let sum = 0;
// for (let mark of marks) {
//     sum += mark;
// }
// console.log(sum)
let reMarks = [];
for (let i = marks.length - 1; i >= 0; i--) {
    reMarks.push(marks[i]);
}
console.log(reMarks)