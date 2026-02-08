import { Header } from '@/components/header';
import { LoadBoard } from '@/components/load-board';
import { loads } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-hidden">
        <LoadBoard initialLoads={loads} />
      </main>
    </div>
  );
}
