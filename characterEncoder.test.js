
const assert = require('assert');
const characterEncoder = require('./characterEncoder.js');

describe ('Testing character encoder.', () => {

    it('should return "(((" when encoding "din"',() => {
        assert.equals(characterEncoder("din"),"(((");
    });

    it('should return "()()()" when encoding "recede"',() => {
        assert.equals(characterEncoder("recede"),"()()()");
    });

    it('should return "()()()" when encoding "recede"',() => {
        assert.equals(characterEncoder("recede"),"()()()");
    });

    it('should return "()()()" when encoding "recede"',() => {
        assert.equals(characterEncoderEncode("Success"),")())())","should ignore case");
    });

    it('should return "()()()" when encoding "recede"',() => {
        assert.equals(characterEncode("(( @"),"))((");
    });
});