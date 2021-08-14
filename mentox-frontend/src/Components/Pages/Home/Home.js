import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import HeroSection from '../../HeroSection';
import Navbar from '../../Navbar';
import Content from './Content';
import Blog from './index';
export default function Home(){
    return (<>
        <Navbar />
        <HeroSection />
       <Content />
        <Blog />
        <Footer />
        </>
    );
}
