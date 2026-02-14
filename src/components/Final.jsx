import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';


// Simple hook to get window size if react-use isn't available, 
// but sticking to standard hooks for zero-dep if needed. 
// Actually I didn't install react-use, so I'll write a built-in one.

const useWindowSizeCustom = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    useEffect(() => {
        const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return size;
};

const Final = () => {
    const [width, height] = useWindowSizeCustom();

    return (
        <div className="h-screen w-full bg-gradient-to-b from-soft-pink to-white flex flex-col items-center justify-center overflow-hidden relative">
            <Confetti width={width} height={height} numberOfPieces={300} recycle={true} gravity={0.2} />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="text-center z-10 px-6"
            >
                <h1 className="text-5xl md:text-7xl font-bold text-valentine-red mb-6">
                    Yay! ❤️
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                    className="text-2xl text-gray-700 font-light mb-2"
                >
                    This isn’t just today.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 2.5 }}
                    className="text-3xl font-medium text-gray-800 mb-12"
                >
                    I choose you.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1, delay: 4 }}
                    className="text-sm text-gray-400 uppercase tracking-widest mt-12"
                >
                    Screenshot this
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Final;
