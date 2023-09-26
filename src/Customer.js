import React, { useState } from 'react';
const Customer = () => {
  const [code, setCode] = useState(10);
  return (
    <div>
      <div>
        <h1>Customer Master</h1>
        <label>Code:</label>
        <input
          type="number"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <p>Code is {code}</p>
      </div>
    </div>
  );
};
export default Customer;
