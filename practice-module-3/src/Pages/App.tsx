import React from 'react';
import '../styles/App.scss';
import Signup from './Signup';
import Signin from './Signin'
import NavBar from '../components/AppBar';
import { Routes,Route } from 'react-router-dom';

const App = () => (
    <div >
      <NavBar/>
      <div className="App">
      <Routes>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Signin" element={<Signin/>}/>
      </Routes>
      </div>
    </div>
  );


export default App;
