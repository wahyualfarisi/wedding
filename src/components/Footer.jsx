import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Padang Background - Left Side */}
      <img
        src="/footer-padang.png"
        alt="Adat Padang Footer"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'bottom left',
          opacity: 0.9,
          zIndex: 0
        }}
      />

      {/* Betawi Background - Right Side */}
      <img
        src="/footer-betawi.png"
        alt="Adat Betawi Footer"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'bottom right',
          opacity: 0.9,
          zIndex: 0
        }}
      />

      <div className="gigi-balang-top" style={{ zIndex: 2 }}></div>

      <div style={{
        marginTop: '2rem',
        position: 'relative',
        zIndex: 2,
        padding: '2rem',
        backgroundColor: 'rgba(169, 139, 118, 0.7)',
        boxShadow: '0 0 30px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(5px)',
        borderRadius: '10px',
        display: 'inline-block',
        maxWidth: '90%'
      }}>
        <h3 style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Putri & Alfarisi</h3>
        <p style={{ color: 'var(--color-bg)', marginBottom: '1rem' }}>Terima kasih atas doa dan restunya</p>
        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
          &copy; 2026 Created with ❤️ for Wahyu Alfarisi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
