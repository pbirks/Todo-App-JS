const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', 
function(event) {
    event.preventDefault();
    const newTask = todoInput.value;

    if (newTask === '') {
        alert('Please enter a task!')
    }

    todoInput.value = '';

    addTask(newTask);
});

function addTask(task) {
    const listItem = document.createElement('li')
    listItem.textContent = task;

    todoList.appendChild(listItem);


}