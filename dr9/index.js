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
console.log(validateEmail('test@abv.bg')); // Expected output: true