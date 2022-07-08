// /// 1
// function reverse(num) {
//   var newStr = String(num)
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");

//   return +newStr;
// }

// console.log(reverse(12345));

// /// 2
// function alphabet(str) {
//   return str.toLowerCase().split("").sort().join();
// }

// console.log(alphabet("Webmaster"));

// /// 3

// function alphabet2(string) {
//   var elem;
//   var newArr = [];
//   string.split(" ").forEach((el) => {
//     var word = el.slice(1).split("").sort().join("");
//     elem = `${el[0]}${word}`;
//     newArr.push(elem);
//   });
//   return newArr.join(" ");
// }

// console.log(alphabet2("Republic Of Serbia"));

/// 4

// function splitAString(str) {
//   return str.split(" ");
// }

// console.log(splitAString("John Snow"));

// // 5.
// function neka(str) {
//   var arr = str.split(" ");
//   return `${arr[0]} ${arr[1][0]}.`;
// }

// console.log(neka("Djordje Antonijevic"));

/// 6 Bitno!!!!!!!!!!!!!!!!!!!!!!!!!!!
function nekaFunkc(str1, str2, side) {
  if (side === "r") {
    var a = str1.split("").slice(str2.length).join("");
    return `${str2}${a}`;
  } else {
    var a = str1
      .split("")
      .slice(0, str1.length - str2.length)
      .join("");
    return `${a}${str2}`;
  }
}

console.log(nekaFunkc("00000000", "123", "l"));

//
// 7.
// function capitalize(str) {
//   var arr = str.split(" ");
//   return `${arr[0][0].toUpperCase()}${str.slice(1)}`;
// }

// console.log(capitalize("js string exercies"));

/// 8.
// function hide(str) {
//   var firstPart = str.slice(0, 6);
//   var monkey = str.indexOf("@");
//   var secondPart = str.slice(monkey);
//   return `${firstPart}...${secondPart}`;
// }

// console.log(hide("antonijevic.dj1@gmail.com"));

// /// 9.
// function weird(str) {
//   var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var LOWER = "abcdefghijklmnopqrstuvwxyz";

//   var arr = str.split("");
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < UPPER.length; j++) {
//       if (arr[i] === UPPER[j]) {
//         arr[i] = LOWER[j];
//       } else if (arr[i] === LOWER[j]) {
//         arr[i] = UPPER[j];
//       }
//     }
//   }
//   return arr.join("");
// }

// console.log(weird("The Quick Brown Fox"));
