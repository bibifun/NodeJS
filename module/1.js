/**
 * Created by wangwei on 16/12/2.
 */
// 一个文件就是一个模块 每个模块都有自己的作用域
// var a = 100;
//
// global.a = 200;
//
// console.log(a)
// console.log(global.a)


// __filename 当前模块的绝对路径

// console.log(__filename)

// 模块加载系统

//require('./2.js')

// 路径 可以写相对路径 和 绝对路径

//require('2.js')   回去加载nodejs中的核心模块 或者是node_modules

// require('./2')
//
// 如果不带后缀会先按照文件名查找 => .js  => .json => .node =>  抛错

console.log(__filename)

console.log(__dirname)