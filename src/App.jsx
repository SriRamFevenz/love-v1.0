import React, { useState, Suspense, lazy } from 'react';

const Landing = lazy(() => import('./components/Landing'));
const Memories = lazy(() => import('./components/Memories'));
const Question = lazy(() => import('./components/Question'));
const Final = lazy(() => import('./components/Final'));

function App() {
  const [stage, setStage] = useState(0);

  const nextStage = () => setStage(prev => prev + 1);

  return (
    <div className="font-sans text-gray-900 bg-white h-screen w-full overflow-hidden">
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-4xl text-[#e31b23]">❤️</div>}>
        {stage === 0 && <Landing onNext={nextStage} />}
        {stage === 1 && <Memories onNext={nextStage} />}
        {stage === 2 && <Question onNext={nextStage} />}
        {stage === 3 && <Final />}
      </Suspense>
    </div>
  );
}

export default App;
