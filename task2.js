const express = require("express");

const app = express();

app.get("/student" , (req , res) => {
    res.send({name:"shahfaisal" , city: "Peshawar" , isStudent: true})
});


const PORT = 5000;

app.listen(PORT , () =>{
    console.log("Server is Running up ....")
})