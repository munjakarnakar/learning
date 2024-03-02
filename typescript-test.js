var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseC = /** @class */ (function () {
    function BaseC() {
        this.x = 0;
        this.y = 1;
        this.w = 2;
        this.v = 19;
        console.log(this.x, this.y, this.w);
    }
    BaseC.prototype.one = function (params) {
        console.log(this.x, this.y, this.w, params);
        return { name: "Base" };
    };
    return BaseC;
}());
var DerivedC = /** @class */ (function (_super) {
    __extends(DerivedC, _super);
    function DerivedC() {
        var _this = _super.call(this) || this;
        _this.d = 0;
        console.log(_super.prototype.one.call(_this, "12"));
        // this.v = 12;
        console.log(_this.y, _this.w);
        return _this;
    }
    DerivedC.prototype.one = function (params, params2) {
        return { name: "Derived" };
    };
    return DerivedC;
}(BaseC));
var DerivedCc = /** @class */ (function (_super) {
    __extends(DerivedCc, _super);
    function DerivedCc() {
        var _this = _super.call(this) || this;
        _this.d;
        return _this;
    }
    return DerivedCc;
}(DerivedC));
// const t = new Base()
// console.log(t.one('hello'))
var hhhhhasjdashhhas = new DerivedC();
console.log(hhhhhasjdashhhas.one("123"));
console.log(hhhhhasjdashhhas.one("123", "123"));
var hh = hhhhhasjdashhhas;
console.log(hh.one(''));
var one = /** @class */ (function () {
    function one() {
    }
    one.prototype.hello = function () {
        return {};
    };
    return one;
}());
var two = /** @class */ (function () {
    function two() {
    }
    two.prototype.hello = function () {
        return {};
    };
    two.prototype.hello1 = function () {
        return {};
    };
    return two;
}());
var p = /** @class */ (function () {
    function p() {
        this.x = 1;
    }
    return p;
}());
var p1 = /** @class */ (function (_super) {
    __extends(p1, _super);
    function p1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x1 = 2;
        return _this;
    }
    return p1;
}(p));
var p2 = /** @class */ (function (_super) {
    __extends(p2, _super);
    function p2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    p2.prototype.f1 = function (other) {
        console.log(other.x1);
    };
    p2.prototype.f2 = function (other) {
        // console.log(p1.x)
    };
    return p2;
}(p1));
var classOne = /** @class */ (function () {
    function classOne() {
    }
    classOne.prototype.func = function () {
        return classOne.x;
    };
    classOne.y = 2;
    classOne.x = 2;
    return classOne;
}());
var clasTwo = /** @class */ (function (_super) {
    __extends(clasTwo, _super);
    function clasTwo() {
        var _this = _super.call(this) || this;
        console.log(_this.func(), 'static check');
        return _this;
    }
    return clasTwo;
}(classOne));
console.log(classOne.y);
// console.log(classOne.x)
var c = new clasTwo();
c.func();
var callArrow = /** @class */ (function () {
    function callArrow() {
        this.getname = function () {
            var x = 10;
            return x;
        };
    }
    return callArrow;
}());
console.log(new callArrow().getname());
