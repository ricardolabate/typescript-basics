var MyMap = (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    ;
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    ;
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    ;
    return MyMap;
}());
console.log("EXERCISE");
var numberMap = new MyMap();
numberMap.setItem('apples', 10);
numberMap.setItem('bananas', 2);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
//# sourceMappingURL=exercise.js.map