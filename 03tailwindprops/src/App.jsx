import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' bg-green-500 p-4 rounded-xl text-black mb-4'>Tailwind Test</h1>
      <Card username="abdul haseeb" btnTxt="click me"/>
      <Card username="aiman"/>

    </>
  )
}

export default App
