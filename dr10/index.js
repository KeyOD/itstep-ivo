/* Task for if-else if-else: Write a program that takes a user's score as input 
and outputs their grade based on the following criteria:
Score >= 90: Grade A
Score >= 80: Grade B
Score >= 70: Grade C
Score >= 60: Grade D
Score < 60: Grade F */
function calculateGrade(score) {
    if (score >= 90) {
        return 'Grade A';
    } else if (score >= 80) {
        return 'Grade B';
    } else if (score >= 70) {
        return 'Grade C';
    } else if (score >= 60) {
        return 'Grade D';
    } else {
        return 'Grade F';
    }
}
console.log(calculateGrade(85));
console.log(calculateGrade(40));

// Task for ternary operator: Write a program that determines if a given number is even or odd and prints the result accordingly.
function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}
console.log(evenOrOdd(5));
console.log(evenOrOdd(10));
