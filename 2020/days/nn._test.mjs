import chai from 'chai';

import run from './nn.mjs';
import examples from './nn.examples.mjs';
import inputs from './nn.inputs.mjs';

const { expect } = chai;

describe.only('Day nn', () => {
	describe('Part 1', () => {
		it('matches the known answer in the example', () => {
			const answer = run({
				inputs: examples
			});

			expect(answer).to.equal(0);
		});

		it.skip('matches the now known real answer', () => {
			const answer = run({
				inputs
			});

			expect(answer).to.equal(0);
		});
	});

	describe.skip('Part 2', () => {
		it('matches the known answer in the example', () => {
			const answer = run({
				inputs: examples
			});

			expect(answer).to.equal(0);
		});

		it.skip('matches the now known real answer', () => {
			const answer = run({
				inputs
			});

			expect(answer).to.equal(0);
		});
	});
});
