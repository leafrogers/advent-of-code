const rawInput = [3, 8, 1001, 8, 10, 8, 105, 1, 0, 0, 21, 30, 55, 80, 101, 118, 199, 280, 361, 442, 99999, 3, 9, 101, 4, 9, 9, 4, 9, 99, 3, 9, 101, 4, 9, 9, 1002, 9, 4, 9, 101, 4, 9, 9, 1002, 9, 5, 9, 1001, 9, 2, 9, 4, 9, 99, 3, 9, 101, 5, 9, 9, 1002, 9, 2, 9, 101, 3, 9, 9, 102, 4, 9, 9, 1001, 9, 2, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 101, 5, 9, 9, 102, 3, 9, 9, 101, 3, 9, 9, 4, 9, 99, 3, 9, 1001, 9, 2, 9, 102, 4, 9, 9, 1001, 9, 3, 9, 4, 9, 99, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 99, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 99, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 99, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 99, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 99];

const DEBUG = true;

/**
 * Logs via console.log if DEBUG === true
 * @param {any[]} args
 */
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

const getParamFromRaw = ({ rawParam, input, mode }) => {
	return (modesMap.get(mode) === 'position') ? input[rawParam] : rawParam;
};

const createOpCodeFunctions = ({ phaseSetting, output }) => {
	const opCodeFunctions = new Map([
		[1, ({ input, modes, index }) => {
			const [rawParam1, rawParam2, rawParam3] = input.slice(index);

			log('umm', rawParam1, rawParam2, rawParam3);

			const [param1, param2] = [rawParam1, rawParam2].map((rawParam, i) => {
				return getParamFromRaw({ rawParam, input, mode: modes[i] });
			});

			input[rawParam3] = param1 + param2;

			log(`Working with op code 1;
				index = ${index};
				modes = ${modes};
				rawParam1 = ${rawParam1},
				rawParam2 = ${rawParam2},
				rawParam3 = ${rawParam3},
				params = ${[param1, param2].join()},
				output = ${input[rawParam3]}
			`);

			return index + 3;
		}],
		[2, ({ input, modes, index }) => {
			const [rawParam1, rawParam2, rawParam3] = input.slice(index);
			const [param1, param2] = [rawParam1, rawParam2].map((rawParam, i) => {
				return getParamFromRaw({ rawParam, input, mode: modes[i] });
			});

			input[rawParam3] = param1 * param2;

			log(`Working with op code 2;
				index = ${index};
				modes = ${modes};
				rawParams = ${[rawParam1, rawParam2, rawParam3].join()},
				params = ${[param1, param2].join()},
				output = ${input[rawParam3]}
			`);

			return index + 3;
		}],
		[3, ({ input, modes, index }) => {
			const [rawParam] = input.slice(index);

			input[rawParam] = phaseSetting;

			log(`Working with op code 3;
				index = ${index};
				modes = ${modes};
				rawParams = ${rawParam},
				output = ${input[rawParam]}
			`);

			return index + 1;
		}],
		[4, ({ input, modes, index }) => {
			const [rawParam] = input.slice(index);

			log(`Working with op code 4;
				index = ${index};
				modes = ${modes};
				rawParams = ${rawParam},
				output = ${input[rawParam]}
			`);

			console.log('Opcode 4:', input[rawParam]);

			return index + 1;
		}],
		[5, ({ input, modes, index }) => {
			const [rawParam1, rawParam2] = input.slice(index);
			const [param1, param2] = [rawParam1, rawParam2].map((rawParam, i) => {
				return getParamFromRaw({ rawParam, input, mode: modes[i] });
			});

			log(`Working with op code 5;
				index = ${index};
				modes = ${modes};
				rawParams = ${[rawParam1, rawParam2].join()},
				params = ${[param1, param2].join()}
			`);

			return (param1) ? param2 : index + 2;
		}],
		[6, ({ input, modes, index }) => {
			const [rawParam1, rawParam2] = input.slice(index);
			const [param1, param2] = [rawParam1, rawParam2].map((rawParam, i) => {
				return getParamFromRaw({ rawParam, input, mode: modes[i] });
			});

			log(`Working with op code 6;
				index = ${index};
				modes = ${modes};
				rawParams = ${[rawParam1, rawParam2].join()},
				params = ${[param1, param2].join()}
			`);

			return (!param1) ? param2 : index + 2;
		}],
		[7, ({ input, modes, index }) => {
			const [rawParam1, rawParam2, rawParam3] = input.slice(index);
			const [param1, param2] = [rawParam1, rawParam2].map((rawParam, i) => {
				return getParamFromRaw({ rawParam, input, mode: modes[i] });
			});

			input[rawParam3] = (param1 < param2) ? 1 : 0;

			log(`Working with op code 7;
				index = ${index};
				modes = ${modes};
				rawParams = ${[rawParam1, rawParam2, rawParam3].join()},
				params = ${[param1, param2].join()},
				output = ${input[rawParam3]}
			`);

			output.value = input[rawParam3];

			return index + 3;
		}],
		[8, ({ input, modes, index }) => {
			const [rawParam1, rawParam2, rawParam3] = input.slice(index);
			const [param1, param2] = [rawParam1, rawParam2].map((rawParam, i) => {
				return getParamFromRaw({ rawParam, input, mode: modes[i] });
			});

			input[rawParam3] = (param1 === param2) ? 1 : 0;

			log(`Working with op code 8;
				index = ${index};
				modes = ${modes};
				rawParams = ${[rawParam1, rawParam2, rawParam3].join()},
				params = ${[param1, param2].join()},
				output = ${input[rawParam3]}
			`);

			return index + 3;
		}],
		[99, () => {}],
		[undefined, () => { throw new Error('Op code not found'); }]
	]);

	return opCodeFunctions;
};

/**
 * Gets the weird settings from the space program
 * @param {number} integer
 */
const getOpSettingsFromInteger = (integer) => {
	const [opCodeDigit1, opCodeDigit2, ...modes] = integer.toString().split('').reverse();
	return {
		opCode: Number(`${opCodeDigit2 || 0}${opCodeDigit1}`),
		modes: modes.map(Number)
	};
};


const createAmp = ({ phaseSetting, input }) => {
	let index = 0;
	const output = {};

	const opCodeFunctions = createOpCodeFunctions({ phaseSetting, output });

	/**
	 * Gets the function associated with an op code
	 * @param {number} opCode
	 */
	const getFunctionFromOpCode = (opCode) => {
		return opCodeFunctions.get(opCode) || opCodeFunctions.get(undefined);
	};

	while (index < input.length && input[index] !== 99) {
		const { opCode, modes } = getOpSettingsFromInteger(input[index]);

		const opCodeFunction = getFunctionFromOpCode(opCode);
		const postOperationIndex = opCodeFunction({
			input,
			modes,
			index: index + 1
		});

		log(`Done with op code ${opCode}; postOperationIndex = ${postOperationIndex}`);

		index = postOperationIndex;
	}

	log('Done with all op codes');
	log(input);

	return output.value;
};

const ampA = createAmp({ phaseSetting: 0, input: rawInput.slice() });

console.log('a', ampA);

// const ampB = createAmp({ phaseSetting: 0, input: rawInput.slice() });
// const ampC = createAmp({ phaseSetting: 0, input: rawInput.slice() });
// const ampD = createAmp({ phaseSetting: 0, input: rawInput.slice() });
// const ampE = createAmp({ phaseSetting: 0, input: rawInput.slice() });

module.exports = {};
