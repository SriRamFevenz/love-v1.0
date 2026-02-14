import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Landing = ({ onNext }) => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        // Create floating particles
        const particleCount = 20;
        const particles = [];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            // Random properties
            const size = Math.random() * 5 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.position = 'absolute';
            particle.style.background = 'rgba(255, 255, 255, 0.3)';
            particle.style.borderRadius = '50%';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            container.appendChild(particle);
            particles.push(particle);

            // Animate with GSAP
            gsap.to(particle, {
                y: `-${Math.random() * 100 + 50}`,
                x: `+=${Math.random() * 50 - 25}`,
                opacity: 0,
                duration: Math.random() * 3 + 2,
                repeat: -1,
                ease: "none",
                delay: Math.random() * 2
            });
        }

        return () => {
            particles.forEach(p => p.remove());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4] flex flex-col items-center justify-center text-white"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-center z-10"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-sm font-sans tracking-tight">
                    Hey, Beautiful...
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-90 mb-12">
                    I built something small.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    className="bg-white text-[#ff9a9e] px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                    Start ❤️
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Landing;
