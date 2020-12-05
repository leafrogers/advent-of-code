const createViewportWithPattern = (patternRows) => {
	return patternRows.map((row) => row.split(''));
};

const run = ({
	inputs: rawInputs,
	moveRightEachTimeBy,
	moveDownEachTimeBy
}) => {
	const patternRows = rawInputs.split('\n');
	const viewports = [
		createViewportWithPattern(patternRows)
	];

	let viewportIndex = 0;
	let cursorX = 0;
	let cursorY = 0;
	let treeCount = 0;

	while (cursorY < patternRows.length - 1) {
		let viewport;

		for (
			let movedX = 0;
			movedX < moveRightEachTimeBy;
			movedX += 1, cursorX += 1
		) {
			if (cursorX >= patternRows[0].length - 1) {
				// Create a new viewport and move over to it
				viewports.push(createViewportWithPattern(patternRows));
				viewportIndex += 1;
				cursorX = -1;
			}

			viewport = viewports[viewportIndex];
		}

		cursorY += moveDownEachTimeBy;

		if (viewport[cursorY][cursorX] === '#') {
			treeCount += 1;
		}
	}

	return treeCount;
};

export default run;
