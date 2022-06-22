import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import  { BrowserRouter as Router, Switch, Routes, Route, Link} from 'react-router-dom'
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>

      </header>
    </div>
  );
}

export default App;
