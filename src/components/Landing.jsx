import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


const Landing = ({ onNext }) => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    // Generate particles only once
    const particles = React.useMemo(() => {
        return [...Array(20)].map((_, i) => ({
            id: i,
            size: Math.random() * 5 + 2,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
            moveX: Math.random() * 50 - 25,
            moveY: -(Math.random() * 100 + 50)
        }));
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4] flex flex-col items-center justify-center text-white"
        >
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bg-white/30 rounded-full"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                    }}
                    animate={{
                        y: p.moveY,
                        x: p.moveX,
                        opacity: [1, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay,
                    }}
                />
            ))}
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
