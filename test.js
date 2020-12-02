// console.log("Hello World")
// while(true){
//     console.log("Hello World")
// }

var fs = require('fs');
var data = fs.readFileSync('test.txt', 'utf8')
console.log(data)