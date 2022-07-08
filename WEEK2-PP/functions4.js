// Write a program that checks if a given element e is in the array a.
// Input:  e = 3, a = [5, -4.2, 3, 7]

function checkElement(e, arr) {
  // var itsIn = false;
  for (var i = 0; i < arr.length; i++) {
    if (e === arr[i]) return "yes";
  }

  return "no";
}

console.log(checkElement(555, [5, -4.2, 555, 7]));

// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function multiply(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      newArr[i] = arr[i] * 2;
    } else {
      newArr[i] = arr[i];
    }
  }
  return newArr;
}

console.log(multiply([-3, 11, 5, 3.4, -8]));

// Write a program that finds the minimum of a given array and prints out its value and index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function findMin(arr) {
  var min = arr[0];
  var index;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  return `Minimum is ${min} and have a index of ${index}`;
}

console.log(findMin([4, 2, 2, -1, 6]));

// Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

function secondSmallest(arr) {
  var min = arr[0];
  var secondMin = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < secondMin && arr[i] > min) {
      secondMin = arr[i];
    }
  }
  return secondMin;
}

console.log(secondSmallest([4, 2, 2, -1, 6]));

// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function sumPositive(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumPositive([3, 11, -5, -3, 2]));

// Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same
// way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// Input array: [3, 4, 12, 8]
// 	Output: The array isn't symmetric.

function isSymetric(arr) {
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }
  return true;
}

console.log(isSymetric([2, 4, -2, 7, -2, 4, 2]));

// Write a program that intertwines two arrays. You can assume the arrays are of the same length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function interWine(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    newArr[newArr.length] = arr1[i];
    newArr[newArr.length] = arr2[i];
  }
  return newArr;
}

console.log(interWine([4, 5, 6, 2], [3, 8, 11, 9]));

// Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concatenate(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    newArr[newArr.length] = arr1[i];
  }

  for (var i = 0; i < arr2.length; i++) {
    newArr[newArr.length] = arr2[i];
  }

  return newArr;
}

console.log(concatenate([4, 5, 6, 2], [3, 8, 11, 9, 15, 888, 999]));

// Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]

function deleteEl(arr, e) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (e !== arr[i]) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

console.log(deleteEl([4, 6, 2, 8, 2, 2], 2));

// Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

function insertElement(arr, p, e) {
  var newArr = [];
  if (p > arr.length) return "The number is too big!";

  for (var i = 0; i < arr.length; i++) {
    if (i === p) {
      newArr[newArr.length] = e;
      newArr[newArr.length] = arr[i];
    } else {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

console.log(insertElement([2, -2, 33, 12, 5, 8], 16, 78));
