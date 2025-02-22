//The first line "require('dotenv').config()" is used to load environment variables from a .env file into process.env. This allows us to use the variables in our code without having to hard code them.
//For example, if we have a .env file with the following content:
//PORT=5000
//We can use the PORT variable in our code like this:
//const port = process.env.PORT
require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter", (req,res) => {
  res.send("abhilash")
})

app.get("/login", (req,res)=> {
  res.send("<h1> Please login at x.com </h1>")
})

app.get("/youtube", (req,res) =>{
  res.send("<h2>This is the link to youtube</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})




