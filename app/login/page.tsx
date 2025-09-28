'use client';

import LoginForm from '@/components/LoginForm';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSuccess={handleLoginSuccess} />
    </div>
  );
}
