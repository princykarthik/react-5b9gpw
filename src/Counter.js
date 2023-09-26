import React, { useState } from 'react';

const Customer = () => {
  const [code, setCode] = useState(10);
  const [counter, setCounter] = useState(0);
  //const [inputFields,setInputFields]=useState({code:0,name:'',location:''})
  const incrementCount = () => {
    setCounter(counter + 1);
  };
  const decrementCount = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <div>
        <h1>Customer Master</h1>
        <label>Code</label>
        <input
          type="number"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <p>Code is {code}</p>
        <p>Counter - {counter}</p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
    </div>
  );
};

export default Customer;
