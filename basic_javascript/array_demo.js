/** 数组 */
var arr = [1, 10, 5, 6, 7];

arr[5] = 11;
console.log(arr);
arr.push(12);
console.log(arr);
arr.unshift('a');
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

console.log(arr.slice(0, arr.length - 1));
console.log(arr.slice(0, arr.length));
console.log(arr);

arr.splice(arr.length - 1, 1);
console.log(arr);

console.log(arr.includes(10));
console.log(arr.indexOf(7));
console.log(arr.lastIndexOf(7));
console.log(arr.join(','));

// 高阶函数
arr.forEach((ele, index) => {
    console.log(index, ele);
});

console.log('arr.every((ele, index) => ele >= 1):', arr.every((ele, index) => ele >= 1));
console.log('arr.some((ele, index) => ele > 10):', arr.some((ele, index) => ele >= 10));
console.log('arr.find((ele, index) => ele >= 5):', arr.find((ele, index) => ele >= 5));
console.log('arr.findIndex((ele, index) => ele >= 5):', arr.findIndex((ele, index) => ele >= 5));
console.log('arr.map((ele, index) => ele + 1):', arr.map((ele, index) => ele + 1));
console.log('arr.reverse():', arr.reverse());
console.log('arr.sort():', arr.sort());
console.log('arr.sort((a, b) => a - b):', arr.sort((a, b) => a - b));
console.log('arr.sort((a, b) => b - a):', arr.sort((a, b) => b - a));
console.log('arr.sort((a, b) => b - a):', arr.reduce((accumulator, currentValue) => accumulator + currentValue));

// 解构赋值
let [a, b, c] = [1, 2, 3];
console.log(`a = ${a}, b = ${b}, c = ${c}`);

