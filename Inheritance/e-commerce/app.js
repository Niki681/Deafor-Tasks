class Product {
  constructor(price, size, color) {
    this.price = price;
    this.size = size;
    this.color = color;
  }

  displayInfo() {
    console.log(`Price: $${this.price}\nSize: ${this.size}\nColor: ${this.color}`);
  }
}

class Clothing extends Product {
  constructor(price, size, color, gender) {
    super(price, size, color);
    this.gender = gender;
  }

  calculateSize(userMeasurements) {
    console.log();
    console.log(`Gender: ${this.gender}`);
    console.log("Class Clothing");
    console.log("--------------------------------------");
  }
}

class Electronics extends Product {
  constructor(price, size, color, brand) {
    super(price, size, color);
    this.brand = brand;
  }

  getWarranty() {
    console.log();
    console.log("Class Electronics");
    console.log(`Brand ${this.brand}`);
    console.log("--------------------------------------");
  }
}

class Books extends Product {
  constructor(price, size, color, author) {
    super(price, size, color);
    this.author = author;
  }

  getSummary() {
    console.log();
    console.log("Class Books");
    console.log(`Author ${this.author}`);
    console.log("--------------------------------------");
  }
}

// Get the cart element
const cart = document.getElementById("cart");

// Get the total element
const total = document.getElementById