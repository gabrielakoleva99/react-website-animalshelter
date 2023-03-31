import React, { useEffect } from 'react';
import { useState } from "react";
import './PostAnimalForm.css';
import Axios from 'axios';




function PostAnimalForm() {

    const[picture, setPicture] = useState('');
    const[animalType, setAnimalType] = useState('');
    const[breed, setBreed] = useState('');
    const[age, setAge] = useState('0');
    const[sex, setSex] = useState('female');
    const[size, setSize] = useState('');
    const[description, setDescription] = useState('3');
    const path = require("path");
    const fs = require("fs");

    const [animalList, setAnimalList] = useState([]);

const addAnimal = () => {
    console.log("im here")
    Axios.post('http://localhost:3001/create', {
        picture: picture,
        animalType: animalType,
        breed: breed,
        age: age,
        sex: sex,
        size: size,
        description: description
    }).then(() => {
        
    });
};



const getAnimals = () => {
    const animal = {picture, animalType, breed, age, sex, size, description};
    Axios.get('http://localhost:3001/animals').then((response) => {
        console.log(response.data.picture);
        setAnimalList(response.data);
    });
};


    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Thank you for submitting!");
    

        // Image Parse Logic 
        var reader = new FileReader();
        reader.readAsDataURL(picture); 
        var base64picture = ""
        reader.onloadend = function() {
        var base64data = reader.result;  
        const animal = {base64data, animalType, breed, age, sex, size, description};
        Axios.post('http://localhost:3001/create', animal, handleFile)
        console.log(animal)

        }   
    }

    const handleFile = (e) => {
        console.log(e.target.files);
        setPicture(e.target.files &&  e.target.files[0]);
        
    }
  

    

return (
    <div className="postAnimal-hero">
        <div className="postAnimal-form">
        <h1>Post an animal</h1>
 
        <form onSubmit={handleSubmit}>
            <label>Uplod animal photo</label>
            <input type="file" name='file' onChange={handleFile}
             
            />
             <label>
            Animal
            <select
             value={animalType}
             onChange={(e) => setAnimalType(e.target.value)}
            >
                <option value="select animal">select animal type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="ferret">Ferret</option>
                <option value="rabbit">Rabbit</option>
            </select>
        </label>
             <label>Breed</label>
            <input type="text"
            required
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            />
            <label>Age</label>
            <input type="number"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
            />
         
          
            
            <label>Size</label>
            <input type="text"
            required
            value={size}
            onChange={(e) => setSize(e.target.value)}
            />
            <label>
            Sex
            <select
             value={sex}
             onChange={(e) => setSex(e.target.value)}>
                <option value="select sex">select gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
        </label>
        <label>Description</label>
            <input type="text"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
                />
        
        <button>Post</button>
        </form>
        <div className='post-animals'>
           { animalList.map((val, key) => {
                return <div className='animal'>
                    <img className="bingus" src= {val.picture}/>
                    <h3>Type: {val.animalType}</h3>
                    <h3>Age: {val.age}</h3>
                    <h3>Sex: {val.sex}</h3>
                    <h3>Size: {val.size}</h3>
                    <h3>Description: {val.description}</h3>

                </div>
            })}
        </div>
        </div>
     
    </div>
  );
}

export default PostAnimalForm;