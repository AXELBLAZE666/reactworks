import React from 'react';
import { productsData } from '../data/products';
import { useParams } from 'react-router-dom';

function SingleItem() {
  let { id } = useParams();
  

  const productId = Number(id);
  

  let product = productsData.find((e) => e.id === productId);


  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <div>
        <p>ID: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <button>Add to cart</button>
        </div>
      </div>
  );
}

export default SingleItem;