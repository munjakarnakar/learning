import { error } from "console";

enum Color {
    Black,
    Blue,
    Yellow
}


console.log(Color[0])


let phone: number | string;
phone = "9000"
console.log(phone, typeof (phone))
phone = 900
console.log(phone, typeof (phone))

const arr: Array<string | number> = [];
arr.push('string')
arr.push(123)

const names = ['a', 'b', 2, true];
console.log(names instanceof String);
console.log(names instanceof Object);
console.log(names instanceof Number);
console.log(names instanceof Array);



// function addData(data1 : string | number, data2 : string) : string; 

// function addData(data1 : number, data2 : number): number; 

function addData(data1: any, data2: any) {
    return data1 - data2;
}

console.log(addData('1', 1))

const add = (a: number, b?: number): void => { console.log(a + (b ? b : 0)) }
console.log(add(1, 2))

const params = (a: number, ...b): void => { console.log(a, b) }

params(1, 2, 3, 4, 4, 5)


console.log("7" + 2)


const n: { name: string, mobile?: string } = { name: 'karnakar', mobile: "9000423012" };


function nvrdemo(): never {
    for (; ;) {
        console.log(1)
    }
}

console.log(nvrdemo);

const destruc = { name: 'karnakar', age: 31 }

const { name }: any = destruc

console.log(name);