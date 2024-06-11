/* Task 1 :You have an array of fruits. Remove "Banana" and "Orange" from the array and add "Kiwi" and "Mango" in their place. */
let Array = ["Apple", "Banana", "Orange", "Cherry"];
Array.splice(1,1,'Kiwi')
Array.splice(2,1,'Mango')
console.log('T1: ' + Array);
 
/* Task 2 :You have an array of student names. Sort the array in alphabetical order. */
let Array2 = ["John", "Anna", "Zoe", "Mark", "Beth"];
console.log('T2: ' + Array2.sort());
