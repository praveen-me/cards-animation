import { View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import React, { useEffect, useState, memo } from "react";
import SvgIcon, { IconType } from "@/components/SvgIcon";
import { scaleSizeFromBase } from "@/helpers";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const icons = [
  "fingerPrint",
  "takeoff",
  "waterDrop",
  "healthAndSafety",
  "historyEducation",
  "cardMemberShip",
] as IconType[];

const RenderIcons = () => {
  const [activeIcon, setActiveIcon] = useState<IconType>(icons[0]);

  return (
    <View style={styles.container}>
      {icons.map((icon) => (
        <Icon
          setActiveIcon={setActiveIcon}
          icon={icon}
          key={icon}
          isActive={activeIcon === icon}
        />
      ))}
    </View>
  );
};

interface IIconProps {
  icon: IconType;
  setActiveIcon: (icon: IconType) => void;
  isActive: boolean;
}

const Icon = memo((props: IIconProps) => {
  const { setActiveIcon, icon, isActive } = props;

  const scale = useSharedValue(0.8);
  const opacity = useSharedValue(0.5);

  useEffect(() => {
    scale.value = withSpring(isActive ? 1.2 : 0.8, {
      duration: 200,
    });

    opacity.value = withTiming(isActive ? 1 : 0.5, {
      duration: 200,
    });
  }, [isActive]);

  const animatedScaleStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  return (
    <Pressable
      onPress={() => {
        if (!isActive) {
          setActiveIcon(icon);
        }
      }}
    >
      <Animated.View style={[styles.iconContainer, animatedScaleStyles]}>
        <SvgIcon icon={icon} />
      </Animated.View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: scaleSizeFromBase(30),
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: scaleSizeFromBase(40),
  },
  iconContainer: {
    margin: 10,
  },
});

export default RenderIcons;
