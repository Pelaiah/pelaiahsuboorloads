import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LandingLogo } from './landing-logo';

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <LandingLogo />
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#how-it-works" className="text-sm font-medium text-slate-700 hover:text-primary">
            How It Works
          </Link>
          <Link href="#features" className="text-sm font-medium text-slate-700 hover:text-primary">
            Features
          </Link>
           <Link href="#testimonials" className="text-sm font-medium text-slate-700 hover:text-primary">
            Testimonials
          </Link>
        </nav>
        <div className="flex items-center gap-4">
             <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
                <Link href="/signup">Sign Up</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
