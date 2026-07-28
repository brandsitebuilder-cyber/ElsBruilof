import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Volume2, VolumeX } from 'lucide-react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Attempt to play music on first user interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        setIsPlaying(true);
      }
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the window click listener
    setIsPlaying(!isPlaying);
    setHasInteracted(true);
  };

  return (
    <>
      <div className="hidden">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=L_jgIezosVA"
          playing={isPlaying}
          loop={true}
          volume={0.5}
          width="0"
          height="0"
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                rel: 0,
              } as any
            } as any
          }}
        />
      </div>
      
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 p-3 bg-brand-accent text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 focus:outline-none"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </>
  );
}
