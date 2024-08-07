const fs = require('fs');  

console.log('first line');

// * asynchronous method
fs.readFile('file.txt', m1)
function m1(err, data){
    if(err){
        console.log(err);
    }
    console.log('file data => ' + data); 
    fs.readFile('file1.txt', m3)
    fs.readFile('file2.txt', m2)
}

function m3(err, data){
    if(err){
        console.log(err);
    }
    console.log('file data => ' + data); 
}

function m2(err, data){
    if(err){
        console.log(err);
    }
    console.log('file data => ' + data); 
}

console.log('last line');

//  ! In order to avoid the random execution from call queue we can change the flow and then by successfully executing the first read function we will run next...