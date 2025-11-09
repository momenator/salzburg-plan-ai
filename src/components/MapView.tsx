import { Map, AdvancedMarker } from '@vis.gl/react-google-maps';

interface MapMarker {
  id: string;
  position: { lat: number; lng: number };
  title: string;
}

interface MapViewProps {
  markers?: MapMarker[];
  center?: { lat: number; lng: number };
  onMarkerClick?: (markerId: string) => void;
  interactive?: boolean;
  className?: string;
}

export const MapView = ({
  markers = [],
  center = { lat: 47.812195, lng: 13.033229 }, // Salzburg coordinates
  onMarkerClick,
  interactive = true,
  className = "w-full h-full"
}: MapViewProps) => {
  return (
    <div className={className}>
      <Map
        defaultCenter={center}
        defaultZoom={12}
        gestureHandling={interactive ? 'auto' : 'none'}
        disableDefaultUI={!interactive}
        mapId="DEMO_MAP_ID" // Replace with your Map ID from Google Cloud Console
      >
        {markers.map((marker) => (
          <AdvancedMarker
            key={marker.id}
            position={marker.position}
            title={marker.title}
            onClick={() => onMarkerClick?.(marker.id)}
          />
        ))}
      </Map>
    </div>
  );
};
