//Selectors
const todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//Event Listeners
// console.log(todoButton, "button")
todoButton.addEventListener("click", addToDo)

//Functions
function addToDo(e){
  e.preventDefault()
  console.log("here")
}