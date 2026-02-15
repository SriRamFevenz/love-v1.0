import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';

// Simple hook to get window size
const useWindowSizeCustom = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    useEffect(() => {
        const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return size;
};

const Final = ({ content }) => {
    const [width, height] = useWindowSizeCustom();
    const { title, text1, text2, footer } = content.final;
    const { senderName } = content;

    return (
        <div className="h-screen w-full bg-gradient-to-b from-soft-pink to-white flex flex-col items-center justify-center overflow-hidden relative">
            <Confetti width={width} height={height} numberOfPieces={300} recycle={true} gravity={0.2} />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="text-center z-10 px-6 flex flex-col items-center"
            >
                <h1 className="text-5xl md:text-7xl font-bold text-valentine-red mb-6">
                    {title}
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                    className="text-2xl text-gray-700 font-light mb-2"
                >
                    {text1}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 2.5 }}
                    className="text-3xl font-medium text-gray-800 mb-8"
                >
                    {text2}
                </motion.p>

                {senderName && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 3 }}
                        className="text-xl font-medium text-rose-500 mb-8 italic"
                    >
                        With love, {senderName}
                    </motion.p>
                )}

                <Link
                    to="/"
                    className="fixed bottom-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-xs hover:bg-white text-rose-500 z-50 transition-all hover:scale-105 border border-rose-100"
                >
                    Create your own ❤️
                </Link>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1, delay: 4 }}
                    className="text-sm text-gray-400 uppercase tracking-widest mt-12"
                >
                    {footer}
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Final;
