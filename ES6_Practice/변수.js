//#region 1 변수 
// 1-1. var 변수(var 변수는 함수 스코프)
// 반복문이 끝난 후에도 변수 i가 살아있다. 
for(let i=0; i<3; i++){
    console.log(i);
}
console.log('i = ', i);

b = 5;          // 선언없이 변수 사용 가능
var b = 6;    // 변수를 나중에 선언해도 에러 발생 안 함.    
var b = 7;    // 변수를 재선언해도 에러 발생 안 함.
console.log(b);

// 1-2. const, let 변수(블록 스코프)
// const c  // 에러(초기화 필수)
const c = 3;    // const 변수(상수로 작동하여 재선언과 재할당 모두 불가)
// c = 1;  // error

const d = {a:1, b:2, c:3}
d.a=100
d.b = 200
console.log(d)
// // g=[1,2,3]  // 에러
// d.a = 4;        // 객체는 그 안의 값을 바꿀 수 있다.
// console.log(d)  

e = [1,2,3]     // 리스트도 객체이다.
console.log(e[0], e[1], e[2])
// console.log(e)
// e[0] = 'hello'
// e[1] = 'world'
// console.log(e)
// e = [4,5,6]     // 에러: 메모리 주소에 대한 값이 바뀌기 때문에 에러
//#endregion