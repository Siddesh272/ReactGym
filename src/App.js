import React from 'react';
import './App.css';
import Content from './Content';
import Information from './Information';
import Help from './Help';
import './Nav.css'
import logo from './img/logo.png';
import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom';


function App() {
  return ( 
    <div>
      <Router>
      <header >
        <img src={logo} />
        <h1 className='Name'>TRANSFORMERS GYM</h1>
        <div className="navbar">
        <ul>
        <li><NavLink to='/' className='link'>Home</NavLink></li>
        <li><NavLink to='/info' className='link'>Information</NavLink></li>
        <li><NavLink to='/help' className='link'>About</NavLink></li>
        </ul>
        </div>
      </header>
    <div className="App">
    <Routes>
       <Route exact path='/' element={<Content/>}/>
       <Route exact path='/info' element={<Information/>}/>
       <Route exact path='/help' element={<Help/>}/>
    </Routes>
    </div>
    </Router>
    <footer>
     <div className="container2">
      <div className="row">
        <section style={{color:'white'}}>
          <span>Hours:</span><br/>
          Sun-Thurs: 11:15am - 10:00pm<br/>
          Fri: 11:15am - 2:30pm<br/>
          Saturday Closed
          <hr className="visible-xs"/>
        </section>
        <section style={{color:'white'}}>
          <span>Address:</span><br/>
          7105 Reisterstown Road<br/>
          Baltimore, MD 21215
          <hr className="visible-xs"/>
        </section>
        <section style={{color:'white'}}>
          <p>"Transformers has been awesome to me. Their trainers are exceptional, the overall vibe is great and I have had nothing but good experiences.!"</p>
          <p>"Amazing personal trainers and complete, clean gym. Would highly recommend!"</p>
        </section><br/>
      </div>
      <div>&copy;Transformers Fitness Gym 2016</div>
    </div>
  </footer>
    </div>
  );
}

export default App;
/* <Nav/>
      <Content/>
      <br/>
      <Bmi/> */
//       <Router>
// 
//     
//     </Router>