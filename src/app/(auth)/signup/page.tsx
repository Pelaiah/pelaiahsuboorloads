import { SignUpForm } from '@/components/auth/signup-form';
import { Logo } from '@/components/auth/logo';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <main className="w-full max-w-md mx-auto">
      <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
        <Logo className="mb-8" />
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Create an Account</h1>
        </div>
        <SignUpForm />
      </div>
       <p className="text-center text-sm text-gray-400 mt-8">
        Already have an account?{' '}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          Login
        </Link>
      </p>
    </main>
  );
}
