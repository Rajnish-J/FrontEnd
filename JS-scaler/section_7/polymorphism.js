class animal{
    sound(){
        console.log('Animals make different sound...');
        
    }
}

class dog {
    sound(){
        console.log('dogs: ' + "bark");
    }
}

class cat{
    sound(){
        console.log('cat: ' + 'mewo');
    }
}

let animal1 = new animal();
let tommy = new dog();
let alice = new cat();

animal1.sound();
tommy.sound();
alice.sound();