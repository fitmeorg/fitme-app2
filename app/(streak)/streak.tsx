import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { BarChart, LineChart } from "react-native-gifted-charts";
import { ScrollView } from "react-native-gesture-handler";

export default function Streak() {
  const width = Dimensions.get("window").width;
  const barData = [
    { value: 50, label: "Day 1" },
    { value: 30, label: "Day 2" },
    { value: 40, label: "Day 3" },
    { value: 60, label: "Day 4" },
    { value: 60, label: "Day 4" },
    { value: 60, label: "Day 4" },
    { value: 60, label: "Day 4" },
    { value: 60, label: "Day 4" },
  ];
  const lineData = [
    { value: 0 },
    { value: 10 },
    { value: 8 },
    { value: 58 },
    { value: 56 },
    { value: 78 },
    { value: 74 },
    { value: 98 },
  ];

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text
        style={{
          width: "90%",
          marginTop: "5%",
          fontSize: 18,
          color: "#1E263C",
        }}>
        Current Streak
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          gap: "5%",
          marginTop: 10,
        }}>
        <View
          style={{
            backgroundColor: "#BC98FC",
            width: "30%",
            height: 60,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}>
          <Image
            source={require("../../assets/images/Streak/streakFlame.png")}
            style={{ height: 25, width: 25 }}
          />
          <Text style={{ fontSize: 25, fontWeight: "500" }}>14</Text>
          <Text style={{ fontSize: 13, fontWeight: "400" }}>Days</Text>
        </View>
        <View
          style={{
            borderColor: "#1E263C",
            borderWidth: 1,
            width: "30%",
            height: 60,
            borderRadius: 10,
            justifyContent: "center",
          }}>
          <Text style={{ fontSize: 12, marginLeft: 4 }}>Longest Streak</Text>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 4,
              fontWeight: "500",
              marginTop: 5,
            }}>
            30 days
          </Text>
        </View>
        <View
          style={{
            borderColor: "#1E263C",
            borderWidth: 1,
            width: "30%",
            height: 60,
            borderRadius: 10,
            justifyContent: "center",
          }}>
          <Text style={{ fontSize: 12, marginLeft: 4 }}>Total Streaks</Text>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 4,
              fontWeight: "500",
              marginTop: 5,
            }}>
            6
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#353D48",
          height: 270,
          width: "90%",
          marginTop: 20,
          borderRadius: 20,
        }}>
        <View
          style={{
            marginLeft: 15,
            marginTop: 14,
            flexDirection: "row",
            alignItems: "center",
          }}>
          <LinearGradient
            colors={["#F4812E", "#FD5828"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Image
              style={{ height: 27, width: 27 }}
              source={require("../../assets/images/Streak/clock.svg")}
            />
          </LinearGradient>
          <Text style={{ marginLeft: 13, color: "#ffff", fontSize: 19 }}>
            Total Workout
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            height: 170,
            width: "100%",
          }}>
          <BarChart
            barWidth={22}
            noOfSections={3}
            barBorderRadius={4}
            data={barData}
            yAxisThickness={0}
            xAxisThickness={0}
            height={130}
            showGradient
            frontColor={"#FD5828"}
            gradientColor={"#F4812E"}
            hideYAxisText={true}
            hideRules={true}
            xAxisLabelTextStyle={{
              color: "#747474",
              fontSize: 13,
              fontWeight: "400",
            }}
          />
        </ScrollView>
        <Text
          style={{
            marginLeft: 23,
            color: "#ffff",
            fontSize: 19,
            fontWeight: "600",
            marginBottom: 10,
          }}>
          42,05 <Text style={{ fontSize: 15, fontWeight: "400" }}>min</Text>
        </Text>
      </View>

      <View style={{ flexDirection: "row", gap: 20 }}>
        <View
          style={{
            backgroundColor: "#353D48",
            height: 220,
            width: -10 + (50 * ((90 * width) / 100)) / 100,
            marginTop: 20,
            borderRadius: 20,
          }}>
          <View
            style={{
              marginLeft: 10,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}>
            <LinearGradient
              colors={["#71EFFF", "#00AEC5"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                height: 40,
                width: 40,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Image
                style={{ height: 23, width: 23 }}
                source={require("../../assets/images/Streak/heart.svg")}
              />
            </LinearGradient>
            <View>
              <Text style={{ marginLeft: 13, color: "#ffff", fontSize: 19 }}>
                Total
              </Text>
              <Text style={{ marginLeft: 13, color: "#ffff", fontSize: 19 }}>
                Progress
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 120,
              width: "100%",
            }}>
            <LineChart
              width={140}
              areaChart
              curved
              data={lineData}
              height={110}
              spacing={44}
              initialSpacing={0}
              color1="skyblue"
              textColor1="green"
              hideDataPoints
              dataPointsColor1="blue"
              startFillColor1="skyblue"
              startOpacity={0.8}
              endOpacity={0.3}
              yAxisThickness={0}
              xAxisThickness={0}
              hideYAxisText={true}
              hideRules={true}
            />
          </View>
          <Text
            style={{
              marginLeft: 15,
              color: "#ffff",
              fontSize: 19,
              fontWeight: "600",
            }}>
            87%{"   "}
            <Text style={{ fontSize: 19, fontWeight: "300", color: "#ABB2C0" }}>
              +5%
            </Text>
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#353D48",
            height: 150,
            width: -10 + (50 * ((90 * width) / 100)) / 100,
            marginTop: 20,
            borderRadius: 20,
          }}>
          <View
            style={{
              marginLeft: 10,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}>
            <LinearGradient
              colors={["#30DE3A", "#00D19F"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                height: 40,
                width: 40,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Image
                style={{ height: 23, width: 23 }}
                source={require("../../assets/images/Streak/streak.svg")}
              />
            </LinearGradient>
            <View>
              <Text style={{ marginLeft: 13, color: "#ffff", fontSize: 19 }}>
                Average
              </Text>
              <Text style={{ marginLeft: 13, color: "#ffff", fontSize: 19 }}>
                Streak
              </Text>
            </View>
          </View>
          <Text
            style={{
              marginTop: 17,
              marginLeft: 23,
              color: "#ffff",
              fontSize: 25,
              fontWeight: "400",
            }}>
            12 days
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontWeight: "300",
              color: "#ABB2C0",
              marginLeft: 23,
            }}>
            +2 Days
          </Text>
        </View>
      </View>
    </View>
  );
}
