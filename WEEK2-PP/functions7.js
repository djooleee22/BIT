// 1.

function tellFortune(numOfKids, partner, location, job) {
  console.log(
    `You will be a ${job} in ${location}, and married to ${partner} with ${numOfKids} kids.`
  );
}

tellFortune(5, "Anna", "Belgrade", "back-end developer");

// 2.

function calculateDogAge(age, rate = 7) {
  var dogAge = age * rate;

  console.log(`Your doggie is ${dogAge} years old in dog years!`);
}

calculateDogAge(3);

// 4.

function celsiusToFahrenheit(degrees) {
  var cels = degrees;
  var fahren = cels * 1.8 + 32;

  console.log(`${cels}C is ${fahren}F.`);
}

celsiusToFahrenheit(10);

function fahrenheitToCelsius(degrees) {
  var fahren = degrees;
  var cels = Math.round((fahren - 32) * 0.5556);

  console.log(`${fahren}F is ${cels}C.`);
}

fahrenheitToCelsius(50);

//////////
