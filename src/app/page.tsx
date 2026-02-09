import { LoadBoard } from '@/components/load-board';
import { loads } from '@/lib/data';

export default function Home() {
  return (
    <>
       <div className="container py-4">
        <h1 className="text-2xl font-bold">Welcome! 👋</h1>
        <p className="text-muted-foreground">Ready to find a load today?</p>
      </div>
      <div className="flex-1 overflow-hidden">
        <LoadBoard initialLoads={loads} />
      </div>
    </>
  );
}
