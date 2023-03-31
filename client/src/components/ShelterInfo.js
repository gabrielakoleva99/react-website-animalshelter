import React from "react";
import pic from '../images/shelter.jpg';
import './ShelterInfo.css'


function ShelterInfo() {
    return (
        <>
          <div className= 'shelter-hero'>
             <img src= {pic} className="shelter-pic"  alt=""/>
             <h1>The Shelter</h1>
                
            </div>
        </>
    );
      
}

export default ShelterInfo;