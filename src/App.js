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
          // setNumber(number + 1)
          setNumber((currentNumber) => {
            return currentNumber + 1
          })
          //함수형
        }}
      >
        up
      </button>
      <button
        onClick={() => {
          setNumber(number - 1)
        }}
      >
        down
      </button>
    </>
  )
}

export default App
