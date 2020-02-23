function test1(){
    describe("ifElseTask1",function() {
        it("передаем валидные числа",function() {
            assert.equal(isElseTask1(4, 5), 20);
        });
        it("передаем валидные числа",function() {
            assert.equal(isElseTask1(4, 6), 24);
        });
        it("передаем валидные числа",function() {
            assert.equal(isElseTask1(4, 12), 48);
        });
        it("передаем массив",function() {
            assert.equal(isElseTask1([-12,99,undefined,19,-1]), undefined);
        });
        it("передаем undefined",function() {
            assert.equal(isElseTask1(undefined), undefined);
        });
        it("передаем null",function() {
            assert.equal(isElseTask1(null), undefined);
        });
        it("передаем string",function() {
            assert.equal(isElseTask1(""), undefined);
        });
        it("передаем пустой массив",function() {
            assert.equal(isElseTask1([]), undefined);
        });
        it("передаем Symbol()",function() {
            assert.equal(isElseTask1(Symbol()), undefined);
        });
        it("передаем  2 ",function() {
            assert.equal(isElseTask1(2), undefined);
        });
    });
    describe("ifElseTask2",function() {
        it("передаем валидные числа",function() { 
            assert.equal(isElsetask2Loader(122, 5), 'part 1');
        });
        it("передаем валидные числа",function() { 
            assert.equal(isElsetask2Loader(-2, 35), 'part 2');
        });
        it("передаем валидные числа",function() { 
            assert.equal(isElsetask2Loader(-2, -5), 'part 3');
        });
        it("передаем массив",function() {
            assert.equal(isElsetask2Loader([ 2, 4, 1, -201, 90, 122, 0, 13, -22 ]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(isElsetask2Loader([-12,99,undefined,19,-1]), undefined);
        });
        it("передаем undefined",function() {
            assert.equal(isElsetask2Loader(undefined), undefined);
        });
        it("передаем null",function() {
            assert.equal(isElsetask2Loader(null), undefined);
        });
        it("передаем string",function() {
            assert.equal(isElsetask2Loader(""), undefined);
        });
        it("передаем пустой массив",function() {
            assert.equal(isElsetask2Loader([]), undefined);
        });
        it("передаем Symbol()",function() {
            assert.equal(isElsetask2Loader(Symbol()), undefined);
        });
    });
    describe("ifElseTask3",function() {
        it("передаем валидные числа",function() { 
            assert.equal(isElsetask3Loader(122, 5, 3), 130);
        });
        it("передаем валидные числа",function() { 
            assert.equal(isElsetask3Loader(-2, 35, 4), 39);
        });
        it("передаем валидные числа",function() { 
            assert.equal(isElsetask3Loader(-2, -5, 12), 12);
        });
        it("передаем массив",function() {
            assert.equal(isElsetask3Loader([ 2, 4, 1, -201, 90, 122, 0, 13, -22 ]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(isElsetask3Loader([-12,99,undefined,19,-1]), undefined);
        });
        it("передаем undefined",function() {
            assert.equal(isElsetask3Loader(undefined), undefined);
        });
        it("передаем null",function() {
            assert.equal(isElsetask3Loader(null), undefined);
        });
        it("передаем string",function() {
            assert.equal(isElsetask3Loader(""), undefined);
        });
        it("передаем пустой массив",function() {
            assert.equal(isElsetask3Loader([]), undefined);
        });
        it("передаем Symbol()",function() {
            assert.equal(isElsetask3Loader(Symbol()), undefined);
        });
    });
    describe("ifElseTask4",function() {
        it("передаем валидные числа",function() { 
            assert.equal(isElsetask4Loader(122, 5, 3), 1833);
        });
        it("передаем валидные числа",function() { 
            assert.equal(isElsetask4Loader(-2, 35, 92), 128);
        });
        it("передаем валидные числа",function() { 
            assert.equal(isElsetask4Loader(-2, -5, 212), 2123);
        });
        it("передаем массив",function() {
            assert.equal(isElsetask4Loader([ 2, 4, 1, -201, 90, 122, 0, 13, -22 ]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(isElsetask4Loader([-12,99,undefined,19,-1]), undefined);
        });
        it("передаем undefined",function() {
            assert.equal(isElsetask4Loader(undefined), undefined);
        });
        it("передаем null",function() {
            assert.equal(isElsetask4Loader(null), undefined);
        });
        it("передаем string",function() {
            assert.equal(isElsetask4Loader(""), undefined);
        });
        it("передаем пустой массив",function() {
            assert.equal(isElsetask4Loader([]), undefined);
        });
        it("передаем Symbol()",function() {
            assert.equal(isElsetask4Loader(Symbol()), undefined);
        });
    });
    describe("ifElseTask5",function() {
        it("передаем не валидное число",function() { 
            assert.equal(isElsetask5Loader(122), undefined);
        });
        it("передаем валидное число",function() { 
            assert.equal(isElsetask5Loader(35), "E");
        });
        it("передаем валидное число",function() { 
            assert.equal(isElsetask5Loader(67), "C");
        });
        it("передаем валидное число",function() { 
            assert.equal(isElsetask5Loader(100), "A");
        });
        it("передаем массив",function() {
            assert.equal(isElsetask5Loader([ 2, 4, 1, -201, 90, 122, 0, 13, -22 ]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(isElsetask5Loader([-12,99,undefined,19,-1]), undefined);
        });
        it("передаем undefined",function() {
            assert.equal(isElsetask5Loader(undefined), undefined);
        });
        it("передаем null",function() {
            assert.equal(isElsetask5Loader(null), undefined);
        });
        it("передаем string",function() {
            assert.equal(isElsetask5Loader(""), undefined);
        });
        it("передаем пустой массив",function() {
            assert.equal(isElsetask5Loader([]), undefined);
        });
        it("передаем Symbol()",function() {
            assert.equal(isElsetask5Loader(Symbol()), undefined);
        });
    });
}
