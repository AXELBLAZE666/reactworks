import React from 'react';
import { Button } from 'react-bootstrap';

const CartItem = ({ item, onRemove }) => {
  

  return (
    <div className="cart-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <img 
        src={item.image} 
        alt={item.ProductName} 
        style={{ width: '100px', height: 'auto', marginRight: '15px' }} 
      />
      
      <div className="cart-item-details" style={{ flex: 1 }}>
        <h4>{item.name}</h4> {/* Product name */}
        <p>Price: ₹{item.price}</p> {/* Price per item */}
        
        <p>Total: ₹{(item.price)}</p> {/* Total cost */}
        <Button variant="danger" onClick={() => onRemove(item.id)}>Remove</Button>
      </div>
    </div>
  );
};

export default CartItem;
