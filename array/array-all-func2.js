// reduce(): Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

console.log('reduce(): Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.')
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)



// every(): Checks if all elements in an array pass a test (provided as a function).

console.log("every(): Checks if all elements in an array pass a test (provided as a function).");
const ages1 = [18, 20, 22, 24];
const isAdult = ages1.every(age => age >= 18);
console.log(isAdult); // Output: true (all ages are 18 or older)


// some(): Checks if at least one element in the array passes a test (provided as a function).

console.log('some(): Checks if at least one element in the array passes a test (provided as a function).');
const ages2 = [16, 18, 22, 24];
const hasAdult = ages2.some(age => age >= 18);
console.log(hasAdult); // Output: true (at least one age is 18 or older)


// find(): Returns the first element in an array that passes a test (provided as a function).

console.log('find(): Returns the first element in an array that passes a test (provided as a function).');
const fruits = ['apple', 'banana', 'orange', 'grape'];
const foundFruit = fruits.find(fruit => fruit.length > 5);
console.log(foundFruit); // Output: 'banana' (first fruit with length > 5)


// indexOf() and lastIndexOf(): indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present. lastIndexOf() returns the last index at which a given element can be found in the array, or -1 if it is not present.
console.log("indexOf() and lastIndexOf(): indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present. lastIndexOf() returns the last index at which a given element can be found in the array, or -1 if it is not present.");
const numbers1 = [1, 2, 3, 4, 2];
console.log(numbers1.indexOf(2)); // Output: 1 (index of first occurrence of 2)
console.log(numbers1.lastIndexOf(2)); // Output: 4 (index of last occurrence of 2)


// includes(): Checks if an array includes a certain element, returning true or false as appropriate.
console.log('includes(): Checks if an array includes a certain element, returning true or false as appropriate.');
const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.includes(3)); // Output: true
console.log(numbers2.includes(10)); // Output: false


// sort(): Sorts the elements of an array in place and returns the sorted array.
console.log('sort(): Sorts the elements of an array in place and returns the sorted array.');
const fruits1 = ['banana', 'orange', 'apple', 'grape'];
fruits1.sort();
console.log(fruits1); // Output: ['apple', 'banana', 'grape', 'orange']





