const obj = {name:'karnakar', age:30}

const obj1 = new Object();

obj1['name'] = 'karnakar';
obj1['age'] = 30;


function obj2(){
    this.name = "karnakar"
    this.age = 35
}

// obj2.prototype.email = "karnakar@gmail.com"
// const obj3 = new obj2();

function Person() {}
Person.prototype.name = "Sudheer";
var object = new Person();


console.log(obj,obj1, new obj2(), object);