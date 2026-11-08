import { View, Text } from "react-native";
import type { MapPreviewProps } from "./MapPreview.types";

export default function MapPreview({ region, style }: MapPreviewProps) {
  return (
    <View
      style={[
        style,
        {
          backgroundColor: "#eeeeee",
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <Text style={{ fontWeight: "bold", color: "#333" }}>Map Preview</Text>

      <Text style={{ color: "#666", marginTop: 8 }}>
        Latitude: {region.latitude}
      </Text>

      <Text style={{ color: "#666" }}>Longitude: {region.longitude}</Text>
    </View>
  );
}
