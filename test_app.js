// 方法一
// 直接讀取test.proto
const protobuf = require("protobufjs");

protobuf.load("./test.proto", function(err, root) {
    if (err)
        throw err;
 
    let WebsocketMessage = root.lookupType("websocket.WebsocketMessage");
    //var OtherMessage = root.lookupType("websocket.Other");
 
    let payload = { 
        uid:16888,
        type: 0,
        name:"ivesshe",
        sex:"男",
        number:"0912345678",
        message: Buffer.from("this is prtobuf test"),
       buy: [11,22,33,44,55,66,77,88],
        buybook:[
            {bookType:0,bookID:555},
            {bookType:1,bookID:666},
            {bookType:3,bookID:777},
            {bookType:4,bookID:888}
        ],
    };
    
    console.log("原始payload: ",payload);
    
    // 檢驗資料是否符合格式
    let errMsg = WebsocketMessage.verify(payload);
    if (errMsg)
        throw Error(errMsg);
   
    console.log("verify通過");   

    // 建立一組新訊息
    let message = WebsocketMessage.create(payload); 
    console.log("create完成");
    console.log("create的訊息message: \n",message,message.message.toString());    
   
    // 將資料編碼
    let buffer = WebsocketMessage.encode(message).finish();
    console.log("編碼後的訊息buffer: \n",buffer);

    // 將資料解碼
    let message02 = WebsocketMessage.decode(buffer);
    console.log("解碼後的訊息message02: \n",message02,message02.message.toString());
  
});

