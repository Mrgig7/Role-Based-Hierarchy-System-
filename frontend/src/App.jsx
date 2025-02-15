import React from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <AppRoutes />
    </div>
  );
}
export default App;