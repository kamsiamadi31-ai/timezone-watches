import React from "react";
import { NavLink } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const { cartCount } = useShop();

  return (
    <header className="site-header">
      <nav className="navbar container">
        <NavLink to="/" className="brand">
          <span className="brand-icon">T</span>
          <span>TimeZone<span className="brand-light">.</span></span>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/cart" className="cart-link">Cart <span className="cart-count">{cartCount}</span></NavLink>
        </div>
      </nav>
    </header>
  );
}