var ws = require("nodejs-websocket");
var protobufjs = require("protobufjs");
var root = protobufjs.loadSync("./login.proto");

console.log("開始創建Websocket");

var server = ws.createServer(function(conn){
    console.log("連接成功");
    conn.on("binary",function(inStream){
        console.log("接收消息");
        var data;
        inStream.on("readable",function(){
            data = inStream.read();
        })
        inStream.on("end",function(){
            console.log("Received"+data.length+" bytes of binary data");

            // 解析接收到的數據,cmd
            var cmd = data.readUInt16BE(0);
            console.log("接收數據的cmd: ",cmd);
            let bytes = Buffer.from(data,1);

            // 解析接收到的數據 - loginReq
            var LoginReq = root.lookupType("login.LoginReq");
            var loginReq = LoginReq.decode(bytes);
            console.log("接收數據的uid: ",loginReq.uid);

            // 發送的數據 - loginReq
            var sendLoginReq = LoginReq.create();
            sendLoginReq = 888;
            var sendData = LoginReq.encode(sendLoginReq).finish();

            // 發送的數據 - cmd
            var sendBuffer = Buffer.alloc(2);
            sendBuffer.writeInt16BE(100);

            // 拼接數據發送
            var totalBuffer = Buffer.concat([sendBuffer,sendData],sendData.length+sendBuffer.length);
            conn.sendBinary(totalBuffer);
        })
    })

    conn.on("close",function(code,reason){
        console.log("關閉連接")
    });

    conn.on("error",function(code,reason){
        console.log("異常關閉")
    });
}).listen(8001)

console.log("開始監聽端口8001...");