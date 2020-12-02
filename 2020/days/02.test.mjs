import chai from 'chai';

import run from './02.mjs';
import examples from './02.examples.mjs';
import inputs from './02.inputs.mjs';

const { expect } = chai;

describe('Day 2', () => {
	/*
	 * Each line gives the password policy and then the password. The password policy indicates the
	 * lowest and highest number of times a given letter must appear for the password to be valid.
	 * For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.
	 *
	 * In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains
	 * no instances of b, but needs at least 1. The first and third passwords are valid: they contain
	 * one a or nine c, both within the limits of their respective policies.
	 *
	 * How many passwords are valid according to their policies?
	*/
	describe('Part 1', () => {
		it('matches the known answer in the example', () => {
			const results = run({
				dayPart: 1,
				inputs: examples
			});

			expect(results[0].isValid).to.equal(true);
			expect(results[1].isValid).to.equal(false);
			expect(results[2].isValid).to.equal(true);
		});

		it('matches the now known real answer', () => {
			const results = run({
				dayPart: 1,
				inputs
			});

			const validResults = results.filter((result) => result.isValid);

			expect(validResults.length).to.equal(607);
		});
	});

	/*
	 * How many passwords are valid according to the new interpretation of the policies?
	 */
	describe('Part 2', () => {
		it('matches the known answer in the example', () => {
			const results = run({
				dayPart: 2,
				inputs: examples
			});

			expect(results[0].isValid).to.equal(true);
			expect(results[1].isValid).to.equal(false);
			expect(results[2].isValid).to.equal(false);
		});

		it('matches the now known real answer', () => {
			const results = run({
				dayPart: 2,
				inputs
			});

			const validResults = results.filter((result) => result.isValid);

			expect(validResults.length).to.equal(321);
		});
	});
});
