// var a = 'rajnish';

// // for the loop

// for(var i = 1; i <= 10; i++){
//     console.log(a);
// }

//!  for loop for the array

var num = [1,2,3,4,5,6,7,8,9,10];
var sqrdnum = [];

for(var i = 0; i<num.length; i++){
    sqrdnum.push(num[i] * num[i]);
}

console.log(sqrdnum);