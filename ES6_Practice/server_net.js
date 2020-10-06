var net = require('net')

var server = net.createServer(function(socket){
    socket.write('Welcome to socket server\n')

    // 클라이언트의 데이터 전송 이벤트
    socket.on('data', function(data){
        var msg = data.toString()
        console.log('Client send: ', msg)
    })

    // 접속 종료 이벤트
    socket.on('end', function(){
        // 클라이언트 접속 종료
        console.log('접속 종료')
    })
})

server.listen(3000)