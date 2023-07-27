import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './pages/Home';

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <Router>
      <Header isOpened={ menu } openMenu={ () => setMenu(!menu) } />
      <Menu isOpened={ menu } closeMenu={ () => setMenu(false) } />
      <Routes>
        { /* Main Page */ }
        <Route path='/' element={ <Home /> } />
        <Route path='*' element={ <Navigate to='/' /> } />
      </Routes>
    </Router>
  );
}

export default App;
