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
import BackButton from "@/components/BackButton";
import CreateRoutine from "./(routines)/create";
import CreateGroup from "./(groups)/create";
import JoinGroup from "./(groups)/join";
import RoutineDetails from "./(routines)/details";
import QuickActivity from "./(activity)/quickActivity";
import GroupDetails from "./(groups)/details";
import Ionicons from "@expo/vector-icons/Ionicons";
import GroupId from "./(groups)/groupId";
import Notification from "./(notification)/notification";

const heightScreen = Dimensions.get("window").height;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: "#FFFF",
        headerTitleStyle: {
          color: "#FFFF",
        },
        headerStyle: {
          backgroundColor: "#714ABB",
          height: (heightScreen * 16) / 100,
        },
      }}
      tabBar={(props) => <Tabbar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Routines"
        component={Routines}
        options={{
          headerTitle: "Routine Library",
          headerTitleStyle: {
            fontSize: 23,
          },
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          headerTitleStyle: {
            fontSize: 23,
          },
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleStyle: {
            fontSize: 23,
          },
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerTitleStyle: {
          color: "#FFFF",
          fontSize: 23,
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
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignUp}
        options={{
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="Create Routine"
        component={CreateRoutine}
        options={{
          headerStyle: {
            backgroundColor: "#714ABB",
            height: (heightScreen * 16) / 100,
          },
          headerTitleAlign: "center",
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="Create Groups"
        component={CreateGroup}
        options={{
          headerStyle: {
            backgroundColor: "#714ABB",
            height: (heightScreen * 16) / 100,
          },
          headerTitleAlign: "center",
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="Join Group"
        component={JoinGroup}
        options={{
          headerStyle: {
            backgroundColor: "#714ABB",
            height: (heightScreen * 19) / 100,
          },
          headerTitleAlign: "center",
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="Routine Details"
        component={RoutineDetails}
        options={{
          headerStyle: {
            backgroundColor: "#714ABB",
            height: (heightScreen * 16) / 100,
          },
          headerTitleAlign: "center",
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="Quick Activity"
        component={QuickActivity}
        options={{
          headerStyle: {
            backgroundColor: "#714ABB",
            height: (heightScreen * 16) / 100,
          },
          headerTitleAlign: "center",
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="Group Details"
        component={GroupDetails}
        options={{
          headerStyle: {
            backgroundColor: "#714ABB",
            height: (heightScreen * 16) / 100,
          },
          headerTitleAlign: "center",
          headerLeft: () => <BackButton />,
          headerRight: () => (
            <Ionicons
              name="settings-sharp"
              size={30}
              color="white"
              style={{ marginRight: 16 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Group id"
        component={GroupId}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#714ABB",
            height: (heightScreen * 16) / 100,
          },
          headerTitleAlign: "center",
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: "Notification",
          headerStyle: {
            backgroundColor: "#714ABB",
            height: (heightScreen * 16) / 100,
          },
          headerTitleAlign: "center",
          headerLeft: () => <BackButton />,
        }}
      />
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
