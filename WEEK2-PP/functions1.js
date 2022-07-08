// 1.
function checkMax(a, b) {
    return a > b ? a : b;
}

console.log(checkMax(2, 3)) 

// 2.

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(4))

// 3.

function trocifreni(num){
    return num > 99 && num < 1000
}

console.log(trocifreni(555))

// 4.

function sum(){
    var res = 0;
    for(var i = 0; i < arguments.length; i++){
        res += arguments[i]
    }
    return res;
}

function mean(a, b, c, d){
    return sum(a, b, c, d) / 4;
}

console.log(mean(1, 5, 7,10));


////// Matematicki nacin
function digits(broj){
    var brojac = 1;

    while(broj > 9) {
        broj = broj / 10;
        brojac++
    }

    return brojac;
}


// 7.

function numberOfDigits(num){
    var numToStr = "" + num;
    return numToStr.length;
}

console.log(numberOfDigits(55))

// 8.

function brojPonavaljanja(num, arr){
    var counter = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] === num){
            counter++
        }
    }
    return counter;
}

// 9.

function zbirNeparnih(arr){
    var counter = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            counter += arr[i]
        }
    }
    return counter;
}

console.log(zbirNeparnih([1, 5, 7, 8, 10]))

// 11.
function multiple(string, num){
    var noviString = "";
    for(var i = 1; i <= num; i++){
        noviString += string;
    }
    return noviString;
}

console.log(multiple("abc", 3))

// 10.

function appear(string){
    var counter = 0;

    for(var i = 0; i < string.length; i++){
        if(string[i] === "a" || string[i] === "A"){
            counter++;
        }
    }
    return counter;
}

console.log(appear("Animals"))

// 6.

var zvezdica = "*";
var a = "";
var b = "";
var c = "";

function printStars(num1, num2, num3){
    for(var i = 1; i <= num1; i++){
        a +=  zvezdica;
    }

    for(var i = 1; i <= num2; i++){
        b +=  zvezdica;
    }

    for(var i = 1; i <= num3; i++){
        c +=  zvezdica;
    }

    // console.log(a)
    // console.log(b)
    // console.log(c)

    console.log(`${a}\n${b}\n${c}`)

}

// printStars(1, 7, 3);

// 5. ??????????????????????????????? ali sa punim zvezdicama

function stars(num){
    var star = "";
    for(var i = 0; i < num; i++){

        star=''

        for(var j = 0; j < num; j++){
                star += "*";
        }
        
        console.log(star)
    }
    
}

stars(5)

console.log("---------------------------------------------------------------")

// 5.

function square(num) {
    var star = "";

    for(var i = 0; i < num; i++) {
        star = "";

        for(var j = 0; j < num; j++) {
            if(i === 0 || j === 0 || j === num -1 || i === num - 1) {
                star += "*"
            }
            else {
                star += " "
            }
        }
        console.log(star)
    }
}

square(5)



