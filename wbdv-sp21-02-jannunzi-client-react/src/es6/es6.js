let myInteger = 123
let myString = "QWE"
let someObject = {
  anIntegerProp: 123,
  aStringProp: "123123",
  anObjectProperty: {
    anotherObjectProp: {q: 111, w: 222},
    anotherArrayProp: [321, 432, 543]
  },
  aNumberArrayProp: [1, 2, 3],
  anObjectArrayProp: [
    {a: 123, b: 234}, {a: 321, b: 432}]
}

// console.log(someObject.anObjectProperty.anotherObjectProp.q)
console.log(someObject["anObjectProperty"].anotherObjectProp.q)

let anotherObject = {}
anotherObject["newProp"] = 123
console.log(anotherObject.newProp)

function addEs5(a, b) {
  return a + b
}
let ewq = addEs5(2,3)
console.log(ewq)

// const addEs6 = (a, b) => {
//   console.log(a, b)
//   return a + b
// }
const addEs6 = (a, b) => a + b

ewq = addEs6(2, 3)
console.log(ewq)

// const square = (b) => b * b
// const square = b => b * b
// ewq = square(4)
// console.log(ewq)


let all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let even = all.filter((i) => {
//   return i % 2 === 0
// })
// let even = all.filter(function (i) {
//   return i % 2 === 0
// })
let even = all.filter(i => i % 2 === 0)
let odd  = all.filter(i => i % 2 !== 0)
console.log(all, even, odd)

all = [1, 2, 3, 4]
let square = all.map(i => i * i)
console.log(all, square)
