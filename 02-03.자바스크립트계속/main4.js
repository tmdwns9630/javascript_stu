console.log("라이브 서버 작동중4 오후 수업2")

const call3tunes = (callback) =>{
    for(let i =0; i<3; ++i){
        //console.log(callback);

        callback(i);
    }
}

const myPrint = (idx) => console.log(`${idx}번째 함수 호출`);

call3tunes(myPrint);
//함수의 인자로 함수를 쓰면 인자의 함수 내용이 그대로 나온다.
//인자의 콜백함수를 호출하는걸로 보자.

//foreach와 map의 차이
//foreach의 리턴값은 void, 없다는거고
//map은 리턴값이 배열이다. 리턴값이 있다. 
const arr = [20,40,60,80,100];

//arr.map()

const sunmoonfn = (value, index, arr) => {
    console.log(`value:${value} / index:${index} / arr:${arr}`);
    return value*value
};

const sunmoonfn2 = (value) => {
    console.log(`value:${value}`);
};
const forEachResult = arr.forEach(sunmoonfn2);

const mapResult = arr.map(sunmoonfn);
console.log(mapResult);

