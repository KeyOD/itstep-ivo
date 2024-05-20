/* 1.Description: Write a program that prints all the numbers from 1 to 100. If the number is a multiple of 3, 
print "Fizz" instead of the number. If the number is a multiple of 5, print "Buzz". For numbers that are 
multiples of both 3 and 5, print "FizzBuzz". */
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();

/* 2.Description: Write a program that iterates through an array of numbers and adds them to a 
total sum until a negative number is encountered. Finally, print the total sum of the entered numbers. */
const numbers = [1, 2, 3, 4, 5, 6]; // Sample array with a negative number 
function sumNumbers(numbers) {
    let sum = 0;
    for (let number of numbers) {
        if (number < 0) {
            break;
        }
        sum += number;
    }
    return sum;
}
console.log(sumNumbers(numbers))

/* 3.Description: Write a program that iterates through an array of passwords and stops when the 
correct password ("12345") is found. After the correct password is found, print a welcome message. */
const passwords = ["password1", "password2", "12345", "password3"];
function findPassword(passwords) {
    for (let password of passwords) {
        if (password === '12345') {
            return 'Welcome!';
        }
    }
}
console.log(findPassword(passwords));