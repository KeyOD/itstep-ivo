/* 1. Email Validation (Basic):
Write a function that takes an email address as input and returns true if the email contains 
the '@' symbol and has at least one dot ('.') after '@', otherwise false. */
function validateEmail(email) {
    if (email.indexOf('@') >= 0 && email.indexOf('.', email.indexOf('@')) >= 0) {
        return 'Email ' + email + ' contains "@" and a "." after the "@"';
    } else {
        return 'Email ' + email + ' does not contain "@" or a "." after the "@"';
    }
}
console.log(validateEmail('test@abv.bg'));

/* 2.Greeting Message:
Create a function that takes a person's name as input and returns 
a personalized greeting message, such as "Hello, [Name]!". */
function greetingMessage(name) {
    return 'Hello, ' + name + '!';
}
console.log(greetingMessage('Grigor'));


/* 3. BMI Calculator (Basic):
Write a function that takes a person's weight (in kilograms) and height (in meters) as input 
and returns their Body Mass Index (BMI) as a string 'Your Body Mass Index is N.' */
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return 'Your Body Mass Index is ' + bmi.toFixed(2) + '.';
}
console.log(calculateBMI(70, 1.75));