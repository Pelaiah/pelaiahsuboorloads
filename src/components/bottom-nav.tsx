'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BarChart2, Fuel, Layers, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border/40">
      <div className="container relative flex justify-between h-16 items-center">
        
        <div className="flex justify-around w-2/5">
            <Link
              href="/"
              className={cn(
                'flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors',
                pathname === '/' && 'text-primary'
              )}
              aria-label="Home"
            >
              <Home className='h-7 w-7' fill={pathname === '/' ? 'currentColor' : 'none'} />
            </Link>
            <Link
              href="/stats"
              className={cn(
                'flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors',
                pathname.startsWith('/stats') && 'text-primary'
              )}
              aria-label="Stats"
            >
              <BarChart2 className='h-7 w-7' />
            </Link>
        </div>
        
        <div className="flex justify-around w-2/5">
            <Link
              href="/map"
              className={cn(
                'flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors',
                pathname.startsWith('/map') && 'text-primary'
              )}
              aria-label="Map"
            >
              <Layers className='h-7 w-7' />
            </Link>
            <Link
              href="/profile"
              className={cn(
                'flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors',
                pathname.startsWith('/profile') && 'text-primary'
              )}
              aria-label="Settings"
            >
              <Settings className='h-7 w-7' />
            </Link>
        </div>
        
        {/* FAB */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3">
          <Link href="/search" className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors" aria-label="Search">
            <Fuel className="h-8 w-8" />
          </Link>
        </div>

      </div>
    </nav>
  );
}
