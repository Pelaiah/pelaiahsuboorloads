"use client";
import { APIProvider } from '@vis.gl/react-google-maps';

export function MapProvider({ children }: { children: React.ReactNode }) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted">
        <p className="text-muted-foreground">Google Maps API Key is missing.</p>
      </div>
    );
  }

  return <APIProvider apiKey={apiKey}>{children}</APIProvider>;
}
