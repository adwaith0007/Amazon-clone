
import './App.css';
import Home from './Components/Home';
import NavBar from "./Components/NavBar";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Checkout from './Components/Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('THE USER IS >>>',authUser)
    })

  },[])
  return (
    <BrowserRouter>

    <div className="app">
      <NavBar/>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/Checkout" element={<Checkout />} />
      </Routes>
   
      

     
    </div>
    </BrowserRouter>
  );
}

export default App;
