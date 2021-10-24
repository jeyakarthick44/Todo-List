//selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

//Event Listner
todoButton.addEventListener('click',addTodo)

//functions
function addTodo(Event) {
    console.log("working")
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