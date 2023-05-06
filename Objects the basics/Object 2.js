//2. Write a program that creates an array of objects, each representing 
//a book with properties for title, author, and number of pages. Then, loop 
//through the array and print out a message for each book that says
// "The book [title] by [author] is [pages] pages long."


//a book with properties for title, author, and number of pages.
const books = [
    { title: 'Harry Potter and the Goblet of Fire', author: "JK Rowling", pages: 1127 },
    { title: 'Secondhand Time', author: "Bela Shayevich", pages: 758 },
    { title: 'Never Let Me Go', author: "Kazuo Ishiguro", pages: 726 },
  ];


   for (let book of books) {
    console.log(`The book ${book.title} by ${book.author} is ${book.pages} pages long.`);
  }