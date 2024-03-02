const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.race([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});



// function promiseTest() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('hello from promise')
//         }, 1000);
//     })
// };


// promiseTest().then((result) => { console.log(result) }).catch((error) => { console.log('error', error) })


// function hello() {
//     console.log('hello');
// }

// setTimeout(async () => {
//     // close connection
//     await hello();
// }, 500);