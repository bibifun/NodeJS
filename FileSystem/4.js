/**
 * Created by wangwei on 16/12/6.
 */

var fs = require('fs');

var fileName = '2.txt';

/*向一个指定文件中写入数据 如果该文件不存在 则新建 如果存在则新的内容会覆盖原有的文件内容*/

// fs.writeFile(fileName,'miao',function () {
//     console.log(arguments)
// })


/*向一个指定文件的尾部写入数据 如果该文件不存在则新建 如果存在则写入尾部*/
// fs.appendFile(fileName,'wang',function () {
//     console.log(arguments)
// })



//异步的处理方法
/*
fs.exists(fileName,function (isExists) {
    console.log(isExists)
    if (isExists){
        fs.appendFile(fileName,'wang',function () {
            console.log(arguments)
        })
    }else{
        fs.writeFile(fileName,'miao',function () {
            console.log(arguments)
        })
    }
})*/

//同步的处理方法

if(!fs.existsSync(fileName)){
    fs.writeFileSync(fileName,'miaov')
}else{
    fs.appendFileSync(fileName,'-leo')
}

