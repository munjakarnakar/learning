
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function sum(arr) {
    let result = arr ? arr[0] : 0;
    for (const iterator of arr) {
        result += iterator
    }
    return result;
}


function mul(arr) {
    let result = arr ? arr[0] : 0;
    for (const iterator of arr) {
        result *= iterator
    }
    return result;
}


function sumLogic(arr) {
    let result = arr ? arr[0] : 0;
    for (const iterator of arr) {
        result += iterator
    }
    return result;
}

function mulLogic(result, iterator) {
    return result += iterator
}

function higherOrder(arr, logic) {
    console.log(logic(arr))
}

// console.log(getLogic('sum', 1, 1))

// higherOrder(nums, sumLogic);
// higherOrder(nums, mulLogic);


// console.log(sum(nums), mul(nums));


function oddNum(arr){
    const resultArr = []
    for (const iterator of arr) {
        iterator % 2 === 0 ? resultArr.push(iterator) : ''
    }
    console.log(resultArr);
}

function evenNum(arr){
    const resultArr = []
    for (const iterator of arr) {
        iterator % 2 === 1 ? resultArr.push(iterator) : ''
    }
    console.log(resultArr);
}


// oddNum(nums)
// evenNum(nums)

function oddLogic(num){
    return num % 2 === 1 ? true : false
}

function evenLogic(num){
    return num % 2 === 0 ? true : false
}


function oddeven(arr, logic){
    const resultArr = [];
    for (const iterator of arr) {
        logic(iterator) ? resultArr.push(iterator) : ''
    }
    return resultArr;
}

console.log(oddeven(nums, oddLogic))
console.log(oddeven(nums, evenLogic))


