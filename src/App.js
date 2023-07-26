import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        { /* Main Page */ }
        <Route path='/' element={ <Home /> } />
        <Route path='*' element={ <Navigate to='/' /> } />
      </Routes>
    </Router>
  );
}

export default App;
