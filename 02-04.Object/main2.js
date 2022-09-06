console.log("09/06 수업 2 오후 시작")
const site = {
    사이트명 : "네이버",
    url :"https://naver.com"
}

const product = {
    상품번호 :	"4939338188",	
    상품상태: "신상품",
    제조사	:"Dr. Hobein(Nachf.)",
    브랜드:	"오이보스",
    원산지:	"독일산(이노패스인터내셔널(주))",
    세부제품특징:"발림성",		
    피부타입: "모든피부용",
    옵션명 : ["1개","2개","3개"],
    중량 : ["100g","200g","300g"],
    판매처 : site,
    printBrand : function(name){
        console.log("아수스");
        console.log(this.브랜드);
        //자기 객체 내의 요소를 싶을 경우"this.키값명"을 쓴다.
        console.log(`${name} wants ${this.브랜드}`);
    },
    // printModel : (name) => {
    //     console.log(`${name} wants ${this.피부타입}`);
    //     console.log(this);
    //     //this가 안 먹혀서 잘 안쓴다.
    // }
}

console.printf = function(str){
    console.log(`[Yosoro] ${str}`);
}

console.printf("hellow world")

//String 자체에 함수를 만들 수 있다.
//이제 이 밑으로 String 객체를 쓰는 모든 객체는 지금 만든 함수를 쓸 수 있다.
String.prototype.toPrint = function(){
    console.log("[2022-09-06]"+this.valueOf());
};
//프로토타입은 String이라는 객체가 가진 메서드라고 보자.

"ㅇㅇ".toPrint();

//많이 쓰는 메소드
//toString() : 앵간한 자료형은 toString() 메서드를 가지고 있다.
console.log("abcd",toString());//스트링 -> 스트링
console.log(["a","b","c"].toString());//배열 -> 스트링
console.log((101).toString());
console.log((10.1).toString());


//Math :수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체, 함수 객체가 아님
//가 뭔소리냐
console.log(Math.abs(100));
console.log(Math.abs(-100));//양수화
console.log(Math.PI);

console.printf(Math.max(10,20,30,40,50,120));//최대값

arr = [102,30,20,123,452,213];

console.log(Math.max(arr)); // NaN으로 뜬다.
console.log(arr);
console.log(...arr);
console.log(Math.max(...arr)); //452
//...으로 대괄호를 풀어준다.


//Math.random(): 0~1 사이의 난수 생성
console.log((Math.random())*10);//0에서 10 사이의 값이 나온다.
console.log(Math.floor(((Math.random())*10))); // Math.floor : 소수점 버림
console.log((123.45).toFixed(1)); // 소수자릿수 지정(문자열)

