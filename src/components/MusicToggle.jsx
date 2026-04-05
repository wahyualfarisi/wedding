import React from 'react';
import { FaMusic, FaVolumeMute } from 'react-icons/fa';

const MusicToggle = ({ isPlaying, onToggle }) => {
  return (
    <>
      <button
        id="music-toggle"
        className={`music-toggle ${isPlaying ? 'music-toggle--playing' : ''}`}
        onClick={onToggle}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={isPlaying ? 'Matikan Musik' : 'Putar Musik'}
      >
        <span className="music-toggle__icon">
          {isPlaying ? <FaMusic /> : <FaVolumeMute />}
        </span>
        {isPlaying && (
          <span className="music-toggle__bars">
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
          </span>
        )}
      </button>

      <style>{`
        .music-toggle {
          position: fixed;
          bottom: 2rem;
          right: 1.5rem;
          z-index: 1000;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid var(--color-secondary);
          background: var(--color-primary);
          color: var(--color-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
          animation: musicBtnEnter 0.5s ease-out;
        }

        .music-toggle:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(212, 175, 55, 0.4);
        }

        .music-toggle--playing {
          animation: musicBtnEnter 0.5s ease-out, musicPulse 2s ease-in-out infinite;
        }

        .music-toggle__icon {
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .music-toggle__bars {
          position: absolute;
          bottom: -8px;
          display: flex;
          gap: 2px;
          align-items: flex-end;
        }

        .bar {
          width: 3px;
          background: var(--color-secondary);
          border-radius: 1px;
        }

        .bar-1 {
          height: 8px;
          animation: barBounce 0.6s ease-in-out infinite alternate;
        }
        .bar-2 {
          height: 12px;
          animation: barBounce 0.6s ease-in-out 0.2s infinite alternate;
        }
        .bar-3 {
          height: 6px;
          animation: barBounce 0.6s ease-in-out 0.4s infinite alternate;
        }

        @keyframes musicBtnEnter {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        @keyframes musicPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(0,0,0,0.3); }
          50% { box-shadow: 0 4px 20px rgba(212, 175, 55, 0.5), 0 0 0 8px rgba(212, 175, 55, 0.1); }
        }

        @keyframes barBounce {
          0% { height: 3px; }
          100% { height: 14px; }
        }
      `}</style>
    </>
  );
};

export default MusicToggle;
