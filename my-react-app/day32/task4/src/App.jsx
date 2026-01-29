import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <h1>Welcome</h1>
      <p>Current Year: {year}</p>
    </>
  )
}

export default App
