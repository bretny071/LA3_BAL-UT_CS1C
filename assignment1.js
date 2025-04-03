let score = parseFloat(prompt("Enter your score:"));

// Check if the score is a valid number
if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid input. Please enter a score between 0 and 100.");
} else {
    // Grade assignment using ternary operators
    let grade = score >= 97 ? "1.00" :
                score >= 94 ? "1.25" :
                score >= 91 ? "1.50" :
                score >= 88 ? "1.75" :
                score >= 85 ? "2.00" :
                score >= 82 ? "2.25" :
                score >= 79 ? "2.50" :
                score >= 76 ? "2.75" :
                score === 75 ? "3.00" :
                score >= 72 ? "4.00" : "5.00";

    let remarks;

    // Remarks assignment using if/else if/else
    if (score >= 90) {
        remarks = "HIGH PASS, Candidate for Cum Laude";
    } else if (score >= 80) {
        remarks = "AVERAGE PASS";
    } else if (score >= 75) {
        remarks = "LOW PASS";
    } else {
        remarks = "FAILED, Needs Improvement";
    }

    console.log("Your equivalent Grade is: " + grade);
    console.log("Remarks: " + remarks);
}
