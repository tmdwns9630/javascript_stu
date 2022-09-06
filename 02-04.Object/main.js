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
    피부타입:	"모든피부용",
    옵션명 : ["1개","2개","3개"],
    중량 : ["100g","200g","300g"],
    판매처 : site,
}

console.log(product.상품번호);
console.log(product.상품상태);
console.log(product.옵션명);
console.log(product.중량);

console.log(product.판매처);
console.log(product.판매처.url);
