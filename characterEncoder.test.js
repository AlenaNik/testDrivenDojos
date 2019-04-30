
const assert = require('assert');
const characterEncoder = require('./characterEncoder.js');

describe ('Testing character encoder.', () => {
    it('should return: true',() => {
        assert.equal(true, true)
    });
    it('should return "(((" when encoding "din"',() => {
        assert.equal(characterEncoder("din"),"(((");
    });

    it('should return "()()()" when encoding "recede"',() => {
        assert.equal(characterEncoder("recede"),"()()()");
    });

    it('should return ")())())","should ignore case" when encoding "Success"',() => {
        assert.equal(characterEncoder("Success"),")())())","should ignore case");
    });

    it('should return "(( @"),"))((" when encoding "recede"',() => {
        assert.equal(characterEncoder("(( @"),"))((");
    });
});