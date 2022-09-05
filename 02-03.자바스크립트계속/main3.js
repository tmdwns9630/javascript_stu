console.log("라이브 서버 작동중3 오후 수업")

//인자의 디폴트값 설정하기, 예외 처리

//디폴트값 설정하기
// const PartTimeJob = (name, pay=9620, time=4) =>{
const PartTimeJob = (name, pay, time) =>{
    console.log(`이름 : ${name}`);
    if(name === "" || name === undefined){
        console.log("이름을 입력하세요")
        return;
    }
    if(!name){
        //위의 if문을 한번에 처리한 경우
        console.log("이름을 입력하세요")
        return;
    }

    if(typeof(pay) !== 'number' ){
        console.log("숫자를 바르게 입력하세요")
        return;
    }
    if(typeof(pay) <= 'number' ||){
        console.log("숫자를 바르게 입력하세요")
        return;
    }
    if(typeof(pay) !== 'number' ||){
        console.log("숫자를 바르게 입력하세요")
        return;


    console.log(`시급 : ${pay.toLocaleString()}`);
    console.log(`근무시간 : ${time}`);
    console.log(`일급 : ${(pay*time).toLocaleString()}`);
    console.log("----------------");
}

PartTimeJob("강석원",9620,4);
PartTimeJob("박종훈",10000,3);
PartTimeJob("윤승준");

//main3.js:8 Uncaught TypeError: Cannot read properties of undefined (reading 'toLocaleString')
//디폴트 인자가 없을 때 인자를 생략한 경우 toLocalString이 읽을 값이 ㅇ없어서 uncaugth 오류가 뜬다.
//ㄴ 예외처리를 해줘야 함.

//1 숫자가 아니거나
//ㄴ typeof ㅌ !== 'number'
// 2. 0보다 작거나 같을때
//3. 최저시급보다 작을 때
//4. undefined 일 때
//5. 만약 문자열을 입력하는 경우
