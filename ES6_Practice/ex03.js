//#region 3. 객체 리터럴
// 3-1 이전 객체 문법
var a = {}
var b = []
c = 4
var sayNode = function(){
    console.log('Node');
}
var es = 'ES'
var oldObject = {
    sayNode: sayNode, 
    sayJs: function(){
        console.log('JS')
    }    
}
oldObject[es + 6] = 'ES6'

// 3-2 새로운 객체 문법
const newObject = {
    sayNode,
    sayJs(){
        console.log('JS')
    },
    [es + 6]: 'ES6'
}
//#endregion