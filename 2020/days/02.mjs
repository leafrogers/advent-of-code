const toModel = (string) => {
	const matches = string.match(/([\d]+)-([\d]+) ([\w]{1}): (\w+)/);

	return {
		password: matches[4],
		requiredLetter: matches[3],
		requiredLetterCountMax: Number(matches[2]),
		requiredLetterCountMin: Number(matches[1])
	};
};

const validatePasswordForPart1 = (passwordModel) => {
	const {
		password,
		requiredLetter,
		requiredLetterCountMax,
		requiredLetterCountMin
	} = passwordModel;

	const requiredLetterCount = password.split('').filter(
		(letter) => letter === requiredLetter
	).length;

	passwordModel.requiredLetterCount = requiredLetterCount;
	passwordModel.isValid = requiredLetterCount >= requiredLetterCountMin
		&& requiredLetterCount <= requiredLetterCountMax;

	return passwordModel;
};

const validatePasswordForPart2 = (passwordModel) => {
	const {
		password,
		requiredLetter,
		requiredLetterCountMax: position2,
		requiredLetterCountMin: position1
	} = passwordModel;

	const letter1 = password[position1 - 1];
	const letter2 = password[position2 - 1];

	passwordModel.isValid = (letter1 === requiredLetter || letter2 === requiredLetter)
		&& letter1 !== letter2;

	return passwordModel;
};

const run = ({
	inputs: rawInputs,
	dayPart
}) => {
	const inputs = rawInputs.split('\n');
	const passwordModels = inputs.map(toModel);
	const validatePassword = (dayPart === 1) ? validatePasswordForPart1 : validatePasswordForPart2;
	const validatedPasswords = passwordModels.map(validatePassword);

	return validatedPasswords;
};

export default run;
