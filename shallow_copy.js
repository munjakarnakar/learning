const one = {
    aa: 1,
    bb: 2,
    cc: 3,
    gg : {
        hh: {
            aa:1
        }
    }
}

const two = {
    dd: 4,
    ee: 5
}


const three = one

// Object.assign(three, one)

// delete one.aa;
 one.vv = 0 ;

console.log(three);