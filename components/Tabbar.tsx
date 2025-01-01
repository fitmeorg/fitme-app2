import * as React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Animated,
  Text,
  TouchableOpacity,
} from "react-native";
import * as shape from "d3-shape";
import * as Svg from "react-native-svg";

import StaticTabbar from "./StaticTabbar";

const AnimatedSvg = Animated.createAnimatedComponent(Svg.Svg);
const { width } = Dimensions.get("window");
const height = 44;
const Path = Svg.Path;

const tabs = [
  {
    name: "grid-outline",
  },
  {
    name: "barbell-outline",
  },
  {
    name: "heart-outline",
  },
  {
    name: "person-outline",
  },
];

const tabWidth = width / tabs.length;
const backgroundColor = "white";

const getPath = (): string => {
  const left = shape
    .line<{ x: number; y: number }>()
    .x((d) => d.x)
    .y((d) => d.y)([
    { x: 0, y: 0 },
    { x: width, y: 0 },
  ]);

  const tab = shape
    .line<{ x: number; y: number }>()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(shape.curveBasis)([
    { x: width, y: 0 },
    { x: width + 5, y: 0 },
    { x: width + 10, y: 10 },
    { x: width + 25, y: 40 },
    { x: width + tabWidth - 25, y: 40 },
    { x: width + tabWidth - 10, y: 10 },
    { x: width + tabWidth - 5, y: 0 },
    { x: width + tabWidth, y: 0 },
  ]);

  const right = shape
    .line<{ x: number; y: number }>()
    .x((d) => d.x)
    .y((d) => d.y)([
    { x: width + tabWidth, y: 0 },
    { x: width * 2, y: 0 },
    { x: width * 2, y: height },
    { x: 0, y: height },
    { x: 0, y: 0 },
  ]);

  return `${left} ${tab} ${right}`;
};

const d = getPath();
interface TabbarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export default class Tabbar extends React.PureComponent<TabbarProps> {
  value = new Animated.Value(0);

  render() {
    const { descriptors, navigation, state } = this.props;
    const { value } = this;
    const translateX = value.interpolate({
      inputRange: [0, width],
      outputRange: [-width, 0],
    });
    return (
      <>
        <View {...{ height, width }}>
          <AnimatedSvg
            width={width * 2}
            {...{ height }}
            style={{ transform: [{ translateX }] }}>
            <Path fill={backgroundColor} {...{ d }} />
          </AnimatedSvg>
          <View style={StyleSheet.absoluteFill}>
            <StaticTabbar
              {...{ tabs, value, state, descriptors, navigation }}
            />
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          {state.routes.map((route: any, index: any) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                key={index}
                activeOpacity={1}
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarButtonTestID}
                onLongPress={onLongPress}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FFFF",
                }}>
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <Text
                    style={{
                      color: isFocused ? "#714ABB" : "#9DB2CE",
                      marginTop: 4,
                    }}>
                    {label}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </>
    );
  }
}
