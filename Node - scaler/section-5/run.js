const express = require('express')

const m = express();
// * get => read 
// * post => 
    // put, delete

// ! courses array:
const courses = [
    {id:1, name: 'Javascript'},
    {id:2, name: 'Java'},
    {id:3, name: 'python'}
]

// ! get => used to access some data from prticular resources

m.get('/', (req,res) =>{
    res.send('Hello from main page')
})

m.get('/about', (req,res) =>{
    res.send('hello from about')  
})

// ! environmental varibles and PORT => automatically generates PORT and do the work
const port = process.env.PORT || 5500

// ! handling multiple route parameters:
m.get('/course/:id',(req,res) =>{
    let co = courses.find(course => course.id === parseInt(req.params.id))
    
    // * handling the unreached searches
    if(!co)res.status(404).send('Check for available courses')
    res.send(co)
})

// ! HTTP Post method:
m.get('/courseInfo', (req,res)=>{
    res.send(courses)
})

m.listen(port, ()=> console.log('program running'))