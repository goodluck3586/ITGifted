var net = require('net')

var socket = new net.Socket();
socket.connect({port:3000, host:'localhost'}, function(){
    socket.on('data', function(data){
        var str = data.toString()
        console.log('recv data: ', str)
    })

    socket.on('end', ()=>{})

    // 서버에게 데이터 전송
    socket.write('Hello socket server\n')
    socket.write('Bye Bye')

    // 연결 종료
    socket.end()
})