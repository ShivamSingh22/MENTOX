import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import SignUp from './Components/Pages/SignUp';
import AboutUs from './Components/Pages/AboutUs';
import Blog from './Components/Pages/Blog';
import ContactUs from './Components/Pages/ContactUs';
import Consult from './Components/Pages/Consult';


function App() {
  return (
    <Router>
    
      <Switch>
        
       <Route path="/Home" exact component={Home} style={{backgroundColor:'red'}}></Route>
       <Route path="/" exact component={Home}></Route>
       <Route path="/Sign-up" exact component={SignUp}></Route>
       <Route path="/About-us" exact component={AboutUs}></Route>
       <Route path="/Blog" exact component={Blog}></Route>
       <Route path="/Contact-us" exact component={ContactUs}></Route>
       <Route path="/Consult" exact component={Consult}></Route>
      </Switch>
    </Router>
  );
}

export default App;