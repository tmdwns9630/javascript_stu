console.log("라이브 서버 작동중5 오후 수업3")
console.log("오늘의 마지막은 reduce, 누적 연산 기능.")

const inputArr = [ 2,4,6,8,10];

////먼저 주어진 배열을 전부 더하는 함수를 만들어보자
// let output = 0;
// const sum = (arr) => {
//     for(let temp of arr){
//         output += temp;
//     }
//     return output;
// };

// const result = sum(inputArr);


//console.log(`배열의 합은 ${result}입니다.`);


const reducefn = (acc, cur, idx, src) =>{
    console.log(`acc:${acc} / cur:${acc} / idx:${idx} / src:${src}`);
    //return acc;
    return acc+cur;

}
//acc : 콜백 함수의 반환값을 누적한다, 계속 쌓는다.
//acc를 리턴하고
//다음 콜백에 이전 리턴값이 계속 들어간다.
//윗 글의 output=0이 acc로 보면 된다.

//모든 콜백을 마치고 마지막에 최종 누적값을 리턴한다.
//for문보다 좋은 이유는 배열의 차원수가 높아지면 for문보다 편하게 처리 가능하다.
const result = inputArr.reduce(reducefn);
console.log(`Reduce의 결과는 ${result}입니다.`);
//두번째 인자, 최초 콜백루프에서 acc 자리에 들어간다.

