/*
console.log("Hello World");
alert("hello world");

const arr = [1,2,3,4,5]

for (const i in arr){
    console.log(arr[i])
}

for (const data of arr){
    console.log(data)
}

*/

//arr.forEach(myFunc2);
//forEach : 요소마다 ()안의 함수를 적용한다.

// const arr = [1,2,3,4,5]

// function myFunc2(currentvalue, index){
//     console.log(`[${index}]의 값은 ${currentvalue}입니다`);
//     return 1;
// }

// arr.map(function myFunc3(currentvalue, index){
//     console.log(`[${index}]의 값은 ${currentvalue}입니다`);
// })

// const myFunc4 = (currentvalue,index) => {
//     console.log(`[${index}]의 값은 ${currentvalue}입니다`);
//     console.log(`[${index}]의 값은 ${currentvalue}입니다`);
//     return 1;
// }
// myFunc4(500,3);

// arr.map((ele,idx) => console.log(` 값 ${ele}`));

// arr.forEach((ele,idx) => {
//     if(idx <3) console.log(` 값 ${ele}, 인덱스 : ${idx}`);
// });

// //삼항 연산자 사용
// arr.forEach((ele,idx) => {
//     idx <3 ? console.log(` 값 ${ele}, 인덱스 : ${idx}`) : null;
// });

//myFunc 3,4는 표현 방식이 다를 뿐, 같은 내용의 함수다.
//4번의 화살표에서 두줄 이상을 넣으려면 => 다음에 중괄호를 써야한다.
//중괄호를 쓸 때는 return이 자동으로 안되어서 명시해줘야 한다.

//-----------------------------------------
// var arr =["동해물과", "백두산이","맗"];

// var result1 = arr.forEach((ele,idx) =>{
//     console.log(`값 : ${ele}, 인덱스 : ${idx}`);
//     return ele;
// });

// console.log(result1);

// // map : 값, 배열번호, 원본배열 자체
// var result2 = arr.map((ele,idx,allArr) =>{
//     console.log(`값 : ${ele}, 인덱스 : ${idx}, AA : ${allArr.length}`);
//     return `${ele}${idx}`;
// });

// console.log(result2);

// //------------------------------------

// const arr = [1,2,3,4,5,6];

// // const result = arr.map((ele) => ele *2);

// const result = arr.filter((ele) => ele % 2 == 0).map((ele) => ele*2);


// console.log(result);
// //------------------------------

    // setTimeout(() => {
    //     console.log(`1초 후에 실행됩니다`)
    // }, 1*1000);



    // let count = 0
    // setInterval(() => {
    //    console.log(`1초마다 실행됩니다(${count})`)
    //    count++
    // }, 1*1000);


let 시 = 16;
let 분 = 59;
let 초 = 51;


const timeID = setInterval(() => {
   //console.log(`${시}:${분}:${초}`) ;
   console.log(
    `${시.toString().padStart(2,"0")}:${분.toString().padStart(2,"0")}:${초.toString().padStart(2,"0")}`) ;
   
    // document.getElementById("hour").innerText = 시;
    // document.getElementById("min").innerText = 분;
    // document.getElementById("sec").innerText = 초;
    document.querySelector(".hour").innerText = 시;
    document.querySelector(".min").innerText = 분;
    document.querySelector(".sec").innerText = 초;


   초++;
   if(60 <= 초){
    초 = 0;
    분++;
    if (60 <= 분){
        분 = 0;
        시++;
    }
   }
}, 1000);


const redo = setInterval(() => {
    let qa = confirm('타이머를 종료하시겠습니까?')
    if(qa=== true){
        clearInterval(timeID)
        clearInterval(redo)
        console.log('타이머 종료')
    }
    
}, 10000);


// setTimeout(() => {
//     console.log('타이머 종료')
//     clearInterval(timeID) 
//  }, 5000);