import React, { useState, useRef, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startAudio = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    // Direct play in click handler — required by iOS Safari
    audio.play().then(() => {
      setPlaying(true);
    }).catch((err) => {
      console.warn('Audio play failed:', err);
    });
  }, []);

  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => {
        setPlaying(true);
      }).catch(console.warn);
    }
  }, [playing]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/wedding-music.mp3"
        loop
        preload="auto"
        playsInline
        style={{ display: 'none' }}
      />

      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={playing ? togglePlay : startAudio}
          className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-[9999] flex items-center justify-center w-12 h-12 rounded-full bg-brand-bg border border-brand-accent text-brand-accent shadow-lg hover:bg-brand-accent hover:text-brand-bg transition-all duration-300 group"
          aria-label={playing ? "Pause background music" : "Play background music"}
        >
          {playing ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </motion.button>
      </AnimatePresence>
    </>
  );
}
