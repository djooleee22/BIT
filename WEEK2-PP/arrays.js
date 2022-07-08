//zadatak 1

var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

console.log(months[5], months[9], months[0]);

for(var i = 0; i < months.length; i++){
    if(months[i] === "june" || months[i] === "october" || months[i] === "january"){
        console.log(months[i])
    }
}



//zadatak 2

var daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

console.log(daysOfWeek[6]);

for(var i = 0; i < daysOfWeek.length; i++){
if(daysOfWeek[i] === "sunday"){
    console.log(daysOfWeek[i])
}}


//zadatak 3

var someArray = [2, -4, 5, -2, -11];

console.log(someArray[1], someArray[3], someArray[4]);

for(var i = 0; i < someArray.length; i++){
    if(someArray[i] < 0) {
        console.log(someArray[i])
    }
}


    

//zadatak 4
var newArray = [5, 15, -5, 20, 12, 18, 72, 14, 9];

newArray.forEach(function(num){
    if(num % 3 === 0){
    console.log(`My new ${num}`)
    }
})

newArray.forEach(num => {
    if(num % 3 === 0){
        console.log(`My newest ${num} number.`);
    }
})

for(var i = 0; i < newArray.length; i++){
    if(i % 3 === 0){
        console.log(newArray[i])
    }
}

// console.log(newArray[1], newArray[4], newArray[8], newArray[6])

//zadatak 5
var brojevi = [1, 2, 1, 8, 5, 10, 8, 9];

// console.log(brojevi[0][3])

// console.log(brojevi[1][1])

for(var i = 0; i < brojevi.length; i++){
    if(brojevi[i] === 10){
        console.log(`Moji ${brojevi[i]}`)
    }
}


// SWITCH   
// zadatak 1 i 2

var day = 7;

switch(day){
    case 1: {console.log("Monday")
            break;}
    case 2: {console.log("Tuesday")
            break;}
    case 3: {console.log("Wednesday")
            break;}
    case 4: {console.log("Thursday")
            break;}
    case 5: {console.log("Friday")
            break;}
    case 6: {console.log("Saturday")
            break;}
    case 7: {console.log("Sunday")
            break;}
    default: {console.log("Input must be a number between 1 and 7.")}
}

//zadatak 3

var dan = 6;

switch(dan){
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: {console.log("Radni dan")
            break;}
    case 6: 
    case 7: {console.log("Vikend")
            break;}
    default: {console.log("Input must be a number between 1 and 7.")}
}


//zadatak 4

var mesec = 5;

switch(mesec){
    case 1: {console.log("Januar")
            break;}
    case 2: {console.log("Februar")
            break;}
    case 3: {console.log("Mart")
            break;}
    case 4: {console.log("April")
            break;}
    case 5: {console.log("Maj")
            break;}
    case 6: {console.log("Jun")
            break;}
    case 7: {console.log("Jul")
            break;}
    case 8: {console.log("Avgust")
            break;}
    case 9: {console.log("Septembar")
            break;}
    case 10: {console.log("Oktobar")
            break;}
    case 11: {console.log("Novembar")
            break;}
    case 12: {console.log("Decembar")
            break;}
    default: {console.log("Input must be a number between 1 and 12.")}
}

//zadatak 5

var mjesec = 8;

switch(mjesec){
    case 1: 
    case 2: 
    case 3: {console.log("Zima")
            break;}
    case 4: 
    case 5: {console.log("Prolece")
            break;}
    case 6: 
    case 7: 
    case 8: {console.log("Leto")
            break;}
    case 9: 
    case 10: 
    case 11: {console.log("Jesen")
            break;}
    case 12: {console.log("Zima")
            break;}
    default: {console.log("Input must be a number between 1 and 12.")}
}

//zadatak 6

var grade = "F";

switch(grade){
    case "A": {console.log("Good job.")
                break;}
    case "B": {console.log("Pretty good.")
                break;}
    case "C": {console.log("Passed.")
                break;}
    case "D": {console.log("Not so good.")
                break;}
    case "F": {console.log("Failed.")
                break;}
}

//zadatak 7

var cityName = "Las Vegas"

switch(cityName){
    case "Belgrade":
    case "Novi Sad":{console.log("Serbia")
                    break;}
    case "Podgorica":
    case "Budva":{console.log("Montenegro")
                    break;}
    case "Pittsburgh":
    case "Las Vegas":{console.log("USA")
                    break;}
    default:{"Wrong input."}
}

//zadatak 8
var num1 = 10;
var num2 = 0
var sign = "/";

switch(sign){
    case "+": {
    console.log(num1 + num2);
    break;
    }
    case "-": {
        console.log(num1 - num2);
        break;
    }
    case "*": {
        console.log(num1 * num2);
        break;
    }
    case "/": {
            if(num2 === 0){
                    console.log("Ne moze sa nulom")
            } else {
                console.log(num1 / num2)}
            
        
    }
}
