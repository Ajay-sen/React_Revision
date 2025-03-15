import './App.css';
import { useState } from 'react';

function App() {
  
  // let counter=15

  // const addValue=()=>{
  //   console.log("Value added:" ,counter)
  //   counter++;
  // }

  //use of hook:
  const [counter, setCounter]=useState(15);
  //counter, setCounter are variable names , you can keep any names in their place
  

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter: {counter}</h2>

      {/* <button
      onClick={addValue}
      >Add Value</button> */}
      <button onClick={()=>setCounter(counter+1)}>Add value</button>
      <br/>
      <button onClick={()=>setCounter(counter-1)}>remove value</button>
    </>
  )
}

export default App
