import { useState , useCallback, useEffect, useRef} from 'react';

function App() {

      const [length,setLength]=useState(8);
      const [numberAllowed, setNumberAllowed]=useState(false);
      const [charAllowed, setCharAllowed]=useState(false);
      const [password, setPassword]=useState("");

      //use ref hook:
      const passwordRef=useRef(null);

      const passwordGenerator=useCallback(()=>{
            let pass=""
            let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

            if(numberAllowed) str+="0123456789"
            if(charAllowed) str+="!@#$%^&*(){}[]`~"

            for(let i=1;i<=length;i++){
              let char=Math.floor(Math.random()*str.length+1)

              pass+=str.charAt(char)
            }

            setPassword(pass)

      }, [length, numberAllowed, charAllowed, setPassword])

      //here setPasword is given for memoization, if password is given instead setpassword , it will go in a infinite llop of passwords, 
      //so instaed setPassword is given so taht it will be caled only when a password is craeted

      //useCallback is ensuring that it remains optimized


      const copyPasswordToClipboard= useCallback(()=>{
        window.navigator.clipboard.writeText(password)
      },
    [password])

    

      useEffect(()=>{
        passwordGenerator()
      }, [length, numberAllowed, charAllowed , passwordGenerator])

      //useEffcet is ensuring that whenever any change is made in any of these parameters , it will call the passwordGenerator  again

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-grey-700 bg-white'>
          
          <div className='flex shadow riunded-lg overflow-hidden mb-4'>
              <input
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='password'
              readOnly
              ref={passwordRef}
              />
              <button 
              onClick={copyPasswordToClipboard}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
          </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}
                />
                <label>Length:{length}</label>
            </div>

            <div>
              <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev)
              }}
              />
              <label>numbers</label>
            </div>

            <div>
              <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={()=>{
                setCharAllowed((prev)=>!prev)
              }}
              />
              <label>characters</label>
            </div>
          </div>

      </div>
    </>
  )
}

export default App
