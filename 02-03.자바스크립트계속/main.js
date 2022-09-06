console.log("라이브 서버 작동중")

function main(){
    console.log("함수 내부입니다.");
    console.log("함수 내부입니다.");
    console.log("함수 내부입니다.");
    console.log("");
}

main();
main();

console.log(typeof main);
// 자료형은 function으로 출력된다.
console.log(console.log);
//콘솔.로그 자체를 보면 자료형은 네이티브로 나온다. 

console.log(typeof 1234);
console.log(typeof 12.34);
// 자료형은 Number(으)로 출력된다. 소수도 마찬가지.

console.log(typeof "1234");
// 자료형은  문자열(으)로  출력된다.

console.log(typeof [1,2,3,4]);
// 자료형은  Object(으)로  출력된다.

const obj = { a:1, b:2, c:3};
console.log(typeof obj);
// 자료형은  Object(으)로  출력된다.
// 이게 뭔지는 나중에 알아본다.

//변수를 선언하여 함수를 선언할 수 있다.
let main2 = function(){
    console.log("두번째 함수 입니다");
}

//자바스크립트에서 변수를 선언하는 방법은 3가지
//const 상수, let 변경가능한 변수, var 변경가능하지만 예전에 쓰던 변수

main2();

//let으로 함수가 선언되었으므로 함수를 재정의할 수 있다.
main2 = function name(params) {
    console.log("재정의된 함수 입니다");
}
//선두에서 정의된 함수가 후반에서 재정의되어 치명적인 오류가 생길 가능성이 높다.
//그러므로 함수는 대부분 값 변경이 불가한 const로 정의한다.ㄴ