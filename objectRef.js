// 4. ** 物件傳參考特性：**
//   - 創建一個物件，例如`person`，包含姓名、年齡等屬性。寫一個函式 `modifyPerson` 接受一個物件並修改其中的屬性。
// 觀察原始物件是否被修改。


// 創建一個物件，例如`person`，包含姓名、年齡等屬性
let person = {
  name: "Ellie",
  age: "28"
}


// 寫一個函式`modifyPerson` 
function modifyPerson(obj) {
  console.log(obj)
  obj.name = "chen"
  console.log(obj)


}

modifyPerson(person)
console.log(person)