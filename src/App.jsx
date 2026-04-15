import React, { useState, useRef, useCallback } from 'react';
import Hero from './components/Hero';
import Couple from './components/Couple';
import Childhood from './components/Childhood';
import EventSection from './components/EventSection';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import MusicToggle from './components/MusicToggle';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleOpenInvitation = useCallback(() => {
    setIsOpen(true);

    // Play background music
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Audio autoplay blocked:', err);
          setIsPlaying(false);
        });
    }

    // Smooth scroll to the couple section after a brief delay for the animation
    setTimeout(() => {
      const coupleSection = document.getElementById('childhood');
      if (coupleSection) {
        coupleSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 600);
  }, []);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [isPlaying]);

  return (
    <>
      {/* Background Audio */}
      <audio ref={audioRef} src="/wedding-song.mp3" loop preload="auto" />

      {/* Hero / Cover Page — always visible */}
      <Hero onOpenInvitation={handleOpenInvitation} isOpen={isOpen} />

      {/* Main content — revealed after "Buka Undangan" */}
      <div className={`invitation-content ${isOpen ? 'invitation-content--open' : ''}`}>
        <Childhood />
        <Couple />
        <EventSection />
        <Gallery />
        <RSVP />
        <Footer />
      </div>

      {/* Floating music toggle — only after invitation is opened */}
      {isOpen && <MusicToggle isPlaying={isPlaying} onToggle={toggleMusic} />}
    </>
  );
}

export default App;
