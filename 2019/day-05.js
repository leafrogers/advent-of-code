const rawInputs = [3, 225, 1, 225, 6, 6, 1100, 1, 238, 225, 104, 0, 1101, 33, 37, 225, 101, 6, 218, 224, 1001, 224, -82, 224, 4, 224, 102, 8, 223, 223, 101, 7, 224, 224, 1, 223, 224, 223, 1102, 87, 62, 225, 1102, 75, 65, 224, 1001, 224, -4875, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 5, 224, 1, 224, 223, 223, 1102, 49, 27, 225, 1101, 6, 9, 225, 2, 69, 118, 224, 101, -300, 224, 224, 4, 224, 102, 8, 223, 223, 101, 6, 224, 224, 1, 224, 223, 223, 1101, 76, 37, 224, 1001, 224, -113, 224, 4, 224, 1002, 223, 8, 223, 101, 5, 224, 224, 1, 224, 223, 223, 1101, 47, 50, 225, 102, 43, 165, 224, 1001, 224, -473, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 3, 224, 1, 224, 223, 223, 1002, 39, 86, 224, 101, -7482, 224, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 6, 224, 1, 223, 224, 223, 1102, 11, 82, 225, 1, 213, 65, 224, 1001, 224, -102, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 6, 224, 1, 224, 223, 223, 1001, 14, 83, 224, 1001, 224, -120, 224, 4, 224, 1002, 223, 8, 223, 101, 1, 224, 224, 1, 223, 224, 223, 1102, 53, 39, 225, 1101, 65, 76, 225, 4, 223, 99, 0, 0, 0, 677, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1105, 0, 99999, 1105, 227, 247, 1105, 1, 99999, 1005, 227, 99999, 1005, 0, 256, 1105, 1, 99999, 1106, 227, 99999, 1106, 0, 265, 1105, 1, 99999, 1006, 0, 99999, 1006, 227, 274, 1105, 1, 99999, 1105, 1, 280, 1105, 1, 99999, 1, 225, 225, 225, 1101, 294, 0, 0, 105, 1, 0, 1105, 1, 99999, 1106, 0, 300, 1105, 1, 99999, 1, 225, 225, 225, 1101, 314, 0, 0, 106, 0, 0, 1105, 1, 99999, 1107, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 329, 101, 1, 223, 223, 8, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 344, 1001, 223, 1, 223, 108, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 359, 1001, 223, 1, 223, 1108, 226, 677, 224, 102, 2, 223, 223, 1006, 224, 374, 1001, 223, 1, 223, 1008, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 389, 101, 1, 223, 223, 7, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 404, 1001, 223, 1, 223, 1007, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 419, 101, 1, 223, 223, 107, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 434, 101, 1, 223, 223, 7, 677, 677, 224, 1002, 223, 2, 223, 1005, 224, 449, 101, 1, 223, 223, 108, 677, 226, 224, 1002, 223, 2, 223, 1006, 224, 464, 101, 1, 223, 223, 1008, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 479, 101, 1, 223, 223, 107, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 494, 1001, 223, 1, 223, 1108, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 509, 101, 1, 223, 223, 1007, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 524, 1001, 223, 1, 223, 1008, 677, 677, 224, 102, 2, 223, 223, 1005, 224, 539, 1001, 223, 1, 223, 1107, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 554, 1001, 223, 1, 223, 1007, 226, 226, 224, 1002, 223, 2, 223, 1005, 224, 569, 1001, 223, 1, 223, 7, 677, 226, 224, 1002, 223, 2, 223, 1006, 224, 584, 1001, 223, 1, 223, 108, 226, 226, 224, 102, 2, 223, 223, 1005, 224, 599, 1001, 223, 1, 223, 8, 677, 677, 224, 102, 2, 223, 223, 1005, 224, 614, 1001, 223, 1, 223, 1107, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 629, 1001, 223, 1, 223, 8, 226, 677, 224, 102, 2, 223, 223, 1006, 224, 644, 1001, 223, 1, 223, 1108, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 659, 101, 1, 223, 223, 107, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 674, 1001, 223, 1, 223, 4, 223, 99, 226];
const manualInput = 5;

const DEBUG = false;
const log = (...args) => {
	if (DEBUG) {
		console.log(...args);
	}
};

const modesMap = new Map([
	[undefined, 'position'],
	[0, 'position'],
	[1, 'immediate']
]);

const getParamFromRaw = ({ rawParam, inputs, mode }) => {
	return (modesMap.get(mode) === 'position') ? inputs[rawParam] : rawParam;
};

