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

/* Task for switch-case: Write a program that takes a month number (1 for January, 2 for February, etc.) as input 
and prints the number of days in that month. Consider leap years for February. */
function daysInMonth(month,year) {
    switch (month) {
        case 1:
            return 'January has 31 days';
        case 2:
            if(year % 100 === 0 ? year % 400 === 0 : year % 4 === 0){
                return 'February has 29 days';
            }else{
                return 'February has 28 days';
            }
        case 3:
            return 'March has 31 days';
        case 4:
            return 'April has 30 days';
        case 5:
            return 'May has 31 days';
        case 6:
            return 'June has 30 days';
        case 7:
            return 'July has 31 days';
        case 8:
            return 'August has 31 days';
        case 9:
            return 'September has 30 days';
        case 10:
            return 'October has 31 days';
        case 11:
            return 'November has 30 days';
        case 12:
            return 'December has 31 days';
        default:
            return 'Invalid month number';
    }
}
console.log(daysInMonth(2,2024));
console.log(daysInMonth(2,2023));
console.log(daysInMonth(11,2011));