let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

class Product {
    constructor(id, name, image, price) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.price = price;
    }
  }
  
  class Electronics extends Product {
    constructor(id, name, image, price) {
      super(id, name, image, price);
      // additional properties or methods specific to ProductType1 can be added here
    }
  }
  
  class Clothing extends Product {
    constructor(id, name, image, price) {
      super(id, name, image, price);
      // additional properties or methods specific to ProductType2 can be added here
    }
  }

  class Books extends Product {
    constructor(id, name, image, price) {
      super(id, name, image, price);
      // additional properties or methods specific to ProductType2 can be added here
    }
  }
  // create an array of products
  let products = [
    new Electronics(1, 'Keyboard and mouse', 'electronics1.jpg', 12.52),
    new Electronics(2, 'Headspeakers', 'electronics2.jpg', 12.60),
    new Clothing(3, 'T-shirt', 'clothing1.png', 22),
    new Electronics(4, 'HeadSpeakers', 'electronics2.jpg', 12),
    new Clothing(5, 'Keyboard and mouse', 'electronics2.jpg', 32),
    new Clothing(6, 'Dress', 'clothing2.png', 12),
    new Books(7, 'Harry Potter', 'book1.png', 15),
    new Books(8, 'Harry Potter', 'book1.png', 32),
    new Books(9, 'Harry Potter', 'book2.png', 16)
  ];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}