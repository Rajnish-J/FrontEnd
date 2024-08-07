class person{
    constructor(name, percentage){
        this.name = name;
        this.percentage = percentage;
    }

    welcome(){
        console.log(`hi from ${this.name}`);
        
    }
}

let per1 = new person('sabari', 88);
let per2 = new person('rajnish',86);
let per3 = new person('sakthi dinesh',91);

console.log(per1);
console.log(per2);
console.log(per3);

per2.welcome();