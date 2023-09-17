import { useState, useCallback, useEffect, useRef } from 'react'

 

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass , setPass] = useState('');

  const passRef = useRef(null)

  

  const passGenerator = useCallback(()=> {

    let pass = ""
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$&*_?" 

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
      
    }

    setPass(pass);

  }, [length, numAllowed, charAllowed, setPass]); 



  const copyPassToClipboard = useCallback(()=> {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(pass)
  }, [pass])



  useEffect(()=> {

    passGenerator()

  }, [length, numAllowed, charAllowed, passGenerator]);



  return (
    <>
     <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-700'>
     <h1 className=' text-white text-center my-3'>Password generator</h1>
     <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
     <input 
     type="text"
     value={pass}
     className=' outline-none w-full py-1 px-3'
     placeholder='Password'
     readOnly 
    ref={passRef}
     />
    <button onClick={copyPassToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
     </div>
     <div className=' flex text-sm gap-x-2'>
      <div className=' flex items-center gap-x-1'>
        <input type="range" 
          className=' cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          min={6}
          max={20}
          value={length}
        />
        <label>Length: {length}</label>
      </div>
      <div className=' flex items-center gap-x-1'>
       <input 
       type="checkbox" 
       defaultChecked={numAllowed}
       id='numberInput'
       onChange={() => {
        setNumAllowed((prev) => !prev)
       }} 
       />
       <label htmlFor="numberInput">Numbers</label>
     </div>
     <div className=' flex items-center gap-x-1'>
       <input 
       type="checkbox" 
       defaultChecked={charAllowed}
       id='charInput'
       onChange={() => {
        setCharAllowed((prev) => !prev)
       }} 
       />
       <label htmlFor="charInput">Characters</label>
     </div>
     </div>
     
     </div>

    </>
  )
}

export default App
