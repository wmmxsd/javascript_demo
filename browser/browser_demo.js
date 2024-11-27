/**
 * 浏览器对象
 * */

//window:表示一个包含 DOM 文档的窗口，其document属性指向窗口中载入的DOM文档
console.log("🚀 ~ window.name:", window.name);
console.log(
  `window.innerHeight:${window.innerHeight}, window.innerWidth:${window.innerWidth}`
);
console.log(
  `window.outerHeight:${window.outerHeight}, window.outerWidth:${window.outerWidth}`
);
console.log(
  "🚀 ~ window.frames:",
  window.frames,
  "size:",
  window.frames.length
);
console.log("🚀 ~ window.document:", window.document);
console.log("🚀 ~ window.Event:", window.Event);
console.log("🚀 ~ window.history:", window.history);
console.log("🚀 ~ window.location:", window.location);

/**
 * 获取指定frame中的指定id的元素
 */
function getElementInFrameById(frameId, domId) {
  // 获取iframe
  var frame = top.frames[frameId];

  // 检查editAclPolicyUIFrame是否存在
  if (frame) {
    return null;
  }

  // 获取iframe中的所有iframe元素
  var iframes = frame.document.querySelectorAll("iframe");

  // 遍历所有iframe元素
  for (var i = 0; i < iframes.length; i++) {
    // 获取每个iframe的document
    // contentDocument属性返回iframe元素的文档对象（Document），即iframe中加载的HTML页面
    // contentWindow属性返回iframe元素的窗口对象（Window），contentWindow.document则是通过contentWindow属性访问iframe的文档对象。
    var iframeContents =
      iframes[i].contentDocument || iframes[i].contentWindow.document;

    // 在iframe内容中找到ID为domId的元素
    return iframeContents.getElementById(domId);
  }
}

// navigator(浏览器的信息)
console.log("🚀 ~ navigator.clipboard:", navigator.clipboard);
console.log("🚀 ~ navigator.connection:", navigator.connection);
console.log("🚀 ~ navigator.cookieEnabled:", navigator.cookieEnabled);
console.log("🚀 ~ navigator.geolocation:", navigator.geolocation);
console.log("🚀 ~ navigator.language:", navigator.language);
console.log("🚀 ~ navigator.languages:", navigator.languages);
console.log("🚀 ~ navigator.storage:", navigator.storage);
console.log("🚀 ~ navigator.userAgent:", navigator.userAgent);

// location(表示其链接到的对象的位置（URL))
// var location = document.createElement("a");
console.log("🚀 ~ typeof location:", typeof location);
// location.href = "https://192.168.213.65:8080/TSIC?user=secadmin&pd=12d3d3sak4#sdfsdfsdfsdf";
console.log("🚀 ~ location.href:", location.href);
console.log("🚀 ~ location.protocol:", location.protocol);
console.log("🚀 ~ location.host:", location.host);
console.log("🚀 ~ location.hostname:", location.hostname);
console.log("🚀 ~ location.port:", location.port);
console.log("🚀 ~ location.pathname:", location.pathname);
console.log("🚀 ~ location.search:", location.search);
console.log("🚀 ~ location.hash:", location.hash);
console.log("🚀 ~ location.userAgent:", location.userAgent);
console.log("🚀 ~ location.username:", location.username);
console.log("🚀 ~ location.password:", location.password);
console.log("🚀 ~ location.origin:", location.origin);
// location.reload()
// location.assign('https://192.168.213.65:8080/TSIC?user=secadmin&pd=12d3d3sak4#sdfsdfsdfsdf')
console.log("🚀 ~ window.location:", window.location);
console.log("🚀 ~ document.location:", document.location);

