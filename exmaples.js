// const a: [string | boolean] = ['', true];
// const foo: Array<string | boolean> = [];
// foo.push("");
// foo.push(true);
// foo.push(1);
// console.log(foo)
// const names = ['a', 'b', 2, true];
// console.log(names instanceof String);
// console.log(names instanceof Object);
// console.log(names instanceof Number);
// console.log(names instanceof Array);
// console.log(x);
// var x = 2;
// function test(){
//     let x = 5;
//     console.log(x)
// }
// console.log(x);
// test()
// class testCalss{
//     constructor(param){
//         console.log(`hello ${param}`);
//     }
// }
// const testClsObj = new testCalss('Karnakar');
// class promiseAllDemo {
//     async promises() {
//         const promise1 = new Promise((resolve, reject) => { return resolve(true) })
//         const promise2 = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 return resolve(false)
//             }, 10000);
//         })
//         return Promise.all([promise1, promise2])
//     }
// }
// async function call() {
//     const promiseObj = new promiseAllDemo();
//     console.log(' - ',await promiseObj.promises());
// }
// call()
// const dummyJson = [{name: "Karnakar", phone: "9000423012"}];
// console.log(Object.values(dummyJson))
// console.log(Object.keys(dummyJson))
// console.log(Object.entries(dummyJson))
// console.log(Math.min(...[1,2,4,0]))
// console.log(Math.max(...[1,2,4,0]))
// const a = [1,1,2,3,3];
// const un = new Set(a)
// console.log([...un])
// let a= 1;
// let a = 2;
// const a;
// const k = {name:"Karnakar", phone:900042012}
// const l = [11,23,44]
// for (const key in l) {
//     console.log(key)
// }
var check = [23, 24, 27, 29];
// let aaa = chcek.sort();
// console.log(aaa, aaa[0])
var missing_nums = [];
for (var index = Math.min.apply(Math, check.sort()); index <= Math.max.apply(Math, check.sort()); index++) {
    // console.log(index); 
    (check.includes(index) === false) ? missing_nums.push(index) : '';
}
console.log(missing_nums);
