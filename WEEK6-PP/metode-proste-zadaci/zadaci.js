/// 1
var duplicate = function (arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    newArr.push(arr[i]);
  }
  return newArr;
};

console.log(duplicate([1, 2, 3, 4]));

/// 2  Dobra Forica
var remove = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  arr.sort((a, b) => a - b);
  console.log(arr);
};

remove([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);

/// 3
// a
function check(arr) {
  if (arr.length % 2 === 0) return false;
  else return true;
}

console.log(check([1, 2, 9, 2, 1, 5]));

// b
function lessThanMiddle(arr) {
  if (arr.length % 2 === 0) {
    return "Error has happened!";
  } else {
    var middle = arr[Math.floor(arr.length / 2)];
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < middle) counter++;
    }
    return counter;
  }
}

console.log(lessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

/// 4
function findSmallest(arr) {
  var min = Math.min(...arr);
  var index = arr.lastIndexOf(min);
  return { minValue: min, minLastIndex: index };
}

console.log(findSmallest([1, 4, -2, 11, 8, 1, -2, 3]));

/// 5

//a
function findAll(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) arr.splice(i, 1);
  }
  return arr;
}

findAll([2, 3, 8, -2, 11, 4], 6);

//b
function pro(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].slice(0, 3) === "pro" || arr[i].slice(0, 3) === "Pro") {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(pro(["JavaScript", "Programming", "fun", "product"]));

//c
function callBackF(arr, func, num) {
  return func(arr, num);
}

console.log(callBackF([2, 3, 8, -2, 11, 4], findAll, 6));

/// 6
//a
var products = [
  { name: "apples", price: 100 },
  { name: "milk", price: 80 },
  { name: "bananas", price: 150 },
];

//b
function totalPrice(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i].price;
  }
  return sum;
}

console.log(totalPrice(products));

//c
function avrg(arr) {
  var averagePrice = 0;
  for (var i = 0; i < arr.length; i++) {
    averagePrice += arr[i].price;
  }
  return averagePrice / arr.length;
}

console.log(avrg(products));

//d
function mostExpensive(arr) {
  var most = arr[0].price;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].price > most) {
      most = arr[i].name.toUpperCase();
    }
  }
  return most;
}

console.log(mostExpensive(products));

/// 7
//a
function allCap(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}

// console.log(allCap("HELLo"));

//b
function anyDigits(str) {
  var digits = "0123456789";
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < digits.length; j++) {
      if (str[i] === digits[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(anyDigits("gdasdashj"));

//c
function isHexa(str) {
  var digits = "0123456789abcdef";
  var counter = 0;

  if (str[0] === "#" && str.length === 7) {
    for (var i = 1; i < str.length; i++) {
      for (var j = 0; j < digits.length; j++) {
        if (str[i] === digits[j]) {
          counter++;
        }
      }
    }
  }
  if (counter === 6) {
    return true;
  } else {
    return false;
  }
}
console.log(isHexa("#f1c58s"));

/// 11
//a
function random() {
  return Math.round(5 + Math.random() * 15);
}

console.log(random());

//b
function random50() {
  return Math.round(50 + Math.random() * 50);
}

console.log(random50());

//c

function nesto(num, func) {
  var newArr = [];
  randomNum = func();
  newArr.push(num);
  newArr.push(randomNum);
  return newArr;
}
console.log(nesto(5, random50));

/// 1
var duplicate = function (arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    newArr.push(arr[i]);
  }
  return newArr;
};

console.log(duplicate([1, 2, 3, 4]));

/// 2  Dobra Forica
var remove = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  arr.sort((a, b) => a - b);
  console.log(arr);
};

remove([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);

/// 3
// a
function check(arr) {
  if (arr.length % 2 === 0) return false;
  else return true;
}

console.log(check([1, 2, 9, 2, 1, 5]));

// b
function lessThanMiddle(arr) {
  if (arr.length % 2 === 0) {
    return "Error has happened!";
  } else {
    var middle = arr[Math.floor(arr.length / 2)];
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < middle) counter++;
    }
    return counter;
  }
}

