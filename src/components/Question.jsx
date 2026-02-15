import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';


const Question = ({ onNext }) => {
    const [noCount, setNoCount] = useState(0);
    const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });

    const handleNoHover = () => {
        // Increment count to change text/size
        setNoCount(prev => prev + 1);

        // Random movement within bounds - confined to viewport but erratic
        const x = Math.random() * (window.innerWidth - 200) - (window.innerWidth / 2 - 100);
        const y = Math.random() * (window.innerHeight - 200) - (window.innerHeight / 2 - 100);

        setNoBtnPos({ x, y });
    };

    const getNoText = () => {
        const messages = [
            "No 😅",
            "Are you sure?",
            "Think again.",
            "Last chance!",
            "Really?",
            "You can't escape ❤️"
        ];
        return messages[Math.min(noCount, messages.length - 1)];
    };

    return (
        <div className="h-screen w-full bg-soft-pink flex flex-col items-center justify-center relative overflow-hidden">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center z-10"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-valentine-red mb-12 drop-shadow-sm">
                    Will you be my Valentine?
                </h2>

                <div className="flex gap-8 items-center justify-center relative">
                    <motion.button
                        ref={yesBtnRef}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onNext}
                        animate={{
                            scale: 1 + (noCount * 0.1), // Grows as you click/hover No
                        }}
                        className="bg-valentine-red text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                        Yes ❤️
                    </motion.button>

                    <motion.button
                        onMouseEnter={handleNoHover}
                        onClick={handleNoHover} // For mobile tap
                        animate={{
                            x: noBtnPos.x,
                            y: noBtnPos.y,
                            scale: Math.max(0.6, 1 - (noCount * 0.1)), // Shrinks
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="bg-white text-gray-500 px-8 py-3 rounded-full text-xl font-medium shadow-md border border-gray-200"
                    >
                        {getNoText()}
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default Question;
