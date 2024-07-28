//! The for of statement creates a loop iterating over iterable objects,
//! including: built-in String, Array, array-like objects like NodeList and also map and set

var friends = ['rajnish', 'sam', 'raghul', 'saaruba', 'rakesh'];

for(var i of friends){
    console.log(i);
}

var friends = ['rajnish', 'sam', 'raghul', 'saaruba', 'rakesh'];

for(var [index, friend] in friends.entries()){
    console.log(index, '->', friend);
}

var c = 'rajnish';

for(var i of c){
    console.log(i);
}
