function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink === 'coffee'){
            resolve('coffee received');
        }
        else{
            reject('rejected');
        }
    })
}

function processOrder(order){
    return new Promise (function(resolve){
        console.log('order is being processed');
        resolve(`${order} is received`)
    })
}

// placeOrder('coffee').then(function(order){
//     console.log(order);
//     let orderIsProcessed = processOrder(order);
//     return orderIsProcessed;
// }).then(function(processOrder){
//     console.log(processOrder);
    
// }).catch(function(err){
//     console.log(err);
    
// })

// ! this two level of resolving the promises this make sense, if we have more promises this difficult to backtrack the code (tracing)
// * so resolve this we have one solution async await method ()
// * if we need to pass the error also we need to use try catch block

// ! Async Await - keywords
// * always work with the function

async function serveOrder(){
    try{
        let orderPlaced = await placeOrder('coffee')
        console.log(orderPlaced);

        let processorder = await processOrder(orderPlaced)
        console.log(processorder);
    }
    catch(error){
        console.log(error);
        
    }
}

serveOrder();