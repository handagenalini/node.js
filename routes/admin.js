const express=require('express')
const  fs= require('fs')
const router=express.Router()
router.get('/login',(req,res,next)=>{
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/message" method="POST">

	<input id="username" type="text" name="title">

	<button type="submit">add</button></form>`)
    
})
router.post('/message',(req,res,next)=>{
    // console.log(req.body)
    
    res.redirect('/add-product')
})
router.get('/add-product',(req,res,next)=>{
    fs.readFile('username.txt',{encoding:'utf-8'},(err,data)=>{
        if(err){
        console.log(err)
        }
    
    // res.write(`<h1>${data}</h1>`)
    res.send(`${data}<form onsubmit="localStorage.setItem('username',document.getElementById('username').value=localStorage.getItem('username')) "action="/product" method="POST">
    
    
    <input id="message" type="text" name="message">
    <input id="username" type="hidden" name="username">

    <button type="submit">Send</button></form>`)

    })
    
})
router.post('/product',(req,res,next)=>{
    console.log(`{${req.body.username}:${req.body.message}}`)
    fs.writeFile('username.txt',`${req.body.username}:${req.body.message}`,{flag:'a'},err=>{
        if(err){
        console.log(err)
        }
    })
    res.redirect('/add-product')

})

module.exports=router