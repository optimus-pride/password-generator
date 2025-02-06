import { useState } from 'react'
import './App.css'


function App() {

  let [counter,setCounter] = useState(15);

  const addValue = () => {
    counter = counter + 1;
    if(counter > 20){
      counter = 20;
      setCounter(counter);
    }
    else{
      setCounter(counter);
    }
    
    console.log(counter);
  }
  const subValue = () => {
    counter = counter - 1;
    setCounter(counter);
    console.log(counter);
  }

  return (
    <>
      <div>
        <h1>Amitabh counting</h1>
        <p>{counter}</p>
        <button onClick={addValue}>add</button>
        <br />
        <button onClick={subValue}>substract</button>
      </div>
    </>
  )
}

export default App
