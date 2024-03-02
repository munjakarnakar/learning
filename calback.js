// function cbFunc(num, calback) {
//     console.log(calback(num))
// }

// function calback(num) {
//     console.log(num);
//     return true;
// }


// console.log(cbFunc(22, calback));


function add(a, b) {
    console.log(a + b, '?')
}

// const add = (a, b) => { console.log(a + b, "??") };
const add1 = (a, b) => { console.log(a + b, "??") };

const names = (n,l) => { console.log('hello' + n) }


add(1, 2)
add1(1, 2)
names("karnakar","akakak")

const a = ['a','b','b','d']

a.map((ch)=>{console.log(ch)})

console.log([...'karnakar'])


console.log(Array.from("Kranakar"), "Karnakar".split(""))


for (let a of ["Sa","SAdsaa","Asdasd"].values()){
    console.log('-',a);
}


const asjkdn = new Promise((resolve, reject) => {
    resolve(true)
});


asjkdn.then((d)=> console.log('then',d)).catch((e) => {console.log("error",e)}).finally((o)=> {console.log('finally')})