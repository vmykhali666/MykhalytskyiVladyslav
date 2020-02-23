function test2(){
    describe("loopsTask1",function() {
        it("ничего не передаем",function() {
            assert.equal(task1Loader(), 49);
        });
        it("передаем валидные числа",function() {
            assert.equal(task1Loader(1, 100), 49);
        });
        it("передаем валидные числа",function() {
            assert.equal(task1Loader(4, 6), 1);
        });
        it("передаем валидные числа",function() {
            assert.equal(task1Loader(4, 12), 4);
        });
        it("передаем массив",function() {
            assert.equal(task1Loader([-12,99,undefined,19,-1]), undefined);
        });
        it("передаем undefined",function() {
            assert.equal(task1Loader(undefined), 49); // в функции стоит дефолтное значение от [1 до 100)
        });
        it("передаем null",function() {
            assert.equal(task1Loader(null), undefined);
        });
        it("передаем string",function() {
            assert.equal(task1Loader(""), undefined);
        });
        it("передаем пустой массив",function() {
            assert.equal(task1Loader([]), undefined);
        });
        it("передаем Symbol()",function() {
            assert.equal(task1Loader(Symbol()), undefined);
        });
    });
    describe("loopsTask2",function() {
        it("ничего не передаем",function() {
            assert.equal(task2Loader(), undefined);
        });
        it("передаем валидное число",function() {
            assert.equal(task2Loader(13), "is a simple number");
        });
        it("передаем валидные числа",function() {
            assert.equal(task2Loader(4), "is a composite number");
        });
        it("передаем валидные числа",function() {
            assert.equal(task2Loader(12), "is a composite number");
        });
        it("передаем массив",function() {
            assert.equal(task2Loader([-12,99,undefined,19,-1]), undefined);
        });
        it("передаем undefined",function() {
            assert.equal(task2Loader(undefined), undefined); 
        });
        it("передаем null",function() {
            assert.equal(task2Loader(null), undefined);
        });
        it("передаем string",function() {
            assert.equal(task2Loader(""), undefined);
        });
        it("передаем пустой массив",function() {
            assert.equal(task2Loader([]), undefined);
        });
        it("передаем Symbol()",function() {
            assert.equal(task2Loader(Symbol()), undefined);
        });
    });
    describe("loopsTask3",function() {
        it("ничего не передаем",function() {
            assert.equal(task3Loader(), undefined);
        });
        it("передаем валидное число",function() {
            assert.equal(task3Loader(121), 11);
        });
        it("передаем валидные числа",function() {
            assert.equal(task3Loader(4), 2);
        });
        it("передаем валидные числа",function() {
            assert.equal(task3Loader(3), 2);
        });
        it("передаем валидные числа",function() {
            assert.equal(task3Loader(5), 2);
        });
        it("передаем массив",function() {
            assert.equal(task3Loader([-12,99,undefined,19,-1]), undefined);
        });
        it("передаем undefined",function() {
            assert.equal(task3Loader(undefined), undefined); 
        });
        it("передаем null",function() {
            assert.equal(task3Loader(null), undefined);
        });
        it("передаем string",function() {
            assert.equal(task3Loader(""), undefined);
        });
        it("передаем пустой массив",function() {
            assert.equal(task3Loader([]), undefined);
        });
        it("передаем Symbol()",function() {
            assert.equal(task3Loader(Symbol()), undefined);
        });
    });
    describe("loopsTask3_1",function() {
        it("ничего не передаем",function() {
            assert.equal(task3_1Loader(), undefined);
        });
        it("передаем валидное число",function() {
            assert.equal(task3_1Loader(121), 11);
        });
        it("передаем валидные числа",function() {
            assert.equal(task3_1Loader(4), 2);
        });
        it("передаем валидные числа",function() {
            assert.equal(task3_1Loader(3), 1);
        });
        it("передаем валидные числа",function() {
            assert.equal(task3_1Loader(5), 2);
        });
        it("передаем валидные числа",function() {
            assert.equal(task3_1Loader(7), 2);
        });
        it("передаем валидные числа",function() {
            assert.equal(task3_1Loader(8), 2);
        });
        it("передаем валидные числа",function() {
            assert.equal(task3_1Loader(9), 3);
        });
        it("передаем валидные числа",function() {
            assert.equal(task3_1Loader(10), 3);
        });
        it("передаем массив",function() {
            assert.equal(task3_1Loader([-12,99,undefined,19,-1]), undefined);
        });
        it("передаем undefined",function() {
            assert.equal(task3_1Loader(undefined), undefined); 
        });
        it("передаем null",function() {
            assert.equal(task3_1Loader(null), undefined);
        });
        it("передаем string",function() {
            assert.equal(task3_1Loader(""), undefined);
        });
        it("передаем пустой массив",function() {
            assert.equal(task3_1Loader([]), undefined);
        });
        it("передаем Symbol()",function() {
            assert.equal(task3_1Loader(Symbol()), undefined);
        });
    });
    describe("loopsTask4",function() {
        it("ничего не передаем",function() {
            assert.equal(task4Loader(), undefined);
        });
        it("передаем валидное число",function() {
            assert.equal(task4Loader(2), 2);
        });
        it("передаем валидные числа",function() {
            assert.equal(task4Loader(4), 24);
        });
        it("передаем валидные числа",function() {
            assert.equal(task4Loader(0), 1);
        });
        it("передаем валидные числа",function() {
            assert.equal(task4Loader(3), 6);
        });
        it("передаем валидные числа",function() {
            assert.equal(task4Loader(5), 120);
        });
        it("передаем валидные числа",function() {
            assert.equal(task4Loader(7), 5040);
        });
        it("передаем валидные числа",function() {
            assert.equal(task4Loader(8), 40320);
        });
        it("передаем валидные числа",function() {
            assert.equal(task4Loader(9), 362880);
        });
        it("передаем валидные числа",function() {
            assert.equal(task4Loader(10), 3628800);
        });
        it("передаем массив",function() {
            assert.equal(task4Loader([-12,99,undefined,19,-1]), undefined);
        });
        it("передаем undefined",function() {
            assert.equal(task4Loader(undefined), undefined); 
        });
        it("передаем null",function() {
            assert.equal(task4Loader(null), undefined);
        });
        it("передаем string",function() {
            assert.equal(task4Loader(""), undefined);
        });
        it("передаем пустой массив",function() {
            assert.equal(task4Loader([]), undefined);
        });
        it("передаем Symbol()",function() {
            assert.equal(task4Loader(Symbol()), undefined);
        });
    });
    describe("loopsTask5",function() {
        it("ничего не передаем",function() {
            assert.equal(task5Loader(), undefined);
        });
        it("передаем валидное число",function() {
            assert.equal(task5Loader(2), 2);
        });
        it("передаем валидные числа",function() {
            assert.equal(task5Loader(124), 7);
        });
        it("передаем валидные числа",function() {
            assert.equal(task5Loader(2213), 8);
        });
        it("передаем валидные числа",function() {
            assert.equal(task5Loader(0), 0);
        });
        it("передаем валидные числа",function() {
            assert.equal(task5Loader(23415), 15);
        });
        it("передаем валидные числа",function() {
            assert.equal(task5Loader(-8213), 14);
        });
        it("передаем валидные числа",function() {
            assert.equal(task5Loader(3221), 8);
        });
        it("передаем валидные числа",function() {
            assert.equal(task5Loader(321), 6);
        });
        it("передаем валидные числа",function() {
            assert.equal(task5Loader(12), 3);
        });
        it("передаем массив",function() {
            assert.equal(task5Loader([-12,99,undefined,19,-1]), undefined);
        });
        it("передаем undefined",function() {
            assert.equal(task5Loader(undefined), undefined); 
        });
        it("передаем null",function() {
            assert.equal(task5Loader(null), undefined);
        });
        it("передаем string",function() {
            assert.equal(task5Loader(""), undefined);
        });
        it("передаем пустой массив",function() {
            assert.equal(task5Loader([]), undefined);
        });
        it("передаем Symbol()",function() {
            assert.equal(task5Loader(Symbol()), undefined);
        });
    });
    describe("loopsTask6",function() {
        it("ничего не передаем",function() {
            assert.equal(task6Loader(), undefined);
        });
        it("передаем валидное число",function() {
            assert.equal(task6Loader(2), 2);
        });
        it("передаем валидные числа",function() {
            assert.equal(task6Loader(124), 421);
        });
        it("передаем валидные числа",function() {
            assert.equal(task6Loader(2213), 3122);
        });
        it("передаем валидные числа",function() {
            assert.equal(task6Loader(0), 0);
        });
        it("передаем валидные числа",function() {
            assert.equal(task6Loader(23415), 51432);
        });
        it("передаем валидные числа",function() {
            assert.equal(task6Loader(-8213), -3128);
        });
        it("передаем валидные числа",function() {
            assert.equal(task6Loader(3221), 1223);
        });
        it("передаем валидные числа",function() {
            assert.equal(task6Loader(321), 123);
        });
        it("передаем валидные числа",function() {
            assert.equal(task6Loader(12), 21);
        });
        it("передаем массив",function() {
            assert.equal(task6Loader([-12,99,undefined,19,-1]), undefined);
        });
        it("передаем undefined",function() {
            assert.equal(task6Loader(undefined), undefined); 
        });
        it("передаем null",function() {
            assert.equal(task6Loader(null), undefined);
        });
        it("передаем string",function() {
            assert.equal(task6Loader(""), undefined);
        });
        it("передаем пустой массив",function() {
            assert.equal(task6Loader([]), undefined);
        });
        it("передаем Symbol()",function() {
            assert.equal(task6Loader(Symbol()), undefined);
        });
    });
}