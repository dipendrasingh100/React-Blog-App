import { createContext, useState, useEffect } from "react";
import React from 'react'
import axios from "axios";
import Loader from "./Loader";

export const ContextDataProvider = createContext();
const baseURL = "https://blog-api-07t5.onrender.com/"


const ContextData = ({ children }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(baseURL)
        setData(res.data)
        setIsLoading(false)
      } catch (err) {
        console.log(err);
        setIsLoading(false)
      }
    }
    getData()
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      {data.length && <ContextDataProvider.Provider value={data}>
        {children}
      </ContextDataProvider.Provider>}
    </>
  )
}

export default ContextData

