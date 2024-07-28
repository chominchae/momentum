const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY="todos"; 

function deleteToDo(event){
    const li= event.target.parentElement;
    li.remove();
    toDos=toDos.filter(toDo=>toDo.id!==parseInt(li.id));
    saveToDos();
}

//로컬스토리지에 넣기
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

let toDos=[]; // 새로고침할 때마다 빈 배열로 바뀜

// event.target은 클릭된 HTML elemet 를 말한다.
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id=newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button=document.createElement("button");
  button.innerText="x";
  button.addEventListener("click",deleteToDo);
  //append는 마지막에 !
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj={
    text:newTodo,
    id:Date.now(),
  }

  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos= localStorage.getItem(TODOS_KEY);
function sayHello(item){
    console.log("this is turn of",item);
}

if(savedToDos){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos; //덮여씌어지는 것을 방지하기 위해 toDos 에 복사
    parsedToDos.forEach(paintToDo);
}

// 바로 삭제하는게 아니라 지우고 싶은 item 을 제외하고 새로 list 를 만들기
// filter 함수 ! 
// filter 함수의 return 값에 따라 요소 포함 여부가 결정된다.

