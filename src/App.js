import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import NotFound from './views/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        { /* Main Page */ }
        <Route path='/' element={ <Home /> } />
        
        { /* Not Found Page */ }
        <Route exact path='/not-found' element={ <NotFound /> } />
        <Route path='*' element={ <Navigate to='/not-found' /> } />
      </Routes>
    </Router>
  );
}

export default App;
