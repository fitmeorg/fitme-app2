import "react-native-gesture-handler";
import "react-native-reanimated";
import { Slot } from "expo-router";
import { SessionProvider } from "@/hooks/sessionContext";
import { AxiosProvider } from "@/hooks/axiosContext";
import { createStackNavigator } from "@react-navigation/stack";
import Index from ".";

const Stack = createStackNavigator();

export default function RootLayoutNav() {
  return (
    <SessionProvider>
      <AxiosProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#714ABB" },
            headerTitleStyle: { fontWeight: "semibold", color: "#FFFFFF" },
          }}>
          <Slot />
        </Stack.Navigator>
      </AxiosProvider>
    </SessionProvider>
  );
}
