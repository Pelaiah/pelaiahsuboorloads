import { Header } from '@/components/header';

export default function MapPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/50 pb-16 md:pb-0">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-2xl font-bold">Map</h1>
        <p className="text-muted-foreground">The map functionality will be implemented here.</p>
      </main>
    </div>
  );
}
