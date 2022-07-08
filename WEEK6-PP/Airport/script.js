"use strict";

(function () {
  function Person(ime, prezime) {
    this.name = ime;
    this.surname = prezime;
    this.getData = function () {
      return `${this.name} ${this.surname}`;
    };
  }

  function Seat(broj, kategorija) {
    if (broj === undefined) {
      broj = Math.round(10 + Math.random() * 90);
    }

    this.number = broj;

    if (kategorija === undefined) {
      this.category = "e";
    }

    if (kategorija === "e" || kategorija === "b") {
      this.category = kategorija;
    }

    this.getData = function () {
      return `${this.number}, ${this.category.toUpperCase()}`;
    };
  }

  function Passenger(osoba, sediste) {
    if (osoba instanceof Person) {
      this.person = osoba;
    }

    if (sediste instanceof Seat) {
      this.seat = sediste;
    }

    this.getData = function () {
      return `${this.seat.number} ${
        this.seat.category === "e" ? "Economy" : "Business"
      } ${this.person.getData()}`;
    };
  }

  function Flight(destinacija, datum) {
    this.relation = destinacija;
    this.date = datum;
    this.listOfPassengers = [];
    this.addPassenger = function (passenger) {
      var isFree = true;
      for (var i = 0; i < this.listOfPassengers.length; i++) {
        if (passenger.seat.number === this.listOfPassengers[i].seat.number) {
          isFree = false;
          console.log("That seat is not available!");
        }
        // if(passenger.person.name === this.listOfPassengers[i].person.name && passenger.person.surname === this.listOfPassengers[i].person.surname){

        // }
      }
      if (isFree && this.listOfPassengers.length < 100)
        this.listOfPassengers.push(passenger);
    };
    this.getData = function () {
      var newStr = "";
      for (var i = 0; i < this.listOfPassengers.length; i++) {
        newStr += ` ${
          this.listOfPassengers[i].seat.number
        }, ${this.listOfPassengers[i].seat.category.toUpperCase()}, ${
          this.listOfPassengers[i].person.name
        }, ${this.listOfPassengers[i].person.surname} 
      `;
      }

      return `${this.date}, ${this.relation}
      ${newStr}`;
    };

    this.totalInBussines = function () {
      var counter = 0;
      for (var i = 0; i < this.listOfPassengers.length; i++) {
        if (this.listOfPassengers[i].seat.category === "b") {
          counter++;
        }
      }
      return counter;
    };
  }

  function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.addFlight = function (flight) {
      this.listOfFlights[this.listOfFlights.length] = flight;
    };
    this.getData = function () {
      var counter = 0;
      var newStr = "";

      this.listOfFlights.forEach(
        (fl) => (counter += fl.listOfPassengers.length)
      );
      this.listOfFlights.forEach((fl) => (newStr += fl.getData()));

      return `Airport: ${this.name}, total passengers: ${counter}
      ${newStr}`;
    };

    this.totalInBussines = function () {
      var counter = 0;
      for (var i = 0; i < this.listOfFlights.length; i++) {
        counter += this.listOfFlights[i].totalInBussines();
      }
      return counter;
    };
  }

  function createFlight(relation, date) {
    return new Flight(relation, date);
  }

  function createPassenger(firstName, lastName, seatNum, category) {
    return new Passenger(
      new Person(firstName, lastName),
      new Seat(seatNum, category)
    );
  }

  var myAirport = new Airport();

  var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
  var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

  var passenger1 = createPassenger("John", "Snow", 1, "b");
  var passenger2 = createPassenger("Cercei", "Lanister", 2, "b");
  var passenger3 = createPassenger("Daenerys", "Targeryen", 14, "b");
  var passenger4 = createPassenger("Tyrion", "Lanister");
  var passenger5 = createPassenger("Djorde", "Antonijevic", 3);

  flight1.addPassenger(passenger1);
  flight1.addPassenger(passenger2);
  flight1.addPassenger(passenger5);

  flight2.addPassenger(passenger3);
  flight2.addPassenger(passenger4);

  myAirport.addFlight(flight1);
  myAirport.addFlight(flight2);
  console.log(myAirport.getData());
})();
