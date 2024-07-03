import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "@/constants/theme";
import SvgIcon from "@/components/SvgIcon";
import AppText from "@/components/AppText";
import { scaleSizeFromBase } from "@/helpers";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={theme.commonStyles.rowWithSpaceBetween}>
        <View
          style={[{ transform: [{ rotate: "170deg" }] }, styles.background]}
        >
          <LinearGradient
            colors={["#3603FF", "#FB5CD8", "#FAFF00"]}
            style={theme.commonStyles.flex1}
            start={{ x: 2, y: 0 }}
            locations={[0, 0.4, 0.98]}
          />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.btn}>
          <SvgIcon icon="lightBulb" />
          <AppText style={styles.btnText} fontFamily="Roboto">
            Tips
          </AppText>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <AppText style={styles.head}>All your credit cards</AppText>
        <AppText style={styles.subHead}>
          Find all your credit cards here
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.metrics.basePadding,
    paddingTop: scaleSizeFromBase(theme.metrics.basePadding),
  },
  background: {
    height: scaleSizeFromBase(71),
    width: scaleSizeFromBase(71),
    borderRadius: scaleSizeFromBase(71 / 2),
    overflow: "hidden",
  },
  btn: {
    backgroundColor: theme.colors.btnBg,
    padding: scaleSizeFromBase(theme.metrics.medium),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.metrics.smallBorderRadius,
  },
  btnText: {
    color: theme.colors.white,
    fontSize: scaleSizeFromBase(theme.fontSizes.base),
    marginLeft: scaleSizeFromBase(theme.metrics.small),
  },
  head: {
    fontSize: scaleSizeFromBase(37),
    fontWeight: "bold",
    color: theme.colors.primaryText,
    marginBottom: scaleSizeFromBase(theme.metrics.baseMargin),
  },
  subHead: {
    fontSize: scaleSizeFromBase(21),
    fontWeight: "400",
    color: theme.colors.primaryText,
  },
  infoContainer: {
    marginTop: scaleSizeFromBase(theme.metrics.baseMargin),
    marginBottom: scaleSizeFromBase(54),
  },
});
