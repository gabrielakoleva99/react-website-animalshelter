import React from 'react'
import './AdoptionForm.css'
import { useNavigate } from 'react-router-dom';


function AdoptionForm() {
    const navigate = useNavigate();


  return (
    <div className="adoption-form">
    <h1>Adoption Form</h1>
        <form>
            <label>First Name</label>
            <input type="text"
            required
            
           
                />
             <label>Last Name</label>
            <input type="text"
            required
           
            />
            <label>Adress</label>
            <input type="text"
            required
           
            />
            <label>Telephone</label>
            <input type="text"
            required
           
            />
            <label>Email</label>
            <input type="text"
            required
           
            />
            <label>
            Gender
            <select>
                <option value="select gender">select gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
            </select>
        </label>
        <label>Choosed Animal Name</label>
            <input type="text"
            required
                />
        <label>
            Animal
            <select>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="ferret">Ferret</option>
                <option value="rabbit">Rabbit</option>
            </select>
        </label>
        <button onClick={() => {navigate('/thank-you-page');}}>Adopt</button>
        </form>
    </div>
  );
}

export default AdoptionForm