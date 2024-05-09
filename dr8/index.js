/* Task 1: Create a function to calculate the perimeter of a square
Objective: To reinforce understanding of JavaScript functions by implementing a function to calculate the perimeter of a square.
Write a JavaScript function named calculateSquarePerimeter that takes one parameter: 
sideLength (the length of a side of the square). */
function calculateSquarePerimeter(sideLength) {
    return sideLength * 4;
}
console.log('The perimeter of the square is '+calculateSquarePerimeter(5));; // Expected output: 20

/* Task 2: Create a function to convert temperature from Celsius to Fahrenheit
Objective: To practice JavaScript function creation by implementing a function to convert temperature from Celsius to Fahrenheit.
Define a JavaScript function named celsiusToFahrenheit that takes one parameter: celsius (the temperature in Celsius). */
function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}
console.log('The temperature in Fahrenheit is '+celsiusToFahrenheit(30)); // Expected output: 86
