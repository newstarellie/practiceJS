// 使用 callStrict 函數進行簡易呼叫，並確保 this 保持為 undefined。
// node simpleCallStrict.js

'use strict';

function callStrict(...para) {
  console.log(this, typeof this, para);
}

callStrict(undefined, '小明', '杰倫')

