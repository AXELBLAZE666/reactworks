import React, { useEffect, useState } from 'react';
import CartItem from '../components/cartitem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = () => {
      const items = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(items); 
    };
    fetchCartItems();
  }, []);

  const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems); 
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); 
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: quantity } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); 
  };

 

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              onRemove={handleRemove} 
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;



