//zadatak 1

// var e = 6;
// var a = [5, -4.2, 3, 7];

// for(var i = 0; i < a.length; i++){
//     if(a[i] === e){
//         console.log("Yes")
//     } 
// }


//zadatak 2

var niz = [-3, 11, 5, 3.4, -8];

var noviNiz = [];

for(var i = 0; i < niz.length; i++) {
    if(niz[i] >= 0) {
        noviNiz[i] = niz[i] * 2
    } else {
        noviNiz[i] = niz[i]
    }
}

console.log(noviNiz);


//zadatak 3

var nekiNiz = [4, 2, 2, -1, 6];
var min = nekiNiz[0];

for(var i = 0; i < nekiNiz.length; i++){
    if(min > nekiNiz[i]){
        min = nekiNiz[i];
        console.log(min, i, "hello")
    }
}

//zadatak 4

console.log("--------------------------------------------------------");

var nizzz = [4, 2, 0, -1, 6];
var minimum = nizzz[0]
var minimum2 = nizzz[0]

for(var i = 0; i < nizzz.length; i++){
    if(minimum > nizzz[i]){
        minimum = nizzz[i]; 
    }
}

for(var j = 0; j < nizzz.length; j++) {
    if(minimum2 > nizzz[j] && nizzz[j] !== minimum){
        minimum2 = nizzz[j]
    }
}

console.log(minimum2);


//zadatak 5

var arr = [3, 11, -5, -3, 2];

var sum = 0;

for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        sum += arr[i];
    }
}

console.log(sum)

//zadatak 6 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

console.log("--------------------------------------------------------")

var array = [2, 4, -2, 7, -2, 4, 2];
var isSymetric = true;

for(var i = 0; i < Math.floor(array.length / 2); i++){
    if(array[i] !== array[array.length - 1 - i]){
        isSymetric = false;
        break;
    }
}

console.log(isSymetric)

//zadatak 7

var niz1 = [4, 5, 6, 2];

var niz2 = [3, 8, 11, 9];

var niz3 = [];

for(var i = 0; i < niz1.length; i++){
    
    niz3[i + i] = niz1[i];
    niz3[i + i + 1] = niz2[i]
}


console.log(niz3)


//zadatak 8

var nekiArray = [4, 5, 6, 2];
var nekiArray2 = [3, 8, 11, 9];

var noviArray = [];

for (var i = 0; i < nekiArray.length; i++) {
  noviArray[i] = nekiArray[i];
}

for (var i = 0; i < nekiArray2.length; i++) {
  noviArray[noviArray.length] = nekiArray2[i];
}

console.log(noviArray);

//zadatak 9

ex = 2;

ax = [4, 2, 6, 2, 8, 2, 2];

for (var i = 0; i < ax.length; i++) {
  if (ax[i] === ex) {
    ax.splice(i, 1);
  } else if (ax[ax.length - 1] === ex) {
    ax.pop();
  }
}

console.log(ax);

//zadatak 10
eee = 78;
ppp = 3;
aaa = [2, -2, 33, 12, 5, 8];

for (var i = 0; i < aaa.length; i++) {
  if (ppp === i) {
    aaa[i] = eee;
  } else {
    console.log("Thats too big number");
  }
}

console.log(aaa);




