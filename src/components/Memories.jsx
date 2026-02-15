import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const memories = [
    { img: "https://images.openai.com/static-rsc-3/se_56RAyGDZ4NhN6KCrbt64AI1qV9_avlyNyGt6VrlklPpauM1Xt3Q-Dz1NuiwDtRwuPHwru7gLZH6xVwBSGWwSfx2VxSMyyOH_yLJEEBDM?purpose=fullsize&v=1", text: "The day everything changed." },
    { img: "https://images.openai.com/static-rsc-3/ed0H2yaq1bRE5lVeqdrbflTMs5fJGsZmHxij3x03_9HAgTHCdgPKAqg-fPlxksV2FSJH5PEoCNiQdamq6pHjm0SsRkpz8nTl9G0WdAB8lCs?purpose=fullsize&v=1", text: "You laughing at nothing." },
    { img: "https://images.openai.com/static-rsc-3/DkGqQLUGaq0z5PMtNW7XTsdGtZT7ALswFPBeBN3CaNFbXv3mPlV7ceEX0GH0OrYhlMTkZX5npsCkV8Xx6-fpAaO1NS3CmEWDtr93-6wh9S0?purpose=fullsize&v=1", text: "My favorite human." },
];

const Memories = ({ onNext }) => {
    const [current, setCurrent] = useState(0);

    // Auto-advance
    React.useEffect(() => {
        const timer = setInterval(() => {
            if (current < memories.length - 1) {
                setCurrent(prev => prev + 1);
            }
        }, 4000); // 4 seconds per slide

        return () => clearInterval(timer);
    }, [current]);

    const handleNext = () => {
        if (current < memories.length - 1) {
            setCurrent(prev => prev + 1);
        } else {
            onNext();
        }
    };

    const handlePrev = () => {
        if (current > 0) {
            setCurrent(prev => prev - 1);
        }
    };

    return (
        <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-y-auto scrollbar-hide md:scrollbar-default relative">
            <style>{`
                ::-webkit-scrollbar {
                    width: 10px;
                }
                ::-webkit-scrollbar-track {
                    background: #000; 
                }
                ::-webkit-scrollbar-thumb {
                    background: #333; 
                    border-radius: 5px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #555; 
                }
            `}</style>

            {/* Background Blur */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30 blur-3xl transition-all duration-1000"
                style={{ backgroundImage: `url(${memories[current].img})` }}
            />

            <div className="z-10 w-full max-w-md px-6 text-center py-10">
                <h2 className="text-white/80 text-3xl font-light mb-8 tracking-wide font-sans">Our Memories</h2>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl mb-8 border border-white/10">
                            <img
                                src={memories[current].img}
                                alt="Memory"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-white/90 text-2xl font-light tracking-wide font-sans italic min-h-[4rem]">
                            "{memories[current].text}"
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="mt-10 flex items-center justify-between gap-4">
                    <button
                        onClick={handlePrev}
                        disabled={current === 0}
                        className={`text-white px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-all ${current === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
                    >
                        &larr; Prev
                    </button>

                    <div className="flex gap-2">
                        {memories.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === current ? 'w-6 bg-white' : 'w-2 bg-white/30'}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all shadow-lg hover:scale-105 active:scale-95"
                    >
                        {current === memories.length - 1 ? 'Continue' : 'Next'} &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Memories;
