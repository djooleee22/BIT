var dugmad = document.getElementsByClassName("btn");
var brojaci = document.getElementsByClassName("counter");
var btndecr = document.getElementsByClassName("btn-decr");

// var counter = [0, 0, 0, 0];

// for (let i = 0; i < dugmad.length; i++) {
//   function clickHandler() {
//     counter[i]++;
//     brojaci[i].innerText = counter[i];
//   }
//   //   console.log(i);

//   dugmad[i].addEventListener("click", clickHandler);
// }

// var counter = [0, 0, 0, 0];

for (var i = 0; i < dugmad.length; i++) {
  function clickHandler(index) {
    var counter = 0;

    return function () {
      counter++;
      brojaci[index].innerText = counter;
    };
  }

  dugmad[i].addEventListener("click", clickHandler(i));
}
