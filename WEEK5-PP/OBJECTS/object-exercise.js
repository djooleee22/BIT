"use strict";

var obj = (function () {
  var myAge;
  var myObject = {
    setAge: function (age) {
      myAge = age;
    },
    getAge: function () {
      return myAge;
    },
  };

  return myObject;
})();

// obj.setAge(18);
// console.log(obj.getAge());

function person() {
  var godine;
  return {
    setAge(age) {
      godine = age;
    },
    getAge() {
      return godine;
    },
  };
}

var milos = person();

milos.setAge(6);
console.log(milos.getAge());
console.log(milos);
