// TASK 1
// Doubling of number
// https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript2/week2/homework.md#doubling-of-number

let numbers = [1, 2, 3, 4];
let newNumbers = [];

let oddNumbers = numbers.filter( number => number % 2 !== 0 );
newNumbers = oddNumbers.map( n => n * 2);
console.log("The doubled numbers are", newNumbers); // [2, 6]