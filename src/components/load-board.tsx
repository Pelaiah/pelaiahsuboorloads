"use client";

import * as React from 'react';
import type { Load } from '@/lib/types';
import { MapProvider } from '@/components/map-provider';
import { MapComponent } from '@/components/map-component';
import { LoadList } from '@/components/load-list';
import { SearchFilters } from '@/components/search-filters';
import { Card } from '@/components/ui/card';

interface LoadBoardProps {
  initialLoads: Load[];
}

export function LoadBoard({ initialLoads }: LoadBoardProps) {
  const [filteredLoads, setFilteredLoads] = React.useState<Load[]>(initialLoads);
  const [selectedLoadId, setSelectedLoadId] = React.useState<string | null>(null);

  const handleSelectLoad = (loadId: string | null) => {
    setSelectedLoadId(loadId);
  };
  
  const center = React.useMemo(() => ({ lat: 39.8283, lng: -98.5795 }), []); // US center

  return (
    <MapProvider>
      <div className="h-full flex flex-col lg:flex-row p-4 gap-4">
        <div className="flex-1 flex flex-col gap-4 min-h-[50vh] lg:min-h-0">
           <SearchFilters allLoads={initialLoads} setFilteredLoads={setFilteredLoads} />
           <Card className="flex-1 rounded-lg overflow-hidden">
             <MapComponent loads={filteredLoads} selectedLoadId={selectedLoadId} onSelectLoad={handleSelectLoad} center={center} />
           </Card>
        </div>
        <div className="lg:w-[450px] flex-shrink-0 h-[50vh] lg:h-auto">
            <LoadList loads={filteredLoads} onSelectLoad={handleSelectLoad} selectedLoadId={selectedLoadId} />
        </div>
      </div>
    </MapProvider>
  );
}
