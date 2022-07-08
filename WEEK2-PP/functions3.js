"use strict";

// 1.

function insertString(string, stringTwo, num = 1) {
  var newString = "";
  if (num === 1) {
    newString = stringTwo + " " + string;
    return newString;
  } else {
    for (var i = 0; i < string.length; i++) {
      if (i < num) {
        newString += string[i];
      } else if (i === num) {
        newString += stringTwo + " " + string[i];
      } else {
        newString += string[i];
      }
    }
  }
  return newString;
}

console.log(insertString("My random string", "JS", 10));

// 2. Write a program to join all elements of the array into a string skipping elements that are
// undefined, null, NaN or Infinity.

function joinAll(arr) {
  var newStr = "";
  for (var i = 0; i < arr.length; i++) {
    if (
      !isNaN(arr[i]) &&
      arr[i] !== undefined &&
      arr[i] !== null &&
      arr[i] !== Infinity
    ) {
      newStr += arr[i];
    }
  }
  return newStr;
}

console.log(joinAll([NaN, 0, 15, false, -22, "", undefined, 47, null]));

// 3.

function filterFalsy(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!!arr[i] !== false) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

console.log(filterFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]));

// 4.
function reverse(number) {
  var numToStr = "" + number;
  var newNumber = "";
  for (var i = numToStr.length - 1; i >= 0; i--) {
    newNumber += numToStr[i];
  }
  return +newNumber;
}

console.log(reverse(12345));

// 5.
function getLast(arr, n = 1) {
  var newStr = "";
  var newArr = [];

  if (n === 1) {
    newStr = arr[arr.length - 1];
    return newStr;
  } else {
    for (var i = arr.length - 1; i >= arr.length - n; i--) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

console.log(getLast([7, 9, 0, -2, 6], 4));

// 6.

function createNumber(num, something = null) {
  var newArr = [];

  for (var i = 0; i < num; i++) {
    newArr[newArr.length] = something;
  }
  return newArr;
}

console.log(createNumber(15, "none"));

// 8.

function findWord(string, word) {
  var counter = 0;
  var newWord = "";

  for (var i = 0; i < string.length; i++) {
    if (string[i] === word[0]) {
      for (var j = 0; j < word.length; j++) {
        newWord += string[i + j];
        if (newWord === word) {
          counter++;
          newWord = "";
        }
      }
    }
  }
  return `${word} was found ${counter} times`;
}

console.log(findWord("The quick brown fox quick", "quick"));

// 9.

function hideEmail(string) {
  var newEmail = "";
  var prepisuj = true;

  for (var i = 0; i < string.length; i++) {
    //

    if (i === 3) {
      prepisuj = false;
      newEmail += "...";
    }

    if (string[i] === "@") prepisuj = true;

    //

    if (prepisuj) {
      newEmail += string[i];
    }
  }
  return newEmail;
}

console.log(hideEmail("mypersonalemail@bgit.rs"));

// 10.

function findMostFrequent(arr) {
  var mostFreq;
  var record = 1;
  var counter = 1;
  for (var i = 0; i < arr.length; i++) {
    counter = 1;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;

        if (record < counter) {
          record = counter;
          mostFreq = arr[i];
        }
      }
    }
  }
  return `${mostFreq} and ${record} !!!!!!!!!!!!!!!!!!!!!!!!!!!!`;
}

console.log(
  findMostFrequent([3, "a", "a", "a", 2, 3, 3, 3, 3, 3, "a", "a", 2, 4, 9, 3])
);

// 7.

function isPerfect(number) {
  var newNumber = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      newNumber += i;
    }
  }
  if (newNumber === number) return true;
  return false;
}

console.log(isPerfect(28));

////////////
function hideEmail(mail) {
  var hidden = "";
  var index;
  for (var i = 0; i < mail.length; i++) {
    if (mail[i] === "@") {
      index = i;
    }
  }
  if (index <= 3) {
    hidden = mail[0] + "...";
  } else {
    hidden = mail.substring(0, 3) + "...";
  }

  return hidden + mail.substring(index);
}

console.log(hideEmail("djantonijevic@gmail.com"));
