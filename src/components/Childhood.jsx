import React from 'react';

const Childhood = () => {
  return (
    <section id="childhood"  className="section-container text-center childhood-section">
      <div className="childhood-content">
        <h3 className="childhood-title" style={{ fontFamily: 'var(--font-body)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2rem', fontSize: '1rem', color: 'var(--color-text)' }}>
          These kids are getting Married
        </h3>

        <div className="childhood-photo-container">
          <img src="/we-mini.jpg" alt="Wahyu and Putri Childhood" className="childhood-photo" />
          <div className="decorative-heart" style={{ top: '20%', left: '-15px' }}>♡</div>
          <div className="decorative-heart" style={{ bottom: '20%', right: '-15px', animationDelay: '1.5s' }}>♡</div>
          <div className="decorative-ring" style={{ top: '50%', right: '-25px' }}>💍</div>
        </div>

        <h2 className="couple-names mt-4 mb-2" style={{ color: '#d85d5d', fontSize: '3.5rem' }}>Wahyu & Putri</h2>

        <p className="childhood-quote mt-4" style={{ fontStyle: 'italic', color: 'var(--color-text-light)', maxWidth: '90%', margin: '0 auto', fontSize: '1.1rem', fontWeight: '500' }}>
          "I choose you.<br />And I will keep choosing you,<br />every single day."
        </p>
      </div>

      {/* Decorative ribbons imitating the fabric in the reference image */}
      <div className="ribbon-decoration left"></div>
      <div className="ribbon-decoration right"></div>
    </section>
  );
};

export default Childhood;
