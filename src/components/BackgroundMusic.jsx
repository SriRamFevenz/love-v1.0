import React, { useState, useRef, useEffect } from 'react';

const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Attempt to play on mount, but browsers might block it until user interaction
        const playAudio = async () => {
            try {
                if (audioRef.current) {
                    audioRef.current.volume = 0.5; // Set initial volume
                    await audioRef.current.play();
                    setIsPlaying(true);
                }
            } catch (err) {
                console.log("Autoplay blocked, waiting for user interaction:", err);
                setIsPlaying(false);
            }
        };

        playAudio();
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed top-4 right-4 z-50">
            <audio ref={audioRef} loop>
                {/* User needs to add music.mp3 to public/ or src/assets/ and update this path */}
                <source src="/music.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <button
                onClick={togglePlay}
                className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all transform hover:scale-105"
                aria-label={isPlaying ? "Mute Music" : "Play Music"}
            >
                {isPlaying ? (
                    <span className="text-xl">🔊</span>
                ) : (
                    <span className="text-xl">🔇</span>
                )}
            </button>
        </div>
    );
};

export default BackgroundMusic;
