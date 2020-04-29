const potentials = new Set();

const hasDuplicateAdjacentDigits = (numberAsArray) => {
	for (
		let currentDigitIndex = 0, currentNumberArrayLength = numberAsArray.length;
		currentDigitIndex <= currentNumberArrayLength;
		currentDigitIndex += 1
	) {
		if (numberAsArray[currentDigitIndex] === numberAsArray[currentDigitIndex - 1]) {
			return true;
		}
	}

	return false;
};

const hasNoDecreasingDigits = (numberAsArray) => {
	for (
		let currentDigitIndex = 0, currentNumberArrayLength = numberAsArray.length;
		currentDigitIndex <= currentNumberArrayLength;
		currentDigitIndex += 1
	) {
		if (numberAsArray[currentDigitIndex] < numberAsArray[currentDigitIndex - 1]) {
			return false;
		}
	}

	return true;
};

const hasAtLeastOneDoubleDigit = (numberAsArray) => {
	const matchingAdjacentDigits = {
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0,
		9: 0
	};

	for (
		let currentDigitIndex = 0, currentNumberArrayLength = numberAsArray.length;
		currentDigitIndex < currentNumberArrayLength;
		currentDigitIndex += 1
	) {
		const currentDigit = numberAsArray[currentDigitIndex];

		if (currentDigit === numberAsArray[currentDigitIndex + 1]) {
			if (matchingAdjacentDigits[currentDigit] === 0) {
				matchingAdjacentDigits[currentDigit] += 2;
			} else {
				matchingAdjacentDigits[currentDigit] += 1;
			}
		}
	}

	const containsAtLeastOneDoubleDigit = Object.keys(matchingAdjacentDigits).some((digit) => matchingAdjacentDigits[digit] === 2);

	return containsAtLeastOneDoubleDigit;
};

// for (let currentNumber = 111100, max = 111223; currentNumber <= max; currentNumber += 1) {
for (let currentNumber = 171309, max = 643603; currentNumber <= max; currentNumber += 1) {
	const currentNumberAsArray = (currentNumber).toString().split('');

	if (
		hasDuplicateAdjacentDigits(currentNumberAsArray)
		&& hasNoDecreasingDigits(currentNumberAsArray)
		&& hasAtLeastOneDoubleDigit(currentNumberAsArray)
	) {
		potentials.add(currentNumber);
	}
}

console.log(potentials.size);
// console.log(Array.from(potentials).slice(0, 6));
