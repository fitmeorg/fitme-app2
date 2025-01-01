import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  Text,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Fragment } from "react";

const { width } = Dimensions.get("window");

interface Tab {
  name: string;
}

interface StaticTabbarProps {
  tabs: Tab[];
  value: Animated.Value;
  state: any;
  descriptors: any;
  navigation: any;
}

export default class StaticTabbar extends React.PureComponent<StaticTabbarProps> {
  values: Animated.Value[] = [];

  constructor(props: StaticTabbarProps) {
    super(props);
    const { tabs } = this.props;
    this.values = tabs.map(
      (tab, index) => new Animated.Value(index === 0 ? 1 : 0)
    );
  }

  onPress = (index: number) => {
    const { value, tabs, state, navigation } = this.props;
    const tabWidth = width / tabs.length;

    const route = state.routes[index];
    navigation.navigate(route.name);

    Animated.sequence([
      Animated.parallel(
        this.values.map((v) =>
          Animated.timing(v, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
          })
        )
      ),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * index,
          useNativeDriver: true,
        }),
        Animated.spring(this.values[index], {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  render() {
    const { onPress } = this;
    const { tabs, value } = this.props;
    const tabWidth = width / tabs.length;

    return (
      <View style={styles.container}>
        {tabs.map((tab, key) => {
          const cursor = tabWidth * key;
          const opacity = value.interpolate({
            inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
            outputRange: [1, 0, 1],
            extrapolate: "clamp",
          });
          const translateY = this.values[key].interpolate({
            inputRange: [0, 1],
            outputRange: [64, 0],
            extrapolate: "clamp",
          });
          const opacity1 = this.values[key].interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: "clamp",
          });
          return (
            <Fragment key={key}>
              <TouchableWithoutFeedback onPress={() => onPress(key)}>
                <Animated.View style={[styles.tab, { opacity }]}>
                  <Ionicons name={tab.name} color="#9DB2CE" size={25} />
                </Animated.View>
              </TouchableWithoutFeedback>
              <Animated.View
                style={{
                  position: "absolute",
                  top: -25,
                  left: tabWidth * key,
                  width: tabWidth,
                  height: 64,
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: opacity1,
                  transform: [{ translateY }],
                }}>
                <View style={styles.activeIcon}>
                  <Ionicons name={tab.name} color="#714ABB" size={25} />
                </View>
              </Animated.View>
            </Fragment>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 64,
  },
  label: {
    fontSize: 12,
    color: "gray",
    marginTop: 5,
  },
  activeIcon: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  activeLabel: {
    fontSize: 12,
    color: "black",
    marginTop: 5,
  },
});
