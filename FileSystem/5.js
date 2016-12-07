/**
 * Created by wangwei on 16/12/6.
 */

/*文件读取*/

var fs = require('fs');

/*fs.readFile('2.txt',function (err,data) {
    if (err){
        //文件读取失败
    }else{
        console.log(data.toString())
    }
})

fs.unlink('2.txt',function (err) {
   if(err){

   }else{
       console.log('删除成功')
   }
})*/


//给文件重命名
/*fs.rename('1.txt','1.new.txt',function () {
    console.log(arguments)
})*/


//查看文件状态

/*
fs.stat('1.new.txt',function () {
    console.log(arguments)
})*/

//查看文件是否改变  不稳定
//fs.watch(fileName,[options],listener)


