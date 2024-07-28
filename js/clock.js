const clock=document.querySelector("h2#clock");

function getClock(){
   const date=new Date;
   const hours=String(date.getHours()).padStart(2,"0");
   const minutes=String(date.getMinutes()).padStart(2,"0");
   const seconds=String(date.getSeconds()).padStart(2,"0");
   clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock();
//매초마다 반복해야되므로 이 함수가 필요하다.
setInterval(getClock,1000); 
// 웹사이트가 열리자마자 시계가 나온다. 
// 인수 두개 (함수이름, ms)
 // 5초마다 실행 
// padStart 라는 함수가 있다. 이는 두개의 인수를 가질수 있는데
// padStart(2,"0") -> 2자리로 만들어주고 혹시 두 자리가 아니라면 앞에 0을 추가
// 반대로 padEnd() 는 문자 뒤에 추가한다.
// 둘다 string 에 적용 가능한 함수이다. 



