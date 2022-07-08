// 1.

function checkIsString(input){
    return typeof input === "string";
}

console.log(checkIsString("Hello"));


// 2.

function checkIsBlank(string){
    
      return string === " "
    }


console.log(checkIsBlank(""));

// 3.

function concat(string, num = 1) {
    var newString = "";
    if(typeof string === "string"){
        for(var i = 1; i <= num; i++){
            newString += string
        }
    }
    return newString;
}

console.log(concat("djole"))

// 4.

function howManyLetters(string, letter){
    var counter = 0;

    for(var i = 0; i < string.length; i++){
        if(string[i] === letter || string[i] === letter.toUpperCase()){
            counter++
        }
    }
    return counter;
}

console.log(howManyLetters("AnavolimilAvana", "a"));


// 5.

function firstPosition(char, string){
    var position;
    for(var i = 0; i < string.length; i++){
        if(char === string[i] || char.toUpperCase() === string[i]){
            position = i
            break;
        } else return -1
    }
    return position;
}

console.log(firstPosition("z", "hAsgajsbga"));


// 6.

function lastPosition(char, string){
    var position;
    for(var i = string.length - 1; i >= 0; i--){
        if(char === string[i] || char.toUpperCase() === string[i]){
            position = i + 1;
            break;
        }
    }
    return position;
}

console.log(lastPosition("d", "heldlofsfdfdsdfs"));

// 7.

function strToArr(string){
    var newArr = [];
    for(var i = 0; i < string.length; i++){
        if(string[i] === " "){
            newArr[i] = null
        } else {
            newArr[i] = string[i]
        }
        
    }

    return newArr
}

console.log(strToArr("random dog"))

// 9.

function separator(string, sign) {
    var newstr = string.split(" ").join(sign);
  
    return newstr;
  }
  
  console.log(separator("aj cao majmune", "-"));
  
  // 10.
  
  function newString(string, num) {
    var word = "";
  
    for (var i = 0; i < num; i++) {
      if (num <= string.length) {
        word += string[i];
      } else {
        return "There is no so many charachters.";
      }
    }
  
    return word + "...";
  }
  
  console.log(newString("ajdecao", 3));
  
  
  // 12. 
  
  function retirement(birthYear, sex) {
    var yearsToRetire;
    var currYears = 2022 - birthYear;
  
    if (sex === "M" && currYears <= 65) {
      yearsToRetire = 65 - currYears;
    } else if (sex === "F" && currYears <= 60) {
      yearsToRetire = 60 - currYears;
    } else {
      return "You are already retired.";
    }
  
    return yearsToRetire;
  }
  
  console.log(retirement(1900, "F"));

  // 13.

  // ili toStr[toStr.length - 1]  ili minus dva za predzadnji

  function humanizeNumber(num) {
      var toStr = "" + num;
    var lastDigit = num % 10;
    var secondToLast = ((num - lastDigit) / 10) % 10;

    if(secondToLast === 1) return toStr + "th";
    switch(lastDigit){
        case 1: return toStr + "st";

        case 2: return toStr + "nd";

        case 3: return toStr + "rd";

        default: return toStr + "th"
    }
  }

  console.log(humanizeNumber(22))

  // 11.

  function arrOfNums(arr) {
      var newArr = [];
      for(var i = 0; i < arr.length; i++) {
          if(!!arr[i] !== false && arr[i] !== Infinity) {
               newArr[newArr.length] = +arr[i];
          }
      }
      return newArr;
  }

  console.log(arrOfNums(["1", "21", undefined, "42", "1e+3", Infinity]))

  // 8.
  function isPrime(num){
      for(var i = 2; i < num; i++){
          if(num % i === 0) {
              return false
          }
      }
      return true;
  }