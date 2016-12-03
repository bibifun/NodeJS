//用来处理二进制数据流
//读取文件 从网络中读取数据



//new Buffer(size)  size[number]  创建一个Buffer对象  并未这个对象分配一个大小
//当我们为一个Buffer对象分配了空间大小以后 其长度是固定的  不能修改

// var BF = new Buffer(5);
//
// console.log(BF)
//
// console.log(BF)

// var bf = new Buffer([1,2,3]);
//
// console.log(bf);   用Buffer new出来的数组长度不可以改变

// new Buffer(string,[encoding]);     字符串   编码

// var bf = new Buffer('miaov','utf-8');
//
// console.log(bf);
//
// for (var i = 0; i < bf.length; i++) {
//     console.log(String.fromCharCode(bf[i]));
// }


//Buffer的一些方法

//buf.write()

// var str = 'wangwei';
//
// console.log(new Buffer(str));
//
// var bf = new Buffer(7); //长度固定 多余的会截去
//
// bf.write(str);
//
// bf.write(str,1);    从Buffer对象的第一位开始写
//
// bf.write(str,1,3); 从Buffer 对象的第一位开始写  写入的字符串的长度
//
// bf.write(str,1,3,'utf-8');  从Buffer 对象的第一位开始写  写入的字符串的长度  写入的字符串的编码
//
// console.log(bf);
//
// var bf = new Buffer('wangwei');
//
// console.log(bf.toString('utf-8',1,3));

// var bf = new Buffer('wangwei');
//
// console.log(bf.toJSON());


// bf截取  第一个参数是开始位置  第二个参数是结束位置
// var bf = new Buffer('wangwei');
//
// var bf2 = bf.slice();
//
// var bf3 = bf.slice(2)
//
// var bf4 = bf.slice(2,3)
//
// // 拷贝  和截取  引用不同
// var bf5 = new Buffer(10);
// bf.copy(bf5)   //把bf 对象拷贝到bf5中
// bf.copy(bf5,1,2,4)   //把bf 对象拷贝到bf5中  从第一位开始写入  拷贝源对象的第二位到第四位
// console.log(bf5);






//
// 类方法 静态方法
// console.log(Buffer.isEncoding('utf-8'));  //返回Buffer是否支持此编码
//
// var arr = [1,2,3];
//
// console.log(Buffer.isBuffer(arr));

// var str = 'wangwei';   //字符串长度是7
//
// console.log(str.length);//字符长度
//
// console.log(Buffer.byteLength(str));//字节长度

// var str1 = 'wang';
//
// var str2 = 'wei';
//
// var list = [new Buffer(str1),new Buffer(str2)];
// console.log(list);
//
// var bf = Buffer.concat(list,7);  //第二个参数 长度 选填
// console.log(bf);
