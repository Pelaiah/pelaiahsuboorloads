import { loads } from '@/lib/data';
import { LoadDetails } from '@/components/load-details';
import { Header } from '@/components/header';
import { notFound } from 'next/navigation';

export default function LoadPage({ params }: { params: { id: string } }) {
  const load = loads.find(l => l.id === params.id);

  if (!load) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <LoadDetails load={load} />
      </main>
    </div>
  );
}
