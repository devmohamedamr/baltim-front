import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Product() {
    let [data,setData] = useState([])
    useEffect(()=>{
      getProducts()
    },[])
  return (
    <>
        <div className='container'>
          <div className='row'>
          {data.map((product)=>
              <div key={product.id} className="card col-md-3">
              <img src={product.image} className="card-img-top img" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
              </div>
        )}
          </div>
        </div>
     
  
    </>
  )

  function getProducts(){
    axios.get("https://fakestoreapi.com/products?limit=5").then((res)=>{
      console.log(res.data)
        setData(res.data)
    })
  }
}

