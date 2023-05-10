
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
  
  const sweater = new Clothing(55, 'XXL', 'red', 'male');
  sweater.displayInfo(); // Output: Price: $55
                        //         Size: XXL
                        //         Color: red
    sweater.calculateSize(); 
  
  const computer = new Electronics(950, '15.6-inch', 'silver', 'Apple');
  computer.displayInfo(); // Output: Price: $950
                         //         Size: 15.6-inch
                         //         Color: silver
  computer.getWarranty(); // calls Electronics's getWarranty method
  
  const book = new Books(35, 'paper', 'black', 'J.K.Rowling');
  book.displayInfo(); // Output: Price: $35
                       //         Size: paper
                       //         Color: black
  book.getSummary();