const http = require('http');
const express=require('express')
const app=express()
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
// app.use('/',(req,res,next)=>{
//     // res.send('<h1>hello</h1>')
//     next()
// })
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>')

    
    
})
app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')

})
app.use('/',(req,res,next)=>{
    res.send('<h1>hello from express</h1>')

})
const server = http.createServer(app)

server.listen(3000);

