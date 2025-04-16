import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-3xl font-bold mb-4">Simple Counter App</h1>
      <p className="text-2xl mb-4">Count: {count}</p>
      <div className="space-x-4">
        <button onClick={() => setCount(count + 1)} className="bg-green-500 px-4 py-2 text-white rounded">
          Increase
        </button>
        <button onClick={() => setCount(count - 1)} className="bg-red-500 px-4 py-2 text-white rounded">
          Decrease
        </button>
        <button onClick={() => setCount(0)} className="bg-gray-500 px-4 py-2 text-white rounded">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
