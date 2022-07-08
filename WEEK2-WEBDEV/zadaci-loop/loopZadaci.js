// 1. Write a JavaScript program that accept two integers and display the larger.
var a = 11;
var b = 3;

if (a > b) {
  console.log(a);
} else if (b > a) {
  console.log(b);
} else {
  console.log("They are even");
}

// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

var a = 3;
var b = -7;
var c = 2;

if (a * b * c >= 0) {
  console.log("+");
} else {
  console.log("-");
}

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

var a = 0;
var b = -1;
var c = 4;

if (a > b && a > c && b > c) {
  console.log(a, b, c);
} else if (a > b && a > c && c > b) {
  console.log(a, c, b);
} else if (b > a && b > c && a > c) {
  console.log(b, a, c);
} else if (b > a && b > c && c > a) {
  console.log(b, c, a);
} else if (c > a && c > b && a > b) {
  console.log(c, a, b);
} else if (c > a && c > b && b > a) {
  console.log(c, b, a);
}

// 5. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.

var niz = [-5, -2, -6, 0, -1];
var maximum = niz[0];

for (var i = 0; i < niz.length; i++) {
  if (maximum < niz[i]) {
    maximum = niz[i];
  }
}

console.log(maximum);

// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (var i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else if (i % 2 !== 0) {
    console.log(`${i} is odd`);
  }
}

//

var isArmstrong = function (broj) {
  var string = broj + "";
  if (string.length === 3) {
    var br1 = +string[0];
    var br2 = +string[1];
    var br3 = +string[2];

    if (br1 ** 3 + br2 ** 3 + br3 ** 3 === broj) {
      console.log("true");
    }
  }
};
isArmstrong(372);

// 12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

var trojkaPetica = 0;

for (var i = 0; i <= 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    trojkaPetica += i;
  }
}

console.log(trojkaPetica);

//zvezdice

var zvezdica = "*";
var a = "";

for(var i = 1; i <= 5; i++){
    a +=  zvezdica;
    console.log(a)
    
}

