import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { formatPrice } from "../data/products";

export default function ProductCard({ product }) {
  const { addToCart } = useShop();

  return (
    <article className="product-card">
      <Link to="/products" className="product-image-link" aria-label={`View ${product.name}`}>
        <img src={product.image} alt={product.name} className="product-image" />
        <span className="product-tag">{product.tag}</span>
      </Link>
      <div className="product-info">
        <div className="product-meta"><span>{product.category}</span><span>TimeZone collection</span></div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-bottom">
          <strong>{formatPrice(product.price)}</strong>
          <button className="small-button" onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </article>
  );
}