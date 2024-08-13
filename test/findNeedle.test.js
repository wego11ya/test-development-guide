const chai = require('chai');
const expect = chai.expect;
const findNeedle = require('../src/findNeedle');

describe('findNeedle', function() {
    it('should return the correct index for the first occurrence', function() {
        expect(findNeedle("sadbutsad", "sad")).to.equal(0);
        expect(findNeedle("leetcode", "leeto")).to.equal(-1);
    });
});
