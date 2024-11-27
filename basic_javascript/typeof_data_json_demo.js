// typeof
console.log('typeof 1:', typeof 1);
console.log('typeof 123n:', typeof 123n);
console.log('typeof NaN:', typeof NaN);
console.log('typeof \'1\':', typeof '1');
console.log('typeof true:', typeof true);
console.log('typeof undefined:', typeof undefined);
console.log('typeof null:', typeof null);
console.log('typeof Math.pow:', typeof Math.pow);
console.log('typeof [1]:', typeof [1]);
console.log('typeof {1:1}:', typeof {1:1});

// Date
let now = new Date();
console.log("🚀 ~ now.getFullYear():", now.getFullYear())
console.log("🚀 ~ now.getMonth();:", now.getMonth())
console.log("🚀 ~ now.getDate();:", now.getDate())
console.log("🚀 ~ now.getHours();:", now.getHours())
console.log("🚀 ~ now.getMinutes();:", now.getMinutes())
console.log("🚀 ~ now.getSeconds();:", now.getSeconds())
console.log("🚀 ~ now.getMilliseconds();:", now.getMilliseconds())
console.log("🚀 ~ now.getTime();:", now.getTime())
console.log("🚀 ~ now.getTimezoneOffset():", now.getTimezoneOffset())
console.log("🚀 ~ now.getVarDate:", now.getVarDate)

console.log("🚀 ~ now.toJSON():", now.toJSON())
console.log("🚀 ~ now.toLocaleDateString():", now.toLocaleDateString())
console.log("🚀 ~ now.toLocaleTimeString():", now.toLocaleTimeString())
console.log("🚀 ~ now.toLocaleString():", now.toLocaleString())
console.log("🚀 ~ now.toDateString():", now.toDateString())
console.log("🚀 ~ now.toTimeString():", now.toTimeString())
console.log("🚀 ~ now.toString():", now.toString())
console.log("🚀 ~ now.toISOString():", now.toISOString())
console.log("🚀 ~ now.toUTCString():", now.toUTCString())

console.log("🚀 ~ new Date(2222, 5, 18, 20, 15, 59, 123).toISOString():", new Date(2222, 5, 18, 20, 15, 59, 123).toLocaleString())
console.log("🚀 ~ new Date(now.getTime()).toISOString():", new Date(now.getTime()).toLocaleString())

// JSON
console.log("******")
var xiaoming = {
    "name": "小明",
    "age": 14,
    "skills": [
      "JavaScript",
      "Java",
      "Python"
    ]
  }

function toUpper() {
return (key, val) => {
    if (typeof val == 'string') {
        return val.toUpperCase();
    }
    return val;
};
}

console.log("🚀 ~ JSON.stringify(xiaoming):", JSON.stringify(xiaoming))
console.log("🚀 ~ JSON.stringify(xiaoming,  ['age'], 2):", JSON.stringify(xiaoming, ['name', 'age'], 2))
console.log("🚀 ~ JSON.stringify(xiaoming, toUpper(), 2):", JSON.stringify(xiaoming, toUpper(), 2))
let d1 = JSON.parse('{"ip": "1.1.1.1", "mac": "22-23-23-23-23-23"}')
console.log('d1.ip:', d1.ip, 'd1.mac:', d1.mac)


