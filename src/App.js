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
          //기존 배치성으로 처리돼서 , 배치업데이트
          setNumber((currentNumber) => {
            return currentNumber + 1
          })
          setNumber((currentNumber) => {
            return currentNumber - 2
          })
          setNumber((currentNumber) => {
            return currentNumber + 3
          })
          //함수형 3개만들면 한번에 +3 됨 명령들을 모아 순차적으로 한번씩 작동됨
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
