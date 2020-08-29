/**连接成功*/
private onConnect(e:egret.Event){
    console.log("ClientSocket 连接成功");
    this.resetReconnect();
    App.EventMananger.sendEvent(ClientSocket.SOCKET_CONNECT);
 
    //测试
    let loginData:login.LoginReq = new login.LoginReq();
    loginData.uid = 123;
    let buffer = login.LoginReq.encode(loginData).finish();
    this.send(100, buffer);
}
 
/**
 * 发送数据
 * @param cmd 数据协议
 * @param sendByte 发送的数据
 */
public send(cmd:number, sendByte:Uint8Array){
    console.log("ClientSocket 发送:",cmd);
    //发送的数据cmd+proto
    let sendByteArray = new egret.ByteArray(sendByte);
    let byteArray:egret.ByteArray = new egret.ByteArray();
    byteArray.writeUnsignedShort(cmd);
    byteArray.writeBytes(sendByteArray);
    //发送
    this.socket.writeBytes(byteArray);
    this.socket.flush();
}
 
/**接收数据*/
private onReceive(e:egret.Event){
    //读取socket数据
    var byte:egret.ByteArray = new egret.ByteArray();
    this.socket.readBytes(byte);
    //读取cmd+proto
    let cmd:number = byte.readUnsignedShort();
    console.log("接收数据,cmd:",cmd);
    //读取loginReq
    let revByteArray:egret.ByteArray = new egret.ByteArray();
    byte.readBytes(revByteArray);
    let buffer:login.LoginReq = login.LoginReq.decode(revByteArray.bytes);
    console.log("接收数据,uid:",buffer.uid);