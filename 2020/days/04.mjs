const validEyeColours = new Set([
	'amb',
	'blu',
	'brn',
	'grn',
	'gry',
	'hzl',
	'oth'
]);

const fieldRules = new Map([
	['byr', (field) => {
		const year = Number(field);
		return year >= 1920 && year <= 2002;
	}],
	['ecl', (field) => {
		return validEyeColours.has(field);
	}],
	['eyr', (field) => {
		const year = Number(field);
		return year >= 2020 && year <= 2030;
	}],
	['hcl', (field) => {
		return typeof field === 'string'
			&& /^#[a-f0-9]{6}$/.test(field);
	}],
	['hgt', (field) => {
		if (typeof field !== 'string') { return false; }

		const value = Number(field.slice(0, -2));
		const unit = field.slice(-2);

		if (unit === 'cm') {
			return value >= 150 && value <= 193;
		} else if (unit === 'in') {
			return value >= 59 && value <= 76;
		}

		return false;
	}],
	['iyr', (field) => {
		const year = Number(field);
		return year >= 2010 && year <= 2020;
	}],
	['pid', (field) => {
		return typeof field === 'string'
			&& /^[0-9]{9}$/.test(field);
	}]
]);

const createValidator = ({ useValidationRules }) => (passport) => {
	for (const fieldRuleName of fieldRules.keys()) {
		const isFieldValid = (useValidationRules)
			? fieldRules.get(fieldRuleName)
			: () => true;
		const fieldFromPassport = passport.find((field) => field.startsWith(fieldRuleName));
		const fieldValue = (fieldFromPassport || '').slice(4);

		if (!fieldFromPassport || !isFieldValid(fieldValue)) {
			return false;
		}
	}

	return true;
};

const run = ({
	inputs: rawInputs,
	useValidationRules = true
}) => {
	const rawPassportsData = rawInputs.split('\n\n');
	const cleanUpPassports = rawPassportsData.map((passport) => passport.replaceAll('\n', ' '));
	const passportsWithFields = cleanUpPassports.map((passport) => passport.split(' '));
	const isPassportValid = createValidator({ useValidationRules });

	return passportsWithFields.map(isPassportValid);
};

export default run;
