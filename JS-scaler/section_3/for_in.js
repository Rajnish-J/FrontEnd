//! In JavaScript, the for-in loop allows you to loop through the properties of an object.
//! The statements of code found within the loop body will be executed once for each property of the object.

var rajnish = {
    name : 'rajnish',
    roll_no : 9176960600,
    reg_no : '2020pecec334'
};

for(var i in rajnish){
    console.log(i , '->', rajnish[i]);
}

console.log();

var friends = ['rajnish', 'sam', 'raghul', 'saaruba', 'rakesh'];

for(var i in friends){
    console.log(friends[i]);
}