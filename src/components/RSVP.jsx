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
            <p className="mb-3">a.n. Rizky Ramadhan (Pria)</p>
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
            <p className="mb-3">a.n. Aisyah Putri (Wanita)</p>
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

      <div className="pattern-divider mb-4" style={{ marginTop: '3rem' }}></div>

      {/* RSVP Section */}
      <h2>RSVP & Ucapan</h2>
      <p className="text-center mb-4">Kehadiran dan doa restu Bapak/Ibu/Saudara/i sangat kami nantikan.</p>
      
      {submitted ? (
        <div className="text-center animate-fade-in p-4" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', borderRadius: '10px' }}>
          <h3 style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>Terima Kasih!</h3>
          <p style={{ color: 'var(--color-white)' }}>Pesan dan konfirmasi kehadiran Anda telah kami terima.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="animate-fade-in">
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Nama Lengkap" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <select 
              className="form-control"
              value={formData.attendance}
              onChange={(e) => setFormData({...formData, attendance: e.target.value})}
            >
              <option value="Hadir">Ya, Saya akan hadir</option>
              <option value="Tidak Hadir">Maaf, saya tidak bisa hadir</option>
            </select>
          </div>
          <div className="form-group">
            <textarea 
              className="form-control" 
              placeholder="Berikan ucapan dan doa restu Anda..." 
              required
              value={formData.wishes}
              onChange={(e) => setFormData({...formData, wishes: e.target.value})}
            ></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>Kirim Ucapan</button>
        </form>
      )}
    </section>
  );
};

export default RSVP;
