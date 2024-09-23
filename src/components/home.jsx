import React from 'react'
import {productsData} from '../data/products'
import { Link } from 'react-router-dom' 

function home() {
  const NewData = productsData.slice(0,3)
  return (
    <div className="dash maindata">
    {
     NewData.map((e)=>{
      return(
        <div className='productdata'>
          <img className='product-images' src={e.image} alt="" />

          <p>{e.name}</p>
          </div>

      )


     })     
    }
      <Link className='viewmore' to='/gamingpc'> <p>View More</p> </Link> 
    </div>
  )
}

export default home
