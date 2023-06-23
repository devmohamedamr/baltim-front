import React, { useEffect, useState } from 'react'

export default function Counter() {
    let [number,setNumber] = useState(0)
    let [data,setData] = useState(["red","green","blue"])
    useEffect(()=>{
        console.log("test")
    })
    console.log("hi")
  return (
    <>
        <h1>counter component</h1>
        <h2>count is : {number}</h2>
        <button onClick={increment}>incement</button>
        {/* <ul>
            {data.map((x)=><li>{x}</li>)}
        </ul> */}
    </>
  )

  function increment(){
    let newcount  = number;
    newcount++
    setNumber(newcount)
  }
}
