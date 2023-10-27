import React, { useState } from 'react'
import Item from './Item'
import axios from 'axios'
export default function Home() {
  let [data,setData] = useState([])
  return (
    <>
        {/* <button className='btn btn-success'>click</button>
        <Item name='test1' />
        <Item name='test2' />
        <Item name='ahmed' /> */}
    <button onClick={getUsers}>get data</button>

    <ul>
        {data.map((user)=> <li>{user.name}</li>)}
    </ul>
    </>
  )

  function getUsers(){
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
      setData(res.data)
      console.log(res.data)
    })
  }
}
