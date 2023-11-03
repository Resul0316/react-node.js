import React, { useState } from "react";

const Post2 = () => {
    const [inputData, setInputData] = useState('');
    const [storeData, setStoreData] = useState([]);
    
    const handleClick = () => {
        fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userInput: inputData}),   
        })
        .then((response) => response.json())
        .then((data) => {
            setStoreData([...storeData, data.newData])
        })
        .catch((err) => console.info(err))
    }
    const storedData = storeData.map((item, index) => {
        return <li key={index}>{item.userInput}</li>
    })
    return (
        <div className="m-5">
            <h5>Post2 Study</h5>
            <input 
            type="text"
            placeholder="Enter Input"
            value={inputData}
            onChange={(e) => {setInputData(e.target.value)}}
            />
            <button onClick={handleClick}>Send Data</button>
            {storedData}
        </div>
    )
}
export default Post2