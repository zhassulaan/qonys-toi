import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Alert from './components/Alert';
import Home from './pages/Home';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <Header isOpened={ menu } openMenu={ () => setMenu(!menu) } />
      <Menu isOpened={ menu } closeMenu={ () => setMenu(false) } />
      { windowWidth < 480 ?
        <Routes>
          { /* Main Page */ }
          <Route path='/' element={ <Home /> } />
          <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
          :
        <Alert />
        }
    </Router>
  );
}

export default App;
