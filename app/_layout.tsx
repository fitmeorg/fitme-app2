import "react-native-reanimated";
import { Stack } from "expo-router/stack";
import { Slot } from "expo-router";
import { SessionProvider } from "@/hooks/sessionContext";
import { AxiosProvider } from "@/hooks/axiosContext";

export default function RootLayoutNav() {
  return (
    <SessionProvider>
      <AxiosProvider>
        <Stack>
          <Slot />
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </AxiosProvider>
    </SessionProvider>
  );
}
