import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // attempt to load saved cart (optional)
    (async () => {
      try {
        const json = await AsyncStorage.getItem('@cart');
        if (json) setItems(JSON.parse(json));
      } catch {}
    })();
  }, []);

  useEffect(() => {
    // persist cart (optional)
    AsyncStorage.setItem('@cart', JSON.stringify(items)).catch(() => {});
  }, [items]);

  const addToCart = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((s, it) => s + it.price, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);