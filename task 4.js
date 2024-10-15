function BankAccount(accountNumber, accountHolderName, initialBalance) {    // Define the BankAccount object constructor
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = initialBalance;

    this.deposit = function(amount) {            // Method to deposit an amount to the balance
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposit successful. New balance is $${this.balance.toFixed(2)}.`);
        } else {
            console.log('Invalid deposit amount.');
        }
    };

    this.withdraw = function(amount) {               // Method to withdraw an amount from the balance
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawal successful. New balance is $${this.balance.toFixed(2)}.`);
        } else if (amount > this.balance) {
            console.log('Insufficient funds.');
        } else {
            console.log('Invalid withdrawal amount.');
        }
    };

    this.checkBalance = function() {  // Method to check the current balance       
        console.log(`Current balance: $${this.balance.toFixed(2)}`);
    };
}

// Example:-
let myAccount = new BankAccount('1234567890', 'John Doe', 500.00);   // Create a new BankAccount (object)

myAccount.deposit(200);     // Deposit money $200
myAccount.withdraw(100);    // Withdraw money $100
myAccount.checkBalance();   // Check/Display current balance