// document
// Document 接口表示任何在浏览器中载入的网页，并作为网页内容的入口，也就是 DOM 树。
// DOM 树包含了像 <body>、<table> 这样的元素，以及大量其他元素。它向网页文档本身提供了全局操作功能，能解决如何获取页面的 URL，如何在文档中创建一个新的元素这样的问题。
console.log("🚀 ~ document.characterSet:", document.characterSet);
console.log("🚀 ~ document.title:", document.title);
console.log("🚀 ~ document.URL:", document.URL);
console.log(
  `🚀 ~ document.getElementById("h1_title"):`,
  document.getElementById("h1_title")
);
console.log(
  `🚀 ~ document.getElementsByClassName("container"[0]):`,
  document.getElementsByClassName("container")[0]
);
console.log(
  `🚀 ~ document.getElementsByName("li_0"[0]):`,
  document.getElementsByName("li_0")[0]
);
console.log(
  `🚀 ~ document.getElementsByTagName("blockquote"):`,
  document.getElementsByTagName("blockquote")
);
console.log(
  `🚀 ~ document.querySelector("#h1_title"):`,
  document.querySelector("#h1_title")
);
console.log(
  `🚀 ~ document.querySelector(".container"):`,
  document.querySelector(".container")
);
console.log(
  `🚀 ~ document.querySelectorAll("nav"):`,
  document.querySelectorAll("nav")
);

// 使用document更新dom
let title = document.querySelector("#h1_title");
title.textContent = "Javascript Web";
title.innerHTML = `<h1 id="h1_title">Awesome Javascript Website</h1>`;
title.style.color = "red";

// 使用document插入dom
let nav = document.querySelector("nav");
let a_test = document.createElement("a");
a_test.href = "#";
a_test.textContent = "test";

//添加到最后一个子节点
nav.appendChild(a_test);

//添加到指定节点的前面
nav.insertBefore(a_test, nav.querySelector("a:nth-child(2)"));

//删除节点
nav.removeChild(a_test);

let fileInput = document.getElementById("test-image-file"),
  info = document.getElementById("test-file-info"),
  preview = document.getElementById("test-image-preview");

fileInput.addEventListener("change", function () {
  preview.style.backgroundImage = "";
  if (!fileInput.value) {
    info.textContent = "没有选择文件";
    return;
  }

  let file = fileInput.files[0];

  if (
    file.type != "image/jpeg" &&
    file.type !== "image/png" &&
    file.type !== "image/gif"
  ) {
    info.textContent = "请选择jpeg、png和gif格式的文件";
    return;
  }

  info.innerHTML = `文件：${file.name}<br>大小：${file.size}<br>修改：${file.lastModifiedDate}`;

  let reader = new FileReader();
  //当文件读取操作成功完成时，这个事件处理器会被调用。
  reader.onload = function (e) {
    let data = e.target.result; // 'data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...'
    preview.style.backgroundImage = "url(" + data + ")";
  };
  // 以DataURL的形式读取文件:
  reader.readAsDataURL(file);
});

//fetch
/* const data = { username: "example" };

fetch("https://example.com/profile", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  }); */

//promise

// 输出log到页面:
function log(log_content) {
  let log_div = document.getElementById("test-promise-log");
  let p = document.createElement("p");
  p.innerHTML = log_content;
  log_div.appendChild(p);

  // 滚动到div的底部
  log_div.scrollTop = log_div.scrollHeight - log_div.clientHeight;
}

function test(resolve, reject) {
  let timeOut = Math.random() * 2;
  log("set timeout to: " + timeOut + " seconds.");
  setTimeout(function () {
    if (timeOut < 1) {
      log("call resolve()...");
      resolve("200 OK");
    } else {
      log("call reject()...");
      reject("timeout in " + timeOut + " seconds.");
    }
  }, timeOut * 1000);
}

new Promise(test)
  .then((result) => log("成功：" + result))
  .catch((reason) => log("失败：" + reason));

function add(input) {
  let result = input + input;
  return new Promise(function (resolve, reject) {
    log(`${input} + ${input} = ${result}`);
    resolve(result);
  });
}

function multiply(input) {
  let result = input * input;
  return new Promise(function (resolve, reject) {
    log(`${input} * ${input} = ${result}`);
    resolve(result);
  });
}

let p = new Promise(function (resolve, reject) {
  log("arithmetic begin...");
  resolve(555);
});

p.then(add)
  .then(multiply)
  .then(add)
  .then(multiply)
  .then((result) => {
    setTimeout(() => {
      log(`result = ${result}`);
    }, 1000);
  });

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "foo");
});
const promise3 = Promise.resolve(1);
const promise2 = "abc";
const promise4 = new Promise((resolve, reject) => {
  reject("is a error");
});

