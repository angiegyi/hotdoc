#! npm test ./tests/5-array-sum.js

/**
 * Sums all integers in a nested array, no matter how many levels deep.
 * @param {Array} startOfTree An array containing other arrays, ints, strings..
 * @returns {Number} The sum of all integers contained in the input, at any level.
 */
export default function arraySum(startOfTree) {
	let total = 0;
	const sum = startOfTree
		.flat(Infinity)
		.reduce(
			(previousValue, currentValue) =>
				Number.isInteger(currentValue)
					? previousValue + currentValue
					: previousValue,
			total
		);
	return sum;
}
