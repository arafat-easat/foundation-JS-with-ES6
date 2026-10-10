let taskInput = document.getElementById('taskInput'); // ইনপুট বক্স যেখানে ইউজার লিখবেন
let addBtn = document.getElementById('addBtn');       // অ্যাড করার বাটন
let taskList = document.getElementById('taskList');   // যেখানে টাস্কের তালিকা (ul/ol) দেখা যাবে

let tasks = [];         // আসল ডেটা রাখার খালি অ্যারে। সব টাস্ক এখানে অবজেক্ট আকারে জমা হবে
let taskIdcounter = 1;  // প্রতিটি টাস্কের জন্য একটি ইউনিক আইডি (ID) নম্বর


function render() {
    taskList.innerHTML = "";  // নতুন করে দেখানোর আগে স্ক্রিনের পুরোনো তালিকা সম্পূর্ণ মুছে পরিষ্কার করা হয়

    // আপনার শেখা ES6 অ্যারে মেথড forEach দিয়ে প্রতিটি টাস্কের ওপর লুপ চালানো হচ্ছে
    tasks.forEach((task) => {
        let li = document.createElement('li'); // একটি <li> ট্যাগ তৈরি হলো
        li.classList.add('task-item');

        let span = document.createElement('span'); // টেক্সট রাখার জন্য <span> তৈরি হলো
        span.classList.add('task-text');
        span.textContent = task.text; // স্প্যানের ভেতর টাস্কের লেখাটি বসানো হলো

        let btnWrapper = document.createElement('div'); // বাটনগুলো রাখার জন্য একটি <div> তৈরি হলো
        btnWrapper.classList.add('task-button');

        let completeBtn = document.createElement('button'); // টিক চিহ্নের বাটন
        completeBtn.textContent = '✅';

        let deleteBtn = document.createElement('button');   // ক্রস চিহ্নের বাটন
        deleteBtn.textContent = '❌';

        // একের ভেতর আরেকটিকে ঢুকিয়ে (Append) সম্পূর্ণ HTML স্ট্রাকচার তৈরি করা হচ্ছে:
        btnWrapper.appendChild(completeBtn); // ডাইভের ভেতর টিক বাটন
        btnWrapper.appendChild(deleteBtn);   // ডাইভের ভেতর ক্রস বাটন

        li.appendChild(span);       // li এর ভেতর টেক্সট স্প্যান
        li.appendChild(btnWrapper); // li এর ভেতর বাটনের ডাইভ

        taskList.appendChild(li); // সবশেষে তৈরি হওয়া সম্পূর্ণ <li> টিকে আসল HTML তালিকার (taskList) ভেতর ঢুকিয়ে দেওয়া হলো
    })
}


function addTask() {
    let taskText = taskInput.value.trim(); // ইনপুট বক্সের লেখাটি নিল এবং trim() দিয়ে দুই পাশের বাড়তি স্পেস কেটে দিল

    if (taskText == "") { // ইউজার যদি কিছু না লিখে খালি বক্স রেখে অ্যাড করতে চায়, তবে ফাংশনটি এখানেই থেমে যাবে (return)
        return;
    }

    // একটি নতুন অবজেক্ট তৈরি করা হলো (এটি একটি অবজেক্ট লিটারেল)
    let newTask = {
        id: taskIdcounter,  // আইডি বসানো হলো (যেমন: ১)
        text: taskText,     // ইউজারের লেখা টেক্সট
        completed: false,   // নতুন টাস্ক তাই ডিফল্টভাবে এটি সম্পন্ন বা completed নয় (false)
    }

    tasks.push(newTask);   // নতুন টাস্ক অবজেক্টটি আমাদের 'tasks' অ্যারেতে যোগ করা হলো
    taskInput.value = '';  // কাজ শেষে ইনপুট বক্সটি খালি করে দেওয়া হলো
    render();              // স্ক্রিনে নতুন তালিকা দেখানোর জন্য render ফাংশনকে ডাকা হলো
}


addBtn.addEventListener('click', addTask);
