const weight = process.argv[2];
const height = process.argv[3];


function calculateBmi(weight, height) {
    const bmi = weight / (height * height);
    console.log(bmi);

    if (bmi < 18) {
        console.log('under weight')
    }

    else if (bmi >= 18 && bmi <= 24) {
        console.log('fit')
    }
    else {
        console.log('over weight')
    }
    return bmi;
}

calculateBmi(weight,height)


// if (bmi > 18) {
//     console.log(' perfect weight')
// }

// else if (bmi < 24) {
//     console.log('over weight')
// }
// else {
//     console.log('need improvment')
// }

// function calculateBmi(){
//     if (bmi > 18) {
//         console.log(' perfect weight')
//     }

//     else if (bmi < 24) {
//         console.log('over weight')
//     }
//     else {
//         console.log('need improvment')
//     }

// // } 