import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 10) {
      setCounter(counter + 1)
    }

    
    
  }

  const removeValue = () => {
    if (counter > 0 ) {
      setCounter(counter - 1)
    }
  }


  

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Count value : {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>

    </>
  )
}

export default App
