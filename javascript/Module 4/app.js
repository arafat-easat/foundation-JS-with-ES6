
let taskInput = document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let taskList = document.getElementById('taskList');



// addBtn.addEventListener('click', function () {
// console.log('btn cliked')
// })


addBtn.addEventListener('click', () => {
    let li = document.createElement('li');
    // li.textContent = taskInput.value;
    // taskList.appendChild(li);
    let span = document.createElement('span');
    span.textContent = taskInput.value;

    let btnwrapper = document.createElement('span');

    let completeBtn = document.createElement('button');
    completeBtn.textContent = '✅'

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = '❌'

    btnwrapper.appendChild(completeBtn);
    btnwrapper.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(btnwrapper);
    taskList.appendChild(li);

    taskInput.value = ""
});


addBtn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log('task added', taskInput.value)
    }
});

// create element
// let li = document.createElement('li');
// li.textContent = 'Learn Js';
// console.log(li);
// taskList.appendChild(li)