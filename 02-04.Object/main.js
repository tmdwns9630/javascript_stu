console.log("09/06 수업 1")

const name = "망고"
const price = 10000;

// const product = {
//     제품명 : "7D 건조망고",
//     유형 : "당절임",
//     성분 : "망고, 설탕, 치자항색소",
//     원산지 : "필리핀"
// };

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

// console.log(product.상품번호);
// console.log(product.상품상태);
// console.log(product.옵션명);
// console.log(product.중량);

// console.log(product.판매처);
// console.log(product.판매처.url);
// product.printBrand("홍길동");
// //객체명.함수명()으로 호출한다.

// //product.printModel("홍길동");

// //const json = JSON.stringify(product, null, 4);

// const json = JSON.stringify(product.판매처, null, 4);
// console.log(json);
// //객체를 문자열로 만들어준다.
// //MDN : JSON.stringify() 메서드는 JavaScript 값이나 객체를 JSON 문자열로 변환합니다


// const ReObj = JSON.parse(json);
// console.log(ReObj);
// //문자열을 다시 객체로 만든다.

// //--------------------------------------------

//객체에 동적으로 요소(속성) 추가가 가능하다.
product.고객센터 = "1566-1066";
console.log(product);

//객체의 요소를 제거할 수 있다.(자주는 안쓴다)
delete product.중량;
console.log(product);


//console.log를 입맛대로 정의시킨 새로운 함수를 만들 수 있다.
console.printf = function(str){
    console.log(`[Yosoro] ${str}`);
}
console.printf("hellow world")

//const로 객체를 정의했는데 속성값을 바꿀 수 있다?
product.제조사 = "삼성전자";
console.log(product);

//객체 자체를 다른 속성이나 자료형으로 바꿀 수 없는데 속성은 바꿀 수 있다.
//객체 내의 속성 고정은 자바스크립트만으로는 안되고 타입스크립트로 해야 지정된다.
//자바스크립트 특성으로 자유도가 높지만 위험성이 높다.
//객체는 앵간해선 const로 선언하자.
//product = "hello world";

console.log(typeof product);//object
console.log(typeof console);//object
console.log(typeof product.브랜드);//string
console.log(typeof product.옵션명);//object
//배열은 오브젝트다. ==> 메서드를 추가할 수 있다.

product.옵션명.배열타입 = "수량";

console.log(product);
console.log(product.옵션명);
//t타입이라는 객체(키)가 생겼고, 키값인 '수량'이 할당되어 있다.
//그렇다면 1개 2개 3개도 키값이다. 

//-------------------------------------------------------
console.log("--------------------------------------------------");

//객체도 배열의 요소로 넣을 수 있다.
const products = [product, product,product,product];
console.log(products);

//객체는 다른 객체의 키값이 될 수도 있다.
const 내쇼핑몰 = {제품들 : products,}
console.log(내쇼핑몰);

//json 파일은 이러한 객체와 배열 안의 객체들의 집합체다.
//자바스크립트의 객체 파트는 객체 안에 객체 넣고, 그 안에 배열 및 객체 넣고를 반복한다.
//이러한 작업을 확장프로그램으로 편하게 작업 가능하다.

//================================
console.log("--------------------------------------------------");

const str = "hello";
console.log(typeof str);//string
const str2 = new String("hello World");
console.log(typeof str2);//object
//Str2는 string(문자열) 객체의 인스턴스다.

const str3 = "    동해물과 백두산이 마르고 닳도록";
console.log(str3.split(" "));
//공백을 만났을 때 잘라내어 배열로 만든다.

console.log(str3.trim());
//문자열의 앞부분 공백을 제거한다.
//로그인 시 아이디 앞부분 공백을 제거할 때 사용한다.

console.log(str3.trim().split(" "));
//위 둘을 합친다.