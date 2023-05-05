//3. Create a program that simulates a bank account using an 
//object with properties for account number, balance, and account holder name.
// Then, write methods for depositing and withdrawing money from the account,
// and print out the balance after each transaction.

let bankAccount = {
    accNum: "BG72FINV9855320",
    balance: 1000,
    accountHolderName: "Ivan Ivanov",
    
    // Method to deposit money into the account
    deposit: function(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount} into account ${this.accNum}. New balance is ${this.balance}.`);
    },
    
    // Method to withdraw money from the account
    withdraw: function(amount) {
      if (amount > this.balance) {
        console.log(`Insufficient balance in account ${this.accNum}. Withdrawal failed.`);
      } else {
        this.balance -= amount;
        console.log(`Withdrew ${amount} from account ${this.accNum}. New balance is ${this.balance}.`);
      }
    }
  };
  
  // Test the bank account methods by depositing and withdrawing money
  bankAccount.deposit(500);
  bankAccount.withdraw(200);
  bankAccount.withdraw(1500);
