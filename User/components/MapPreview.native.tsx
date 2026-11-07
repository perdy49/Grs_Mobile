import MapView, { Marker } from "react-native-maps";
import type { MapPreviewProps } from "./MapPreview.types";

export default function MapPreview({
  region,
  style,
  onRegionChangeComplete,
  onMarkerDragEnd,
}: MapPreviewProps) {
  return (
    <MapView
      style={style}
      region={region}
      onRegionChangeComplete={onRegionChangeComplete}
    >
      <Marker
        coordinate={{
          latitude: region.latitude,
          longitude: region.longitude,
        }}
        draggable
        onDragEnd={(event) => onMarkerDragEnd(event.nativeEvent.coordinate)}
      />
    </MapView>
  );
}
