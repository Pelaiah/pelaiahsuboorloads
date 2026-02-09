import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LandingLogo } from './landing-logo';

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <LandingLogo />
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium text-slate-700 hover:text-primary">
            Learn How It Works
          </Link>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
