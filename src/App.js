import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0)
  return (
    <>
      <div>Number State : {number}</div>
      <button
        onClick={() => {
          setNumber(number + 1)
        }}
      >
        up
      </button>
    </>
  )
}

export default App
