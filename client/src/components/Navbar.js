import React,  {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick= () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);


  return (
    <>
        <nav className='navbar'>
            <div className = 'navbar-container' >
                <Link to='/' className='navbar-logo'>
                    SCAS <i className="fa-solid fa-paw"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/pets' className='nav-links' onClick={closeMobileMenu}>
                            Pets
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/shelter' className='nav-links' onClick={closeMobileMenu}>
                            The Shelter
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/adopt' className='nav-links' onClick={closeMobileMenu}>
                            Adopt
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/postanimalform' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Post Animal
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Post Animal</
                Button>}
             </div>
            </nav>
        </>
    ); 
  }
export default Navbar;

