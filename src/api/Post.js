import React, { useState } from "react";

function Post() {
    const [inputData, setInputData] = useState('')
    const [dataStore, setDataStore] = useState([])

    const handleSendData = () => {
        fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userInput: inputData}),
        })
        .then((response) => response.json())
        .then((data) => {
            setDataStore([...dataStore, data.newData])
        })
        .catch((err) => console.error(err))
    }
    console.log(dataStore)
    return(
        <div className="ms-5 me-5">
            <h4> Study React</h4>
            <input
            className="m-5"
            type="text"
            placeholder="Enter Data"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            ></input>
            <button onClick={handleSendData}>Send Data</button>
        </div>
    )
}
export default Post;