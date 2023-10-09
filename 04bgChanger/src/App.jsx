import { useState } from 'react'

import './App.css'

function App() {

  const [color, setColor] = useState("olive")
  

  return (
    <div className=' w-full h-screen duration-200'
    style={{background: color}}
    >
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl py-2 px-3'>
          <button className='outline-none px-4 py-1 rounded-full text-white'
           style={{background: "red"}} 
           onClick={() => setColor("red")} 
          > 
            Red
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white'
           style={{background: "green"}}  
           onClick={() => setColor("green")} 
          > 
            Green
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-black'
           style={{background: "yellow"}}  
           onClick={() => setColor("yellow")} 
          > 
            Yellow
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white'
           style={{background: "blue"}}  
           onClick={() => setColor("blue")} 
          > 
            Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
