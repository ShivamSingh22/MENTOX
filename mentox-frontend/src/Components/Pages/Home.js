import React from 'react';
import '../../App.css';
import Navbar from '../../Navbar';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
export default function Home(){
    return (<>
        <Navbar />
        <HeroSection />
        <Footer />
        </>
    );
}
