import { calculate as calc } from '../utils/calculations.js';

test('inputs null, returns null', () => {
  expect(calc(null)).toEqual(null);
});
