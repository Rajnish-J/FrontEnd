// * you have to check the even elements in the array and put them in the separate array

let numbers = [1, 2, 35, 20, 12, 17, 46];

let evenfor = [];

for(let i = 0; i<numbers.length; i++){
    if(numbers[i] % 2 == 0){
        evenfor.push(numbers[i]);
    }
}
// ? we can use filter method instead, so we try map method once

console.log('using for loop: ' + evenfor);

let evenmap = numbers.map(function(n){
    if(n % 2 == 0){
        return n;
    }
})

console.log('map method: ' + evenmap);
// ? so we use map method means for the un-satisfied conditions it will return 'undefined'


// ! filter method
// * Filter returns a new Array it will return all those elements that matches the specific condtion
// * if the condition is true it will retrun the element for that condition and if it false it will not return

let evenfilter = numbers.filter(function(n){
    if(n % 2 == 0){
        return n;
    }
})

console.log('filter: ' + evenfilter);