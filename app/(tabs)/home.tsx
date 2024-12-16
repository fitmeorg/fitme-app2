import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Tab One</Text>
      <Link push href="/(groups)/create">
        <Text>create</Text>
      </Link>
      <Link push href="/(groups)/join">
        <Text>join</Text>
      </Link>
      <Link push href="/(streak)/streak">
        <Text>streak</Text>
      </Link>
      <Link push href="/(notification)/notification">
        <Text>notification</Text>
      </Link>
    </View>
  );
}
