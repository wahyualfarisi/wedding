import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const EventSection = () => {
  return (
    <section id="events" className="section-container" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="gigi-balang-top"></div>

      <div style={{ color: 'var(--color-white)', marginTop: '2rem' }}>
        <h2 style={{ color: 'var(--color-secondary)' }}>Jadwal Acara</h2>
        <p className="text-center mb-4" style={{ color: 'var(--color-white)' }}>
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami.
        </p>

        <div className="event-card animate-fade-in">
          <h3 style={{ fontFamily: 'var(--font-names)', fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Resepsi</h3>
          <p className="mb-2" style={{ color: 'var(--color-text)' }}><FaCalendarAlt style={{ color: 'var(--color-secondary)', marginRight: '8px' }} /> Jum'at, 24 April 2026</p>
          <p className="mb-2" style={{ color: 'var(--color-text)' }}><FaClock style={{ color: 'var(--color-secondary)', marginRight: '8px' }} /> 14:00 WIB - 17:00 WIB</p>
          <p className="mb-3" style={{ color: 'var(--color-text)' }}><FaMapMarkerAlt style={{ color: 'var(--color-secondary)', marginRight: '8px' }} /> <strong>Tuscan Dream</strong><br />Jl. Cipete IV No.6A, RT.2/RW.4, Cipete Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12410</p>
          <a href="https://share.google/wMFnbKH27ZTfnWtzj" className="btn-primary" style={{ width: '100%', fontSize: '0.9rem' }}>Lihat Peta Lokasi</a>
        </div>
      </div>

      <div className="gigi-balang-bottom"></div>
    </section>
  );
};

export default EventSection;
