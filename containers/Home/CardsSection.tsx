import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { theme } from "@/constants/theme";
import RenderIcons from "@/containers/Home/RenderIcons";
import RenderCards from "@/containers/Home/RenderCards";

import { TouchableOpacity } from "react-native";
import AppText from "@/components/AppText";
import BottomSheet from "@/containers/Home/BottomSheet";

export default function CardsSection() {
  return (
    <View style={styles.container}>
      <RenderIcons />
      <RenderCards />
      <BottomSheet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.btnBg,
  },
});
