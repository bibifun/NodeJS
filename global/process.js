/**
 *
 * Created by wangwei on 16/12/2.
 * process 它是一个全局对象 是当前程序进程有关的信息
 */

//console.log(process)
//console.log(global.process)

//console.log(process.argv)
// 返回的是一个数组  第一个参数是node (运行这个文件的编译器)  第二个参数是这个文件的地址   后面是运行时传进去的参数

//console.log(process.env)
// 返回的是和用户系统相关的信息

// console.log(process.pid)
// 返回当前运行程序的pid

// console.log(process.title)
//返回当前进程显示的名称

// console.log(process.arch)
// 返回当前处理器的架构

// console.log(process.exit())
// 退出当前进程



/*标准输入输出流  IO*/

// 标准输入设备 =》  就是往计算机中输入信息的设备  键盘鼠标。。。
//
// 标准输出设备   =》  显示器。。 打印机  绘图。。

// stdin   和  stdout  叫做标准输入输出流  提供了操作输入数据和输出数据的方法,我们通常也称为IO操作
//
// process.stdout.write('hello')



//用于监听用户的输入数据   默认情况下输入流是关闭的  要监听处理输入流首先要开启输入流

// 开启输入流

// process.stdin.resume();
//
// process.stdin.on('data',function (chunk) {
//     console.log('用户输入了' + chunk)
// })
