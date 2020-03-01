const Alist = require('../AList').Alist;

describe("init",function() {
    it("передаем [2]",function() {
        assert.deepEqual(new Alist([2]).init(), [2]);
    });
    it("создаем []",function() {
        assert.deepEqual(new Alist([]).init(), []);
    });
});
describe("lengthOf",function() {
    it("передаем [2, 3]",function() {
        assert.deepEqual(new Alist([2, 3]).lengthOf([2, 3]), 2);
    });
    it("создаем []",function() {
        assert.deepEqual(new Alist([]).lengthOf([]), 0);
    });
});
describe("size",function() {
    it("передаем [2, 3]",function() {
        assert.deepEqual(new Alist([2, 3]).size(), 2);
    });
    it("создаем []",function() {
        assert.deepEqual(new Alist([]).size(), 0);
    });
});
describe("addStart",function() {
    it("передаем 3 в массив [2, 3]",function() {
        assert.deepEqual(new Alist([2, 3]).addStart(3), 3);
    });
    it("передаем 1 в массив []",function() {
        assert.deepEqual(new Alist([]).addStart(1), 1);
    });
    it("передаем null в массив []",function() {
        assert.deepEqual(new Alist([]).addStart(null), 0);
    });
});
describe("addEnd",function() {
    it("передаем 3 в массив [2, 3]",function() {
        assert.deepEqual(new Alist([2, 3]).addEnd(3), 3);
    });
    it("передаем 3 в массив []",function() {
        assert.deepEqual(new Alist([]).addEnd(3), 1);
    });
    it("передаем null в массив []",function() {
        assert.deepEqual(new Alist([]).addEnd(null), 0);
    });
});
describe("delStart",function() {
    it("массив [2, 3] удаляем 2",function() {
        assert.deepEqual(new Alist([2, 3]).delStart(), 2);
    });
    it("массив [] удаляем елемент",function() {
        assert.deepEqual(new Alist([]).delStart(), undefined);
    });
});
describe("delEnd",function() {
    it("массив [2, 3] удаляем 3",function() {
        assert.deepEqual(new Alist([2, 3]).delEnd(), 3);
    });
    it("массив [] удаляем елемент",function() {
        assert.deepEqual(new Alist([]).delEnd(), undefined);
    });
});
describe("delPos",function() {
    it("массив [2, 3, 3, 6, 4] удаляем 6",function() {
        assert.deepEqual(new Alist([2, 3, 3, 6, 4]).delPos(3), 6);
    });
    it("массив [] удаляем елемент",function() {
        assert.deepEqual(new Alist([]).delPos(2), 'Index range exception ! ! !');
    });
    it("массив [] удаляем елемент",function() {
        assert.deepEqual(new Alist([ 2, 2, 3, 4]).delPos(23), 'Index range exception ! ! !');
    });
});
describe("get",function() {
    it("массив [2, 3, 3, 6, 4] берем 2",function() {
        assert.deepEqual(new Alist([2, 3, 3, 6, 4]).get(0), 2);
    });
    it("массив [] берем елемент",function() {
        assert.deepEqual(new Alist([]).get(2), 'Index range exception ! ! !');
    });
});
describe("set",function() {
    it("массив [2, 3, 3, 6, 4] устанавливаем 0",function() {
        assert.deepEqual(new Alist([2, 3, 3, 6, 4]).set(3, 0), [2, 3, 3, 0, 4]);
    });
    it("массив [] устанавливаем елемент",function() {
        assert.deepEqual(new Alist([]).set(22), 'Index range exception ! ! !');
    });
});
describe("min",function() {
    it("массив [2, 3, 3, 6, 4] меняем 6 на 0",function() {
        assert.deepEqual(new Alist([2, 3, 3, 6, 4]).min(), 2);
    });
    it("массив [] удаляем елемент",function() {
        assert.deepEqual(new Alist([]).get(), 'Index range exception ! ! !');
    });
});
describe("max",function() {
    it("массив [2, 3, 3, 6, 4] берем минимальное",function() {
        assert.deepEqual(new Alist([2, 3, 3, 6, 4]).max(), 6);
    });
    it("массив [] удаляем елемент",function() {
        assert.deepEqual(new Alist([]).max(), undefined);
    });
});

describe("sort",function() {
    let alist = new Alist([2, 3, 3, 6, 4]);
    it("массив [2, 3, 3, 6, 4] берем минимальное",function() {
        alist.sort()
        assert.deepEqual( alist.arr, [2, 3, 3, 4, 6]);
    });
    let alist2 = new Alist([]);
    it("массив [] удаляем елемент",function() {
        alist2.sort();
        assert.deepEqual(alist2.arr, []);
    });
});
describe("toString",function() {
    it("массив [2, 3, 3, 6, 4] в строку",function() {
        assert.deepEqual(new Alist([2, 3, 3, 6, 4]).toString(), "23364");
    });
    it("массив [] в строку",function() {
        assert.deepEqual(new Alist([]).toString(), "");
    });
});
describe("clear",function() {
    it("массив [2, 3, 3, 6, 4]",function() {
        assert.deepEqual(new Alist([2, 3, 3, 6, 4]).clear(), [2, 3, 3, 6, 4]);
    });
    it("массив []",function() {
        assert.deepEqual(new Alist([]).clear(), []);
    });
});
describe("minIndex",function() {
    it("массив [2, 3, 3, 6, 4]",function() {
        assert.deepEqual(new Alist([2, 3, 3, 6, 4]).minIndex(), 0);
    });
    it("массив []",function() {
        assert.deepEqual(new Alist([]).minIndex(), undefined);
    });
});
describe("maxIndex",function() {
    it("массив [2, 3, 3, 6, 4]",function() {
        assert.deepEqual(new Alist([2, 3, 3, 6, 4]).maxIndex(), 3);
    });
    it("массив []",function() {
        assert.deepEqual(new Alist([]).maxIndex(), undefined);
    });
});
describe("revers",function() {
    it("массив [2, 3, 3, 6, 4]",function() {
        assert.deepEqual(new Alist([2, 3, 3, 6, 4]).reverse(), [4, 6, 3, 3, 2]);
    });
    it("массив []",function() {
        assert.deepEqual(new Alist([]).reverse(), []);
    });
});
describe("halfRevers",function() {
    it("массив [2, 3, 3, 6, 4]",function() {
        assert.deepEqual(new Alist([2, 3, 3, 6, 4]).halfReverse(), [3, 2, 3, 4, 6]);
    });
    it("массив [2, 3, 3, 6, 4, 9, 3, 4]",function() {
        assert.deepEqual(new Alist([2, 3, 3, 6, 4, 9, 3, 4]).halfReverse(), [6, 3, 3, 2, 4, 3, 9, 4]);
    });
    it("массив []",function() {
        assert.deepEqual(new Alist([]).reverse(), []);
    });
});
