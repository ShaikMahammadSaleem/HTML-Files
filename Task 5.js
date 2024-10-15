// Define the Loan object constructor
function Loan(loanAmount, interestRate, loanTerm) {
    this.loanAmount = loanAmount;       // Total loan amount
    this.interestRate = interestRate;   // Annual interest rate in percentage
    this.loanTerm = loanTerm;           // Loan term in years

    // Method to calculate the monthly payment (EMI)
    this.calculateMonthlyPayment = function() {
        let monthlyRate = (this.interestRate / 100) / 12;  // Monthly interest rate
        let totalPayments = this.loanTerm * 12;            // Total number of monthly payments
        let monthlyPayment = (this.loanAmount * monthlyRate) / 
            (1 - Math.pow(1 + monthlyRate, -totalPayments));
        
        return monthlyPayment.toFixed(2);  // Return the EMI amount (2 decimal places)
    };

    // Method to check loan status
    this.checkLoanStatus = function(emisPaid) {
        let monthlyPayment = parseFloat(this.calculateMonthlyPayment());
        let totalPayments = this.loanTerm * 12;   // Total number of payments (EMIs)
        let totalAmountToBePaid = monthlyPayment * totalPayments; // Total loan amount with interest

        // Remaining EMIs and balance
        let remainingPayments = totalPayments - emisPaid;
        let remainingAmount = remainingPayments * monthlyPayment;

        console.log(`EMIs Paid: ${emisPaid}`);
        console.log(`Remaining EMIs: ${remainingPayments}`);
        console.log(`Remaining Balance: $${remainingAmount.toFixed(2)}`);
        console.log(`Total Amount to be Paid (with interest): $${totalAmountToBePaid.toFixed(2)}`);
    };
}

// Example usage:

// Create a Loan object
let myLoan = new Loan(10000, 5, 5);  // $10,000 loan, 5% interest, 5-year term

// Calculate monthly EMI
let monthlyPayment = myLoan.calculateMonthlyPayment();
console.log(`Monthly Payment (EMI): $${monthlyPayment}`);

// Check loan status after 12 EMIs (1 year of payments)
myLoan.checkLoanStatus(12);  // Assuming 12 EMIs have been paid
