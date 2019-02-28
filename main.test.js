const should = require('should');
const sum = require('./main');

describe('sum test suite',()=>{
    test('sum 1+2 should equal 3',() => {
        const result = sum(1,2);
        should(result).equal(result);
    });
});