'use strict';
let r1, r2, s = null;
try {
    r1 = s.length;
    r2 = 100
} catch (error) {
    console.log('出错了：' + error);
} finally {
    console.log('finally');
}

console.log('r1 = ' + r1); // r1应为undefined
console.log('r2 = ' + r2); // r2应为undefined

console.log('******');

try {
    r1 = s.length;
    r2 = 100
} catch (error) {
    console.log('出错了：' + error);
}
console.log('main');

console.log('******');

let r, n, s1;
try {
    s1 = 's';
    n = parseInt(s1);
    if (isNaN(n)) {
        throw new Error('输入错误');
    }
    // 计算平方:
    r = n * n;
    console.log(n + ' * ' + n + ' = ' + r);
} catch (e) {
    console.log('出错了：' + e);
}

function main(s) {
    console.log('main begin...');
    try {
        foo(s);
    } catch (error) {
        console.log('出错了：' + error);
    }
    console.log('main end')
}

function foo(s) {
    console.log('foo begin...');
    bar(s);
    console.log('foo end');
}

function bar(s) {
    console.log('bar begin...');
    console.log('length = ' + s.length);
    console.log('bar end');
}

// 如果在一个函数内部发生了错误，它自身没有捕获，错误就会被抛到外层调用函数，
// 如果外层函数也没有捕获，该错误会一直沿着函数调用链向上抛出，直到被JavaScript引擎捕获，代码终止执行。
main(null);
