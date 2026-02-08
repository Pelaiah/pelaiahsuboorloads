import type { Load } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LoadCard } from '@/components/load-card';

interface LoadListProps {
  loads: Load[];
  selectedLoadId: string | null;
  onSelectLoad: (loadId: string | null) => void;
}

export function LoadList({ loads, selectedLoadId, onSelectLoad }: LoadListProps) {
  return (
    <Card className="h-full flex flex-col bg-transparent shadow-none border-none">
      <CardHeader>
        <CardTitle>Nearby Cars ({loads.length})</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex-1">
        <ScrollArea className="h-full">
          <div className="p-4 pt-0 space-y-4">
            {loads.length > 0 ? (
              loads.map((load) => (
                <LoadCard 
                  key={load.id} 
                  load={load}
                  isSelected={selectedLoadId === load.id}
                  onClick={() => onSelectLoad(load.id === selectedLoadId ? null : load.id)}
                />
              ))
            ) : (
              <div className="text-center py-10 text-muted-foreground">
                <p>No cars match your criteria.</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
