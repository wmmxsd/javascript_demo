/** 函数重点 */
// apply和call
function getAge() {
    return new Date().getFullYear() - this.birth;
}

let xiaoming = {
    name: '小明',
    birth: 1994,
    age: getAge
}

// 反射
console.log(xiaoming.age());
console.log(getAge.apply(xiaoming));
console.log(getAge.call(xiaoming));

// apply和call的区别仅在于apply的argArray参数类型为数组而call的argArray参数类型为可变参数
console.log(Math.max.apply(null, [5, 1, 7]));
console.log(Math.max.call(null, 5, 1, 7));

// 装饰器
let count = 0;
function add(x, y) {
    return x * y;
}

let oldAdd = add;

add = (x, y) => {
    console.log(`add()已执行${++count}次`);
    return oldAdd.apply(null, [x, y]);
}

console.log(add(3, 4));
console.log(add(3, 4));
console.log(add(3, 4));

// 箭头函数
let f_arrow = (a, b) => ({
    a: a,
    b: b
}) 
const f_a = f_arrow(1, 2);
console.log(f_a);
console.log(f_a.a, f_a);

const email = "test@example.com";
const password = 'hello123';

/** 
 * 标签函数
 * @param {*} strings 字符串数组
 * @param {...*} exps 模板字符串中${x}中的值的数组
*/
function sql(strings, ...exps) {
    console.log(`SQL: ${strings.join('?')}`);
    console.log(`SQL parameters: ${JSON.stringify(exps)}`);
    return {
        name: '小明',
        age: 20
    };
}

console.log(sql`SELECT * FROM users WHERE email=${email} AND password=${password}`);


// 生成器
function* next_id() {
    let id = 1;
    // 必须加一个循环条件让yield一直能够执行。
    while(true) {
        // 遇到yield关键字返回id然后暂停。使用next()方法该函数继续执行。
        // 生成器函数的好处时是可以保持状态
        yield id;
        id ++
    }
}

// 测试:
let x, pass = true, g = next_id();
for (x = 1; x < 100; x ++) {
    if (g.next().value != x) {
        pass = false;
        console.log('测试失败!');
        break;
    }
}
if (pass) {
    console.log('测试通过!');
}




