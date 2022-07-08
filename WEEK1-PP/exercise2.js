var num1 = 254;
var num2 = 255;

if(num1 > num2) {
    console.log(num1)
} else {
    console.log(num2)
}

//zadatak 1
var number = 9;

if(number % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}


//zadatak 2
var number2 = 15;

if(number2 % 3 === 0 && number2 % 5 === 0) {
    console.log(number2)
}

//zadatak 3
var broj = 3;
var broj2 = -7;
var broj3 = 2;

if(broj * broj2 * broj3 > 0) {
    console.log("+")
} else {
    console.log("-")
}


//zadatak 4
var brojX = 10;

if(typeof brojX === "number") {
    if(brojX % 2 === 0) {
        console.log(brojX / 2)
    } else {
        console.log("X")
    }
}

//zadatak 5
var numb = -5;
var numb2 = -2;
var numb3 = -6;
var numb4 = 0;
var numb5 = -1;

if(numb > numb2 && numb > numb3 && numb > numb4 && numb > numb5) {
    console.log(numb)
} else if(numb2 > numb && numb2 > numb3 && numb2 > numb4 && numb2 > numb5) {
    console.log(numb2)
} else if (numb3 > numb && numb3 > numb2 && numb3 > numb4 && numb3 > numb5) {
    console.log(numb3)
} else if (numb4 > numb && numb4 > numb2 && numb4 > numb3 && numb4 > numb5) {
    console.log(numb4)
} else if (numb5 > numb && numb5 > numb2 && numb5 > numb3 && numb5 > numb4) {
    console.log(numb5)
}

//zadatak 6 
var br1 = 0;
var br2 = -1;
var br3 = 4;

if(br1 > br2 && br1 > br3 && br2 > br3) {
    console.log(br1, br2, br3)
} else if (br1 > br2 && br1 > br3 && br3 > br2) {
    console.log(br1, br3, br2)
} else if(br2 > br1 && br2 > br3 && br1 > br3) {
    console.log(br2, br1, br3)
} else if(br2 > br1 && br2 > br3 && br3 > br1) {
    console.log(br2, br3, br1)
} else if(br3 > br1 && br3 > br2 && br2 > br1) {
    console.log(br3, br2, br1)
} else if(br3 > br1 && br3 > br2 && br1 > br2) {
    console.log(br3, br1, br2)
}

//zadatak 6

var temp = 60;
var fahrenheit = (9 * temp / 5) + 32;

console.log(temp, "C is", fahrenheit, "F")

//zadatak 7

var givenNumber = 13;

if(givenNumber < 13) {
    console.log(13 - givenNumber)
} else if(givenNumber > 13) {
    console.log((givenNumber - 13) * 2)
}

//zadatak 8

var vrednost1 = 8;
var vrednost2 = 8;

if(vrednost1 === vrednost2) {
    console.log((vrednost1 + vrednost2) * 3)
} else {
    console.log(vrednost1 + vrednost2)
}

//zadatak 9

var inp1 = 10;
var inp2 = 40;

if(inp1 === 50 || inp2 === 50 || inp1 + inp2 === 50) {
    console.log("true")
}

//zadatak 10

var someNum = 256;

if(someNum >= 20 && someNum <= 100) {
    console.log("It is in range between 20 and 100.")
} else if(someNum > 100 && someNum <= 400) {
    console.log("it is in range between 100 and 400.")
}

//fiz baz

var n = 15;

if(n % 3 === 0 && n % 5 === 0) {
    console.log("fizbaz")
} else if ( n % 3 === 0) {
    console.log("fiz")
} else if (n % 5 === 0) {
    console.log("baz")
}
