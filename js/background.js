const images=[
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
];

const chosenImage=images[Math.floor(Math.random()*images.length)];

// 기존의 방법과 다르게 js에서 이미지를 만들고 이를 html 에 추가 해야 한다.
// 즉 js에서 html을 생성한 것이다.
const bgImage=document.createElement("img");

bgImage.src=`img/${chosenImage}`; // 이건 html에 <img src="img/ .jpeg"/> 와 동일 !
bgImage.height;
//이제 body 에 image 추가

// 배경화면을 chosenImage로 설정
const body=document.querySelector("body");

body.style.backgroundImage = `url('img/${chosenImage}')`;
body.style.backgroundSize = 'cover'; // 배경 이미지를 화면에 맞게 조정
body.style.backgroundPosition = 'center'; // 배경 이미지의 위치를 중앙으로 설정
body.style.backgroundRepeat = 'no-repeat'; // 배경 이미지가 반복되지 않도록 설정
body.style.margin = '0'; // 기본 margin 제거
