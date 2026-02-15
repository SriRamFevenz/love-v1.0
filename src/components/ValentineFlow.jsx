import React, { useState, Suspense, lazy } from 'react';
import BackgroundMusic from './BackgroundMusic';

const Landing = lazy(() => import('./Landing'));
const Memories = lazy(() => import('./Memories'));
const Question = lazy(() => import('./Question'));
const Final = lazy(() => import('./Final'));

const ValentineFlow = ({ content }) => {
    const [stage, setStage] = useState(0);

    const nextStage = () => setStage(prev => prev + 1);

    // If content is missing, we could show a loader or default, but let's assume it's passed or defaults are handled inside components.
    // Ideally, we pass 'content' down to each component.

    return (
        <div className="font-sans text-gray-900 bg-white h-screen w-full overflow-hidden">
            <BackgroundMusic />
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-4xl text-[#e31b23]">❤️</div>}>
                {stage === 0 && <Landing onNext={nextStage} content={content} />}
                {stage === 1 && <Memories onNext={nextStage} content={content} />}
                {stage === 2 && <Question onNext={nextStage} content={content} />}
                {stage === 3 && <Final content={content} />}
            </Suspense>
        </div>
    );
};

export default ValentineFlow;
