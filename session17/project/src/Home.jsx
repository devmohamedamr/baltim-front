import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  let [data, setData] = useState([])
  useEffect(() => {
    users()
  }, [])
  return (
    <>
      <h1>home page</h1>
      <ul>
        {data.map((user) => <li>{user.email}</li>)}
      </ul>
    </>
  )

  function users() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data)
    })
  }
}
