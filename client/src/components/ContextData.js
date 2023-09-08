import { createContext, useState, useEffect } from "react";
import React from 'react'
import axios from "axios";

export const ContextDataProvider = createContext();
const baseURL = "http://localhost:8000/"


const ContextData = ({ children }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(baseURL)
        setData(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    getData()
  }, [])

  return (
    <>
      {data.length && <ContextDataProvider.Provider value={data}>
        {children}
      </ContextDataProvider.Provider>}
    </>
  )
}

export default ContextData

