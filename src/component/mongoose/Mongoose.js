import React, { useState, useEffect } from "react";
import axios from "axios";

const Mongoose = () => {
  const [inputData, setInputData] = useState("");
  const [storeData, setStoreData] = useState([]);
  const [notes, setNotes] = useState([]);
  const [fetching, setIsFetching] = useState(false);
  const trimValue = inputData.trim();
  // pagination useState
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(5);
  // functions
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
    setIsFetching(!fetching)
  };
  useEffect(() => {
    getData()
  }, [currentPage, itemPerPage])

  // current items to show
  const lastNote = currentPage * itemPerPage;
  const firstNote = lastNote - itemPerPage;
  const currentNotes = notes.slice(firstNote, lastNote)

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
        <div className="mt-3">
          {/* <button className="mb-3 mt-4" onClick={getData}>Fetch Data</button> */}
          <ul>
            {currentNotes.map((note) => {
              return <li key={note._id}>{note.text}</li>;
            })}
          </ul>
          <h6>Pagination:</h6>
          <button className="pagination-btn" onClick={() => setCurrentPage(currentPage -1)}>Prev</button>
          <button className="pagination-btn" onClick={() => setCurrentPage(currentPage +1)}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Mongoose;
