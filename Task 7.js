function checkScholarshipEligibility(gpa) {           // Function to check scholarship eligibility
    if (gpa >= 7.5) {
        console.log("Student is eligible for a scholarship.");
    } else {
        console.log("Student is not eligible for a scholarship.");
    }
}


let studentGPA = 8.0;                 // Example 
checkScholarshipEligibility(studentGPA);
