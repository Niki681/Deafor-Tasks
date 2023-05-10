
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
    constructor(price, size, color,gender ) {
      super(price, size, color);
      this.gender = gender; //
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
      // code to get the warranty information for the electronic product
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
      // code to get a summary of the book's content
      console.log();
      console.log("Class Books");
      console.log(`Author ${this.author}`);
      console.log("--------------------------------------");
    }
  }
  
  // Example usage of the classes:
  
  const tshirt = new Clothing(25, 'M', 'red', 'male');
  tshirt.displayInfo(); // Output: Price: $25
                        //         Size: M
                        //         Color: red
  tshirt.calculateSize(); 
  
  const laptop = new Electronics(950, '15.6-inch', 'silver', 'Apple');
  laptop.displayInfo(); // Output: Price: $950
                         //         Size: 15.6-inch
                         //         Color: silver
  laptop.getWarranty(); // calls Electronics's getWarranty method
  
  const book = new Books(15, 'paperback', 'green', 'J.K.Rowling');
  book.displayInfo(); // Output: Price: $15
                       //         Size: paperback
                       //         Color: green
  book.getSummary();