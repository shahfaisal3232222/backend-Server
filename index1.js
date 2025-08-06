const express = require("express")

const app = express();


app.get("/" , (req , res) => {
    res.send({message:" server is running"});
});

const PORT = 5000;

app.listen(PORT , () => {
    console.log("server is On")
})

