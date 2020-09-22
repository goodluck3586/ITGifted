//#region 3. 객체 리터럴
// 3-1 이전 객체 문법
var sayNode = function(){
    console.log('Node');
}
var es = 'ES'

var oldObject = {
    sayNode: sayNode, 
    sayJs: function(){
        console.log('JS')
    },
    [es + 7]: 'es7'    
}
oldObject['hello'] = 'world'
oldObject[es + 6] = 'ES6'
console.log(oldObject)

// 3-2 새로운 객체 문법
const newObject = {
    sayNode,
    sayJs(){
        console.log('JS')
    },
    [es + 6]: 'ES6'
}
//#endregion