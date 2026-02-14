import React, { useState } from 'react';
import Landing from './components/Landing';
import Memories from './components/Memories';
import Question from './components/Question';
import Final from './components/Final';

function App() {
  const [stage, setStage] = useState(0);

  const nextStage = () => setStage(prev => prev + 1);

  return (
    <div className="font-sans text-gray-900 bg-white">
      {stage === 0 && <Landing onNext={nextStage} />}
      {stage === 1 && <Memories onNext={nextStage} />}
      {stage === 2 && <Question onNext={nextStage} />}
      {stage === 3 && <Final />}
    </div>
  );
}

export default App;
