// 在嚴格模式下，使用 call 方法調用 callStrict 函數，並確保 this 為 undefined，並傳入兩個參數 '小明' 和 '杰倫'。
// node callStrict.js

// 'use strict';

function callStrict(...para) {
  console.log(this, typeof this, para);
}

// 使用call 傳入自己的this
callStrict.call(1, '小明', '杰倫')
callStrict.call(undefined, '小明', '杰倫')

