// Adding a new task
let totalItems = 0;
let doneItems = 0;


function createNewTodo(text) {
    let allTodos = document.getElementById('allTodos');
    
    const todoDiv = document.createElement('div');
    todoDiv.className = "todo-item";

    const todoDoneSpan = document.createElement('span');
    todoDoneSpan.className = "todoDone";
    todoDiv.appendChild(todoDoneSpan);

    const todoText = document.createElement('p');
    todoText.innerText = text;
    todoDiv.appendChild(todoText);

    const deleteItem = document.createElement('span');
    deleteItem.className = "deleteItem";
    todoDiv.appendChild(deleteItem)

    allTodos.appendChild(todoDiv);
    totalItems++

    document.getElementById('left-length').innerText = document.getElementsByClassName('todo-item').length + " items left";

    document.getElementById('newTodoText').value = "";
}


window.addEventListener('keyup', function(e){
    let newTodoText = document.getElementById('newTodoText').value;

    key = "Enter";
    if(e.key == key){
        if(newTodoText != ""){
            createNewTodo(newTodoText);
        }  
    }

})

//Remove items from the

window.addEventListener('click', function(e){
    if(e.target.classList == "deleteItem"){
        e.target.parentElement.remove();
        document.getElementById('left-length').innerText = document.getElementsByClassName('todo-item').length + " items left";
    }
})

// Task done Add Active
window.addEventListener('click', function(e) {

    if(e.target.classList == "todoDone"){
        e.target.parentElement.classList.add('completed');
        e.target.classList.add('completed')
    }
})

// Task done remove active element

window.addEventListener('mousedown', function(e) {  
    let todoItem = document.getElementsByClassName('completed');
    let todoItemDone = document.getElementsByClassName('todoDone');
    console.log(e.target)
    if(e.target.classList == "todoDone completed")
    if(todoItem.length != 0){
        e.target.parentElement.classList.remove('completed');
        e.target.classList.remove('completed');
    }
})

