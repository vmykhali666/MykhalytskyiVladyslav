function test4(){
    describe("funTask1",function() {
        it("передаем массив",function() {
            assert.equal(funTask1Loader([2,1,-1,-1, -1]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(funTask1Loader([-12,99,undefined,19,-1]), undefined);
        });
        it("передаем undefined",function() {
            assert.equal(funTask1Loader(undefined), undefined);
        });
        it("передаем null",function() {
            assert.equal(funTask1Loader(null), undefined);
        });
        it("передаем string",function() {
            assert.equal(funTask1Loader(""), undefined);
        });
        it("передаем пустой массив",function() {
            assert.equal(funTask1Loader([]), undefined);
        });
        it("передаем Symbol()",function() {
            assert.equal(funTask1Loader(Symbol()), undefined);
        });
        it("передаем  8 > number > 0 ",function() {
            assert.equal(funTask1Loader(2), "Tuesday");
        });
        it("передаем  8 > number > 0 ",function() {
            assert.equal(funTask1Loader(5), "Friday");
        });
    });
    describe("funTask2",function() {
        it("передаем валидное число (< 999)",function() { //undefined вернет , но выведет в консоль правильный ответ
            assert.equal(funTask2Loader(122), undefined);
        });
        it("передаем валидное число (< 999)",function() { //undefined вернет , но выведет в консоль правильный ответ
            assert.equal(funTask2Loader(312), undefined);
        });
        it("передаем массив",function() {
            assert.equal(funTask2Loader([ 2, 4, 1, -201, 90, 122, 0, 13, -22 ]), undefined);
        });
        it("передаем массив",function() {
            assert.equal(funTask2Loader([-12,99,undefined,19,-1]), undefined);
        });
        it("передаем undefined",function() {
            assert.equal(funTask2Loader(undefined), undefined);
        });
        it("передаем null",function() {
            assert.equal(funTask2Loader(null), undefined);
        });
        it("передаем string",function() {
            assert.equal(funTask2Loader(""), undefined);
        });
        it("передаем пустой массив",function() {
            assert.equal(funTask2Loader([]), undefined);
        });
        it("передаем Symbol()",function() {
            assert.equal(funTask2Loader(Symbol()), undefined);
        });
    });
    describe("funTask3",function() {
        it("передаем валидную строку",function() {
            assert.equal(funTask3Loader("one hundred thirteen"), 113); // вернет 113 и в консоль пропишет 113
        });
        it("передаем не валидную строку",function() {
            assert.equal(funTask3Loader("1123"), 0); // вернет 113 и в консоль пропишет 113
        });
        it("передаем массив",function() {
            assert.equal(funTask3Loader([-12,99,undefined,19,-1]), undefined);
        });
        it("передаем undefined",function() {
            assert.equal(funTask3Loader(undefined), undefined);
        });
        it("передаем null",function() {
            assert.equal(funTask3Loader(null), undefined);
        });
        it("передаем string",function() {
            assert.equal(funTask3Loader(""), 0);
        });
        it("передаем пустой массив",function() {
            assert.equal(funTask3Loader([]), undefined);
        });
        it("передаем Symbol()",function() {
            assert.equal(funTask3Loader(Symbol()), undefined);
        });
    });
}