//3. Create a program that generates a random number between 1 and 10 
//and then prompts the user to guess the number. If the user's guess is correct, 
//display a message that says "Congratulations, you guessed the number!". If the user's guess is incorrect,
// give them a hint and let them try again.


let min = 1;
let max = 10;
 
function number(a){
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
console.log(randomNumber)
if (randomNumber>=a&&randomNumber<=a) {
    console.log("Congratulations")
    
} else {
    console.log("try again")
}
}
number(5);