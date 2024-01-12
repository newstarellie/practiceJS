// 使用 call 方法調用 fn 函數，並確保 this 指向 family，並傳入兩個參數 3 和 4。

// node call.js
let family = {
  num1: 1,
  num2: 2
}

function fn(...para) {
  console.log(this, para);
  this.num1 = para[0]
  this.num2 = para[1]
  console.log(this)
}

// simple call
// fn(family, 3, 4)

// 使用call 傳入自己的this
fn.call(family, 3, 4)

// 查看fn 是否有改變family當中的值
console.log(family)
