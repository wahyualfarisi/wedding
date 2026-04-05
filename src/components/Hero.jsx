import React from 'react';

const Hero = ({ onOpenInvitation, isOpen }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onOpenInvitation) {
      onOpenInvitation();
    }
  };

  return (
    <section className={`hero ${isOpen ? 'hero--opened' : ''}`} style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Stylized background overlay for depth */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at center, rgba(169,139,118,0.5) 0%, rgba(26,26,26,0.9) 100%)',
        zIndex: 0
      }}></div>

      {/* Floating gold traditional sparkles */}
      <div className="gold-dust a1">✧</div>
      <div className="gold-dust a2">✧</div>
      <div className="gold-dust a3">✦</div>
      <div className="gold-dust a4">✧</div>
      <div className="gold-dust a5">✦</div>

      {/* Padang Background (Rumah Gadang) - Left Side */}
      <img
        src="/padang.png"
        alt="Adat Padang"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '-5%',
          height: '60%',
          objectFit: 'contain',
          zIndex: 1,
          opacity: 0.85
        }}
      />

      {/* Betawi Background (Monas & Ondel-ondel) - Right Side */}
      <img
        src="/betawi.png"
        alt="Adat Betawi"
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '-5%',
          height: '60%',
          objectFit: 'contain',
          zIndex: 1,
          opacity: 0.85
        }}
      />

      {/* Top/Bottom layered Gigi Balang Element (Betawi Motif) */}
      <div className="gigi-balang-top" style={{ height: '30px', backgroundColor: 'var(--color-accent-yellow)', transform: 'rotate(180deg) translateY(0)', zIndex: 3, top: 0 }}></div>
      <div className="gigi-balang-top" style={{ height: '20px', backgroundColor: 'var(--color-accent-green)', transform: 'rotate(180deg) translateY(-10px)', zIndex: 4, top: 0 }}></div>

      <div className="gigi-balang-bottom" style={{ height: '20px', backgroundColor: 'var(--color-accent-green)', transform: 'translateY(-10px)', zIndex: 4, bottom: 0 }}></div>
      <div className="gigi-balang-bottom" style={{ height: '30px', backgroundColor: 'var(--color-accent-yellow)', zIndex: 3, bottom: 0 }}></div>

      {/* Content Box */}
      <div className="hero-content animate-fade-in text-center" style={{
        zIndex: 2,
        border: '2px solid var(--color-secondary)',
        padding: '3.5rem 2rem 2.5rem',
        borderRadius: '10px',
        boxShadow: '0 0 30px rgba(0,0,0,0.7)',
        position: 'relative',
        width: '85%',
        maxWidth: '380px',
        overflow: 'hidden'
      }}>
        {/* Background photo */}
        <img
          src="/hero-bg.jpg"
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            zIndex: 0,
          }}
        />
        {/* Dark overlay for text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(26,26,26,0.75)',
          backdropFilter: 'blur(2px)',
          zIndex: 1,
        }}></div>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
          background: 'var(--color-secondary)',
          boxShadow: '0 2px 10px rgba(212, 175, 55, 0.5)',
          zIndex: 2
        }}></div>

        {/* Text content — above the bg image & overlay */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h4 style={{ letterSpacing: '4px', marginBottom: '0.5rem', fontSize: '0.8rem' }}>THE WEDDING OF</h4>
          <h1 style={{ fontSize: '4rem', marginBottom: '0' }}>Putri & Wahyu</h1>

          <div style={{ margin: '1rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <span style={{ width: '40px', height: '1px', background: 'var(--color-secondary)' }}></span>
            <p style={{ color: 'var(--color-secondary)', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', margin: 0, fontWeight: 'bold' }}>24 . 04 . 2026</p>
            <span style={{ width: '40px', height: '1px', background: 'var(--color-secondary)' }}></span>
          </div>

          <p style={{ fontStyle: 'italic', fontSize: '0.85rem', marginBottom: '1.5rem', color: '#e0e0e0', lineHeight: 1.4 }}>
            Penyatuan dua tradisi agung<br />
            <span style={{ color: 'var(--color-secondary)' }}>Minang yang elegan & Betawi yang meriah</span>
          </p>

          {/* Kepada / Guest name area */}
          <div style={{
            marginBottom: '1.5rem',
            padding: '0.8rem 1rem',
            borderTop: '1px solid rgba(212, 175, 55, 0.3)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
          }}>
            <p style={{ fontSize: '0.75rem', color: '#bbb', margin: '0 0 4px', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Kepada Yth.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--color-secondary)', margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}>
              Bapak/Ibu/Saudara/i
            </p>
          </div>

          <button
            onClick={handleClick}
            className={`btn-primary btn-open-invitation ${isOpen ? 'btn-open-invitation--hidden' : ''}`}
            style={{ animation: isOpen ? 'none' : 'pulse 2s infinite' }}
            id="open-invitation-btn"
          >
            ✉ Buka Undangan
          </button>
        </div>
      </div>

      <style>{`
          .gold-dust {
            position: absolute;
            color: var(--color-secondary);
            font-size: 1.5rem;
            opacity: 0.6;
            animation: float 4s ease-in-out infinite alternate;
            z-index: 1;
            text-shadow: 0 0 10px var(--color-secondary);
            pointer-events: none;
          }
          .a1 { top: 20%; left: 8%; animation-delay: 0s; font-size: 1rem; }
          .a2 { top: 35%; right: 12%; animation-delay: 1.2s; font-size: 1.2rem; }
          .a3 { top: 65%; left: 15%; animation-delay: 2.5s; }
          .a4 { top: 55%; right: 8%; animation-delay: 1.8s; font-size: 2rem; }
          .a5 { top: 15%; right: 30%; animation-delay: 0.5s; font-size: 0.8rem; }
          
          @keyframes float {
            0% { transform: translateY(0px) scale(0.9); opacity: 0.3; }
            50% { opacity: 0.8; }
            100% { transform: translateY(-25px) scale(1.1); opacity: 0.3; }
          }
          @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); }
            70% { transform: scale(1.05); box-shadow: 0 0  0 15px rgba(212, 175, 55, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
          }

          .btn-open-invitation {
            transition: all 0.5s ease;
          }
          .btn-open-invitation--hidden {
            opacity: 0;
            transform: scale(0.8);
            pointer-events: none;
          }
        `}</style>
    </section>
  );
};

export default Hero;
