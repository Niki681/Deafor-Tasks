//2. Create a program that takes a string of text and counts the
// number of occurrences of a specific letter in the string. 
//To accomplish this, you will need to use the string data type 
//and some basic looping and conditional statements in JavaScript.

function countLetterOccurrences(text, letter) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === letter) {
        count++;
      }
    }
    return count;
  }
  
  let text = "flkjslkfjlsdkjfkjdslfkjsdlkfjlksdjflksdjlfkjsdk";
  let letter = "f";
  let count = countLetterOccurrences(text, letter);
  console.log(`The letter '${letter}' occurs ${count} times in the text.`);

