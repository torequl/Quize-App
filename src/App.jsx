import React from 'react';
import Quiz from './components/quiz-components/Quiz';

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-linear-to-r from-cyan-200 to-blue-300'>
      <h2 className='text-4xl font-bold text-center'>Quiz App</h2>
      <Quiz />
    </div>
  );
};

export default App;