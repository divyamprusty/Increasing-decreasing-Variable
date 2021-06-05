import React, { useState } from 'react';

function App() {

  const [x, setX] = useState(0)
  const [inputState, setInputState] = useState(0)

  const sum = x + parseInt(inputState);
  
  return (
    <>
      <h1>{x}</h1>
      <button onClick={() => setX(x+1) }>+1</button>
      <button onClick={() => setX(x-1) }>-1</button>
      <br></br>
      <input type="number" value={inputState} onChange={(e) => setInputState(e.target.value)}></input>
       <button onClick={() => setX(sum) }>Add</button>
    </>
  );
}

export default App;