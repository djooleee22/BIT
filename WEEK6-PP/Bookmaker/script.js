"use strict";

(function () {
  function Country(ime, kvote, cont) {
    this.name = ime;
    this.odds = kvote;
    this.continent = cont;
  }

  function Person(ime, prezime, datumRodjenja) {
    this.name = ime;
    this.surname = prezime;
    this.dateOfBirth = datumRodjenja;
    this.getData = function () {
      return `${this.name} ${this.surname}, ${this.dateOfBirth}`;
    };
  }

  function Player(person, visinaBeta, zemlja) {
    if (person instanceof Person) {
      this.person = person;
    }
    this.betAmount = visinaBeta;
    if (zemlja instanceof Country) {
      this.country = zemlja;
    }
    this.getData = function () {
      var expectedWin = this.country.odds * this.betAmount;
      var year = this.person.dateOfBirth.split(".");
      var age = 2022 - Number(year[2]);
      return `${this.country.name[0].toUpperCase()}${this.country.name[1].toUpperCase()}, ${expectedWin.toFixed(
        2
      )} eur, ${this.person.name} ${this.person.surname}, ${age}`;
    };
  }

  function Address(zemlja, grad, postanskiBroj, ulica, broj) {
    this.country = zemlja;
    this.city = grad;
    this.postalCode = postanskiBroj;
    this.street = ulica;
    this.number = broj;
    this.getData = function () {
      return `${this.street} ${this.number}, ${this.postalCode} ${
        this.city
      }, ${this.country[0].toUpperCase()}${this.country[1].toUpperCase()}`;
    };
  }

  function BettingPlace(adresa) {
    this.address = adresa;
    this.listOfPlayers = [];
    this.addPlayer = function (player) {
      this.listOfPlayers.push(player);
    };
    this.getData = function () {
      var sumOfBets = 0;
      var newStr = "";
      for (var i = 0; i < this.listOfPlayers.length; i++) {
        sumOfBets +=
          this.listOfPlayers[i].betAmount * this.listOfPlayers[i].country.odds;
        newStr += `${this.listOfPlayers[i].getData()}years
      `;
      }
      return `   ${this.address.street}, ${this.address.postalCode} ${this.address.city}, sum of all bets: ${sumOfBets}eur
      ${newStr}`;
    };
  }

  function BettingHouse(competition) {
    this.competition = competition;
    this.listOfPlaces = [];
    this.numberOfPlayers = function () {
      var counter = 0;

      for (var i = 0; i < this.listOfPlaces.length; i++) {
        counter += this.listOfPlaces[i].listOfPlayers.length;
      }
      return counter;
    };
    this.addPlaces = function (place) {
      this.listOfPlaces.push(place);
    };
    this.getData = function () {
      var betsOnSerbia = 0;
      var newStr = "";
      for (var i = 0; i < this.listOfPlaces.length; i++) {
        newStr += `
${this.listOfPlaces[i].getData()}`;
        for (var j = 0; j < this.listOfPlaces[i].listOfPlayers.length; j++) {
          if (this.listOfPlaces[i].listOfPlayers[j].country.name === "srbija") {
            betsOnSerbia++;
          }
        }
      }
      return `${this.competition}, ${
        this.listOfPlaces.length
      } betting places, ${this.numberOfPlayers()} bets
${newStr}
There are ${betsOnSerbia} bets on Serbia.`;
    };
  }

  var continents = {
    EU: "Europe",
    AS: "Asia",
    AF: "Africa",
    SA: "South America",
    NA: "North America",
    AU: "Australia",
  };

  function createPlayer(person, visinaBeta, zemlja) {
    return new Player(person, visinaBeta, zemlja);
  }

  function createBettingPlace(adresa) {
    return new BettingPlace(adresa);
  }

  var myBettingHouse = new BettingHouse("Football World Cup 2022");

  var srbija = new Country("srbija", 2, continents.EU);
  var grcka = new Country("grcka", 2.5, continents.EU);

  var milos = new Person("Milos", "Ratkovic", "25.06.1994");
  var ivan = new Person("Ivan", "Ivanovic", "15.08.1991");
  var igor = new Person("Igor", "Raonic", "22.05.1978");
  var pedja = new Person("Pedja", "Petrovic", "12.04.1988");

  var player1 = createPlayer(milos, 1500, srbija);
  var player2 = createPlayer(ivan, 2000, srbija);
  var player3 = createPlayer(igor, 4000, grcka);
  var player4 = createPlayer(pedja, 900, srbija);

  var adresaMozzarta = new Address(
    "Srbija",
    "Beograd",
    "11000",
    "Bulevar Oslobodjenja",
    5
  );
  var adresaMeridijana = new Address(
    "Srbija",
    "Beograd",
    "11000",
    "Knez Mihailova",
    10
  );

  var mozzart = createBettingPlace(adresaMozzarta);
  var meridian = createBettingPlace(adresaMeridijana);

  mozzart.addPlayer(player1);
  mozzart.addPlayer(player3);
  meridian.addPlayer(player2);
  meridian.addPlayer(player4);
  console.log(meridian.getData());
  myBettingHouse.addPlaces(mozzart);
  myBettingHouse.addPlaces(meridian);
  console.log(myBettingHouse.getData());
})();
