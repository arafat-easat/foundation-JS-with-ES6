let taskInput = document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let taskList = document.getElementById('taskList');


let tasks = [];
let taskIdcounter = 1;

function render() {
    taskList.innerHTML = "";  // old item delete

    tasks.forEach((task) => {
        let li = document.createElement('li');
        li.classList.add('task-item');

        let span = document.createElement('span');
        span.classList.add('task-text');
        span.textContent = task.text;
        span.textContent = `task:${task.text} completed:${task.completed}`

        let btnWrapper = document.createElement('div');
        btnWrapper.classList.add('task-button');

        let completeBtn = document.createElement('button');
        completeBtn.textContent = '✅';
        completeBtn.addEventListener('click', () => {
            completeTask(task.id);
        })


        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.addEventListener('click', () => {
            deleteTask(task.id);
        })

        btnWrapper.appendChild(completeBtn);
        btnWrapper.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(btnWrapper);

        taskList.appendChild(li);
    })
}

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText == "") {
        return;
    }

    let newTask = {
        id: taskIdcounter,
        text: taskText,
        completed: false,
    }

    tasks.push(newTask);
    taskInput.value = '';
    render();
}

addBtn.addEventListener('click', addTask);

function completeTask(id) {
    let task = tasks.find((task) => task.id == id);

    task.completed = !task.completed;

    render();
}

function deleteTask(id) {
    tasks = tasks.filter((task) => task.id != id);
    render();
}