// ! we cannot change the name of the particular object

class person{
    constructor(name, age){
        var name = name;
        this.age = age;

        this.getname = function(){
            return name;
        }
    }
}

let per = new person('adam', 34);

per.name = 'charlie'; 
//  * eventhough if we try to change the name, we would'nt

console.log(per.getname());
