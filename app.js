const http = require('http');
const express=require('express')
const app=express()
const server = http.createServer(app)
app.use((req,res,next)=>{
    console.log('in the middleware')
    res.send(`<h1>hello to node</h1>`)
    next()
})
app.use((req,res,next)=>{
    console.log('in the and middleware')
    
    
})
server.listen(3000);

