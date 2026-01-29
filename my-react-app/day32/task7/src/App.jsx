import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product.jsx'

function App() {
  

  return (
    <>
      <div className="App">
        <Product name="Laptop" price={12000} />
        <Product name="Smartphone" price={6000} />
        <Product name="Headphones" price={15000} />
      </div>
    </>
  )
}

export default App
