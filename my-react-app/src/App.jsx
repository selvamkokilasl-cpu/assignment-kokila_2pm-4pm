import Navbar from './Components/navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/home.jsx'
import './App.css'
import Login from './Components/Login.jsx'





function App() {
  

  return (
    <>
      <Login/>
      <Home/>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
    </>
  )};

    
export default App
