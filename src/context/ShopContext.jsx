import React, { createContext, useContext, useEffect, useState } from "react";

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("timezone-cart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("timezone-cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);
      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function changeQuantity(id, amount) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <ShopContext.Provider value={{ cart, cartCount, addToCart, changeQuantity, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used inside ShopProvider");
  return context;
}