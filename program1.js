/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    let map = {
        ')': '(',
        ']': ']',
        '}': '{'
    };
    for(let i=0;i<s.length;i++){
        let char = s[i];

        if(map[char]){
            let topElement = stack.length === 0 ? '#' : stack.pop();
            
            if(topElement!== map[char]){
                return false;
            }
        }else{
            stack.push(char);
        }
    }

    return stack .length === 0;
};


module.exports = { isValid };

const {isValid} = require("./program1");
const assert = require("assert");



describe("test cases for problem 1 ", function () {

    it("test case 1", function () {
        const result = isValid("()");
        assert.equal(true, result);
    });

    it("test case 2", function () {
        const result = isValid("()[]{}");
        assert.equal(true, result);
    });

    it("test case 3", function () {
        const result = isValid("{[()]}");
        assert.equal(true, result);
    });

    it("test case 4", function () {
        const result = isValid("(]");
        assert.equal(false, result);
    });

    it("test case 5", function () {
        const result = isValid("([)]");
        assert.equal(false, result);
    });

    it("test case 6", function () {
        const result = isValid("");
        assert.equal(true, result);
    });

    it("test case 7", function () {
        const result = isValid("(){");
        assert.equal(false, result);
    });

})


