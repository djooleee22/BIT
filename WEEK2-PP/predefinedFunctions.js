// 1.
function nmbrs(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(isFinite(arr[i]) === true) {
            newArr[newArr.length] = parseFloat(arr[i]);
        }
    }
    return newArr;
}

console.log(nmbrs(["1", "21", undefined, "42", "1e+3", Infinity, 20]))


// 2.
function joinAll(arr) {
    var newStr = "";
    for(var i = 0; i < arr.length; i++) {
        if(isNaN(arr[i]) !== true && isFinite(arr[i]) === true && arr[i] !== null) {
            newStr += arr[i];
        }
    }
    return newStr;
}

console.log(joinAll([NaN, 0, 15, false, -22, "", undefined, 47, null]))

// 3.
// moglo je samo if(arr[i])..posto je to true
function filterFalsy(arr) {
    var newArr = [];

    for(var i = 0; i < arr.length; i++) {
        if(!!arr[i] !== false) {
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}

console.log(filterFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]))

// 4.

//ovde smo mogli samo parseint(arr[i]) === arr[i]
function numberOfIntegers(arr) {
    var counter = 0;
    for(var i = 0; i < arr.length; i++) {
        if(isNaN(arr[i]) !== true && isFinite(arr[i]) === true && !!arr[i] !== false && arr[i] !== null) {
            var x = parseInt(arr[i]);
            if(x === arr[i]) {
                counter++;
            }
        }
    }
    return counter;
}

console.log(numberOfIntegers([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]))

// 5.
//if(parsefloat(arr[i]) === arr[i] && parseFloat(arr[i]) !== parseInt(arr[i]))
function howManyFloats(arr) {
    var counter = 0;
  
    for (var i = 0; i < arr.length; i++) {
      if (
        arr[i] !== null &&
        !!arr[i] !== false &&
        isFinite(arr[i]) === true &&
        isNaN(arr[i]) !== true
      ) {
        var x = parseFloat(arr[i]);
        if (x % 1 !== 0) {
          counter++;
        }
      }
    }
    return counter;
  }
  
  console.log(howManyFloats([NaN, 23.1, 15.25, false, -22.5, "", 4, 7, null]));