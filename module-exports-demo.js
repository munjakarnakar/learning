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
var demo = /** @class */ (function () {
    function demo() {
        console.log('hello world aa');
    }
    return demo;
}());
module.exports = demo;
