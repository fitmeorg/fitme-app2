import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Index = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageSelected = (e: any) => {
    setCurrentPage(e.nativeEvent.position);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/welcome/wallpaper.jpg")}
          style={styles.image}
        />
      </View>
      <Text
        onPress={() => navigation.push("Sign Up")}
        style={{
          position: "absolute",
          right: 1,
          padding: 30,
          fontSize: 16,
          fontWeight: "regular",
          fontFamily: "Mulish-Black",
          zIndex: 10,
        }}>
        Skip
      </Text>
      <PagerView
        style={styles.ViewPageContainer}
        initialPage={0}
        onPageSelected={handlePageSelected}>
        {/* Página 1 */}
        <View style={{ flex: 1 }} key="1">
          <View style={styles.imageFitnessContainer}>
            <Image
              style={styles.imageFitness}
              source={require("../assets/images/welcome/Fitness-stats.svg")}
            />
          </View>
          <View style={styles.page}>
            <View style={[styles.container, styles.dropShadow]}>
              <View style={{ marginTop: 30, alignItems: "center" }}>
                <Text style={styles.textTitle}>Welcome</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textTitle}>to </Text>
                  <Text style={[styles.textTitle, { color: "#512DA8" }]}>
                    FitMe
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 15,
                  fontSize: 16,
                  width: "80%",
                  color: "#404B52",
                  fontWeight: "regular",
                }}>
                Discover FitMe on-demand workouts, designed to match your
                available time and keep you moving
              </Text>
            </View>
          </View>
        </View>

        {/* Página 2 */}
        <View style={{ flex: 1 }} key="2">
          <View style={styles.imageFitnessContainer}>
            <Image
              style={styles.imageFitness}
              source={require("../assets/images/welcome/woman.svg")}
            />
          </View>
          <View style={styles.page}>
            <View style={[styles.container, styles.dropShadow]}>
              <View style={{ marginTop: 30, alignItems: "center" }}>
                <Text style={styles.textTitle}>Personalized Routines</Text>
                <View style={{ flexDirection: "row" }}></View>
              </View>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 15,
                  fontSize: 16,
                  width: "80%",
                  color: "#404B52",
                  fontWeight: "regular",
                }}>
                Create your own fitness routines or explore shared routines from
                your group. Whether you're looking to focus on strength, cardio,
                or flexibility, the app adapts to your needs
              </Text>
            </View>
          </View>
        </View>

        {/* Página 3 */}
        <View style={{ flex: 1 }} key="3">
          <View style={styles.imageFitnessContainer}>
            <Image
              style={styles.imageFitness}
              source={require("../assets/images/welcome/woman-desk.svg")}
            />
          </View>
          <View style={styles.page}>
            <View style={[styles.container, styles.dropShadow]}>
              <View style={{ marginTop: 30, alignItems: "center" }}>
                <Text style={styles.textTitle}>Group Features</Text>
                <View style={{ flexDirection: "row" }}></View>
              </View>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 15,
                  fontSize: 16,
                  width: "80%",
                  color: "#404B52",
                  fontWeight: "regular",
                }}>
                Exercise with friends, track your streaks, and share your
                progress
              </Text>
            </View>
          </View>
        </View>
      </PagerView>
      <View style={styles.dotsContainer}>
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  height: 8,
                  borderRadius: 8 / 2,
                  marginRight: 8,
                  backgroundColor:
                    currentPage === index ? "#512DA8" : "#C9C9C9",
                  width: currentPage === index ? 27 : 8,
                },
              ]}
            />
          );
        })}
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 30,
        }}>
        <LinearGradient
          colors={["#7850BF", "#512DA8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}>
          <TouchableOpacity onPress={() => navigation.push("Sign Up")}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={{ fontSize: 14, color: "#404B52", padding: 15 }}>
          Already have account?{" "}
          <Text>
            <Text
              onPress={() => navigation.push("LogIn")}
              style={{
                fontSize: 14,
                color: "#461B93",
                fontWeight: 500,
              }}>
              Log In
            </Text>
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  page: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "35%",
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  dropShadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 36,
    elevation: 30,
  },
  ViewPageContainer: {
    flex: 1,
  },
  imageContainer: {
    position: "absolute",
    top: -60,
    left: 0,
    width: "100%",
    height: 400,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageFitnessContainer: {
    position: "absolute",
    top: 45,
    left: 16,
    width: "100%",
    height: 400,
  },
  imageFitness: {
    width: "90%",
    height: "90%",
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "semibold",
    fontFamily: "Montserrat-SemiBold",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 26,
    width: "60%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "semibold",
    fontFamily: "Montserrat-SemiBold",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  dot: {
    backgroundColor: "#C9C9C9",
  },
});

export default Index;
