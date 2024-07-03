// src/constants/styles.ts
import { StyleSheet } from "react-native";

import colors from "@/constants/colors";
import { metrics } from "@/constants/metrics";

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.text,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.primary,
    padding: metrics.basePadding,
  },
  flex1: {
    flex: 1,
  },
  rowWithSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default commonStyles;
