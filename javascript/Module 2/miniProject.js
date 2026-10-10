let students = [
    { id: 101, name: 'Raim', age: 22, department: 'cse' },
    { id: 102, name: 'Karim', age: 21, department: 'EEE' },
];

function addStudent(name, age, dept) {
    let newId = students.length > 0 ? students[students.length - 1].id + 1 : 101;
    let newStudent = {
        id: newId,
        name: name,
        age:age,
        department: dept,
    };

    students.push(newStudent);
    console.log('student added successfully');

}
addStudent('Easat',22,'cse');
console.log(students)