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
      mapId="sulboor_map"
      mapOptions={{
        styles: mapStyles
      }}
    >
      {loads.map((load) => (
        <AdvancedMarker
          key={load.id}
          position={load.origin}
          onClick={() => onSelectLoad(load.id)}
        >
          <Pin 
            background={selectedLoadId === load.id ? '#FF9100' : '#121212'}
            borderColor={selectedLoadId === load.id ? '#FFFFFF' : '#FF9100'}
            glyphColor={selectedLoadId === load.id ? '#121212' : '#FF9100'}
          />
        </AdvancedMarker>
      ))}
    </Map>
  );
}

const mapStyles = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#263c3f' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#746855' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f2835' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f3d19c' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#17263c' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }],
  },
];
