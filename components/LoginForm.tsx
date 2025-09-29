'use client';

import { useState } from 'react';

interface LoginFormProps {
  onSuccess?: () => void;
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Login successful:', data);
      if (onSuccess) {
        onSuccess();
      }
    } else {
      setError(data.error || 'Login failed');
      console.error('Login failed:', data.error);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="space-y-5 rounded-3xl border border-white/10 bg-brand-dark/70 p-8 shadow-xl backdrop-blur"
    >
      <div className="space-y-2 text-center">
        <h2 className="font-display text-3xl text-white">Welcome back</h2>
        <p className="text-sm text-brand-light/70">
          Enter your credentials to access your Persimmon workspace.
        </p>
      </div>
      {error && (
        <p className="rounded-2xl border border-brand-secondary/40 bg-brand-secondary/20 px-4 py-2 text-sm text-brand-peach">
          {error}
        </p>
      )}
      <div className="space-y-1">
        <label className="text-sm font-medium text-brand-light/80" htmlFor="login-email">
          Work email
        </label>
        <input
          id="login-email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-brand-light/90 placeholder-white/50 outline-none transition focus:border-brand-primary/70 focus:bg-brand-dark/60 focus:ring-2 focus:ring-brand-primary/60 focus:ring-offset-2 focus:ring-offset-brand-dark"
          required
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-brand-light/80" htmlFor="login-password">
          Password
        </label>
        <input
          id="login-password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-brand-light/90 placeholder-white/50 outline-none transition focus:border-brand-primary/70 focus:bg-brand-dark/60 focus:ring-2 focus:ring-brand-primary/60 focus:ring-offset-2 focus:ring-offset-brand-dark"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-brand-primary px-6 py-3 font-semibold text-brand-dark shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-accent hover:shadow-xl"
      >
        Login
      </button>
    </form>
  );
}
