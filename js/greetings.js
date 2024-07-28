const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting= document.querySelector("#greeting");

const HIDDEN_CLASS="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
    event.preventDefault();//기본동작 실행 x
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASS);
    greeting.innerText= `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}


loginForm.addEventListener("submit",onLoginSubmit);

const savedUsername=localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText= "Hello "+username;
}

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
   paintGreetings(savedUsername);
}

// 브라우저가 submit 할 때 기본 동작을 막는다.
// hidden 클래스를 추가한다.
// loginInput 값을 변수에 저장 
