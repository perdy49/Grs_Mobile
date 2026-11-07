export interface MapRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface MapPreviewProps {
  region: MapRegion;
  style?: any;
  onRegionChangeComplete: (value: MapRegion) => void;
  onMarkerDragEnd: (coordinate: {
    latitude: number;
    longitude: number;
  }) => void;
}
