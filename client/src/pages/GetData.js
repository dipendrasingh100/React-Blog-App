import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Home';

const GetData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/")
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            {data && <Home data={data} />}
        </>
    )
}

export default GetData
