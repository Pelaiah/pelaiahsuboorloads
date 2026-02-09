import { Header } from '@/components/header';
import { BottomNav } from '@/components/bottom-nav';

export default function MainLayout({ children }: { children: React.ReactNode }) {
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
