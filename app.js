const http = require('http');
const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const adminroutes=require('./routes/admin.js')
const shops=require('./routes/shop.js')
app.use(bodyparser.urlencoded({extended:false}))
// app.use('/',(req,res,next)=>{
//     // res.send('<h1>hello</h1>')
//     next()
// })

 app.use(adminroutes)
 app.use(shops)
 app.use((res,req,next)=>{
    res.status(404).send(`<h1>page not found</h1>`)
})

const server = http.createServer(app)


server.listen(3000);

