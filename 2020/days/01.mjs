const targetSum = 2020;

const add = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;

const getMatchesFromInputs = ({
	breadcrumbs = [],
	inputs,
	targetDepth
}) => {
	for (const num of inputs) {
		breadcrumbs.push(num);

		// We’re at the target number of integers for adding
		if (breadcrumbs.length === targetDepth) {
			if (breadcrumbs.reduce(add) === targetSum) {
				return breadcrumbs;
			}
		// We need to add more numbers together, which
		// means adding another level of recursion
		} else {
			// TODO: Do we even need to do this?
			// Skip the first integer because we already
			// have it in our “breadcrumbs” trail
			const newInputs = inputs.slice(1);

			getMatchesFromInputs({
				breadcrumbs,
				inputs: newInputs,
				targetDepth
			});
		}

		breadcrumbs.pop();
	}
};

const run = ({
	inputs: rawInputs,
	targetDepth
}) => {
	const inputs = rawInputs.split('\n').map(Number);
	const matchingGroup = getMatchesFromInputs({
		inputs,
		targetDepth
	});

	return matchingGroup.reduce(multiply);
};

export default run;
