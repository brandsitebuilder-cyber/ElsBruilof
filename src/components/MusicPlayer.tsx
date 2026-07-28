import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setIsMuted(false);
        setPlaying(true);
        setHasInteracted(true);
        
        if (playerRef.current && typeof playerRef.current.getInternalPlayer === 'function') {
          const internalPlayer = playerRef.current.getInternalPlayer();
          if (internalPlayer && typeof internalPlayer.playVideo === 'function') {
            internalPlayer.playVideo();
          }
        }
      }
    };

    const events = ['click', 'touchstart', 'scroll', 'keydown'];
    
    events.forEach(event => {
      window.addEventListener(event, handleFirstInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, [hasInteracted]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!hasInteracted) {
      setHasInteracted(true);
    }

    if (isMuted) {
      setIsMuted(false);
      setPlaying(true);
    } else {
      setPlaying(!playing);
    }
  };

  const isAudioActive = playing && !isMuted;

  return (
    <>
      <div className="fixed -top-[10000px] -left-[10000px] w-[200px] h-[200px] opacity-0 pointer-events-none overflow-hidden -z-50">
        <ReactPlayer
          ref={playerRef}
          url="https://www.youtube.com/watch?v=L_jgIezosVA"
          playing={playing}
          muted={isMuted}
          loop={true}
          volume={0.5}
          width="200px"
          height="200px"
          playsInline={true}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
      </div>

      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={togglePlay}
          className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-[9999] flex items-center justify-center w-12 h-12 rounded-full bg-brand-bg border border-brand-accent text-brand-accent shadow-lg hover:bg-brand-accent hover:text-brand-bg transition-all duration-300 group"
          aria-label={isAudioActive ? "Pause background music" : "Play background music"}
        >
          {isAudioActive ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
          
          {/* Tooltip */}
          {!hasInteracted && (
            <span className="absolute left-full ml-4 whitespace-nowrap bg-brand-bg border border-brand-accent/30 text-brand-text text-xs uppercase tracking-widest px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {isAudioActive ? "Pause Music" : "Play Music"}
            </span>
          )}
        </motion.button>
      </AnimatePresence>
    </>
  );
}
