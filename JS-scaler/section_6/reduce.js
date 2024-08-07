// ! reduce method:

// * sum of the every element in the array

let numarr = [1,2,3,4,5];

let sum = 0

for(let i = 0; i<numarr.length; i++){
    sum += numarr[i];
}

console.log('loop: ' + sum);

// ! instead of using for loop we use reduce method

let resreduce = numarr.reduce(function(acc, val){
    let update = acc + val;
    return update;
},0)

console.log('reduce method: ' + resreduce)