require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Next page')
})

app.get('/login',(req,res)=>{
    res.send("<h1>Login Page</h1>")
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai Aur Code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
