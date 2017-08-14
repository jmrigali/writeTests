const main = require('../src/main');
const chai = require('chai');
const assert = chai.assert;

describe('function name', function() {
  it('sum numbers in an array', function() {
    assert.equal(main.sumNumbers([1,2,3]), 6);
  });
  it('if array elements are non-numbers, result should concatenate', function() {
    const strArray= ['a','b','c'];
    assert.equal(main.sumNumbers(strArray), 'abc');
  });

});
