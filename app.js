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

    allTodos.appendChild(todoDiv);
    totalItems++

    document.getElementById('left-length').innerText = `${totalItems} items left`;
}


window.addEventListener('keyup', function(e){
    const newTodoText = document.getElementById('newTodoText').value;

    key = "Enter";
    if(e.key == key){
        if(newTodoText != ""){
            createNewTodo(newTodoText)
        }  
    }

})

// Task done Add Active
window.addEventListener('click', function(e) {

    if(e.target.classList == "todoDone"){
        e.target.parentElement.classList.add('active');
        console.log(e.target.parentElement.classList)

        if(e.target.parentElement.classList.contains('active')){
            e.target.parentElement.classList.remove('active');
        }
    }

   

    
})