//当所有输入的 Promise 都被兑现时，返回的 Promise 也将被兑现（即使传入的是一个空的可迭代对象），并返回一个包含所有兑现值的数组。
//如果输入的任何 Promise 被拒绝，则返回的 Promise 将被拒绝，并带有第一个被拒绝的原因。
/* Promise.all([promise1, promise2, promise3])
  .then((result) => console.log(`Promise.all([promise1, promise2, promise3]): ${result}`))
  .catch((error) => console.warn(error));
Promise.all([promise1, promise2, promise3, promise4])
  .then((result) => console.log(result))
  .catch((error) => console.warn(`Promise.all([promise1, promise2, promise3, promise4]): ${error}`));

//当所有输入的 Promise 都已敲定时（包括传入空的可迭代对象时），返回的 Promise 将被兑现，并带有描述每个 Promise 结果的对象数组。
Promise.allSettled([promise1, promise2, promise3, promise4]).then((result) => {
  result.forEach((r) => console.log(`Promise.allSettled([promise1, promise2, promise3, promise4]): ${r}`));
});

//第一个返回的promise就是最终结果
Promise.race([promise1, promise2, promise3, promise4])
  .then((result) => console.log(`Promise.race([promise1, promise2, promise3, promise4]):${result}`))
  .catch((error) => console.warn(`Promise.race([promise1, promise2, promise3, promise4]):${error}`));

//当输入的任何一个 Promise 兑现时，这个返回的 Promise 将会兑现，并返回第一个兑现的值。
//当所有输入 Promise 都被拒绝（包括传递了空的可迭代对象）时，它会以一个包含拒绝原因数组的 AggregateError 拒绝
Promise.any([promise1, promise2, promise3, promise4])
  .then((result) => console.log(`Promise.any([promise1, promise2, promise3, promise4]):${result}`))
  .catch((error) => console.warn(`Promise.any([promise1, promise2, promise3, promise4]):${error}`));

// async函数
// AsyncFunction 对象为异步函数提供方法。在 JavaScript 中，每个异步函数实际上都是一个 AsyncFunction 对象。
// async函数返回一个Promise对象
function resoveAfter2Seconds() {
  return new Promise((resolve, reject) => setTimeout(resolve, 2000, 'resolved'))
}

async function asyncCall() {
  console.log('asyncCall calling...')
  const result = await resoveAfter2Seconds()
  console.log(`asyncCall result: ${result}`)
}

asyncCall() */

function resolveAfter2Seconds() {
  console.log("开始较慢兑现的 promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("较慢兑现的 promise 完成了");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("开始较快兑现的 promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("较快兑现的 promise 完成了");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("== sequentialStart 开始 ==");

  // 1. 启动一个计时器，并在计时器完成后打印结果
  const slow = resolveAfter2Seconds();
  console.log(await slow);

  // 2. 等待前一个计时器完成后，启动下一个计时器
  const fast = resolveAfter1Second();
  console.log(await fast);

  console.log("== sequentialStart 结束 ==");
}

async function sequentialWait() {
  console.log("== sequentialWait 开始 ==");

  // 1. 启动两个计时器，互不等待
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();

  // 2. 等待较慢的计时器完成后，打印结果
  console.log(await slow);
  // 3. 等待较快的计时器完成后，打印结果
  console.log(await fast);

  console.log("== sequentialWait 结束 ==");
}

async function concurrent1() {
  console.log("== concurrent1 开始 ==");

  // 1. 并发启动两个计时器，并等待它们完成
  const results = await Promise.all([
    resolveAfter2Seconds(),
    resolveAfter1Second(),
  ]);
  // 2. 同时打印两个计时器的结果
  console.log(results[0]);
  console.log(results[1]);

  console.log("== concurrent1 完成 ==");
}

async function concurrent2() {
  console.log("== concurrent2 开始 ==");

  // 1. 并发启动两个计时器，并在其中任意一个完成后立即打印对应结果
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
  console.log("== concurrent2 结束 ==");
}

sequentialStart(); // 2 秒后，打印“slow”，然后再过 1 秒，打印“fast”

// 等待上面的代码执行完毕
setTimeout(sequentialWait, 4000); // 2 秒后，打印“slow”，然后打印“fast”

// 再次等待
setTimeout(concurrent1, 7000); // 跟 sequentialWait 一样

// 再次等待
setTimeout(concurrent2, 10000); // 1 秒后，打印“fast”，然后过 1 秒，打印“slow”
