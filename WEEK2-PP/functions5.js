// 7.

function strings(arr) {
  var newString = "";
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i].length >= 2) {
      newString += arr[i][0] + arr[i][1];
    }
  }
  return newString;
}

console.log(strings(["m", "anne", 12, "steve", "joe"]));

// 9.

function comb() {
  var res = "";
  for (var i = 1; i < 8; i++) {
    for (var j = 1; j < 8; j++) {
      if (i !== j) {
        res += "(" + i + "," + j + ")";
      }
    }
  }
  return res;
}

console.log(comb());

// 1.

function switchPlaces(arr) {
  var min = arr[0];
  var max = arr[0];
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === min) {
      newArr[newArr.length] = max;
    } else if (arr[i] === max) {
      newArr[newArr.length] = min;
    } else {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

console.log(switchPlaces([3, 500, 12, 149, 53, 414, 1, 19]));

// 2.

function makeNewArray(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[newArr.length] = arr[i] / 2 + 5;
    if (newArr[i] === 0) {
      newArr[i] = 20;
    }
  }

  return newArr;
}

console.log(makeNewArray([3, 500, -10, 149, 53, 414, 1, 19]));

// 3.

function studentsGrades(arr1, arr2) {
  var newString = "";
  var grade = "failed the exam";

  for (var i = 0; i < arr1.length; i++) {
    if (arr2[i] > 51 && arr2[i] < 60) grade = "earned 6";
    if (arr2[i] > 61 && arr2[i] < 70) grade = "earned 7";
    if (arr2[i] > 71 && arr2[i] < 80) grade = "earned 8";
    if (arr2[i] > 81 && arr2[i] < 90) grade = "earned 9";
    if (arr2[i] > 91 && arr2[i] < 100) grade = "earned 10";

    newString += `${arr1[i]} acquired ${arr2[i]} points and ${grade}. `;
  }

  return newString;
}

console.log(
  studentsGrades(
    ["Michael", "Anne", "Frank", " Joe", "John", "David", "Mark", "Bill"],
    [50, 39, 63, 72, 99, 51, 83, 59]
  )
);

// 4.

function sortedArr(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[newArr.length] = arr[i] * 2;
  }

  return newArr.sort((a, b) => a - b);
}

console.log(sortedArr([13, 11, 15, 5, 6, 1, 8, 12]));

// 5.

function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortDescending([13, 11, 15, 5, 6, 1, 8, 12]));

// 6.

function crazyNumber() {
  var newNum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      newNum += i;
    } else if (i % 2 !== 0 && i <= 500) {
      newNum -= i;
    }
  }
  return newNum * 12.5;
}

console.log(crazyNumber());

// 8.

function reversed(string) {
  var newStr = "";
  for (var i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }

  return newStr;
}

console.log(reversed("Belgrade Institute of Technology"));

// 10. ovde je moglo i do num / 2

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(6));

// 11.
function isPalindrome(string) {
  for (var i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) return false;
  }
  return true;
}

console.log(isPalindrome("anavolwimilovana"));

// 12.

function greatestDivisor(num1, num2) {
  var newNum;

  for (var i = 1; i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      newNum = i;
    }
  }
  return newNum;
}

console.log(greatestDivisor(192, 42));
