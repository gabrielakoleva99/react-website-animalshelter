import React from "react";
import "../../App.css";
import AdoptionForm from "../AdoptionForm";
import AdoptionFormInf from "../AdoptionFormInf";
import Footer from '../Footer';

function Adopt() {
    return (
        <>
        <AdoptionFormInf/>
          <AdoptionForm/>
          <Footer />
        </>
      );
    }
    
    export default Adopt;
