import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    setCartItems(prev => {
      const existing = prev.find(ci => ci.id === item.id);
      if (existing) {
        return prev.map(ci => ci.id === item.id ? { ...ci, qty: ci.qty + 1 } : ci);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (itemId) => {
    setCartItems(prev => {
      const existing = prev.find(ci => ci.id === itemId);
      if (existing && existing.qty > 1) {
        return prev.map(ci => ci.id === itemId ? { ...ci, qty: ci.qty - 1 } : ci);
      }
      return prev.filter(ci => ci.id !== itemId);
    });
  };

  const deleteItem = (itemId) => {
    setCartItems(prev => prev.filter(ci => ci.id !== itemId));
  };

  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const getItemQty = (itemId) => cartItems.find(ci => ci.id === itemId)?.qty || 0;

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, deleteItem, clearCart, totalItems, totalPrice, getItemQty }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
