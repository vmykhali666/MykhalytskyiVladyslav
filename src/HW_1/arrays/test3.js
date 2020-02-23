function test3(){
    describe("arrayTask1",function() {
        it("передаем массив",function() {
            assert.equal(arrayTask1Loader([1,2,3,19, -1]), -1);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask1Loader([2,1,-1,-1, -1]), -1);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask1Loader([-12,99,undefined,19,-1]), 'object');
        });
        it("передаем undefined",function() {
            assert.equal(arrayTask1Loader(undefined), 'undefined');
        });
        it("передаем null",function() {
            assert.equal(arrayTask1Loader(null), 'object');
        });
        it("передаем string",function() {
            assert.equal(arrayTask1Loader(""), 'string');
        });
        it("передаем пустой массив",function() {
            assert.equal(arrayTask1Loader([]), 'object');
        });
        it("передаем Symbol()",function() {
            assert.equal(arrayTask1Loader(Symbol()), 'symbol');
        });
    });
    describe("arrayTask2",function() {
        it("передаем массив",function() {
            assert.equal(arrayTask2Loader([ 2, 4, 1, -3, 90, 12, 0, 33, -12 ]), 90);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask2Loader([ 2, 4, 1, -201, 90, 122, 0, 13, -22 ]), 122);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask2Loader([-12,99,undefined,19,-1]), 'object');
        });
        it("передаем undefined",function() {
            assert.equal(arrayTask2Loader(undefined), 'undefined');
        });
        it("передаем null",function() {
            assert.equal(arrayTask2Loader(null), 'object');
        });
        it("передаем string",function() {
            assert.equal(arrayTask2Loader(""), 'string');
        });
        it("передаем пустой массив",function() {
            assert.equal(arrayTask2Loader([]), 'object');
        });
        it("передаем Symbol()",function() {
            assert.equal(arrayTask2Loader(Symbol()), 'symbol');
        });
    });
    describe("arrayTask3",function() {
        it("передаем массив",function() {
            assert.equal(arrayTask3Loader([ 2, 4, 1, -3, 90, 12, 0, 33, -12 ]), 8);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask3Loader([ 2, 4, 1, -201, 90, 122, 0, 13, -22 ]), 3);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask3Loader([-12,99,undefined,19,-1]), 'object');
        });
        it("передаем undefined",function() {
            assert.equal(arrayTask3Loader(undefined), 'undefined');
        });
        it("передаем null",function() {
            assert.equal(arrayTask3Loader(null), 'object');
        });
        it("передаем string",function() {
            assert.equal(arrayTask3Loader(""), 'string');
        });
        it("передаем пустой массив",function() {
            assert.equal(arrayTask3Loader([]), 'object');
        });
        it("передаем Symbol()",function() {
            assert.equal(arrayTask3Loader(Symbol()), 'symbol');
        });
    });
    describe("arrayTask4",function() {
        it("передаем массив",function() {
            assert.equal(arrayTask4Loader([ 2, 4, 1, -3, 90, 12, 0, 33, -12 ]), 4);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask4Loader([ 2, 4, 1, -201, 90, 122, 0, 13, -22 ]), 5);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask4Loader([-12,99,undefined,19,-1]), 'object');
        });
        it("передаем undefined",function() {
            assert.equal(arrayTask4Loader(undefined), 'undefined');
        });
        it("передаем null",function() {
            assert.equal(arrayTask4Loader(null), 'object');
        });
        it("передаем string",function() {
            assert.equal(arrayTask4Loader(""), 'string');
        });
        it("передаем пустой массив",function() {
            assert.equal(arrayTask4Loader([]), 'object');
        });
        it("передаем Symbol()",function() {
            assert.equal(arrayTask4Loader(Symbol()), 'symbol');
        });
    });
    describe("arrayTask5",function() {
        it("передаем массив",function() {
            assert.equal(arrayTask5Loader([ 2, 4, 1, -3, 90, 12, 0, 33, -12 ]), 46); // 4 + (-3) + 12 + 33 = 46
        });
        it("передаем массив",function() {
            assert.equal(arrayTask5Loader([ 2, 4, 1, -201, 90, 122, 0, 13, -22 ]), -62); // 4 + (-201) + 122 + 13 = -62
        });
        it("передаем массив",function() {
            assert.equal(arrayTask5Loader([-12,99,undefined,19,-1]), 'object');
        });
        it("передаем undefined",function() {
            assert.equal(arrayTask5Loader(undefined), 'undefined');
        });
        it("передаем null",function() {
            assert.equal(arrayTask5Loader(null), 'object');
        });
        it("передаем string",function() {
            assert.equal(arrayTask5Loader(""), 'string');
        });
        it("передаем пустой массив",function() {
            assert.equal(arrayTask5Loader([]), 'object');
        });
        it("передаем Symbol()",function() {
            assert.equal(arrayTask5Loader(Symbol()), 'symbol');
        });
    });
    describe("arrayTask6",function() {
        it("передаем массив",function() {
            assert.equal(arrayTask6Loader([2,4,1,-3,90,12,0,33,-12]), undefined); 
        });
        it("передаем массив",function() {
            assert.equal(arrayTask6Loader([ 2, 4, 1, -201, 90, 122, 0, 13, -22 ]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask6Loader([-12,99,undefined,19,-1]), 'object');
        });
        it("передаем undefined",function() {
            assert.equal(arrayTask6Loader(undefined), 'undefined');
        });
        it("передаем null",function() {
            assert.equal(arrayTask6Loader(null), 'object');
        });
        it("передаем string",function() {
            assert.equal(arrayTask6Loader(""), 'string');
        });
        it("передаем пустой массив",function() {
            assert.equal(arrayTask6Loader([]), 'object');
        });
        it("передаем Symbol()",function() {
            assert.equal(arrayTask6Loader(Symbol()), 'symbol');
        });
    });
    describe("arrayTask7",function() {
        it("передаем массив",function() {
            assert.equal(arrayTask7Loader([1,2,3,19, -1]), 4);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask7Loader([2,1,-1,-1, -1]), 4);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask7Loader([-12,99,undefined,19,-1]), 'object');
        });
        it("передаем undefined",function() {
            assert.equal(arrayTask7Loader(undefined), 'undefined');
        });
        it("передаем null",function() {
            assert.equal(arrayTask7Loader(null), 'object');
        });
        it("передаем string",function() {
            assert.equal(arrayTask7Loader(""), 'string');
        });
        it("передаем пустой массив",function() {
            assert.equal(arrayTask7Loader([]), 'object');
        });
        it("передаем Symbol()",function() {
            assert.equal(arrayTask7Loader(Symbol()), 'symbol');
        });
    });
    describe("arrayTask8",function() {
        it("передаем массив",function() {
            assert.equal(arrayTask8Loader([1,2,3,19, -1]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask8Loader([2,1,-1,-1, -1]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask8Loader([-12,99,undefined,19,-1]), 'object');
        });
        it("передаем undefined",function() {
            assert.equal(arrayTask8Loader(undefined), 'undefined');
        });
        it("передаем null",function() {
            assert.equal(arrayTask8Loader(null), 'object');
        });
        it("передаем string",function() {
            assert.equal(arrayTask8Loader(""), 'string');
        });
        it("передаем пустой массив",function() {
            assert.equal(arrayTask8Loader([]), 'object');
        });
        it("передаем Symbol()",function() {
            assert.equal(arrayTask8Loader(Symbol()), 'symbol');
        });
    });
    describe("arrayTask9_1",function() {
        it("передаем массив",function() {
            assert.equal(arrayTask9_1Loader([ 2, 4, 1, -3, 90, 12, 0, 33, -12 ]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask9_1Loader([ 2, 4, 1, -201, 90, 122, 0, 13, -22 ]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask9_1Loader([-12,99,undefined,19,-1]), 'object');
        });
        it("передаем undefined",function() {
            assert.equal(arrayTask9_1Loader(undefined), 'undefined');
        });
        it("передаем null",function() {
            assert.equal(arrayTask9_1Loader(null), 'object');
        });
        it("передаем string",function() {
            assert.equal(arrayTask9_1Loader(""), 'string');
        });
        it("передаем пустой массив",function() {
            assert.equal(arrayTask9_1Loader([]), 'object');
        });
        it("передаем Symbol()",function() {
            assert.equal(arrayTask9_1Loader(Symbol()), 'symbol');
        });
    });
    describe("arrayTask9_2",function() {
        it("передаем массив",function() {
            assert.equal(arrayTask9_2Loader([ 2, 4, 1, -3, 90, 12, 0, 33, -12 ]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask9_2Loader([ 2, 4, 1, -201, 90, 122, 0, 13, -22 ]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask9_2Loader([-12,99,undefined,19,-1]), 'object');
        });
        it("передаем undefined",function() {
            assert.equal(arrayTask9_2Loader(undefined), 'undefined');
        });
        it("передаем null",function() {
            assert.equal(arrayTask9_2Loader(null), 'object');
        });
        it("передаем string",function() {
            assert.equal(arrayTask9_2Loader(""), 'string');
        });
        it("передаем пустой массив",function() {
            assert.equal(arrayTask9_2Loader([]), 'object');
        });
        it("передаем Symbol()",function() {
            assert.equal(arrayTask9_2Loader(Symbol()), 'symbol');
        });
    });
    describe("arrayTask9_3",function() {
        it("передаем массив",function() {
            assert.equal(arrayTask9_3Loader([ 2, 4, 1, -3, 90, 12, 0, 33, -12 ]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask9_3Loader([ 2, 4, 1, -201, 90, 122, 0, 13, -22 ]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask9_3Loader([-12,99,undefined,19,-1]), 'object');
        });
        it("передаем undefined",function() {
            assert.equal(arrayTask9_3Loader(undefined), 'undefined');
        });
        it("передаем null",function() {
            assert.equal(arrayTask9_3Loader(null), 'object');
        });
        it("передаем string",function() {
            assert.equal(arrayTask9_3Loader(""), 'string');
        });
        it("передаем пустой массив",function() {
            assert.equal(arrayTask9_3Loader([]), 'object');
        });
        it("передаем Symbol()",function() {
            assert.equal(arrayTask9_3Loader(Symbol()), 'symbol');
        });
    });
    describe("arrayTask10",function() {
        it("передаем массив",function() {
            assert.equal(arrayTask10Loader([ 2, 4, 1, -3, 90, 12, 0, 33, -12 ]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask10Loader([ 2, 4, 1, -201, 90, 122, 0, 13, -22 ]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(arrayTask10Loader([-12,99,undefined,19,-1]), 'object');
        });
        it("передаем undefined",function() {
            assert.equal(arrayTask10Loader(undefined), 'undefined');
        });
        it("передаем null",function() {
            assert.equal(arrayTask10Loader(null), 'object');
        });
        it("передаем string",function() {
            assert.equal(arrayTask10Loader(""), 'string');
        });
        it("передаем пустой массив",function() {
            assert.equal(arrayTask10Loader([]), 'object');
        });
        it("передаем Symbol()",function() {
            assert.equal(arrayTask10Loader(Symbol()), 'symbol');
        });
    });
}