const opCodeFunctions = new Map([
	[1, ({ inputs, modes, index }) => {
		const [rawParam1, rawParam2, rawParam3] = inputs.slice(index);

		log('umm', rawParam1, rawParam2, rawParam3);

		const [param1, param2] = [rawParam1, rawParam2].map((rawParam, i) => {
			return getParamFromRaw({ rawParam, inputs, mode: modes[i] });
		});

		inputs[rawParam3] = param1 + param2;

		log(`Working with op code 1;
			index = ${index};
			modes = ${modes};
			rawParam1 = ${rawParam1},
			rawParam2 = ${rawParam2},
			rawParam3 = ${rawParam3},
			params = ${[param1, param2].join()},
			output = ${inputs[rawParam3]}
		`);

		return index + 3;
	}],
	[2, ({ inputs, modes, index }) => {
		const [rawParam1, rawParam2, rawParam3] = inputs.slice(index);
		const [param1, param2] = [rawParam1, rawParam2].map((rawParam, i) => {
			return getParamFromRaw({ rawParam, inputs, mode: modes[i] });
		});

		inputs[rawParam3] = param1 * param2;

		log(`Working with op code 2;
			index = ${index};
			modes = ${modes};
			rawParams = ${[rawParam1, rawParam2, rawParam3].join()},
			params = ${[param1, param2].join()},
			output = ${inputs[rawParam3]}
		`);

		return index + 3;
	}],
	[3, ({ inputs, modes, index }) => {
		const [rawParam] = inputs.slice(index);

		inputs[rawParam] = manualInput;

		log(`Working with op code 3;
			index = ${index};
			modes = ${modes};
			rawParams = ${rawParam},
			output = ${inputs[rawParam]}
		`);

		return index + 1;
	}],
	[4, ({ inputs, modes, index }) => {
		const [rawParam] = inputs.slice(index);

		log(`Working with op code 4;
			index = ${index};
			modes = ${modes};
			rawParams = ${rawParam},
			output = ${inputs[rawParam]}
		`);

		console.log('Opcode 4:', inputs[rawParam]);

		return index + 1;
	}],
	[5, ({ inputs, modes, index }) => {
		const [rawParam1, rawParam2] = inputs.slice(index);
		const [param1, param2] = [rawParam1, rawParam2].map((rawParam, i) => {
			return getParamFromRaw({ rawParam, inputs, mode: modes[i] });
		});

		log(`Working with op code 5;
			index = ${index};
			modes = ${modes};
			rawParams = ${[rawParam1, rawParam2].join()},
			params = ${[param1, param2].join()}
		`);

		return (param1) ? param2 : index + 2;
	}],
	[6, ({ inputs, modes, index }) => {
		const [rawParam1, rawParam2] = inputs.slice(index);
		const [param1, param2] = [rawParam1, rawParam2].map((rawParam, i) => {
			return getParamFromRaw({ rawParam, inputs, mode: modes[i] });
		});

		log(`Working with op code 6;
			index = ${index};
			modes = ${modes};
			rawParams = ${[rawParam1, rawParam2].join()},
			params = ${[param1, param2].join()}
		`);

		return (!param1) ? param2 : index + 2;
	}],
	[7, ({ inputs, modes, index }) => {
		const [rawParam1, rawParam2, rawParam3] = inputs.slice(index);
		const [param1, param2] = [rawParam1, rawParam2].map((rawParam, i) => {
			return getParamFromRaw({ rawParam, inputs, mode: modes[i] });
		});

		inputs[rawParam3] = (param1 < param2) ? 1 : 0;

		log(`Working with op code 7;
			index = ${index};
			modes = ${modes};
			rawParams = ${[rawParam1, rawParam2, rawParam3].join()},
			params = ${[param1, param2].join()},
			output = ${inputs[rawParam3]}
		`);

		return index + 3;
	}],
	[8, ({ inputs, modes, index }) => {
		const [rawParam1, rawParam2, rawParam3] = inputs.slice(index);
		const [param1, param2] = [rawParam1, rawParam2].map((rawParam, i) => {
			return getParamFromRaw({ rawParam, inputs, mode: modes[i] });
		});

		inputs[rawParam3] = (param1 === param2) ? 1 : 0;

		log(`Working with op code 8;
			index = ${index};
			modes = ${modes};
			rawParams = ${[rawParam1, rawParam2, rawParam3].join()},
			params = ${[param1, param2].join()},
			output = ${inputs[rawParam3]}
		`);

		return index + 3;
	}],
	[99, () => {}],
	[undefined, () => { throw new Error('Op code not found'); }]
]);

const getFunctionFromOpCode = (opCode) => {
	return opCodeFunctions.get(opCode) || opCodeFunctions.get(undefined);
};

const inputs = rawInputs.slice();
let index = 0;

const getOpSettingsFromInteger = (integer) => {
	const [opCodeDigit1, opCodeDigit2, ...modes] = integer.toString().split('').reverse();
	return {
		opCode: Number(`${opCodeDigit2 || 0}${opCodeDigit1}`),
		modes: modes.map(Number)
	};
};

while (index < inputs.length && inputs[index] !== 99) {
	const { opCode, modes } = getOpSettingsFromInteger(inputs[index]);

	const opCodeFunction = getFunctionFromOpCode(opCode);
	const postOperationIndex = opCodeFunction({
		inputs,
		modes,
		index: index + 1
	});

	log(`Done with op code ${opCode}; postOperationIndex = ${postOperationIndex}`);

	index = postOperationIndex;
}

log('Done with all op codes');
log(inputs);

module.exports = {};
