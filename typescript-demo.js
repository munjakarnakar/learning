"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
console.log(Color[0]);
var phone;
phone = "9000";
console.log(phone, typeof (phone));
phone = 900;
console.log(phone, typeof (phone));
var arr = [];
arr.push('string');
arr.push(123);
var names = ['a', 'b', 2, true];
console.log(names instanceof String);
console.log(names instanceof Object);
console.log(names instanceof Number);
console.log(names instanceof Array);
// function addData(data1 : string | number, data2 : string) : string; 
// function addData(data1 : number, data2 : number): number; 
function addData(data1, data2) {
    return data1 - data2;
}
console.log(addData('1', 1));
var add = function (a, b) { console.log(a + (b ? b : 0)); };
console.log(add(1, 2));
var params = function (a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    console.log(a, b);
};
params(1, 2, 3, 4, 4, 5);
console.log("7" + 2);
var n = { name: 'karnakar', mobile: "9000423012" };
function nvrdemo() {
    for (;;) {
        console.log(1);
    }
}
console.log(nvrdemo);
var destruc = { name: 'karnakar', age: 31 };
var name = destruc.name;
console.log(name);
