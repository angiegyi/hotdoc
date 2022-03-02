import isNumberEven from '../tasks/2-even.js';
import assert from 'assert';

describe('isNumberEven', function() {

  it('returns true for 2', function() {
    assert.equal(true, isNumberEven(2));
  });

  it('returns false for 3', function() {
    assert.equal(false, isNumberEven(3));
  });

  it('returns true for -2', function() {
    assert.equal(true, isNumberEven(-2));
  });

});
