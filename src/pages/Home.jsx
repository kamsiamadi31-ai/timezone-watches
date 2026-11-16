import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">TIMELESS STYLE. EVERY SECOND.</span>
            <h1>Make every<br /><span>second count.</span></h1>
            <p>Discover watches that bring together thoughtful design, everyday comfort and personal style.</p>
            <div className="hero-actions">
              <Link to="/products" className="button button-dark">Explore collection</Link>
              <Link to="/about" className="text-link">Our story <span>→</span></Link>
            </div>
            <div className="hero-note"><strong>6</strong><span>carefully selected styles<br />in our sample collection</span></div>
          </div>
          <div className="hero-image-wrap">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&auto=format&fit=crop&q=90" alt="Elegant wristwatch" />
            <div className="floating-note"><span>TIMEZONE PICK</span><strong>Classic Silver</strong><small>Simple. Confident. Timeless.</small></div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div><span className="eyebrow">THE COLLECTION</span><h2>Featured watches</h2></div>
          <Link to="/products" className="text-link">View all products <span>→</span></Link>
        </div>
        <div className="product-grid">
          {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="promise-section">
        <div className="container promise-grid">
          <div><span className="promise-number">01</span><h3>Thoughtful design</h3><p>Simple styles selected to complement different moments and outfits.</p></div>
          <div><span className="promise-number">02</span><h3>Everyday comfort</h3><p>Options designed with daily use and personal expression in mind.</p></div>
          <div><span className="promise-number">03</span><h3>Personal style</h3><p>Find a look that feels like you, whether classic, sporty or bold.</p></div>
        </div>
      </section>
    </>
  );
}