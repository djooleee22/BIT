// 1.

function checkForFive(string) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "5") return true;
  }
  return false;
}

console.log(checkForFive("dbas859gakjs"));

// 2.

function replaceJS(string) {
  var newStr = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "J" && string[i + 1] === "S") {
      newStr += "**";
    } else if (string[i] === "S" && string[i - 1] === "J") {
      newStr += "";
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}

console.log(replaceJS("Programming in JS is super interesting."));

// 3.

function insertCharacter(str, num, char) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (i === num - 1) {
      newStr += char;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(insertCharacter("Goo  morning", 4, "d"));

// 4.

function deleteCharacter(str, num) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (i === num) {
      newStr += "";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(deleteCharacter("AmaYZing morning", 3));

// 5.

function deleteFromArr(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 0) newArr[newArr.length] = arr[i];
  }
  return newArr;
}

console.log(deleteFromArr([3, 5, 1, 8, 90, -4, 23, 1, 67]));

// 6.

function doubleValues(arr, num, num2) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (i >= num && i <= num2) {
      newArr[newArr.length] = arr[i] * 2;
    } else {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

console.log(doubleValues([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

// 7.

function checkForEvery(arr1, arr2) {
  var check = "";
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        check += "T";
        break;
      }
    }
  }

  if (check.length === arr1.length) return true;
  else return false;
}

console.log(checkForEvery([3, 4, 1, 3], [8, 5, 3, 1, 11, 4, 3]));

// 8.
