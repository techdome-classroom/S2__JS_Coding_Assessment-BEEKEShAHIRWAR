const {isValid} = require("./program1");
const assert = require("assert");



describe("isValid", function () {

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

