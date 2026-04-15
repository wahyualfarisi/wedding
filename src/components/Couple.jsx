import React from 'react';

const Couple = () => {
  return (
    <section id="couple" className="section-container text-center" style={{ overflow: 'hidden' }}>
      {/* Padang Background (Rumah Gadang) - Left Side */}
      <img
        src="/padang.png"
        alt="Adat Padang"
        style={{
          position: 'absolute',
          top: '20%',
          left: '-15%',
          height: '35%',
          objectFit: 'contain',
          zIndex: -1,
          opacity: 0.2
        }}
      />

      {/* Betawi Background (Monas & Ondel-ondel) - Right Side */}
      <img
        src="/betawi.png"
        alt="Adat Betawi"
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '-15%',
          height: '35%',
          objectFit: 'contain',
          zIndex: -1,
          opacity: 0.2
        }}
      />

      <div className="pattern-divider mb-4"></div>
      <h4 style={{ color: 'var(--color-secondary)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>Maha Suci Allah</h4>
      <p className="mb-4" style={{ fontStyle: 'italic', maxWidth: '400px', margin: '0 auto 2rem' }}>
        "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."
        <br /><br />
        <strong>(Ar-Rum: 21)</strong>
      </p>

      <div className="couple-info mb-4">
        {/* Groom */}
        <div className="person animate-fade-in mb-4">
          <h2 className="couple-names">Wahyu Alfarisi</h2>
          <p>Putra dari Bapak Dasmuri & Ibu Marlis rianti</p>
        </div>

        <h1 className="couple-names" style={{ fontSize: '4rem', margin: '2rem 0' }}>&</h1>

        {/* Bride */}
        <div className="person animate-fade-in">
          <h2 className="couple-names">Putri Nur azizah</h2>
          <p>Putri dari Bapak Abdul Jamil & Ibu Siti Zuhairiah</p>
        </div>
      </div>

      <div className="pattern-divider mt-4"></div>
    </section>
  );
};

export default Couple;
