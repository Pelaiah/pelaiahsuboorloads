'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/header';
import { BottomNav } from '@/components/bottom-nav';
import React from 'react';

export function AppLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/signup');
    const isLandingPage = pathname === '/';

    React.useEffect(() => {
        if (isLandingPage || isAuthPage) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }, [pathname, isLandingPage, isAuthPage]);


    if (isLandingPage) {
        return <>{children}</>;
    }

    if (isAuthPage) {
        return (
            <div className="flex min-h-screen w-full items-center justify-center p-4">
                {children}
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="flex flex-col min-h-screen bg-transparent pb-16 md:pb-0">
                <main className="flex-1">{children}</main>
            </div>
            <BottomNav />
        </>
    );
}
