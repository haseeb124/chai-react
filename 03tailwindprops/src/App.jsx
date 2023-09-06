import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 rounded-xl p-4 text-black mb-4'>Tailwind CSS</h1>
      <Card username="Abdul" bTnText="click me"/>
      <Card username="haseeb" bTnText="visit me"/>
    
    
    
    </>
  )
}

export default App
