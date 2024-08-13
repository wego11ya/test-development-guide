const chai = require('chai');
const expect = chai.expect;
const fizzBuzz = require('../src/fizzBuzz');

describe('fizzBuzz', function() {
    it('should return the correct FizzBuzz array', function() {
        expect(fizzBuzz(3)).to.deep.equal(["1", "2", "Fizz"]);
        expect(fizzBuzz(5)).to.deep.equal(["1", "2", "Fizz", "4", "Buzz"]);
        expect(fizzBuzz(15)).to.deep.equal(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
    });
});
