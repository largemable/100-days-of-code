// Challenge 1 : Count The Bits
// ### Prompt:
// - Write a function called countTheBits that accepts a single numeric argument that will be an integer.
// - The function should return the number of bits set to 1 in the number's binary representation.

// SOLUTION

const countTheBits = (int) => {
	return int
		.toString(2)
		.split('')
		.filter((num) => num === '1').length;
};

// console.log(countTheBits(0));
// console.log(countTheBits(13));
// console.log(countTheBits(256));
// console.log(countTheBits(255));
// console.log(countTheBits(65535));

// Challenge 2 : addChecker
//### Prompt:
// - Write a function called addChecker that accepts two arguments.
// - The first argument is an array containing at least two integers. The integers in the array have been pre-sorted in ascending order.
// - The second argument is an integer.
// - The addChecker function should return true if there are two integers in the array of integers (first argument) that, when added together, equals the integer passed in as the second argument.
// - If there are no two integers in the array with a sum equal to the second argument, addChecker should return false.

// SOLUTION

const addChecker = (array, int) => {
	let leftValue = 0;
	let rightValue = array.length - 1;
	while (leftValue < rightValue) {
		if (array[leftValue] + array[rightValue] === int) {
			return true;
		} else if (array[leftValue] + array[rightValue] < int) {
			leftValue++;
		} else {
			rightValue--;
		}
	}
	return false;
};

// console.log(addChecker( [1, 2], 3 )) // => true
// console.log(addChecker([-3, 2], 9)); // => false
// console.log(addChecker([10, 15, 16, 22], 32)); // => true
// console.log(addChecker([10, 15, 16, 22], 19)); // => false
