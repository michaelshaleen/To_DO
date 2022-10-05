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
  //todo div
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");
  console.log("div added")



  const newToDo = document.createElement('li');
  newToDo.innerText = 'hey';
  newToDo.classList.add('todo-item')
  toDoDiv.appendChild(newToDo);




  // completed button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"> </i>'
  completedButton.classList.add("complete-btn");
  toDoDiv.appendChild(completedButton)
  //trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'
  trashButton.classList.add("trash-btn");
  toDoDiv.appendChild(trashButton)


  //append to list
  todoList.appendChild(toDoDiv)
}


