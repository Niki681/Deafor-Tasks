let amount = 500;

const bankAccount = {
  value: amount,
  add(amountToAdd) {
    this.value += amountToAdd;
  },
  withdraw(amountToWithdraw) {
    if (amountToWithdraw > this.value) {
      console.log("Not enough money");
    } else {
      this.value -= amountToWithdraw;
    }
  }
};

console.log(bankAccount.value); // Output: 500
bankAccount.add(100);
console.log(bankAccount.value); // Output: 600
bankAccount.withdraw(200);
console.log(bankAccount.value); // Output: 400
bankAccount.withdraw(500);
// Output: "Not enough money"
console.log(bankAccount.value); // Output: 400