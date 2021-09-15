const express = require('express');
const app=express();

app.get('/', function(req, res){
  res.send("Hello World")
})
app.listen(3000,()=>{
  console.log("Server listening at Port 3000")
})