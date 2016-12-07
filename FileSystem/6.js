/**
 * Created by wangwei on 16/12/6.
 */

var fs = require('fs');


//创建文件夹
/*fs.mkdir('./1',function () {
    console.log(arguments)
})*/


//删除文件夹
// fs.rmdir('./1',function () {
//     console.log(arguments)
// })

//读取文件夹

fs.readdir('../FileSystem',function (err,fileList) {
    fileList.forEach(function (f) {
        fs.stat(f,function () {
            console.log(arguments)
        })
    })
})