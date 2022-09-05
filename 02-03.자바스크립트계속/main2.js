console.log("라이브 서버 작동중")



// //인자값으로 자료형을 지정하지 않은 a, b, c를 주고 출력해본다.
// function main(a,b,c){
//     console.log(`a값은 ${a}입니다.`);
//     console.log(`b값은 ${b}입니다.`);
//     console.log(`c값은 ${c}입니다.`);
//     console.log("");
// }


// main(10,20,30,40);
// //--------------------------------------------


// console.log("인자를 사용한 함수");
// function sum(a,b){
//     return a+b;
// }

// console.log(sum(2,5));

// const sum2 = function(a,b) {
//     return a+b;
// }

// const sum3 = (a,b) => {
//     return a+b;
// }
// console.log(sum3(1,4));

// const sum4 = (a,b) => a+b;
// console.log(sum4(1,4));
// //화살표 함수는 중괄호가 없으면 return문이 필요가 없다.
// //sum3, sum4는 완전히 같은 함수로 볼 수 있다.

// //---------------------------------------

// console.log("프롬프트를 사용하여 사용자에게 입력받습니다.");
// //prompt("프롬프트 테스트","디폴트");
// const message = prompt("프롬프트 테스트","디폴트");
// console.log(`프롬프트로 전달받은 값은 "${message}"입니다.`);


// //키워드를 입력하고 괄호를 입력하면 함수 양식 정보가 나온다.
// //타입스크립트의 함수 양식에서 인자에 ?가 붙은 것은 인자를 넣어도 되고, 안 넣어도 된다.
// //콤마(,) 앞까지가 인자 1개다.
// //두번째 인자 : string | undefined : 스트링 혹은 아무거나
// //괄호 밖 : string | null : 리턴값

// //---------------------------------------------
// console.log("confirm에 대해 알아봅시다.");
// confirm();
// const yesno = confirm("메시지 없이 입력할 수도 있습니다.");

// console.log(`"confirm으로 받은 값은 ${yesno}입니다."`);
// //true, false로 리턴받는다.

// console.log("변수 이름은 자세히 짓는 습관을 가지는게 좋다.");
// console.log("카멜케이스, 스네이크케이스라는 방식이 있으며 파이썬은 스네이크방식이다");
// console.log("카멜(낙타)는 소문자로 시작해서 단어구분되면 대문자");
// console.log("스네이크는 언더바(_)로 구분한다.");
// console.log("명사와 동사를 잔뜩 넣어서 어떤 변수명인지 설명하듯이 이름 짓는게 좋다.");


// //---------------------------------------------------

// console.log("203p 윤년 확인 함수를 =>로 만들어보자");

// function isLeapYear_Function (year) { 
//     return (year % 4 == 0) &&(year % 100 !== 0) || (year % 400 ==0)
//     //return에는 ;이 안 들어가나?
//     //자바스크립트는 세미콜론이 없어도 동작한다. 그냥 들어갈 경우 프리티 확장프로그램이 넣어준다.
// }


// const isLeapYear_Arrow = (year) => (year % 4 == 0) &&(year % 100 !== 0) || (year % 400 ==0);

// console.log(`"return 있는 윤년함수 : ${isLeapYear_Function (2020)}"`);
// console.log(`"return 없는 윤년함수 : ${isLeapYear_Arrow (2020)}"`);


//------------------------------------------------------------------------
//한숨 돌리고 다시.
console.log("화살표 함수, 삼항 연산자로 최소값, 최대값 함수를 만들어보자.");

const min = (a,b) =>{
    var result = a<b ? a:b;

    return result;
}
console.log(`최소값 : ${min(25,22)}`);

const max = (a,b) =>{
    var result = a>b ? a:b;

    return result;
}
console.log(`최대값 : ${max(25,22)}`);

//함수 정의할 때 중괄호 내에서 선언한 지역변수
//다른 언어에서는 밖에서 쓸 수 없지만 JS에서는 밖에서도 쓸 수 있긴 하다.
//하지만 암묵적으로 그로지말자는 약속이 있으므로 지역 변수 지켜주자.

const minTriple = (a,b,c) =>{
    var result = a<b ? a:b;
    var result2 = b<c ? b:c;

    return result<result2 ? result:result2;
}

console.log(`3개 값 중 최소값 : ${minTriple(25,22,21)}`);

console.log("만약 비교값이 10개 이상의 배열일 경우엔?");

const input = [10,5,20,100];

//배열에서 최소값 찾기
const minArr = (arr) =>{
    var result = arr[0];
    console.log(`첫번째 result : ${result}`);
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] < result){
            result = arr[i];
        }
        console.log(`${i}번째 루프에서 result : ${result}`);
        
    }
    return result;
}

//배열에서 최대값 찾기
const maxArr = (arr) =>{
    var result = arr[0];
    //console.log(`첫번째 result : ${result}`);
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] > result){
            result = arr[i];
        }
        console.log(`${i}번째 루프에서 result : ${result}`);
    }
    return result;
}

//ㅁ 오류를 줄이기 위해 쓸 수 있는 팁들.
//콘솔 로그를 자주 사용하여 작동 체크를 하자
//for루프에서 반복되는 부분에서 콘솔 로그 변수를 넣어서 작동 체크
//루프 구간이 제대로 도는지 확인하기 위해  체크할 영역에 콘솔 영역에 알아보기 쉬운 문장
//현재는 가능한 중괄호를 사용한다.
//오타를 줄이기 위해 자동 완성된 키워드를 복사해서 사용하는 방법도 있다.
//확장 프로그램의 괄호 색 기능을 적극적으로 활용한다.

//ctrl + f or h는 문자열까지 다 바꾼다.
//변수명에 드래그하고 F2를 누르면 해당 변수명만 바꿀 수 있다.
//ctrl shirt h를 누르면 해당 프로젝트의 모든 파일의 문자열을 바꿀 수 있다.
console.log(`배열 출력 : ${input}`);
console.log(`배열값 중 최소값 : ${minArr(input)}`);
console.log(`배열값 중 최대값 : ${maxArr(input)}`);

//많은 인자를 받아야 하는 경우
//'...'을 넣으면 인자 수 제한 없이 다 받아서 배열로 저장한다.
const min_InJa =(...items)=>{
    console.log(items)

    //return items
}

console.log(min_InJa("ㅁㄴㅇ","ㅂㅈㄷ","ㅋㅌㅊ"))


//-------------
//콘솔.로그를 한번 직접 정의해보기

console.log();

const myPrint = (...data) =>{
    console.log(data);
    console.log(data.length);
    //console.log(`${data[0]} ${data[1]} ${data[2]}`)
    var result = data[0];
    for (let i = 0; i<data.length; i++){
        //console.log(`${data[i]} `)
        result+=data[i];
    }
    }


    //더 간단하게 이렇게 하면 바로 나온다.
    console.log(...data);
    //...은 배열의 대괄호를 그냥 풀어버린다고 생각하자.

    console.log(data.join(""));
    //설명 못들었는데 많이 쓴다고 한다.
    //배열의 모든 요소를 하나의 문자열로 만든다.
    //인자를 생략하면 콤마 , 로 구분하고
    //인자를 넣어서 구분자를 지정할 수 있다.


    //콤마로 구분된걸 다시 배열로 만들고 싶을때
    //문자열을 특정 구분자로 구분해서 배열로 만들고 싶을때
    //split
    //문자열일 때만 쓸 수 있고 문자열을 구분자를 기준으로 배열로 만들어 준다.

myPrint("안녕","하세여","SunMoon");
console.log("안녕","하세여","SunMoon");