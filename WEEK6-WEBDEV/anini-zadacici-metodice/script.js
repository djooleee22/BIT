/// 1.
function change(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[newArr.length] = arr[i] * 3 - 5;
  }
  return newArr;
}

console.log(change([0, 7, 3]));

/// 2.
function nadji(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      return arr[i];
    }
  }
}

console.log(nadji([10, 13, 4, 1, 0, -4]));

/// 3.
function svi(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      return false;
    }
  }
  return true;
}

console.log(svi([10, 13, 24, 11, 10, 0, 40]));

/// 4.

function paran(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}

console.log(paran([9, 5, 1, 5]));

/// 5.

function nekaFunkcija(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && typeof arr[i] === "number") {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

console.log(nekaFunkcija([10, "Pera", 13, 4, 1, 0, undefined, -4]));
