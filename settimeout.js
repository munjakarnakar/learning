// for (let index = 0; index < 10; index++) {
//     // console.log(index)  
//     setTimeout(()=>{
//         console.log(index)
//     },10000)  
// }


console.log(1)
setTimeout(() => {
    console.log(2)
}, 0)

new Promise((resolve, reject) => {
    console.log(3)
    resolve(100)
}).then((a) => console.log(a))

console.log(4);
