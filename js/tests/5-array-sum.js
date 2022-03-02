import arraySum from '../tasks/5-array-sum.js';
import assert from 'assert';

describe('arraySum', () => {

  it('returns the sum of any integers at the top level', () => {
    assert.equal(6, arraySum([1,2,3]));
  });

  it('ignores anything other than numbers', () => {
    assert.equal(6, arraySum([1,2,3,false,true,'5',{},[]]));
  });

  it('sums numbers nested in other arrays', () => {
    assert.equal(6, arraySum(['Hi', 1, [[[[[[[[[2]]],3]]]]]]]));
  });

});
