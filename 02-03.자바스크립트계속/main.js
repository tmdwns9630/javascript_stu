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