import React from 'react';

function AnimatedButton({ label, onClick }) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-transform transform hover:scale-105 text-white font-bold rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
export default AnimatedButton;