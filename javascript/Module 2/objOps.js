let student = {
    name: 'Arafat',
    age: 22,
    id: 76,
    marks: {
        Engish: 77,
        Bangla: 89,
        Math: 78
    }
};


let totalMarks = 0;
let totalSbjct = 0;

for (let sbbjct in student.marks) {
    totalMarks += student.marks[sbbjct];
    totalSbjct++;
}
let avg = (totalMarks / totalSbjct).toFixed(2);
if (avg > 80) {
    console.log('pass with distinction.got', avg, '%')
}
else {
    console.log('Fail!')
}


