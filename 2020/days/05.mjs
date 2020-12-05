const seatRowCount = 128;
const seatColumnCount = 8;

const createSequentialArray = (length) => {
	return Array(length).fill().map((_, index) => index);
};

const traverseTreeForFruit = ({
	directionNames,
	traversalData,
	treeArray
}) => {
	let shrinkingTree = treeArray.slice();

	for (const direction of traversalData) {
		if (direction === directionNames[0]) {
			// keep lower bounds and continue
			shrinkingTree = shrinkingTree.slice(0, shrinkingTree.length / 2);
		} else if (direction === directionNames[1]) {
			// keep upper bounds and continue
			shrinkingTree = shrinkingTree.slice(shrinkingTree.length / 2);
		}
	}

	const [fruit] = shrinkingTree;

	return fruit;
};

const calculateSeatId = (boardingPass) => {
	const splitBoardingPass = boardingPass.split('');
	const rowData = splitBoardingPass.slice(0, 7);
	const columnData = splitBoardingPass.slice(7);

	const row = traverseTreeForFruit({
		directionNames: ['F', 'B'],
		traversalData: rowData,
		treeArray: createSequentialArray(seatRowCount)
	});

	const column = traverseTreeForFruit({
		directionNames: ['L', 'R'],
		traversalData: columnData,
		treeArray: createSequentialArray(seatColumnCount)
	});

	return row * seatColumnCount + column;
};

const run = ({
	inputs: rawInputs
}) => {
	const boardingPasses = rawInputs.split('\n');

	return boardingPasses.map(calculateSeatId);
};

export default run;
