import longestString from '../tasks/4-longest.js';
import assert from 'assert';

describe('longestString', () => {

  it('returns the longest string from an array of strings', () => {
    assert.equal('abc', longestString(['a', 'ab', 'abc']));
  });

  it('returns the longest string from an array of strings and arrays', () => {
    assert.equal('abc', longestString(['a', 'ab', 'abc', [0, 1, 2, 3, 4, 5]]));
  });

  it('returns the longest string from an array of strings including unicode', () => {
    assert.equal('World', longestString(['Hi', 'World', '你好']));
  });

  it('returns the longest string from an array of strings and bools', () => {
    assert.equal('abc', longestString(['a', true, 'abc', false]));
  });

});
