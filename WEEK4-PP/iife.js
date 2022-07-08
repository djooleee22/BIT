// 1.
(function () {
  var arr = [4, 5, 11, 9];
  var tmp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = tmp;

  console.log(arr);
})();

// 2.

(function () {
  console.log(4 * 5);
})();

// 3.

(function () {
  var str = "promgraMming";
  var newStr = "";
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "m" || str[i] === "M") {
      newStr += "*";
      counter++;
    } else {
      newStr += str[i];
    }
  }
  console.log(`${newStr}---${counter}`);
})();

// 4.
function email(name, surname) {
  return (function () {
    return `${name}.${surname}@gmail.com`;
  })();
}

console.log(email("pera", "peric"));

// 6.

function successCallback() {
  console.log("Your password is great!+!");
}

function errorCallback() {
  console.log("Your password is invalid!");
}

function isValid(string, f1, f2) {
  var digitOK = false;
  for (var i = 0; i < string.length; i++) {
    if (
      string[i] == 0 ||
      string[i] == 1 ||
      string[i] == 2 ||
      string[i] == 3 ||
      string[i] == 4 ||
      string[i] == 5 ||
      string[i] == 6 ||
      string[i] == 7 ||
      string[i] == 8 ||
      string[i] == 9
    ) {
      digitOK = true;
      break;
    }
  }

  if (digitOK && string.length >= 6) {
    f1();
  } else {
    f2();
  }
}

isValid("jods2t", successCallback, errorCallback);

// 7.
function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

function filterEl(arr, f1) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (f1(arr[i])) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

console.log(filterEl([2, 8, 11, 4, 9, 3], isOdd));

// 5.

function convToDecimal(num) {
  return (function () {
    console.log(parseInt(num, 10));
  })();
}

convToDecimal(034);
