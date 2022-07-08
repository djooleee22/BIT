"use strict";

(function () {
  function Genre(imeZanra) {
    this.name = imeZanra;
    this.getData = function () {
      return `${this.name[0].toUpperCase()}${this.name[
        this.name.length - 1
      ].toUpperCase()}`;
    };
  }

  function Movie(imeFilma, zanr, duzinaFilma) {
    this.title = imeFilma;
    if (zanr instanceof Genre) {
      this.genre = zanr;
    }
    this.lengthOfMovie = duzinaFilma;
    this.getData = function () {
      return `${this.title}, ${this.lengthOfMovie}, ${this.genre.getData()}`;
    };
  }

  function Program(datum) {
    this.date = datum;
    this.listOfMovies = [];
    this.totalNUmberOfMovies = function () {
      var counter = 0;
      for (var i = 0; i < this.listOfMovies.length; i++) {
        counter = this.listOfMovies.length;
      }
      return counter;
    };
    this.addMovie = function (movie) {
      this.listOfMovies[this.listOfMovies.length] = movie;
    };
    this.getData = function () {
      var duration = 0;
      var newStr = "";
      for (var i = 0; i < this.listOfMovies.length; i++) {
        duration += this.listOfMovies[i].lengthOfMovie;
        newStr += `${this.listOfMovies[i].getData()}
        `;
      }
      return `${this.date}, program duration ${duration} min
        ${newStr}`;
    };
  }

  function Festival(ime) {
    this.name = ime;
    this.listOfPrograms = [];
    this.numberOfMoviesInAllPrograms = function () {
      var counter = 0;
      for (var i = 0; i < this.listOfPrograms.length; i++) {
        counter += this.listOfPrograms[i].totalNUmberOfMovies();
      }
      return counter;
    };
    this.addProgram = function (program) {
      this.listOfPrograms[this.listOfPrograms.length] = program;
    };
    this.getData = function () {
      var newStr = "";
      for (var i = 0; i < this.listOfPrograms.length; i++) {
        newStr += `${this.listOfPrograms[i].getData()}
    `;
      }
      return `${
        this.name
      } has ${this.numberOfMoviesInAllPrograms()} movie titles
    ${newStr}`;
    };
  }

  function createMovie(ime, zanr, duzina) {
    return new Movie(ime, zanr, duzina);
  }

  function createProgram(datum) {
    return new Program(datum);
  }

  var action = new Genre("action");
  var comedy = new Genre("comedy");
  var horror = new Genre("horror");
  var thriller = new Genre("thriller");

  var mojFestival = new Festival("Moj Festival");

  var dan1 = createProgram("25.06.2022");
  var dan2 = createProgram("26.06.2022");

  var film1 = createMovie("Batman", action, 120);
  var film2 = createMovie("The Shining", horror, 125);
  var film3 = createMovie("Cujo", horror, 90);
  var film4 = createMovie("The Hangover", comedy, 100);

  dan1.addMovie(film1);
  dan1.addMovie(film2);
  dan1.addMovie(film3);
  dan1.addMovie(film4);
  console.log(dan1.totalNUmberOfMovies());

  dan2.addMovie(film1);
  dan2.addMovie(film2);
  dan2.addMovie(film3);
  dan2.addMovie(film4);

  mojFestival.addProgram(dan1);
  mojFestival.addProgram(dan2);
  console.log(mojFestival.getData());
})();
