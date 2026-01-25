import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './student'


function App() {
 

  return (
    <>
      <h1>Student Details</h1>
<Student name="Kokila" course="BCA" age={21} />
<Student/>
    </>
  )
}

export default App
