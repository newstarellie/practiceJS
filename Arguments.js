// 3. ** Arguments使用：**
//   - 寫一個函式`sum`，接受任意數量的參數，並計算它們的總和。使用`arguments`物件。

function sum(...arguments) {
  let total = 0
  arguments.forEach(function (item) {
    total += item
  })
  return total
}

console.log(sum(1, 2, 3, 5))


// node Arguments.js
