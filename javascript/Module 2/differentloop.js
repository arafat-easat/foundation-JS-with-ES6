//  for of loop diye array member pabo
// for in obj er member pabo


// let name = ['Al','Arafat','Easat'];
// for(let n of name){
//     console.log(n)
// }

// let infomation = {
//     name: 'Al Arafat',
//     age: 22,
//     address: 'Dhaka'
// }
// for (let info in infomation) {
//     console.log(info, '-', infomation[info]);
// }

let marks = 50;
for (let i = marks; i < 100; i++) {
    if (i > 70) {
        break;
    }

    console.log(i)
}