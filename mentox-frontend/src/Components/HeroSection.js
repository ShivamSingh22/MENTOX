import React from 'react'
import '../App.css';
import './HeroSection.css';
// import Button from "./Button";
import { Button } from 'react-bootstrap';

function Herosection() {
    return (

        <div className='hero-container'>
            <video src='/videos/Background2.mp4' autoPlay loop muted />
            <h1>CHAT WITH US </h1>
            <img className="hero-img" src="/Images/pngegg copy 4.png" alt="home" />
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    href="/Groups"
                >   
                  Therapy by interacting
                </Button>
            </div>
        </div>
    )
}

export default Herosection
