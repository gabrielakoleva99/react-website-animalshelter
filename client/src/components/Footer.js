import React from "react";
import { Button } from "./Button";
import './Footer.css';
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our newsletter to find information about latest pets
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input
                        type='email'
                        name='email'
                        placeholder="Your email"
                        className="footer-input"
                        />
                        <Button onClick={() => {alert("Thanks for subscribing!")}} buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
       
            <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              SCAS <i className="fa-solid fa-paw"></i>
            </Link>
          </div>
          <small className='website-rights'>SCAS © 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Footer