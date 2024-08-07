// ! reading a file asynchronously

const fs = require('fs');  

console.log('first line');

// * asynchronous method
fs.readFile('file.txt', m1)
function m1(err, data){
    if(err){
        console.log(err);
    }
    console.log('file data => ' + data); 
}

console.log('last line');
