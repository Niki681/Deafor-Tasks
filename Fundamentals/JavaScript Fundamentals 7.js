//7. Create a program that takes the user for a number and then displays 
//a message that says whether the number is even or odd.

function evenOddNumber (a){
    const result = (a % 2  == 0) ? "even" : "odd";
    console.log(result);
}

evenOddNumber(4)
