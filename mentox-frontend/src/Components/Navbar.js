import React, { useState } from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown.js';
function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setdropdown] = useState(false);
    function handleClick() {
        setClick(!click);
    }
    function closeMobileMenu() {
        setClick(false);
    }
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setdropdown(false)
        } else {
            setdropdown(true)
        }
    };
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setdropdown(false)
        } else {
            setdropdown(false)
        }
    };
    return (
        <>
            <nav className="navbar transperent">
                <Link to='/Home' className='navbar-logo'>
                    MENTOX  <i class="fas fa-brain"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                            <i class="fas fa-home"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Blog' className='nav-links' onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to='/Consult' className='nav-links' onClick={closeMobileMenu}>
                           Consult <i className="fas fa-caret-down"></i>
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Log In
                        </Link>
                    </li>
                </ul>
                <Button id="Navbar-btn" />
            </nav>
        </>
    );
}
export default Navbar;
