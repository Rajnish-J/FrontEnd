// ! methods and properities from base class can be put down or can be passed into derived class

class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    welcome(){
        console.log(`welcome ${this.name}`);
        
    }
}

class teacher extends person{
    constructor(name,age,class_strength){
        super(name,age);
        this.class_strength = class_strength;
    }

    test(){
        super.welcome();
    }
}

class student extends person{
    constructor(name,age,CGPA){
        super(name,age);
        this.CGPA = CGPA;
    }
}

let per1 = new person('Rajnish', 22);
console.log(per1);

let teacher1 = new teacher('raja', 38, 63);
console.log(teacher1);
teacher1.welcome();

let student1 = new student('rajnish',22,8.78);
console.log(student1);
