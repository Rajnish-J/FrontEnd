// ! promise : promise having 4 states or 4 layer work-flow, promise is an comitment to the program like real work promises...

// * pending state: this will be promised for the future and not yet work to start
// * fulfilled : when the promise made and the work finished to relavant to that promise
// * rejected state : even though work completed there is an chance to incomplete at some part
// * settled : even the promise fulfilled or rejected there is an output that will settle down (execution of promise is finished)

// * Js code (example)

// ? how to produce promise method
// ? syntax : letmyPromise = new Promise(function(resolve,reject){})

// ? if the fulfill will catch we will have method, if the promise will fulfilled that will be caught by then method
// ? if the rejected will catch we will have catch method.

let myPromise = new Promise(function(resolve, rejected){
    const a = 7;
    const b = 18;

    setTimeout(() => {
        if(a === b){
            resolve('The values are equal')
        }
        else{
            rejected('The values are not equal')
        }
    },1500)
})

myPromise.then(function(result){
    console.log(result);   
})

myPromise.catch(function(result){
    console.log(result);
})