import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { theme } from "@/constants/theme";
import RenderIcons from "@/containers/Home/RenderIcons";
import RenderCards from "@/containers/Home/RenderCards";

export default function CardsSection() {
  return (
    <View style={styles.container}>
      <RenderIcons />
      <RenderCards />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.btnBg,
  },
});
