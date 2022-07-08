"use strict";

(function () {
  function Product(ime, cena, rokIsteka) {
    this.productID = Math.floor(Math.random() * 90000) + 10000;
    this.name = ime;
    this.price = cena.toFixed(2);
    this.expirationDate = rokIsteka;
    this.getInfo = function () {
      return `${this.name[0]}${this.name[1].toUpperCase()}${this.productID}, ${
        this.name
      }, ${this.price}`;
    };
  }

  function ShoppingBag() {
    this.listOfProducts = [];
    this.addProduct = function (product) {
      if (product.expirationDate) {
        this.listOfProducts[this.listOfProducts.length] = product;
      }
    };
    this.averageOfList = function () {
      var avrg = 0;
      for (var i = 0; i < this.listOfProducts.length; i++) {
        var normalNum = parseInt(this.listOfProducts[i].price);
        avrg += normalNum;
      }
      return (avrg / this.listOfProducts.length).toFixed(3);
    };
    this.mostExpensive = function () {
      var max = this.listOfProducts[0].price;
      var mostExpProd;
      for (var i = 0; i < this.listOfProducts.length; i++) {
        if (max < this.listOfProducts[i].price) {
          max = this.listOfProducts[i].price;
          mostExpProd = this.listOfProducts[i].name;
        }
      }
      return `Most expensive product is ${mostExpProd} with the price of ${max}`;
    };
    this.totalPrice = function () {
      var total = 0;
      for (var i = 0; i < this.listOfProducts.length; i++) {
        var normalNum = parseInt(this.listOfProducts[i].price);
        total += normalNum;
      }
      return total;
    };
  }

  function PaymentCard(balans, status, date) {
    this.accountBalance = balans.toFixed(2);
    this.status = status;
    this.validUntilDate = date;
  }

  function checkoutAndBuy(shoppingBag, paymentCard) {
    if (
      paymentCard.accountBalance >= shoppingBag.totalPrice() &&
      paymentCard.status === "active"
    ) {
      return "Succesfull! Have a nice day!";
    } else if (paymentCard.status !== "active") {
      return "Your card is inactive.";
    } else {
      var missing = shoppingBag.totalPrice() - paymentCard.accountBalance;
      return `You dont have enough cash on your card. You are missing ${missing}.`;
    }
  }

  var banana = new Product("Banana", 250, "15.maj");
  var sok = new Product("Sok od zove", 500, "25.jul");
  var jabuka = new Product("jabuka", 100, "15.maj");
  var virsle = new Product("Virsle", 200, "25.jul");

  var myShoppingBag = new ShoppingBag();
  myShoppingBag.addProduct(banana);
  myShoppingBag.addProduct(sok);
  myShoppingBag.addProduct(virsle);
  myShoppingBag.addProduct(jabuka);

  var mojaKartica = new PaymentCard(10000, "active", "25.mart.2023.");

  console.log(checkoutAndBuy(myShoppingBag, mojaKartica));
})();
