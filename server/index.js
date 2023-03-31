const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const fileUpload= require("express-fileupload");

app.use(fileUpload());


app.use(express.json({limit: '100mb'}));
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Y1012Jqkhkp",
    database: "animal_system"


});


db.connect((error) => {
    if(error) throw error;

  
    var sql = "CREATE TABLE animals (picture LONGTEXT NOT NULL, animalType VARCHAR(255) , breed VARCHAR(255), age VARCHAR(255), sex VARCHAR(255), size VARCHAR(50), description LONGTEXT)"
    console.log("Connected!");
});

app.get("/animals", (req, res) => {
    db.query("SELECT * FROM animals", (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM animals WHERE id = ?", id, (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.put("/update", (req, res) => {
    const id = req.body.id;
    const description = req.body.description;
    db.query("UPDATE animals SET description = ? WHERE id = ?", [description, id], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.post("/create", (req, res) => {
    const picture = req.body.base64data
    const animalType = req.body.animalType
    const breed = req.body.breed
    const age = req.body.age
    const sex = req.body.sex
    const size = req.body.size
    const description = req.body.description
   
    db.query("INSERT INTO animals (picture, animalType, breed, age, sex, size, description) Values (?, ?, ?, ?, ?, ?, ?)",
    [picture, animalType, breed, age, sex, size, description], (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Values inserted");
        }
    }
    );  
  });

    
app.listen(3001, ()=>{
    console.log("Server is running");
});