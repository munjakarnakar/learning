// import {x, demo} from './export-demo'
// console.log(x)
// console.log(demo(2,3))
// import * as demo from './module-exports-demo';
// console.log(new demo.default())
var a = require('./module-exports-demo');
console.log(new a());
