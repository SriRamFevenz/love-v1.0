import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const memories = [
    { img: "https://images.openai.com/static-rsc-3/se_56RAyGDZ4NhN6KCrbt64AI1qV9_avlyNyGt6VrlklPpauM1Xt3Q-Dz1NuiwDtRwuPHwru7gLZH6xVwBSGWwSfx2VxSMyyOH_yLJEEBDM?purpose=fullsize&v=1", text: "The day everything changed." },
    { img: "https://images.openai.com/static-rsc-3/ed0H2yaq1bRE5lVeqdrbflTMs5fJGsZmHxij3x03_9HAgTHCdgPKAqg-fPlxksV2FSJH5PEoCNiQdamq6pHjm0SsRkpz8nTl9G0WdAB8lCs?purpose=fullsize&v=1", text: "You laughing at nothing." },
    { img: "https://images.openai.com/static-rsc-3/DkGqQLUGaq0z5PMtNW7XTsdGtZT7ALswFPBeBN3CaNFbXv3mPlV7ceEX0GH0OrYhlMTkZX5npsCkV8Xx6-fpAaO1NS3CmEWDtr93-6wh9S0?purpose=fullsize&v=1", text: "My favorite human." },
];

const Memories = ({ onNext }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        // Auto-advance every 4 seconds or allow manual
        const timer = setInterval(() => {
            if (current < memories.length - 1) {
                setCurrent(prev => prev + 1);
            }
        }, 4000);

        return () => clearInterval(timer);
    }, [current]);

    return (
        <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden relative">
            {/* Background Blur */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30 blur-3xl transition-all duration-1000"
                style={{ backgroundImage: `url(${memories[current].img})` }}
            />

            <div className="z-10 w-full max-w-md px-6 text-center">
                {memories.map((mem, index) => (
                    index === current && (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center"
                        >
                            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-2xl mb-8 border border-white/10">
                                <img
                                    src={mem.img}
                                    alt="Memory"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-white/90 text-2xl font-light tracking-wide font-sans italic"
                            >
                                "{mem.text}"
                            </motion.p>
                        </motion.div>
                    )
                ))}

                {/* Navigation / Progress */}
                <div className="mt-12 flex justify-center gap-2">
                    {memories.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1 rounded-full transition-all duration-500 ${idx === current ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
                        />
                    ))}
                </div>

                {/* Continue Button (appears on last slide) */}
                {current === memories.length - 1 && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        onClick={onNext}
                        className="mt-8 text-white/70 hover:text-white text-sm uppercase tracking-widest border-b border-transparent hover:border-white transition-all"
                    >
                        Continue &rarr;
                    </motion.button>
                )}
            </div>
        </div>
    );
};

export default Memories;
