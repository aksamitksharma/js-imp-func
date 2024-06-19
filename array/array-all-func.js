// push(): Adds one or more elements to the end of an array.
console.log('push(): Adds one or more elements to the end of an array.');
const fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// pop(): Removes the last element from an array and returns it.
console.log('pop(): Removes the last element from an array and returns it.');
const fruits_2 = ['apple', 'banana', 'orange'];
const removedFruit = fruits_2.pop();
console.log(removedFruit); // Output: 'orange'
console.log(fruits_2); // Output: ['apple', 'banana']

// shift(): Removes the first element from an array and returns it.
console.log('shift(): Removes the first element from an array and returns it.');
const fruits_3 = ['apple', 'banana', 'orange'];
const removedFruit_3 = fruits_3.shift();
console.log(removedFruit); // Output: 'apple'
console.log(fruits_3); // Output: ['banana', 'orange']

// unshift(): Adds one or more elements to the beginning of an array.
console.log('unshift(): Adds one or more elements to the beginning of an array.');
const fruits_4 = ['banana', 'orange'];
fruits_4.unshift('apple');
console.log(fruits_4); // Output: ['apple', 'banana', 'orange']

// slice(): Returns a shallow copy of a portion of an array into a new array.
console.log('slice(): Returns a shallow copy of a portion of an array into a new array.');
const fruits_5 = ['apple', 'banana', 'orange', 'grape'];
const slicedFruits = fruits_5.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'orange']


// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log('splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place');
const fruits_6 = ['apple', 'banana', 'orange'];
fruits_6.splice(1, 1, 'grape', 'melon');
console.log(fruits_6); // Output: ['apple', 'grape', 'melon', 'orange']


// concat(): Returns a new array that concatenates two or more arrays.
console.log('concat(): Returns a new array that concatenates two or more arrays.');
const fruits1 = ['apple', 'banana'];
const fruits2 = ['orange', 'grape'];
const allFruits = fruits1.concat(fruits2);
console.log(allFruits); // Output: ['apple', 'banana', 'orange', 'grape']


// forEach(): Executes a provided function once for each array element.
console.log('forEach(): Executes a provided function once for each array element.');
const numbers_1 = [1, 2, 3];
numbers_1.forEach(num => console.log(num * 2));
// Output:
// 2
// 4
// 6


// map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
console.log('map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.');
const numbers_2 = [1, 2, 3];
const doubledNumbers = numbers_2.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]


// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
console.log('filter(): Creates a new array with all elements that pass the test implemented by the provided function.');
const numbers_3 = [1, 2, 3, 4, 5];
const evenNumbers = numbers_3.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
