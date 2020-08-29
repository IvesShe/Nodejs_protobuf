// 方法二
// 使用pbjs -t static-module -w commonjs -o test.js test.proto輸出protobufjs
// 使用其輸出的js檔
var protobuf = require("./test");  

function protobufStudy(){
    console.log("方法二");    

    let preData = {};
    preData.uid = 168;
    preData.type = 7;
    preData.name = "ivesshe888";
    preData.sex = "男";
    preData.number = "3939889";
    preData.buy = [11,22,33,44,55,66,77,88],
    preData.buyook = [
        {bookType:0,bookID:555},
        {bookType:1,bookID:666},
        {bookType:3,bookID:777},
        {bookType:4,bookID:888}
    ];
    
    console.log("原始preData: \n",preData);

    // 檢驗資料是否符合格式
    let errMsg = protobuf.websocket.WebsocketMessage.verify(preData);
    if (errMsg)
        throw Error(errMsg);

    console.log("verify通過");    

    // 建立一組新訊息    
    let outData = protobuf.websocket.WebsocketMessage.create(preData);    
    console.log("create outData: \n",outData);

    // 將資料編碼
    let buffer = protobuf.websocket.WebsocketMessage.encode(outData).finish();
    console.log("encode buffer: \n",buffer);

    // 將資料解碼
    let receiveData = protobuf.websocket.WebsocketMessage.decode(buffer);
    console.log("decode receiveData: \n",receiveData,receiveData.buy);

}

protobufStudy();