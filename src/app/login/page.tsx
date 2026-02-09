import { LoginForm } from '@/components/auth/login-form';
import { Logo } from '@/components/auth/logo';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="w-full max-w-md mx-auto">
      <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
        <Logo className="mb-8" />
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
        </div>
        <LoginForm />
      </div>
      <p className="text-center text-sm text-gray-400 mt-8">
        Are You New Member?{' '}
        <Link href="/signup" className="font-semibold text-primary hover:underline">
          Sign UP
        </Link>
      </p>
    </main>
  );
}
