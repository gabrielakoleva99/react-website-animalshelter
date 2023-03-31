import React from "react";
import './HeroSection.css';
import '../App.css';
import dog from '../images/image2.jpeg';
import { Button } from './Button';
import './HeroSection.css';
import {ButtonFindPets} from './ButtonFindPets';


function HeroSection() {
    return (
        <>
          <div className= 'hero-container'>
             <img src= {dog} className="dog-pic"  alt=""/>
            <h1>Welcome To Second Chance Animal Shelter</h1>
            <div className = 'hero-btns'>
                <Button
                classname='btns'
                buttonSize='btn--large'
                buttonStyle='btn--outline'
                >
                    GET STARTED
                </Button>
                <ButtonFindPets
                classname='btns'
                buttonSize='btn--large'
                buttonStyle='btn--primary'
                >
                    FIND PETS
                </ButtonFindPets>
            </div>
        </div>
    
        </>
    );
      
}

export default HeroSection;