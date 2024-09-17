import React from 'react'
import { productsData } from '../data/products'
import { Link } from 'react-router-dom'

function gamingpc() {
  return (
    <div className='maindata'>
        {
            productsData.map((e)=>{
                return(
                    
                    <div className='productdata'>
                    <Link to={`/gamingpc/${e.id}`}>
                        <img className='product-images' src={e.image} alt="" />
                        <p>{e.id}</p>
                        <p>{e.name}</p>
                        <p>{e.Price}</p>
                    </Link>
                    </div>
                    
                )
                
            })
        }
    </div>
  )
}

export default gamingpc
