//引入fs 模块

var fs = require('fs');

// fs.open(path,flags,[mode],callback)
// parh : 要打开文件的路径
// flags: 要打开文件的方式  读/写  不同的方式影响后续操作
// mode : 设置文件模式  权限： 读/写/执行 4/2/1 0777
// callback : 回调  =>当我们使用open打开文件之后 会执行这个方法
//     err : 文件打开失败的错误保存在err里面 如果成功 err 为null
//     fd  : 被打开文件的标识

fs.open('1.txt','r',function(err,fd){   //fd  被打开文件的标识
    // console.log(err);
    // console.log(fd);
    if(err){
        console.log('文件打开失败',err);
    }else{
        console.log('文件打开成功');
    }
})

// 在webStorm中可以打开文件  在atom中输出文件打开失败 不知道是什么JB意思
