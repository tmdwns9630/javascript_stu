console.log("라이브 서버 작동중3 오후 수업")

//인자의 디폴트값 설정하기

// const PartTimeJob = (name, pay=9620, time=4) =>{
const PartTimeJob = (name, pay, time) =>{
    console.log(`이름 : ${name}`);
    console.log(`시급 : ${pay.toLocaleString()}`);
    console.log(`근무시간 : ${time}`);
    console.log(`일급 : ${(pay*time).toLocaleString()}`);
    console.log("----------------");
}

PartTimeJob("강석원",9620,4);
PartTimeJob("박종훈",10000,3);
PartTimeJob("윤승준");


