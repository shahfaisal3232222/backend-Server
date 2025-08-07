const express = require("express");

const app = express();

app.use(express.json()) // ye zeyada zarore ha data read karne kalye 

let users = [
    {id:1 , name: "shahfaisal" , city: "Peshawar"},
    {id:2 , name: "ali khan" , city: "Isalamabad"}
];

app.put("/users/:id" , (req,res) => {
    const userId = parseInt(req.params.id) //Url se Id nekalta hai
    const updatedData = req.body; //body se new data lo


const user = users.find(u => u.id === userId);

if(!user){
    return res.status(404).send({message:"User can't found"})
};

user.name = updatedData.name || user.name;
user.city = updatedData.city || user.city;


res.send({
    message:"user updatad sucessfully",
    data: user
});
});

const PORT = 5000;

app.listen(PORT , () => {
    console.log("Server is running up ...")
})