import React, { useState } from "react";

const Mongoose = () => {
    const [inputData, setInputData] = useState('');
    const [storeData, setStoreData] = useState([]);
    const handleClick = () => {
        fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userInput: inputData })
        })
        .then((response) => response.json())
        .then((data) => {
            setStoreData([...storeData, data.newData])
        })
        .catch((err) => console.info(err))
    }
    return (
    <div className="m-5">
      <h4>Mongoose Study</h4>
      <input
      type="text"
      placeholder="Enter Input"
      value={inputData}
      onChange={(e) => {setInputData(e.target.value)}}
      />
      <button onClick={handleClick}>Send Data</button>
    </div>
  );
};

export default Mongoose;
