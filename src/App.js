import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './Components/About';
import Background from '../src/media/web-background-horizontal.jpg';

/*Components*/
import Age from './Components/Age';
import Header from './Components/Header';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Testing from './Components/Testing';
import Contact from './Components/Contact';

/*CSS*/


function App() {

  const [isOfAge, setIsOfAge] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  const menuToggle = () => {
    setMenuOpen(menuOpen => !menuOpen)
  };

  const closeMenu = () => {
    setMenuOpen(false)
  };

  const ageToggle = () => {
    setIsOfAge(true)
  };

  return (
    <div className="App">
     
      {!isOfAge &&
        
        <Router>
          <Routes>
            <Route exact path='/' element={<Age ageToggle={ageToggle} />} />
            
          </Routes>
        </Router>
      }

      

      <Router>
      <Header click={menuToggle} home={closeMenu}/>

{menuOpen && 
  <Menu click={menuToggle}/>
}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/tests' element={<Testing />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
