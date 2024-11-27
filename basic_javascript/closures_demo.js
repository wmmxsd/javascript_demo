/*
 * @Author: wangmingming wangmingming1@vrvmail.com.cn
 * @Date: 2024-10-28 17:40:23
 * @LastEditors: wangmingming wangmingming1@vrvmail.com.cn
 * @LastEditTime: 2024-11-01 14:43:34
 * @FilePath: \javascript_demo\basic_javascript\closures_demo.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
/** 闭包：闭包提供了一种方式，使得函数可以“记忆”和访问它被创建时的作用域，即使那个作用域已经执行完毕 */
// 普通函数调用
function sum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(sum([1, 2, 3, 4, 5, 6]));

// 函数作为返回值，用变量接收，需要调用的时候再使用变量()的方式调用
function lazy_sum(arr) {
    let sum = () => arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    return sum;
}

let l_s = lazy_sum([1, 2, 3, 4, 5, 6]);
console.log(l_s);
console.log(l_s());

// 带有值可能发生变化的变量的函数作为返回值可能导致错误的结果
function count_with_var() {
    let arr = [];
    for (var index = 1; index <= 3; index++) {
        arr.push(() => index * index);
    }
    return arr;
}

let [f1, f2, f3] = count_with_var();
// 都输出16，使用var时，所有闭包共享同一个index变量，因此它们都返回循环结束后的index值。
console.log(f1(), f2(), f3());

function count_with_let() {
    let arr = [];
    for (let index = 1; index <= 3; index++) {
        arr.push(() => index * index);
    }
    return arr;
}

// 输出1 4 9，使用let时，每次迭代都会创建一个新的作用域，因此每次迭代中的index变量都是独立的，因此每个闭包捕获的是当前迭代的index值。
let [f4, f5, f6] = count_with_let();
console.log(f4(), f5(), f6());

// 函数立即执行
console.log(((a, b, c) => a + b + c)(1, 2, 3));

// 多参数的函数变成常用的单参数的函数
function make_pow(x) {
    return y => Math.pow(x, y);
}

var pow2 = make_pow(2);
var pow3 = make_pow(3);
console.log(pow2(2));
console.log(pow3(2));
