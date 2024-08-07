// ! chaining methods

let arr = [
    {name : 'A', age : 14, gender: 'F'},
    {name : 'B', age : 23, gender: 'M'},
    {name : 'C', age : 32, gender: 'F'},
    {name : 'D', age : 44, gender: 'M'},
    {name : 'E', age : 36, gender: 'F'},
    {name : 'F', age : 54, gender: 'M'},
    {name : 'G', age : 48, gender: 'F'},
    {name : 'H', age : 74, gender: 'M'}
]

// ! age of all men

let males = arr.filter(function(n){
    return n.gender == 'M';
}).map(function(n){
    return n.age;
})

console.log(males);