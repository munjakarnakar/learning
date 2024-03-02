
var a = 2;
function add(){
    console.log(a)
    var a;
    a = 3
    console.log(a)
}

add()

var names = ['a', 'b', 2, true];
console.log(names instanceof String);
console.log(names instanceof Object);
console.log(names instanceof Number);
console.log(names instanceof Array);



// [1, 2, 3, 4, 5, 6].forEach(element => {
//     console.log(element)
//     if (element === 5)
//         break;
// });



// const a:String = "";


const aa = [33,22,55,66]

aa.reduce((acc,cval, cind, aa) => console.log('-',acc,cval, cind))


// aa.reduce((acc,cval,ind,aa) => aa[ind-1] = aa[ind-1]*2)

console.log(aa);


// for (const iterator of aa) {
//     console.log(iterator*2, aa.indexOf(iterator))
//     aa[aa.indexOf(iterator)] = iterator * 2;
// }

// console.log(aa);

const arr = ['A', 'N', 'U'];
arr[10] = 10;
for(const item of arr){
    console.log(item)
}
console.log(arr, arr.length);


let arr1 = [10, 12, 3.1];
let arr2 = [10, 12, 3.1];
console.log(arr1 == arr2);

let originalArray = [1, 2, 3];

console.log(originalArray.slice(2))
console.log(originalArray.splice(1))

console.log(JSON.stringify(arr1) === JSON.stringify(arr2))



const ac = [3,7,8,9]

const b = [ac[0]]
ac.reduce((acc,cval,cI,ac) =>  b.push(ac[cI-1] + cval))

console.log(b)