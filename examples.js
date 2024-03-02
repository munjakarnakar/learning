// const a: [string | boolean] = ['', true];
// const foo: Array<string | boolean> = [];
// foo.push("");
// foo.push(true);
// // foo.push(1);
// console.log(foo)
// const abc: string | number = true
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
// let check  = [23,24,27,34]
// const missing_nums = []
// console.log(Math.min(...check), Math.max(...check))
// for (let index = Math.min(...check); index <= Math.max(...check); index++) {
//     // console.log(index); 
//     (check.includes(index) === false) ? missing_nums.push(index) : '';
// }
// console.log(missing_nums)
// for (let index = 0; index < 100; index++) {
//     console.log((index%3 === 0) ? 'fuzz' : index);
// }
console.log(Symbol('karnakar'));