console.log(lessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

/// 4
function findSmallest(arr) {
  var min = Math.min(...arr);
  var index = arr.lastIndexOf(min);
  return { minValue: min, minLastIndex: index };
}

console.log(findSmallest([1, 4, -2, 11, 8, 1, -2, 3]));

/// 5

//a
function findAll(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) arr.splice(i, 1);
  }
  return arr;
}

findAll([2, 3, 8, -2, 11, 4], 6);

//b
function pro(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].slice(0, 3) === "pro" || arr[i].slice(0, 3) === "Pro") {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(pro(["JavaScript", "Programming", "fun", "product"]));

//c
function callBackF(arr, func, num) {
  return func(arr, num);
}

console.log(callBackF([2, 3, 8, -2, 11, 4], findAll, 6));

/// 6
//a
var products = [
  { name: "apples", price: 100 },
  { name: "milk", price: 80 },
  { name: "bananas", price: 150 },
];

//b
function totalPrice(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i].price;
  }
  return sum;
}

console.log(totalPrice(products));

//c
function avrg(arr) {
  var averagePrice = 0;
  for (var i = 0; i < arr.length; i++) {
    averagePrice += arr[i].price;
  }
  return averagePrice / arr.length;
}

console.log(avrg(products));

//d
function mostExpensive(arr) {
  var most = arr[0].price;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].price > most) {
      most = arr[i].name.toUpperCase();
    }
  }
  return most;
}

console.log(mostExpensive(products));

/// 7
//a
function allCap(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}

// console.log(allCap("HELLo"));

//b
function anyDigits(str) {
  var digits = "0123456789";
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < digits.length; j++) {
      if (str[i] === digits[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(anyDigits("gdasdashj"));

//c
function isHexa(str) {
  var digits = "0123456789abcdef";
  var counter = 0;

  if (str[0] === "#" && str.length === 7) {
    for (var i = 1; i < str.length; i++) {
      for (var j = 0; j < digits.length; j++) {
        if (str[i] === digits[j]) {
          counter++;
        }
      }
    }
  }
  if (counter === 6) {
    return true;
  } else {
    return false;
  }
}
console.log(isHexa("#f1c58a"));

//d
function belongsTo(num) {
  return num >= 1900 && num <= 2018 ? true : false;
}

console.log(belongsTo(2019));

//e
function vaidator() {
  return {
    stringValidator: allCap,
    passwordValidator: anyDigits,
    colorValidator: isHexa,
    yearValidator: belongsTo,
  };
}

var metode = vaidator();
console.log(metode.yearValidator(1955));

/// 8  !!!!!!!!!!!!!!!!!!!!
function daysTillBday(dateofBirth) {
  var today = new Date().getTime();
  var danR = dateofBirth.split(" ").slice(0, 1);
  var mesec = dateofBirth.split(" ").slice(1, 2);
  var rodj = new Date(`${danR} ${mesec} 2022`).getTime();
  var razlika;
  if (today < rodj) {
    razlika = rodj - today;
    return Math.ceil(razlika / 1000 / 60 / 60 / 24) + "days";
  } else {
    razlika = rodj - today;
    return `${365 + Math.ceil(razlika / 1000 / 60 / 60 / 24)} days`;
  }
}

console.log(daysTillBday("8 June"));

/// 9

function calculateTime(date, date2) {
  var departureArr = date.split(":");
  var arrivalArr = date2.split(":");
  var departure =
    Number(departureArr[0]) * 60 * 60 +
    Number(departureArr[1]) * 60 +
    Number(departureArr[2]);

  var arrival =
    Number(arrivalArr[0]) * 60 * 60 +
    Number(arrivalArr[1]) * 60 +
    Number(arrivalArr[2]);

  var diff = arrival - departure;
  var hours = Math.floor(diff / 3600);
  var minutes = Math.floor((diff - hours * 3600) / 60);
  var seconds = diff - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return hours + ":" + minutes + ":" + seconds;
}

console.log(calculateTime("8:22:13", "11:43:22"));

/// 12
function shuffle(arr) {
  for (var i = 0; i < arr.length; i++) {
    var index = Math.round(Math.random() * arr.length - 1);
    arr[i] = arr[index];
  }
  return arr;
}

console.log(shuffle([3, 6, 11, 2, 9, 1]));
