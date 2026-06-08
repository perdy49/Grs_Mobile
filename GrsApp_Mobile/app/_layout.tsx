import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="onboarding">
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(function)" options={{ headerShown: false }} />
      <Stack.Screen name="(function)/notif" options={{ headerShown: false }} />
    </Stack>
  );
}
