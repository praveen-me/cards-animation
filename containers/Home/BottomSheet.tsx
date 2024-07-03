import React, { useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import AppText from "@/components/AppText";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { theme } from "@/constants/theme";
import { scaleSizeFromBase } from "@/helpers";
import SvgIcon from "@/components/SvgIcon";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const floatingBtnSize = scaleSizeFromBase(101);

export default function BottomSheet() {
  const [open, setOpen] = React.useState(false);
  const animatedOpen = useSharedValue(open ? 1 : 0);

  const { width } = useWindowDimensions();

  useEffect(() => {
    animatedOpen.value = withSpring(open ? 1 : 0);
  }, [open]);

  const animatedSheetStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(
        animatedOpen.value,
        [0, 1],
        [floatingBtnSize, width * 0.9]
      ),
      height: interpolate(
        animatedOpen.value,
        [0, 1],
        [floatingBtnSize, width * 0.9]
      ),
    };
  });

  const animatedPressableStyles = useAnimatedStyle(() => {
    return {
      display: animatedOpen.value === 1 ? "none" : "flex",
    };
  });

  const animatedContainerStyles = useAnimatedStyle(() => {
    return {
      display: animatedOpen.value === 1 ? "flex" : "none",
    };
  });

  return (
    <>
      <Animated.View style={[styles.btnContainer, animatedSheetStyle]}>
        <AnimatedPressable
          onPress={() => {
            setOpen(!open);
          }}
          style={[animatedPressableStyles, styles.btn]}
        >
          <SvgIcon icon="plus" />
        </AnimatedPressable>

        <Animated.View
          style={[
            {
              flex: 1,
              width: "100%",
            },
            animatedContainerStyles,
          ]}
        >
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <AppText
              style={{
                fontSize: scaleSizeFromBase(20),
                padding: theme.metrics.basePadding,
              }}
              fontFamily="Roboto"
            >
              Close Modal
            </AppText>
          </TouchableOpacity>
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <AppText
              style={{ fontSize: scaleSizeFromBase(20) }}
              fontFamily="SpaceGroteskBold"
            >
              Add New Card
            </AppText>
          </View>
        </Animated.View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#fff",
    borderRadius: floatingBtnSize / 2,
    position: "absolute",
    bottom: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  btn: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
