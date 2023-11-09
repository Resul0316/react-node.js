import React, { useState, useEffect } from "react";
import axios from "axios";

const Mongoose = () => {
  const [inputData, setInputData] = useState("");
  const [storeData, setStoreData] = useState([]);
  const [notes, setNotes] = useState([]);
  const trimValue = inputData.trim();
  const handleClick = () => {
    if (trimValue !== "") {
      fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput: inputData }),
      })
        .then(setInputData(''))
        .then((response) => response.json())
        .then((data) => {
          setStoreData([...storeData, data.newData]);
        })
        .catch((err) => console.info(err));
    }
  };
  // fetchData with axios
  const getData = async () => {
    const response = await axios.get("/api/notes");
    setNotes(response.data);
  };

  return (
    <div>
      <div className="mt-5 ms-2">
        <h4>Mongoose Study</h4>
        <input
          type="text"
          placeholder="Enter Input"
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        />
        <button onClick={handleClick}>Send Data</button>
        <div>
          <button className="mb-3 mt-4" onClick={getData}>Fetch Data</button>
          <ul>
            {notes.map((note) => {
              return <li key={note._id}>{note.userInput}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mongoose;
