console.log("라이브 서버 작동중")


function main(){
    console.log("함수 내부입니다.");
    console.log("함수 내부입니다.");
    console.log("함수 내부입니다.");
    console.log("");
}

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