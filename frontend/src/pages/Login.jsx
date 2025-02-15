import { useState } from 'react';
import { signInWithGoogle } from '../api/apiClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    signInWithGoogle();
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <button onClick={handleLogin} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Login with Google
        </button>
      </div>
    </div>
  );
}