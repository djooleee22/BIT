// 1.
function Person(ime, prezime) {
  this.name = ime;
  this.surname = prezime;
}

function Employee(ime, prezime, zaduzenje, plata) {
  Person.call(this, ime, prezime);
  this.job = zaduzenje;
  this.salary = plata;
}

function Developer(ime, prezime, zaduzenje, plata, specijalizacija) {
  Employee.call(this, ime, prezime, zaduzenje, plata);
  this.specialization = specijalizacija;
}

function Manager(ime, prezime, zaduzenje, plata, odeljenje) {
  Employee.call(this, ime, prezime, zaduzenje, plata);
  this.department = odeljenje;
}

// 2.
Developer.prototype.getSpecialization = function () {
  console.log(this.specialization);
};

// 3.
Manager.prototype.getDepartment = function () {
  console.log(this.department);
};

Manager.prototype.changeDepartment = function (value) {
  this.department = value;
};

// 4.
Employee.prototype.getData = function () {
  return `${this.name} ${this.surname} - ${this.salary}$`;
};

Employee.prototype.getSalary = function () {
  console.log(this.salary);
};

Employee.prototype.increaseSalary = function () {
  this.salary = this.salary + this.salary * 0.1;
};

var marko = new Manager("Marko", "Markovic", "manager", 1300, "IT");
console.log(marko);

var zaposleni1 = new Employee("Igor", "Petrovic", "IT", 1000);
console.log(zaposleni1);

zaposleni1.increaseSalary();
zaposleni1.getSalary();

/////////////////////////////////////////////////////////////
///////////////////// APPLICATIONS //////////////////////////
/////////////////////////////////////////////////////////////

// 1

class Apps {
  constructor(ime, licenca, zvezdice) {
    this.name = ime;
    this.licence = licenca;
    this.stars = zvezdice;
  }

  isCCLicence() {
    if (this.licence === "CC") {
      return true;
    } else {
      return false;
    }
  }

  like() {
    this.stars++;
  }

  showStars() {
    console.log(this.stars);
  }

  getData() {
    var newStr = "";
    var keys = Object.keys(this);
    for (var i = 0; i < keys.length; i++) {
      newStr += this[keys[i]] + " ";
    }
    return newStr;
  }
}

class WebApp extends Apps {
  constructor(ime, url, tech, licenca, zvezdice) {
    super(ime, licenca, zvezdice);

    this.url = url;
    this.technologies = tech;
  }
  reactBased() {
    for (var i = 0; i < this.technologies.length; i++) {
      if (this.technologies[i] === "React") return true;
    }
    return false;
  }
}

class MobileApp extends Apps {
  constructor(ime, platforme, licenca, zvezdice) {
    super(ime, licenca, zvezdice);
    this.platforms = platforme;
  }

  forAndroid() {
    for (var i = 0; i < this.platforms.length; i++) {
      if (this.platforms[i] === "Andorid") return true;
    }
    return false;
  }
}

var vocap = new MobileApp("whatsApp", ["And", "IOS", "etc"], "CC", 4);

var viberDesctop = new WebApp(
  "viber",
  "www.viber.com",
  ["JS", "React", "Python", "WordPress"],
  "BB",
  3.5
);

console.log(vocap.getData());
console.log(viberDesctop.getData());
