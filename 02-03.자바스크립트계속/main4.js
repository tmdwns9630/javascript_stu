console.log("라이브 서버 작동중4 오후 수업2")

// const call3tunes = (callback) =>{
//     for(let i =0; i<3; ++i){
//         //console.log(callback);

//         callback(i);
//     }
// }

// const myPrint = (idx) => console.log(`${idx}번째 함수 호출`);

// call3tunes(myPrint);
// //함수의 인자로 함수를 쓰면 인자의 함수 내용이 그대로 나온다.
// //인자의 콜백함수를 호출하는걸로 보자.

// //foreach와 map의 차이
// //foreach의 리턴값은 void, 없다는거고
// //map은 리턴값이 배열이다. 리턴값이 있다. 
// //map은 리턴 결과를 다시 배열로 만들어서 출력한다.
// const arr = [20,40,60,80,100];

// //arr.map()

// const sunmoonfn = (value, index, arr) => {
//     console.log(`value:${value} / index:${index} / arr:${arr}`);
//     return value*value
// };

// const sunmoonfn2 = (value) => {
//     console.log(`value:${value}`);
// };
// const forEachResult = arr.forEach(sunmoonfn2);

// const mapResult = arr.map(sunmoonfn);
// console.log(mapResult);

//-------------------------------

// //filter 알아보기
// //원하는 조건에 맞는 요소를 뽑아서 배열로 리턴.
// const arr = [1,2,3,4,5,6,7,8,9];

// const filterfn = (value, index, arr) =>{
//     console.log(`[${index}],${value}`);
//     if(value % 2 ==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// };

// const filterResult = arr.filter(filterfn);
// console.log(filterResult);
//-------
//이름 배열에서 이씨만 뽑아내기
const arr = ["강석원","박종훈","윤승준","이정순","이슬비","장효택","이진인","박주훈"];

const filterfn = (value, index, arr) =>{
    console.log(`[${index}],${value}`);
    
    // if(value[0] ==="이"){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return value[0] ==="이" ? true : false;
    //삼항연산자로 한 줄에 정리하기.
};
const filterResult = arr.filter(filterfn);
console.log(filterResult);
//-------------------------------
 //삼항연산자로 한 줄에 정리하기.
const filterfn2 = (value, index, arr) => value[0] ==="이" ? true : false;
console.log(`-----------------`);
const filterResult2 = arr.filter(filterfn2);
console.log(filterResult2);

//indexof를 사용하여 풀어보기

const filterfn3 = (value, index, arr) => value.indexOf('이') === 0 ? true : false;
console.log(`-----------------`);
const filterResult3 = arr.filter(filterfn3);
console.log(filterResult3);
//value 문자열에서 '이'가 처음 나타나는 위치를 0부터 세어서 리턴한다.
//그게 이름 첫글자인 0이면 true, 아니면 false.

//각종 라이브러리들.

//pop : 배열의 마지막 요소를 제거하고 그 요소를 반환
//push : 하나 이상의 인자를 배열 끝에 추가, 배열의 새로운 길이를 반환.
console.log(arr);
let watch = arr.pop();
console.log(watch);
console.log(arr);
let pushtest = arr.push("홍길동");
console.log(pushtest);
console.log(arr);

arr.push("고길동","김창식",123,["싯다르타","부처핸섬"]);
console.log(arr);

arr.reverse(arr);
console.log(arr);

//예외처리
//try에서 실행된 내용 중에 예외 조건에 해당되는게 나오면 catch로 가고
//예외가 있던 없던 finally를 실행함.

const val=100;
val = 150;
try{
    val=200
}catch(err){

}finally{
    console.log(`finally문 : ${val}`)
}
