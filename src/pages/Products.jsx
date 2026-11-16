import React from "react";
import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <>
      <section className="page-banner"><div className="container"><span className="eyebrow">FIND YOUR STYLE</span><h1>Our collection</h1><p>Explore the TimeZone watch selection.</p></div></section>
      <section className="section container">
        <div className="catalog-tools">
          <input className="search-input" type="search" placeholder="Search watches..." value={search} onChange={(event) => setSearch(event.target.value)} aria-label="Search watches" />
          <div className="filter-buttons">
            {["All", "Classic", "Luxury", "Sport"].map((item) => (
              <button key={item} className={`filter-button ${category === item ? "active" : ""}`} onClick={() => setCategory(item)}>{item}</button>
            ))}
          </div>
        </div>
        <p className="result-count">Showing {filteredProducts.length} {filteredProducts.length === 1 ? "watch" : "watches"}</p>
        {filteredProducts.length > 0 ? (
          <div className="product-grid">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        ) : (
          <div className="empty-state"><h2>No watches found</h2><p>Try another search or category.</p><button className="button button-dark" onClick={() => { setSearch(""); setCategory("All"); }}>Clear filters</button></div>
        )}
      </section>
    </>
  );
}