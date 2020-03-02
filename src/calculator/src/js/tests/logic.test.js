
const calculate = require('../logic').calculate;

describe("Plus",function() {
    it("передаем 4, 5",function() {
        assert.equal(calculate.plus(4, 5), 9);
    });
    it("передаем 4 , 6",function() {
        assert.equal(calculate.plus(4, 6), 10);
    });
    it("передаем 12 , -3",function() {
        assert.equal(calculate.plus(12,-3), 9);
    });
    it("передаем -3, 0",function() {
        assert.equal(calculate.plus(-3, 0), -3);
    });
    it("передаем 3, 12.30",function() {
        assert.equal(calculate.plus(3, 12.30), 15.3);
    });
});
describe("Minus",function() {
    it("передаем 9, 5",function() {
        assert.equal(calculate.minus(9, 5), 4);
    });
    it("передаем 3 , 0",function() {
        assert.equal(calculate.minus(3, 0), 3);
    });
    it("передаем 12 , -3",function() {
        assert.equal(calculate.minus(12,-3), 15);
    });
    it("передаем -3, 0",function() {
        assert.equal(calculate.minus(-3, 0), -3);
    });
    it("передаем -3, 2.4",function() {
        assert.equal(calculate.minus(-3, 2.4), -5.4);
    });
});
describe("Divide",function() {
    it("передаем 9, 5",function() {
        assert.equal(calculate.divide(9, 5), 1.8);
    });
    it("передаем 3 , 0",function() {
        assert.equal(calculate.divide(3, 0), "Error");
    });
    it("передаем 0 , 0",function() {
        assert.equal(calculate.divide(0, 0), "Error");
    });
    it("передаем 0 , 3",function() {
        assert.equal(calculate.divide(0, 3), 0);
    });
    it("передаем 12 , -3",function() {
        assert.equal(calculate.divide(12,-3), -4);
    });
    it("передаем -3, 0",function() {
        assert.equal(calculate.divide(-3, 0), "Error");
    });
    it("передаем -3, 5",function() {
        assert.equal(calculate.divide(-3, 5), -0.6);
    });
});
describe("Multiply",function() {
    it("передаем 9, 5",function() {
        assert.equal(calculate.multiply(9, 5), 45);
    });
    it("передаем 3 , 0",function() {
        assert.equal(calculate.multiply(2.92, 5), 14.6);
    });
    it("передаем 12 , -3",function() {
        assert.equal(calculate.multiply(12,-3), -36);
    });
    it("передаем -3, 0",function() {
        assert.equal(calculate.multiply(-3, 0), 0);
    });
    it("передаем 0, 0",function() {
        assert.equal(calculate.multiply(0, 0), 0);
    });
    it("передаем -3.2, 5",function() {
        assert.equal(calculate.multiply(-3.2, 5), -16);
    });
});