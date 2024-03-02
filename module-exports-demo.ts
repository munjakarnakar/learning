// export const x= 0;
// export default class moduleExports {
//     demo() {
//         console.log('module exports');
//     }
// }
// const y = 0;

// export moduleExports


// import {x, demo} from './export-demo'

// console.log(x)

// console.log(demo(2,3))


// import * as demo from './module-exports-demo';
// console.log(new demo.default())



class demo {
    constructor(){
        console.log('hello world aa')
    }
}

module.exports = demo;