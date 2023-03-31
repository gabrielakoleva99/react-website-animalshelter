import React from 'react';
import '../../App.css';
import { useState } from "react";
import Axios from 'axios'; 
import '../Pets.css';


function Pets() {  

  const[picture, setPicture] = useState('');
  const[animalType, setAnimalType] = useState('');
  const[breed, setBreed] = useState('');
  const[age, setAge] = useState('0');
  const[sex, setSex] = useState('female');
  const[size, setSize] = useState('');
  const[description, setDescription] = useState('');
  const [animalList, setAnimalList] = useState([]);
  const [newDescription, setNewDescription] = useState('');

  const getAnimals = () => {
    const animal = {picture, animalType, breed, age, sex, size, description};
    Axios.get('http://localhost:3001/animals').then((response) => {
        setAnimalList(response.data);

    });
  };

  const deleteAnimal = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setAnimalList(animalList.filter((val) => {
        return val.id != id;
      }));
    });
  };

  const updateAnimalDescription = (id) => {
    Axios.put("http://localhost:3001/update", {description: newDescription, id: id}).then((response) => {
    setAnimalList(animalList.map((val) => {
      return val.id == id
      ? {
        id: val.id,
        picture: val.picture,
        animalType: val.animalType,
        breed: val.breed,
        age: val.age,
        sex: val.sex,
        size: val.size,
        description: newDescription
      }
      : val;
    }));
    });
  };

  getAnimals()

  return (
    <div className='animals-get'>
        { animalList.map((val, key) => {
              return <div className='animal-container'>
                  <div className='animal-image-container'>
                    <img className="animal-image" src= {val.picture}/>
                  </div>
                  <div className='animal-information'>
                  <p className="animal-type">Type: {val.animalType}</p>
                  <p className='animal-age'>Age: {val.age}</p>
                  <p className='animal-sex'>Sex: {val.sex}</p>
                  <p className='animal-size'>Size: {val.size}</p>
                  <p className='animal-description'>Description: {val.description}</p>
                  <div> <input type = "text" placeholder='Edit description'  style={{width: "500px", height: "80px"}} onChange={(e) => {
                    setNewDescription(e.target.value);
                  }}/>
                  </div>
                  <button onClick={() => {updateAnimalDescription(val.id)}}>Update Animal Description</button>
                  <button onClick={() => {deleteAnimal(val.id)}}>Delete Post</button>
                  </div>
                </div>
        })}
    </div>
  );
}

export default Pets;