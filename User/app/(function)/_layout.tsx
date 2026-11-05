import { Stack } from "expo-router";

export default function FunctionLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="detail" />
      <Stack.Screen name="notif" />
    </Stack>
  );
}
