import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { formatPrice } from "../data/products";

export default function Cart() {
  const { cart, changeQuantity, removeFromCart } = useShop();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <section className="section container empty-state cart-empty"><span className="eyebrow">YOUR SELECTION</span><h1>Your cart is empty</h1><p>Explore the collection and add a watch you like.</p><Link to="/products" className="button button-dark">Browse watches</Link></section>;
  }

  return (
    <section className="section container cart-page">
      <span className="eyebrow">YOUR SELECTION</span><h1>Shopping cart</h1>
      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info"><h3>{item.name}</h3><p>{formatPrice(item.price)}</p>
                <div className="quantity-control">
                  <button onClick={() => changeQuantity(item.id, -1)} aria-label={`Decrease ${item.name} quantity`}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => changeQuantity(item.id, 1)} aria-label={`Increase ${item.name} quantity`}>+</button>
                </div>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
            </article>
          ))}
        </div>
        <aside className="cart-summary"><h2>Order summary</h2><div><span>Items</span><strong>{cart.reduce((sum, item) => sum + item.quantity, 0)}</strong></div><div className="total-row"><span>Total</span><strong>{formatPrice(total)}</strong></div><p className="sample-note">Checkout/payment is not connected in this demo.</p><Link to="/products" className="button button-dark full-button">Continue shopping</Link></aside>
      </div>
    </section>
  );
}