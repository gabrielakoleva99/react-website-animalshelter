import React from 'react';
import '../ThankYouPage.css';
import pic from '../../images/shelter3.jpg';



const ThankYouPage = () => {
  return (
    <div className='thanks-container'>
      <h2>Thank you for submitting your adoption form!</h2>
      <p>We will review your application and get back to you shortly.</p>
      <img src= {pic} className="thanks-pic"  alt=""/>
    </div>
  );
};

export default ThankYouPage;