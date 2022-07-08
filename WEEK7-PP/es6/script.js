// // 1
// function capitalize(arr) {
//   let newArr = [];
//   arr.forEach((el) => {
//     if (typeof el === "string") {
//       newArr.push(el[0].toUpperCase() + el.slice(1));
//     }
//   });
//   return newArr;
// }

// console.log(capitalize(["hello", "there", "ES", 6]));

// 2

///a

// function tax(arr) {
//   const taxRate = 20;
//   return arr.map((obj) => (obj.price * taxRate) / 100);
// }

// console.log(
//   tax([
//     { name: "Banana", price: 120 },
//     { name: "Orange", price: 100 },
//   ])
// );

///b
// function taxFull(arr) {
//   const taxRate = 20;
//   return arr.map((obj) => {
//     obj.price = obj.price + (obj.price * taxRate) / 100;
//     return obj;
//   });
// }

// console.log(
//   taxFull([
//     { name: "Banana", price: 120 },
//     { name: "Orange", price: 100 },
//   ])
// );

// 3
// function increase(arr, n = 1) {
//   return arr.map((el) => el + n);
// }

// console.log(increase([4, 6, 11, -9, 2.1], 3));

// 4
// function fillterEven(arr) {
//   return arr.filter((el) => el % 2 === 0);
// }

// console.log(fillterEven([6, 11, 9, 0, 3]));

// 5
// function filter(arr) {
//   return arr.filter((el) => {
//     const newEl = el.toLowerCase();
//     return newEl.indexOf("js") !== -1;
//   });
// }

// console.log(
//   filter(["compiler", "transpiler", "babel.js", "JS standard", "linter"])
// );

// 6

// function filterInteger(arr) {
//   return arr.filter((el) => {
//     return el === parseInt(el);
//   });
// }

// console.log(filterInteger([1.6, 11.34, 9.23, 7, 3.11, 8]));

// 7

// function filterFive(arr) {
//   return arr.filter((el) => {
//     return Number.isInteger(el) === true && String(el).indexOf("5") !== -1;
//   });
// }

// console.log(filterFive([23, 11.5, 9, "abc", 45, 28, 553]));

// 8
// function greaterTen(arr) {
//   const newArr = [];
//   arr.forEach((el, i) => {
//     if (el >= 10) newArr.push(i);
//   });
//   return newArr;
// }

// console.log(greaterTen([1.6, 11.34, 29.23, 7, 3.11, 18]));

// 10

// function checkPositive(arr) {
//   var tf = arr.every((el) => el >= 0);
//   return tf === true ? "yes" : "no";
// }

// console.log(checkPositive([3, -12, 4, 11]));

// 11
// function product(arr) {
//   return arr.reduce((acc, el) => acc * el, 1);
// }

// console.log(product([2, 8, 3]));

// 12
// function max(arr) {
//   return Math.max(...arr);
// }

// console.log(max([2, 7, 3, 8, 5.4]));

// 9
// const persons = [
//   { name: "Pera", age: 18 },
//   { name: "Igor", age: 41 },
//   { name: "Mitar", age: 29 },
// ];

// function older25(arr) {
//   const newArr = [];
//   arr.forEach((obj) => {
//     if (obj.age > 25) newArr.push(obj.name);
//   });
//   return newArr;
// }

// console.log(older25(persons));

// function older40(arr) {
//   return arr.some((el) => el.age > 40);
// }

// console.log(older40(persons));

// function older20(arr) {
//   return arr.every((el) => el.age > 20);
// }

// console.log(older20(persons));
