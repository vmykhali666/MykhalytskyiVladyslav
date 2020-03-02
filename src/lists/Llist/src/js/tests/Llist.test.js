const Llist  = require('../Llist').Llist;

describe("init",function() {
    it("передаем [2]",function() {
        let list = new Llist([2]);
        assert.deepEqual(list._length, 1);
    });
    it("создаем []",function() {
        let list2 = new Llist([]);
        assert.deepEqual(list2._length, 0);
    });
    it("создаем лист без указания аргументов",function() {
        let list3 = new Llist();
        assert.deepEqual(list3._length, 0);
    });
});
describe("size",function() {
    it("передаем [2, 3]",function() {
        assert.deepEqual(new Llist([2, 3]).size(), 2);
    });
    it("создаем []",function() {
        assert.deepEqual(new Llist([]).size(), 0);
    });
});
describe("addStart",function() {
    it("передаем 3 в массив [2, 3]",function() {
        assert.deepEqual(new Llist([2, 3]).addStart(3), 3);
    });
    it("передаем 1 в массив []",function() {
        assert.deepEqual(new Llist([]).addStart(1), 1);
    });
    it("передаем null в массив []",function() {
        assert.deepEqual(new Llist([]).addStart(null), 'Can\'t add empty element');
    });
});
describe("addEnd",function() {
    it("передаем 3 в массив [2, 3]",function() {
        assert.deepEqual(new Llist([2, 3]).addEnd(3), 3);
    });
    it("передаем 3 в массив []",function() {
        assert.deepEqual(new Llist([]).addEnd(3), 1);
    });
    it("передаем null в массив []",function() {
        assert.deepEqual(new Llist([]).addEnd(null), 'Can\'t add empty element');
    });
});
describe("delStart",function() {
    it("массив [2, 3] удаляем 2",function() {
        assert.deepEqual(new Llist([2, 3]).delStart(), 2);
    });
    it("массив [] удаляем елемент",function() {
        assert.deepEqual(new Llist([]).delStart(), undefined);
    });
});
describe("delEnd",function() {
    it("массив [2, 3] удаляем 3",function() {
        assert.deepEqual(new Llist([2, 3]).delEnd(), 3);
    });
    it("массив [] удаляем елемент",function() {
        assert.deepEqual(new Llist([]).delEnd(), undefined);
    });
});
describe("delPos",function() {
    it("массив [2, 3, 3, 6, 4] удаляем 6",function() {
        assert.deepEqual(new Llist([2, 3, 3, 6, 4]).delPos(3), 6);
    });
    it("массив [] удаляем елемент",function() {
        assert.deepEqual(new Llist([]).delPos(2), 'index out of range exception');
    });
    it("массив [] удаляем елемент",function() {
        assert.deepEqual(new Llist([ 2, 2, 3, 4]).delPos(23), 'index out of range exception');
    });
});
describe("get",function() {
    it("массив [2, 3, 3, 6, 4] берем 2",function() {
        assert.deepEqual(new Llist([2, 3, 3, 6, 4]).get(0), 2);
    });
    it("массив [] берем елемент",function() {
        assert.deepEqual(new Llist([]).get(2), 'index out of range exception');
    });
});
describe("set",function() {
    it("массив [2, 3, 3, 6, 4] устанавливаем 0",function() {
        assert.deepEqual(new Llist([2, 3, 3, 6, 4]).set(3, 0), 0);
    });
    it("массив [] устанавливаем елемент",function() {
        assert.deepEqual(new Llist([]).set(22, 1), 'index out of range exception');
    });
    it("массив [] устанавливаем елемент",function() {
        assert.deepEqual(new Llist([2,3,4]).set(2), 0);
    });
    it("массив [] устанавливаем елемент",function() {
        assert.deepEqual(new Llist([2,3,4]).set(), 0);
    });
});
describe("min",function() {
    it("массив [2, 3, 3, 6, 4] меняем 6 на 0",function() {
        assert.deepEqual(new Llist([2, 3, 3, 6, 4]).min(), 2);
    });
    it("массив [] удаляем елемент",function() {
        assert.deepEqual(new Llist([]).min(), undefined);
    });
});
describe("max",function() {
    it("массив [2, 3, 3, 6, 4] берем минимальное",function() {
        assert.deepEqual(new Llist([2, 3, 3, 6, 4]).max(), 6);
    });
    it("массив [] удаляем елемент",function() {
        assert.deepEqual(new Llist([]).max(), undefined);
    });
});
describe("sort",function() {
        let llist = new Llist([2, 3, 3, 6, 4]);
        llist.sort();
    it("массив [2, 3, 3, 6, 4]  сортируем",function() {
        assert.deepEqual( llist.toArray(), [2, 3, 3, 4, 6]);
    });
        let llist2 = new Llist([12, -3, 33, 0, 4]);
        llist2.sort();
    it("массив [12, -3, 33, 0, 4]  сортируем",function() {
        assert.deepEqual( llist2.toArray(), [-3, 0, 4, 12, 33]);
    });
        let llist3 = new Llist([]);
        llist3.sort();
    it("массив []  сортируем",function() {
        assert.deepEqual( llist3.toArray(), []);
    });
});
describe("toString",function() {
    it("массив [2, 3, 3, 6, 4] в строку",function() {
        assert.deepEqual(new Llist([2, 3, 3, 6, 4]).toString(), "23364");
    });
    it("массив [] в строку",function() {
        assert.deepEqual(new Llist([]).toString(), "");
    });
});
describe("clear",function() {
    it("массив [2, 3, 3, 6, 4]",function() {
        let llist1 = new Llist([2, 3, 3, 6, 4]);
        llist1 .sort();
        llist1.clear();
        assert.deepEqual(llist1.toArray(), [2, 3, 3, 6, 4]);
    });
    it("массив []",function() {
        let llist2 = new Llist([]);
        llist2.sort();
        llist2.clear();
        assert.deepEqual(llist2.toArray(), []);
    });
});
describe("minIndex",function() {
    it("массив [2, 3, 3, 6, 4]",function() {
        assert.deepEqual(new Llist([2, 3, 3, 6, 4]).minIndex(), 0);
    });
    it("массив []",function() {
        assert.deepEqual(new Llist([]).minIndex(), undefined);
    });
});
describe("maxIndex",function() {
    it("массив [2, 3, 3, 6, 4]",function() {
        assert.deepEqual(new Llist([2, 3, 3, 6, 4]).maxIndex(), 3);
    });
    it("массив []",function() {
        assert.deepEqual(new Llist([]).maxIndex(), undefined);
    });
});
describe("revers",function() {
    it("массив [2, 3, 3, 6, 4]",function() {
        let llist1 = new Llist([2, 3, 3, 6, 4]);
        llist1.reverse();
        assert.deepEqual(llist1.toArray(), [4, 6, 3, 3, 2]);
    });
    it("массив []",function() {
        let llist2 = new Llist([]);
        llist2.reverse();
        assert.deepEqual(llist2.toArray(), []);
    });
});
describe("halfRevers",function() {
    it("массив [2, 3, 3, 6, 4]",function() {
        let llist1 = new Llist([2, 3, 3, 6, 4]);
        llist1.halfReverse();
        assert.deepEqual(llist1.toArray(), [3, 2, 3, 4, 6]);
    });
    it("массив [2, 3, 3, 6, 4, 9, 3, 4]",function() {
        let llist2 = new Llist([2, 3, 3, 6, 4, 9, 3, 4]);
        llist2.halfReverse();
        assert.deepEqual( llist2.toArray(), [6, 3, 3, 2, 4, 3, 9, 4]);
    });
    it("массив []",function() {
        let llist3 = new Llist([]);
        llist3.halfReverse();
        assert.deepEqual(llist3.toArray(), []);
    });
});
describe("addPos",function() {
    it("массив [2, 3] добавляем 4 на позицию 2",function() {
        assert.deepEqual(new Llist([2, 3]).addPos(2, 4), 3);
    });
    it("массив [] добавляем 4 на позицию 1",function() {
        assert.deepEqual(new Llist([]).addPos(1, 4), 1);
    });
    it("массив [] ничего не передаем",function() {
        assert.deepEqual(new Llist([]).addPos(), 1);
    });
});
describe("toArray",function() {
    it("массив [2, 3]",function() {
        assert.deepEqual(new Llist([2, 3]).toArray(), [2, 3]);
    });
    it("массив []",function() {
        assert.deepEqual(new Llist([]).toArray(), []);
    });
    it("массив []",function() {
        assert.deepEqual(new Llist([1]).toArray(), [1]);
    });
});
describe("halfRevers2",function() {
    it("массив [2, 3, 3, 6, 4]",function() {
        let llist1 = new Llist([2, 3, 3, 6, 4]);
        llist1.halfReverse2();
        assert.deepEqual(llist1.toArray(), [3, 2, 3, 4, 6]);
    });
    it("массив [2, 3, 3, 6, 4, 9, 3, 4]",function() {
        let llist2 = new Llist([2, 3, 3, 6, 4, 9, 3, 4]);
        llist2.halfReverse2();
        assert.deepEqual( llist2.toArray(), [6, 3, 3, 2, 4, 3, 9, 4]);
    });
    it("массив []",function() {
        let llist3 = new Llist([]);
        llist3.halfReverse2();
        assert.deepEqual(llist3.toArray(), []);
    });
});