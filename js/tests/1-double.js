import doubleInteger from '../tasks/1-double.js';
import assert from 'assert';

describe('doubleInteger', function() {

  it('doubles 4 to 8', function() {
    assert.equal(4, doubleInteger(2));
  });

  it('doubles 0 to 0', function() {
    assert.equal(0, doubleInteger(0));
  });

  it('doubles -20 to -40', function() {
    assert.equal(-40, doubleInteger(-20));
  });

});
