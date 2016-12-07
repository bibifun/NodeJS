/**
 * Created by wangwei on 16/12/6.
 */
//往文件中写入内容

var fs = require('fs');

fs.open('1.txt','r+',function (err,fd) {
    /*

    当我们要对打开的文件进行写操作的时候  打开文件的模式应该是读写方式

    * fs.write(fd,buffer,offset,length[,position],callback)
    *
    * fd 打开的文件标识
    *
    * buffer : 要写入的数据
    *
    * offset : buffer的偏移量  buffer对象中要写入对象的起始位置
    *
    * length : 要写入buffer对象数据的长度
    *
    * position : fd中的起始写入位置
    *
    * callback : 回调
    * */

    if(err){

    }else{
       /*
       第一种写入的方法
        var bf = new Buffer('123');

        fs.write(fd,bf,0,3,0,function () {
            console.log(arguments)
        })
        */

       /*
        第二种写法
        fs.write(fd,'1234',5,'utf-8');*/

       fs.close(fd,function () {

       })
    }
})