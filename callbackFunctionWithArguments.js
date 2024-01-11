// node callbackFunctionWithArguments.js

// 6. ** Callback Function with Arguments：**
//   - 創建一個函式`processData`，接受一個數字和一個回調函式。該回調函式應該以某種方式處理數字，例如平方或加倍。在 `processData` 函式中調用回調函式並返回結果。


// - 創建一個函式`processData`，接受一個數字和一個回調函式
function processData(num, callback) {
  let result = callback(num);
  console.log(result)
}


// 該回調函式應該以某種方式處理數字，例如平方或加倍。
function square(number) {
  return number * number
}

processData(100, square)