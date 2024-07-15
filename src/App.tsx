import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === '+') {
      incrementCount();
    }
    if (event.key === '-') {
      decrementCount();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className='app-core'>
          <h1>{count.toLocaleString()}</h1>
          <button className='btn-left' onClick={decrementCount}>-</button>
          <button className='btn-right' onClick={incrementCount}>+</button>
          <div>
            <button className='btn-reset' onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
