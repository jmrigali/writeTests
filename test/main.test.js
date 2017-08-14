const main = require('../src/main');
const chai = require('chai');
const assert = chai.assert;

describe('function name', function() {
  it('returns the number of vowels in a string', function() {
    assert.equal(main.countVowels('Hello'), 2);
  });
  it('returns the number of vowels in a string, regardless if they are uppercase or lowercase', function() {
    assert.equal(main.countVowelss("Hello, How Are You?"), 7);
  });

});
