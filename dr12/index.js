/* Task 1 :You have an array of fruits. Remove "Banana" and "Orange" from the array and add "Kiwi" and "Mango" in their place. */
let Array = ["Apple", "Banana", "Orange", "Cherry"];
Array.splice(1,1,'Kiwi')
Array.splice(2,1,'Mango')
console.log('T1: ' + Array);
 
/* Task 2 :You have an array of student names. Sort the array in alphabetical order. */
let Array2 = ["John", "Anna", "Zoe", "Mark", "Beth"];
console.log('T2: ' + Array2.sort());

/* Task 3 :You have an array of numbers. Create a new array that contains only the first 5 numbers from the original array. */
let Array3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let firstFiveArray3 = Array3.slice(0,5)
console.log('T3 Old array: ' + Array3);
console.log('T3 New array: ' + firstFiveArray3);