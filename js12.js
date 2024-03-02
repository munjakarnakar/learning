var ts1 = /** @class */ (function () {
    function ts1() {
        this.tstFunc = function () {
            console.log('t1');
        };
    }
    return ts1;
}());
var ts1Obj = new ts1();
ts1Obj.tstFunc();
var ts2 = /** @class */ (function () {
    function ts2() {
        this.tstFunc = function () {
            console.log('t1');
        };
    }
    return ts2;
}());
var ts2Obj = new ts1();
ts2Obj.tstFunc();
