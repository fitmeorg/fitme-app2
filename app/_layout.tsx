import "react-native-reanimated";
import { SessionProvider } from "@/hooks/sessionContext";
import { AxiosProvider } from "@/hooks/axiosContext";
import { StatusBar } from "expo-status-bar";
import Index from "./index";
import LogIn from "./(auth)/logIn";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./(auth)/signUp";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./(tabs)/home";
import Routines from "./(tabs)/routines";
import Activity from "./(tabs)/activity";
import Profile from "./(tabs)/profile";
import Tabbar from "@/components/Tabbar";
import { Dimensions } from "react-native";
import { color } from "d3";

const heightScreen = Dimensions.get("window").height;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <Tabbar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Routines" component={Routines} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerTintColor: "#FFFF",
        headerTitleStyle: {
          color: "#FFFF",
        },
        headerStyle: {
          backgroundColor: "#714ABB",
          height: (heightScreen * 13) / 100,
        },
      }}>
      <Stack.Screen
        name="Index"
        component={Index}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomePage"
        component={MyTabs}
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
