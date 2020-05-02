/* eslint-disable consistent-return */

const rawInput = `COM)B
B)C
C)D
D)E
E)F
B)G
G)H
D)I
E)J
J)K
K)L`;
const input = rawInput.split('\n').map((rel) => rel.split(')'));
const orbits = { COM: {} };
const findById = (id, currentObj, depth = 0) => {
	if (currentObj[id]) {
		return [currentObj[id], depth];
	}

	for (const key of Object.keys(currentObj)) {
		const result = findById(id, currentObj[key], depth + 1);

		if (result) {
			return result;
		}
	}
};

let totalSteps = 0;

input.forEach((rel) => {
	const [source, orbiter] = rel;
	const [item, depth] = findById(source, orbits) || [];

	totalSteps += (depth + 1);

	item[orbiter] = {};
});

console.log(totalSteps);
console.log(JSON.stringify(orbits, null, 4));
