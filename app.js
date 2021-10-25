//selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const filterOption=document.querySelector(".filter-todo")

//Event-Listener
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteTodo)
filterOption.addEventListener('click',filterTodo)

//functions
function addTodo(e) {
    event.preventDefault();
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    const newTodo = document.createElement("li")
    newTodo.classList.add("todo-item")
    newTodo.innerText=todoInput.value
    todoDiv.appendChild(newTodo)
    //checkMark button
    const completedButton = document.createElement("button")
    completedButton.classList.add("complete-button")
    completedButton.innerHTML = `<i class="fas fa-check-square"></i>`
    todoDiv.appendChild(completedButton)
    //trash Button
    const trashButton = document.createElement("button")
    trashButton.classList.add("trash-button")
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`
    todoDiv.appendChild(trashButton)
    todoList.appendChild(todoDiv)
    todoInput.value=" "
}

// deleteCheck
function deleteTodo(e) {
    const item  = e.target
    if(item.classList[0] === "trash-button"){
        const todo = item.parentElement;
        todo.classList.add("fall");
            todo.remove(); 
    }
    if(item.classList[0] === "complete-button"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
   todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed": 
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else{
                    todo.style.display="none"
                }
                break;
            case "uncompleted": 
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display="none"
                }
                break;
        }
    });
}
