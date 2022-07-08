// zadatak 
for(var i = 0; i <= 10; i++){
    console.log(i * i)
}

//zadatak 1
for(var i = 0; i <= 15; i++){
    if(i % 2 === 0) {
        console.log(`${i} je paran`);
    } else {
        console.log(`${i} je neparan`)
    }
}

//zadatak 2
var result = 0;

for(var i = 0; i <= 1000; i++){
    if(i % 3 === 0 && i % 5 ===0){
        result += i;
        console.log(result)
    }
}

//zadatak 3
var niz = [1, 5, 10, 15, 22];

var sum = 0;
var mult = 1;

for(var i = 0; i < niz.length; i++){
    sum += niz[i];
    mult *= niz[i];

    console.log(`Sabiranje ${sum}, Mnozenje ${mult}`)
}

//zadatak 4
var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var newString = "";

for(var i = 0; i < x.length; i++){
    newString += x[i];
}
console.log(newString);

//zadatak 5 !!!!

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];


for(var i = 0; i < a.length; i++){
    for(var j = 0; j < a[i].length; j++){
        console.log(a[i][j])
    }
}


//zadatak 6
var zbir = 0;
var square = 1;

for(var i = 1; i <= 20; i++){
    square = i * i;
    console.log(square);
    zbir += square;

}
console.log(zbir);

//zadatak 7
var grades = [80, 77, 88, 95, 68];

var summm = 0;

var avrg;

for(var i = 0; i < grades.length; i++){
    summm += grades[i];
}

avrg = summm / grades.length


console.log(avrg)

if(avrg < 60){
    console.log("F");
} else if(avrg >= 60 && avrg < 70){
    console.log("D");
} else if(avrg >= 70 && avrg < 80){
    console.log("C");
} else if(avrg >= 80 && avrg < 90){
    console.log("B");
} else if(avrg >= 90 && avrg < 100){
    console.log("A");
}

//zadatak 8

for(var i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    } else if(i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}



