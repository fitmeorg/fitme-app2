import React from "react";
import { ScrollView } from "react-native";
import PostImage from "@/components/PostImage";

export default function PostPhotos() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <PostImage />
      <PostImage />
      <PostImage />
    </ScrollView>
  );
}
