const express = require("express");


const app = express();

app.get("/" , (req , res) => {
    res.send({ message: "Hello " , isSuccess: false , noNumber:'12344' , name:"shl"});
});


const PORT = 5000;


app.listen(PORT , () => {
    console.log("Server is up and running ...")
});