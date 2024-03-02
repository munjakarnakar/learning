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
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.Name = name;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(childName) {
        var _this = _super.call(this, "Karnakar") || this;
        _this.display = function () {
            console.log("Paranet: ".concat(_this.Name, " Child: ").concat(_this.ChildName));
        };
        _this.ChildName = childName;
        return _this;
    }
    return Child;
}(Parent));
var Child2 = /** @class */ (function (_super) {
    __extends(Child2, _super);
    function Child2(childName2) {
        var _this = _super.call(this, "Simba1") || this;
        _this.display2 = function () {
            console.log("Paranet: ".concat(_this.Name, " Child:").concat(_this.ChildName, " Child2: ").concat(_this.ChildName2));
        };
        _this.ChildName2 = childName2;
        return _this;
    }
    return Child2;
}(Child));
var chObj = new Child2("Simba2");
chObj.display2();
