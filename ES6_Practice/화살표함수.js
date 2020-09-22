//#region 4. 화살표 함수
// 함수 선언문
function add1(a, b){
    return a+b;
}
add1(3, 4)

// 함수 표현식
const add2 = function(a, b){
    console.log('덧셈합니다.')
    return a+b;
}

// 화살표 함수
const add3 = (a, b) => a + b;   // { }가 없으면 return 문으로 인식

const add4 = (a, b) => {
    console.log('덧셈합니다.')
    return a+b;
};
//#endregion