// // 1.

// var coffee = {
//   name: "Nes",
//   strength: 5,
//   flavour: "Caramel",
//   milk: false,
//   sugar: true,
// };

// // console.log(coffee);

// // 2.

// var favMovie = {
//   title: "Kad porastem bicu kengur",
//   actors: ["Sergej Trifunovic", "Marija Karan", "Nebojsa Glogovac"],
//   director: "Miroslav Momcilovic",
//   genre: "Comedy",
//   popularity: 10,
// };

// console.log(favMovie);

// 3.

function createObj(decr, lang, git, isInDev) {
  var newObj = {
    description: decr,
    // programmingLanguage: "fds",
    gitRepo: git,
    // isInDevelop: "fs",
    printRepo: function () {
      console.log(this.gitRepo);
    },
    isJS: function () {
      this.programmingLanguage = lang;
    },
    isInDevelopment: function () {
      if (isInDev) this.isInDevelop = true;
      if (!isInDev) this.isInDevelop = false;
    },
  };
  newObj.printRepo();
  newObj.isJS();
  newObj.isInDevelopment();
  return newObj;
}

// console.log(
//   createObj("Something about dogs", "python", "www.google.com", true)
// );

// 4.
function createRecipe(name, type, complex, ingr, time, intruction) {
  var recipe = {
    name: name,
    cuisineType: "unknown",
    complexity: complex,
    ingredients: ingr,
    instructions: intruction,
    printIngr: function () {
      console.log(ingr);
    },
    check15: function () {
      if (time < 15) {
        return true;
      } else {
        return false;
      }
    },
    changeType: function () {
      this.cuisineType = type;
    },
  };
  recipe.printIngr();
  console.log(recipe.check15());
  recipe.changeType();
  return recipe;
}

console.log(
  createRecipe(
    "gulas",
    "srpska",
    5,
    ["meso", "povrce", "itd"],
    60,
    "Uradite to i to."
  )
);
