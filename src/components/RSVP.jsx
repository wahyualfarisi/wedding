import React, { useState } from 'react';
import { FaGift, FaCopy } from 'react-icons/fa';

const RSVP = () => {
  const [formData, setFormData] = useState({ name: '', attendance: 'Hadir', wishes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add logic to save to database or send email
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <section id="rsvp" className="section-container" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="pattern-divider mb-4"></div>
      
      {/* Kado / Amplop Digital Section */}
      <div className="text-center mb-4">
        <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <FaGift /> Amplop Digital
        </h2>
        <p className="mb-4">Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Bapak/Ibu/Saudara/i ingin memberikan tanda kasih untuk kami, dapat melalui:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
          <div className="event-card" style={{ padding: '1.5rem', marginBottom: '0' }}>
            <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', color: 'var(--color-text)' }}>Bank Mandiri</h3>
            <p className="mb-2" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>123455</p>
            <p className="mb-3">a.n. Wahyu Alfarisi (Pria)</p>
            <button 
              onClick={() => handleCopy('123455', 'mandiri')} 
              className="btn-primary" 
              style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', width: '100%' }}
            >
              <FaCopy /> {copied === 'mandiri' ? 'Tersalin!' : 'Salin No. Rekening'}
            </button>
          </div>

          <div className="event-card" style={{ padding: '1.5rem', marginBottom: '0' }}>
            <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', color: 'var(--color-text)' }}>Bank BCA</h3>
            <p className="mb-2" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>23423432</p>
            <p className="mb-3">a.n. Putri Nur Azizah (Wanita)</p>
            <button 
              onClick={() => handleCopy('23423432', 'bca')} 
              className="btn-primary" 
              style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', width: '100%' }}
            >
              <FaCopy /> {copied === 'bca' ? 'Tersalin!' : 'Salin No. Rekening'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
