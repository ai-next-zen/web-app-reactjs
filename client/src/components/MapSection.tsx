import { useEffect, useRef, useState } from 'react';
import { MapView } from './Map';

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapReady, setMapReady] = useState(false);

  const handleMapReady = (map: google.maps.Map) => {
    setMapReady(true);

    // Center on Garland, TX
    const garlandLocation = { lat: 32.9126, lng: -96.6389 };
    map.setCenter(garlandLocation);
    map.setZoom(10);

    // Add a marker for Garland
    new google.maps.Marker({
      position: garlandLocation,
      map: map,
      title: 'ExecuCare Carpet Cleaning - Garland, TX',
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: '#dc2626',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 2,
      },
    });

    // Add a circle to show service area
    new google.maps.Circle({
      strokeColor: '#1e3a8a',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#1e3a8a',
      fillOpacity: 0.15,
      map: map,
      center: garlandLocation,
      radius: 30000, // 30km radius
    });

    // Custom map styling
    map.setOptions({
      styles: [
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#e3f2fd' }],
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }],
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#eeeeee' }],
        },
      ],
    });
  };

  return (
    <section id="map" className="relative h-[400px] md:h-[500px] w-full">
      <MapView onMapReady={handleMapReady} />
      
      {/* Decorative overlay with circular focus */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      </div>
    </section>
  );
}
