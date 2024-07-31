// ! object decrypting

let obj = {
    name : 'rajnish',
    age : 22, 
    skill : 'java, sql, html, css, js',
    address : {
        no : 30,
        area : 'royapuram'
    }
}

let{name : n, age, skill, address : {no, area : a}} = obj; // ! we can add alternatve name for the object 

console.log(n);
console.log(age);
console.log(skill);

// ! second way
// let{no, area : a} = obj.address;

console.log(no);
console.log(a);