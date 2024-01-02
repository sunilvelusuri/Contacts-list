const express = require("express");
const port=9000;

const app=express();



app.listen(port,(err)=>{
    if(err){
        console.log("Error",err);
    }
    console.log("My server is running on port : ",port);
});