//Selectors
//changed from const to let
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");


//Event Listeners
// console.log(todoButton, "button")
todoButton.addEventListener("click", addToDo)

//Functions
function addToDo(e){
  e.preventDefault()
  console.log("here")
  //todo div
  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add("todo");
}