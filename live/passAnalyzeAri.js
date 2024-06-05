/* 
ask: Password Strength Checker
Objective:Create a program that checks the strength of a given password. The program will evaluate the password based on various criteria and assign a strength level to it.
Criteria:
  - The password length must be at least 8 characters.
  - The password must contain at least one uppercase letter.
  - The password must contain at least one lowercase letter.
  - The password must contain at least one digit.
  - The password must contain at least one special character (e.g., !, @, #, $, %, ^, &, *).
Strength Levels:
  - Weak: Meets 0 or 1 criteria.
  - Moderate: Meets 2 or 3 criteria.
  - Strong: Meets 4 or all 5 criteria.
Instructions:
  - Use a for loop to iterate through the characters of the password.
  - Use string methods to check for the presence of uppercase letters, lowercase letters, digits, and special characters.
  - Use if-else statements to evaluate which criteria the password meets.
  - Based on the number of criteria met, print out the password strength.
Examples:
1. Input: password123!
1. Output: "Password Strength: Strong"
2. Input: password
2. Output: "Password Strength: Weak 
*/

function passwordStrength(password) {
    let criteria = 0;
    let strength = '';
    let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
    
    let bigCharFound = false
    let smallCharFound = false
    let numberCharFound = false
    let specialCharFound = false


    if (password.length >= 8) {
        criteria++;
    }
    
    for (let char of password) {
        if (char >= 'A' && char <= 'Z' && !bigCharFound) {
            criteria++
            bigCharFound = true;
        } else if (char >= 'a' && char <= 'z' && !smallCharFound) {
            criteria++
            smallCharFound = true;
        } else if (char >= '0' && char <= '9' && !numberCharFound) {
            criteria++
            numberCharFound = true;
        } else if (specialCharacters.includes(char) && !specialCharFound){
            criteria++
            specialCharFound = true;
        }
    }

    if (criteria <= 1) {
        strength = 'Weak';
    } else if (criteria === 2 || criteria === 3) {
        strength = 'Moderate';
    } else if (criteria >= 4) {
        strength = 'Strong';
    }
    return 'Password Strength: ' + strength;
}

// console.log(passwordStrength('password123!'));
// console.log(passwordStrength('password'));
// console.log(passwordStrength('pass'));


/* Word Statistics Analyzer 
Objective:
Write a JavaScript program that takes a hardcoded sentence and a number (N), and provides the following statistics:
The total number of words in the sentence.
The length of the longest word.
The length of the shortest word.
The average word length.
The number of words that are longer than a given number (N).
Instructions:
Input Handling:
Use a hardcoded sentence and a hardcoded number (N).
Processing:
Traverse the sentence to count the number of words.
Find the length of the longest and shortest words.
Calculate the average word length.
Count how many words are longer than the given number (N).
Output:
Print the total number of words.
Print the length of the longest word.
Print the length of the shortest word.
Print the average word length.
Print the number of words longer than N. */


function analyzer(sentence,num){
    let longestLength = 0
    let shortestLength = Infinity
    let averageLength = 0
    let longerThanNum = 0

    let words = sentence.split(" ")
    
    // The total number of words in the sentence.
    let wordInSentence = words.length

    words.forEach(word => {
        let inLength = word.length

        // The length of the longest word.
        if(inLength > longestLength){
            longestLength = inLength
        }
        // The length of the shortest word.
        if(inLength < shortestLength){
            shortestLength = inLength
        }

        // The number of words that are longer than a given number (N).
        if(inLength > num){
            longerThanNum++
        }
        // The average word length. pt.1
        averageLength += inLength
    });

    // The average word length. pt.2
    averageLength = averageLength / wordInSentence
    
    // Print the total number of words.
    console.log('Total number of words: ' + wordInSentence);
    // Print the length of the longest word.
    console.log('Length of longest word: ' + longestLength);
    // Print the length of the shortest word.
    console.log('Length of shortest word: ' + shortestLength);
    // Print the average word length.
    console.log('Average word length: ' + averageLength.toFixed(2));
    // Print the number of words longer than N.
    console.log('Number of words longer than ' + num + ': ' + longerThanNum);
}
// analyzer('this is crazy',3)


/* task: Calculate Readability Score using ARI
Description: You are tasked with creating a JavaScript function that calculates the Automated Readability Index (ARI) 
score and corresponding grade level for a given text passage. The ARI score indicates the readability level of the text 
based on its characters, words, and sentences.
Skills Needed:
Understanding of for loops to iterate over characters in a string.
Utilization of string methods to manipulate and analyze the input text.
Implementation of if-else statements to handle conditions and calculations.
Requirements:
Create a function named calculateARI that takes a text passage as its argument.
Count the number of characters, words, and sentences in the text.
Calculate the ARI score using the provided formula: ARI = 4.71 * (characters/words) + 0.5 * (words/sentences) - 21.43
Determine the corresponding grade level according to the ARI scale (see below).
Return a string containing the ARI score and the corresponding grade level.
ARI Scale:
If the calculated ARI score is less than 1, the grade level is "Kindergarten".
If the score is between 1 and 3, the grade level is "Elementary School".
If the score is between 4 and 7, the grade level is "Middle School".
If the score is between 8 and 10, the grade level is "High School".
If the score is between 11 and 12, the grade level is "College".
If the score is above 12, the grade level is "Professor". */


function calculateAri(bigSentence){
    let splitBigSentence = bigSentence.split('. ')
    let sentences = splitBigSentence.length
    let words = 0
    let chars = 0

    splitBigSentence.forEach(sentence => {
        let splitSentence = sentence.split(' ')
        splitSentence.forEach(word => {
            words+=word.length
            chars += word.split("").length
        });
    });

    let ari = 4.71 * (chars/words) + 0.5*(words/sentences) - 21.43

    if(ari > 12) console.log('Proffesor')
    else if (ari >= 11) console.log('College')
    else if (ari >= 8) console.log('Highschool')
    else if (ari >= 4) console.log('Middle School')
    else if (ari >= 1) console.log('Elementary School')
    else if (ari < 1) console.log('Kindergarten')
}

// calculateAri('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus vitae voluptatem perferendis nulla quibusdam iusto reprehenderit aut quos similique minima?')
// calculateAri('Lorem ipsum dolor sit, amet consectetur adipisicing elit')


/* Write a function areAllPositive that accepts an array of numbers and 
returns true if every number in the array is positive, and false otherwise. */

function areAllPositive(arr){
    return arr.every((el)=> el > 0)
}
// console.log(areAllPositive([1,2,3,4]))

/* Write a function containsNegative that accepts an array of numbers and returns
 true if there is at least one negative number in the array, and false otherwise. */

function containsNegative(arr){
    return arr.some((el)=>el < 0)
}
// console.log(containsNegative([-1,2,3,4]));

/* Write a function filterNonPositive that accepts an array of numbers and returns a
 new array containing only the non-positive numbers (i.e., numbers that are zero or negative) */

function filterNonPositive(arr){
    return arr.filter((el)=>el <= 0)
}
// console.log(filterNonPositive([-1,2,3,0,-4]));