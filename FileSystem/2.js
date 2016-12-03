// open 是异步的 不会阻止后续代码的执行
//
// openSync 是同步的 会通过这个放大的返回值进行后续操作
//
// fs.openSync()


var fs = require('fs');

// 异步的打开方式
// fs.open('1.txt','r',function(err,fd){
//     console.log(err);
// })
//
// console.log('OK');

// 同步的打开方式

// var fd = fs.openSync('1.txt','r');
//
// console.log(fd);

// 打开文件的后续操作

    // 读取文件内容
    // fs.read(fd,buffer,offset,length,position,callback)
    // fd : 通过open方法成功打开一个文件返回的编号
    // buffer : buffer对象
    // offset : 偏移量 新的内容添加到Buffer中的起始位置
    // length : 长度 添加到Buffer中的内容的长度
    // position : 位置 从文件中读取的起始位置
    // callback : 回调
        // err : 错误
        // len : 长度
        // newBf : 添加之后的BF

// fs.open('1.txt','r',function(err,fd){
//     if(err){
//         console.log('文件打开失败');
//     }else{
//         var bf1 = new Buffer('123456789');
//         console.log(bf1);
//         fs .read(fd,bf1,0,4,null,function(err,len,newBf){
//             console.log(bf1);
//             console.log(newBf);
//         })
//     }
// })
