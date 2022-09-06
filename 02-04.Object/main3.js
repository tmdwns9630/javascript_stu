console.log("09/06 수업 3 오후2")
const products = [
    {
        제품명 : "탐사수",
        가격 : 500,
        무게 : 50,
    },
    {
        제품명 : "화장지",
        가격 : 250,
        무게 : 10,
    },
    {
        제품명 : "모니터",
        가격 : 100000,
        무게 : 200,
    },
    {
        제품명 : "마우스",
        가격 : 12000,
        무게 : 40,
    },
];

//배열 속 객체의 가격 기준으로 정렬해보자.
//정렬에는 Array.prototype.sort() 메서드를 쓴다.
//ARR.sort([비교함수]);
//비교함수는 생략하면 유니코드 기준으로 정렬된다.
function minPriceFinder(arr){
    var result = arr[0];
    for(let i = 0; i<arr.length;i++){
        if(arr[i] > result){
            result = arr[i];
        }
        console.log(`${i}번째 루프에서 result : ${result}`);
    }
    return result;
}
// //예제
// const months = ['March', 'Jan', 'Feb', 'Dec','Apple','apple','123'];
// months.sort();
// console.log(months);
// // expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000,100002];
// array1.sort();
// console.log(array1);
// // expected output: Array [1, 100000, 21, 30, 4]

const compare = (a,b) => {
if (a <b) {
    return -1;
    }
    if (a > b) {
    return 1;
    }
    // a must be equal to b
    return 0;
};

// array1.sort(compare);
// console.log(array1);

//문자열 길이 기준
const compare2 = (a,b) => {
    console.log("-------");
    console.log(a);
    console.log(b);
    console.log("-------");
if (a.length < b.length) {
    return -1;
    }
    if (a.length > b.length) {
    return 1;
    }
    // a must be equal to b
    return 0;
};

//문자열 길이 기준
const compare3 = (a,b) => {
    console.log("-------");
    console.log(a);
    console.log(b);
    console.log("-------");
if (a.가격 < b.가격) {
    return -1;
    }
    if (a.가격 > b.가격) {
    return 1;
    }
    // a must be equal to b
    return 0;
};

// array1.sort(compare2);

// const months2 = ["!",'March', 'Jan', 'Feb', 'Dec','DA'];
// const sortResult = months2.sort(compare2);
// console.log(sortResult);

const sortResult2 = products.sort(compare3);
console.log(sortResult2);