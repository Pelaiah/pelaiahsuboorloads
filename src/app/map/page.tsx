'use client';

import * as React from 'react';
import { MapProvider } from '@/components/map-provider';
import { MapComponent } from '@/components/map-component';
import { loads } from '@/lib/data';

export default function MapPage() {
  const [selectedLoadId, setSelectedLoadId] = React.useState<string | null>(null);

  const handleSelectLoad = (loadId: string | null) => {
    setSelectedLoadId(loadId === selectedLoadId ? null : loadId);
  };
  
  const center = React.useMemo(() => ({ lat: 39.8283, lng: -98.5795 }), []); // US center

  return (
    <div className="flex-1 overflow-hidden">
      <div className="h-full">
        <MapProvider>
          <MapComponent 
              loads={loads} 
              selectedLoadId={selectedLoadId} 
              onSelectLoad={handleSelectLoad} 
              center={center} 
          />
        </MapProvider>
      </div>
    </div>
  );
}
