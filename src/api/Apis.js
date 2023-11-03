import React, { useState, useEffect } from 'react'

const Apis = () => {
    const [message, setMessage] = useState('')
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false);
    const [fetchCompleted, setFetchCompleted] = useState(false);
    const fetchData = async () => {
        const response = await fetch('/api/data');
        const data = await response.json()
        setBooks(data)
    }
    useEffect(() => {
        if (fetchCompleted) {
        setLoading(true);
        fetchData()
        setLoading(false);
        }
    }, [fetchCompleted])
    const handleClick = () => {
        if (!fetchCompleted) {
            setFetchCompleted(true)
        }
    }

    const sendData = async () => {
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: 'Data to send API' })
        })
        const data = await response.json();
        setMessage(data.message);
    }
    return (
        <div>
        <h4>API STUDY:</h4>
        {message}
        <button onClick={handleClick}>Fetch Data</button>
        {loading ? (<p> Loading</p>) :
        (<ul>{books.map((book) => {
            return <li key={book.id}>{book.key}</li>
        })}</ul>)}
        <input type='text'></input>
        {/* <button onClick={sendData}>Send Data</button> */}
        </div>
    )
}

export default Apis