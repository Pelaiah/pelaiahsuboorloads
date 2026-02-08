import { Header } from '@/components/header';

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/50 pb-16 md:pb-0">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-2xl font-bold">Search</h1>
        <p className="text-muted-foreground">The search functionality will be implemented here.</p>
      </main>
    </div>
  );
}
