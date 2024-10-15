// Define the Loan object constructor
function Loan(loanAmount, interestRate, loanTerm, applicantIncome, applicantBalance) {
    this.loanAmount = loanAmount;
    this.interestRate = interestRate;
    this.loanTerm = loanTerm;
    this.applicantIncome = applicantIncome;   // Monthly income
    this.applicantBalance = applicantBalance; // Bank balance
    this.status = 'Pending';                 // Loan status ('Approved', 'Rejected', or 'Pending')
}

// Define the LoanManager object constructor
function LoanManager() {
    this.loans = [];

    // Method to apply for a loan
    this.applyLoan = function(loan) {
        this.loans.push(loan);
        console.log('Loan application submitted.');
    };

    // Method to approve or reject loans based on eligibility criteria
    this.processLoans = function() {
        this.loans.forEach(function(loan) {
            if (loan.applicantIncome >= 30000 && loan.applicantBalance >= loan.loanAmount * 0.2) {
                loan.status = 'Approved';
                console.log(`Loan approved for applicant with income $${loan.applicantIncome} and balance $${loan.applicantBalance}`);
            } else {
                loan.status = 'Rejected';
                console.log(`Loan rejected for applicant with income $${loan.applicantIncome} and balance $${loan.applicantBalance}`);
            }
        });
    };

    // Method to check the status of all loans
    this.checkLoanStatus = function() {
        this.loans.forEach(function(loan, index) {
            console.log(`Loan ${index + 1} status: ${loan.status}`);
        });
    };
}

// Example usage:
let loan1 = new Loan(50000, 5, 10, 35000, 15000);
let loan2 = new Loan(20000, 6, 5, 25000, 5000);

let loanManager = new LoanManager();
loanManager.applyLoan(loan1);
loanManager.applyLoan(loan2);
loanManager.processLoans();
loanManager.checkLoanStatus();
