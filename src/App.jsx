import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ValentineFlow from './components/ValentineFlow';
import { defaultContent } from './config/content';

const Editor = lazy(() => import('./components/Editor'));
const Viewer = lazy(() => import('./components/Viewer'));
const Login = lazy(() => import('./components/Login'));

function App() {
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-4xl text-[#e31b23]">❤️</div>}>
      <Routes>
        {/* Login Page / Create Entry */}
        <Route path="/" element={<Login />} />

        {/* Advanced Editor View (Optional/Legacy) */}
        <Route path="/create" element={<Editor />} />

        {/* Dynamic Viewer View */}
        <Route path="/:id" element={<Viewer />} />
      </Routes>
    </Suspense>
  );
}

export default App;
