"use client";

import * as React from 'react';
import { Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import type { Load } from '@/lib/types';

interface MapComponentProps {
  loads: Load[];
  selectedLoadId: string | null;
  onSelectLoad: (loadId: string | null) => void;
  center: { lat: number; lng: number };
}

export function MapComponent({ loads, selectedLoadId, onSelectLoad, center }: MapComponentProps) {
  return (
    <Map
      defaultCenter={center}
      defaultZoom={4}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
      mapId="evolta_map"
    >
      {loads.map((load) => (
        <AdvancedMarker
          key={load.id}
          position={load.origin}
          onClick={() => onSelectLoad(load.id)}
        >
          <Pin 
            background={selectedLoadId === load.id ? 'hsl(217, 91%, 60%)' : 'hsl(222.2, 84%, 4.9%)'}
            borderColor={'hsl(217, 91%, 60%)'}
            glyphColor={selectedLoadId === load.id ? 'hsl(210, 40%, 98%)' : 'hsl(217, 91%, 60%)'}
          />
        </AdvancedMarker>
      ))}
    </Map>
  );
}
