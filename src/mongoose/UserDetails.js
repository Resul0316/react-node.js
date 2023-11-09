import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";

const Details = () => {
  const [data, setData] = useState([]);
  const [inputData, setinputData] = useState("");
  const [postData, setPostData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("/api/input");
    setData(response.data);
  };
  console.log(data, 'data')
  const handleSendData = () => {
    axios.post('/api/input', {
        body: ({userInput: inputData})
    })
    .then((res) => setPostData(res.data) )
    .catch((err) => console.info(err))
  }
  return (
    <div className="mt-5 ms-2">
      <h6>Please Enter Your Details</h6>
      <div className="details">
        {/* <Form onSubmit={handleSendData}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <InputGroup className="mb-3">
            <InputGroup.Text>First and last name</InputGroup.Text>
            <Form.Control aria-label="First name" />
            <Form.Control aria-label="Last name" />
          </InputGroup>
        </Form> */}
        <input
          type="text"
          placeholder="Enter Data"
          value={inputData}
          onChange={(e) => {
            setinputData(e.target.value);
          }}
        />
        <button onClick={handleSendData}>SendData</button>
        <button onClick={fetchData}>FetchData</button>
      </div>
    </div>
  );
};

export default Details;
