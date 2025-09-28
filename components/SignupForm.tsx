'use client';

import { useState } from 'react';

interface SignupFormProps {
  onSuccess?: () => void;
}

export default function SignupForm({ onSuccess }: SignupFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setSuccessMessage(null); // Clear previous success messages

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccessMessage('Signup successful!');
      console.log('Signup successful:', data);
      if (onSuccess) {
        // Delay redirection slightly to allow user to see success message
        setTimeout(() => {
          onSuccess();
        }, 1500); // 1.5 second delay
      }
    } else {
      setError(data.error || 'Signup failed');
      console.error('Signup failed:', data.error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
