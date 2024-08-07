// ! reading a file synchronously

const fs = require('fs');  

console.log('first line');


// * reading a small size file makes speed
// let data = fs.readFileSync('file.txt')
// console.log('date: ' + data);

// * reading a big size file, it takes more time compared to small file sizes
let data1 = fs.readFileSync('file1.txt')
console.log('big data: ' + data1);


console.log('last line');
