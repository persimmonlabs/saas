'use client';

import SignupForm from '@/components/SignupForm';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();

  const handleSignupSuccess = () => {
    router.push('/login'); // Redirect to login page after successful signup
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <SignupForm onSuccess={handleSignupSuccess} />
    </div>
  );
}
