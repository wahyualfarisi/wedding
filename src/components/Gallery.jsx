import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="section-container text-center">
      <h2>Momen Kami</h2>
      <div className="pattern-divider mb-4"></div>

      <div className="gallery-grid">
        <div className="gallery-item tall animate-fade-in">
          <img src="/putih-1.JPG" alt="Gallery 1" />
        </div>
        <div className="gallery-item animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img src="/makan-pizza.jpeg" alt="Gallery 2" />
        </div>
        <div className="gallery-item animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <img src="/foto-blur.JPG" alt="Gallery 3" />
        </div>
        <div className="gallery-item animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <img src="/pegangan-tangan-lari.jpeg" alt="Gallery 4" />
        </div>
        <div className="gallery-item animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <img src="/duduk-senyum.jpg" alt="Gallery 5" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
