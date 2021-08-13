import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import "./Footer.css";

function Footer() {

    const year = new Date().getFullYear();
    return (


        <div className="Footer-container">
            <section className="footer-subscription">
                <h1 className="footer-subscription-heading">
                    Best website to relax your mind!
                </h1>
                <p className="footer-subscription-text">
                    You can search the best Psychiatrist
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle='btn--outline'>Submit</Button>
                    </form>
                </div>
            </section>
            <div className="footer-link">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/'>Contact Us</Link>
                        <Link to='/'>Community</Link>
                        <Link to='/'>Term of service</Link>
                        <Link to='/'>More</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contac Us</Link>
                        <Link to='/'>Community</Link>
                        <Link to='/'>Term of service</Link>
                        <Link to='/'>More</Link>
                    </div>
                </div>
                </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/Home' className="social-logo">
                            MENTOX  <i class="fas fa-brain"></i>
                        </Link>
                    </div>
                    <small className="website-rights">Copyright ⓒ {year}</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to='/' target='_blank' aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                            to='/' target='_blank' aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                            to='/' target='_blank' aria-label="linkedin">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link className="social-icon-link github"
                            to='/' target='_blank' aria-label="github">
                            <i className="fab fa-github"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
