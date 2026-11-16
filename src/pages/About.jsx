import React from "react";
export default function About() {
  return (
    <>
      <section className="page-banner"><div className="container"><span className="eyebrow">WHO WE ARE</span><h1>About TimeZone</h1><p>A little more about the idea behind every second.</p></div></section>
      <section className="section container about-layout">
        <div className="about-image"><img src="https://images.unsplash.com/photo-1495856458515-0637185a5c1a?w=1100&auto=format&fit=crop&q=85" alt="Watch displayed on a table" /></div>
        <div className="about-copy">
          <span className="eyebrow">OUR STORY</span>
          <h2>Style is in the details.</h2>
          <p>TimeZone Watches is a sample watch retail business created to make exploring personal style simple. We bring different watch designs together in one easy-to-use online store.</p>
          <p>From clean everyday pieces to bold statement styles, our collection is organised to help customers discover a watch that suits their taste.</p>
          <div className="mission-box"><h3>Our mission</h3><p>To make discovering a watch that matches your style clear, convenient and enjoyable.</p></div>
          <div className="mission-box"><h3>Our vision</h3><p>To become a trusted destination for people who appreciate thoughtful design and personal expression.</p></div>
        </div>
      </section>
    </>
  );
}