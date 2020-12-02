import chai from 'chai';

import run from './01.mjs';
import examples from './01.examples.mjs';
import inputs from './01.inputs.mjs';

const { expect } = chai;

describe('Day 1', () => {
	/*
	 * In this list, the two entries that sum to 2020 are 1721 and 299.
	 * Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.
	 * Of course, your expense report is much larger. Find the two entries that sum to 2020; what
	 * do you get if you multiply them together?
	*/
	describe('Part 1', () => {
		it('matches the known answer in the example', () => {
			expect(run({
				inputs: examples,
				targetDepth: 2
			})).to.equal(514579);
		});

		it('matches the now known real answer', () => {
			const answer = run({
				inputs,
				targetDepth: 2
			});

			expect(answer).to.equal(866436);
		});
	});

	/*
	 * The Elves in accounting are thankful for your help; one of them even offers you a starfish
	 * coin they had left over from a past vacation. They offer you a second one if you can find
	 * three numbers in your expense report that meet the same criteria.
	 *
	 * Using the above example again, the three entries that sum to 2020 are 979, 366, and 675.
	 * Multiplying them together produces the answer, 241861950.
	 *
	 * In your expense report, what is the product of the three entries that sum to 2020?
	 */
	describe('Part 2', () => {
		it('matches the known answer in the example', () => {
			expect(run({
				inputs: examples,
				targetDepth: 3
			})).to.equal(241861950);
		});

		it('matches the now known real answer', () => {
			const answer = run({
				inputs,
				targetDepth: 3
			});

			expect(answer).to.equal(276650720);
		});
	});
});
