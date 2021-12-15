//selectors
const todoInput = document.querySelector(".todo-input")

const todoButton = document.querySelector(".todo-button")

const todoList = document.querySelector(".todo-list")

todoButton.addEventListener('click',addTodo)

function addTodo(event){
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // todo li
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //btns
        //complete
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
        //delete
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "<i class='fas fa-trash'></i>";
    completedButton.classList.add("deleted-btn");
    todoDiv.appendChild(completedButton);
    //append to list
    todoList.appendChild(todoDiv)
}