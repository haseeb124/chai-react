import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
      if (counter < 10){
        setCounter(counter + 1)
      }
      
  }
  
  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>Chai aur counter</h1>
    <h2>Counter: {counter}</h2>
    <br />
    <button onClick={addValue}>
      Add Value {counter}
    </button>
    <br />
    <button onClick={removeValue}>
      Remove Value {counter}
    </button>
    
    <footer>footer: {counter}</footer>

    </>
  )
}

export default App
