import "react-native-reanimated";
import { SessionProvider } from "@/hooks/sessionContext";
import { AxiosProvider } from "@/hooks/axiosContext";
import { StatusBar } from "expo-status-bar";
import Index from "./index";
import LogIn from "./(auth)/logIn";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";
import { ImageBackground } from "expo-image";
import { Image } from "react-native";

const Stack = createStackNavigator();


function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen
        name="Index"
        component={Index}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{
          headerTitleStyle: {
            color: "#fff",
          },
          headerStyle: {
            height: 100,
            backgroundColor: "#714ABB",
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function RootLayoutNav() {
  return (
    <SessionProvider>
      <AxiosProvider>
        <RootStack />
        <StatusBar translucent backgroundColor="transparent" style="light" />
      </AxiosProvider>
    </SessionProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerBackground: {
    flex: 1,
    width: "1%",
    height: "1%",
  },
});
