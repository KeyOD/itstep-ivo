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
