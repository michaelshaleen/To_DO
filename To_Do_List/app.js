//Selectors
//changed from const to let
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let filterOption = document.querySelector(".filter-todo")

//Event Listeners
// console.log(todoButton, "button")
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterToDo);
//Functions
function addToDo(e){
  e.preventDefault()
  //todo div
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");
  console.log("div added")



  const newToDo = document.createElement('li');
  newToDo.innerText = todoInput.value;
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

  clearInput();
}


function clearInput(){
  todoInput.value = "";
}
function deleteCheck(e){
  const item = e.target;

  if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    //animation

    todo.classList.add("fall")
    todo.addEventListener('transistioned', function(){
      todo.remove();
    });
  }

  if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterToDo(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value){
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList.contains("completed")) {
          todo.style.display = 'flex';
        }else{
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if(!todo.classList.contains("completed")){
          todo.style.display = 'flex';
        }else{
          todo.style.display = "none";
        }
        break;
    }
  });

}