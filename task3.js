const express = require("express");

const app = express();

app.use(express.json()); //very important part from POST method without it can give error

app.post("/data" , (req , res) =>{
 const userData = req.body;
 res.send({message:"data receive successfully" , data:userData})
});

const PORT = 5000;

app.listen(PORT , () => {
    console.log("Server is successfully Running ...");
    
})