var root = require("./login");    //使用login.js文件
  
//连接成功
io.on('connection', function(socket){
    console.log('a user connected');
    //监听登录请求
    socket.on('login', function(data,callback){　　　　　　　　　
         //解析登录数据
        var loginReqObj = root.login.LoginReq.decode(data);
        console.log("请求登录的用户:",loginReqObj.uid);
        //返回登录响应
        let loginResObj = root.login.LoginRes.create();
        loginResObj.code = 200;
        var buffer = root.login.LoginReq.encode(loginResObj).finish();
        socket.emit('login', buffer);
    });
});