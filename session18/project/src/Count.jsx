import React, { useState } from 'react'

export default function Count() {
    let [number,setNumber] = useState(0)
    let [data,setData] = useState([
        "mohamed",
        "ahmed",
        "eslam"
    ])
  return (
    <>
        {/* <ul>
            {data.map((name)=> <li>{name}</li>)}
        </ul> */}
        {/* <h1>count is : {number}</h1>
        <button onClick={increment}>increment</button> */}
    </>
  )

//   function increment(){
//     setNumber(++number)
//   }
}
