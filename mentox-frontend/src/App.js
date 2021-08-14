import React from 'react';
// import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import LogIn from './Components/login';
import AboutUs from './Components/Pages/AboutUs';
import Blog from './Components/Pages/Blog';
import ContactUs from './Components/Pages/ContactUs';
import Groups from './Components/Pages/Groups';
import SignUp from './Components/Pages/SignUp';


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        
       <Route path="/Home" exact component={Home}></Route>
       <Route path="/" exact component={Home}></Route>
       <Route path="/Login" exact component={LogIn}></Route>
       <Route path="/SignUp" exact component={SignUp}></Route>
       <Route path="/About-us" exact component={AboutUs}></Route>
       <Route path="/Blog" exact component={Blog}></Route>
       <Route path="/Contact-us" exact component={ContactUs}></Route>
       <Route path="/Groups" exact component={Groups}></Route>
      </Switch>
    </Router>
  );
}

export default App;
