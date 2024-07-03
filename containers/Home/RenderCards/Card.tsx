import {
  View,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
  withTiming,
  SharedValue,
  interpolate,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import AppText from "@/components/AppText";
import { getCards, scaleSizeFromBase } from "@/helpers";
import { theme } from "@/constants/theme";
import SvgIcon from "@/components/SvgIcon";

interface ICardProps {
  item: ReturnType<typeof getCards>[0];
  itemsLength: number;
  index: number;
  cycleCards: (card: ReturnType<typeof getCards>[0]) => void;
  currentIndex: number;
  animatedValue: SharedValue<number>;
  maxVisibleItem: number;
}

const Card = (props: ICardProps) => {
  const translateX = useSharedValue(0);

  const { width } = useWindowDimensions();
  const direction = useSharedValue(0);

  const {
    itemsLength,
    index,
    currentIndex,
    animatedValue,
    maxVisibleItem,
    item,
  } = props;

  const gesture = Gesture.Pan()
    .onBegin(() => {})
    .onUpdate(({ translationX }) => {
      const isSwipeRight = translationX > 0;

      direction.value = isSwipeRight ? 1 : -1;

      if (currentIndex === index) {
        translateX.value = translationX;

        animatedValue.value = interpolate(
          Math.abs(translationX),
          [0, width],
          [index, index + 1]
        );
      }
    })
    .onEnd(({ translationX, velocityX }) => {
      if (currentIndex === index) {
        if (Math.abs(translationX) > 100 || Math.abs(velocityX) > 1000) {
          translateX.value = withTiming(
            (20 + width) * direction.value,
            {},
            () => {
              runOnJS(props.cycleCards)(item);
            }
          );

          animatedValue.value = withTiming(currentIndex + 1);
        } else {
          translateX.value = withTiming(0);
          animatedValue.value = withTiming(currentIndex);
        }
      }
    });

  const translateSize = scaleSizeFromBase(60);

  const animatedStyle = useAnimatedStyle(() => {
    const rotateZ = interpolate(
      Math.abs(translateX.value),
      [0, width],
      [0, 20]
    );

    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index],
      [-translateSize, 0]
    );

    const opacity = interpolate(
      animatedValue.value + maxVisibleItem,
      [index, index + 1],
      [0, 1]
    );

    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY },
        {
          rotateZ:
            currentIndex === index ? `${direction.value * rotateZ}deg` : "0deg",
        },
      ],
      opacity: index < maxVisibleItem + currentIndex ? 1 : opacity,
    };
  });

  const zIndex = itemsLength - index;

  const color =
    item?.theme === "dark" ? theme.colors.background : theme.colors.white;

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          styles.card,
          animatedStyle,
          {
            zIndex,
          },
        ]}
      >
        <ImageBackground
          source={item.cardBg as ImageSourcePropType}
          resizeMode="stretch"
          style={theme.commonStyles.flex1}
        >
          <View style={styles.cardContainer}>
            <AppText
              style={[styles.bankName, { color }]}
              fontFamily="SpaceGroteskBold"
            >
              {item.bankName}
            </AppText>

            <View
              style={[
                theme.commonStyles.rowWithSpaceBetween,
                styles.cardIconContainer,
              ]}
            >
              <SvgIcon icon="chipIcon" />
              <SvgIcon icon="wifi" fill={color} />
            </View>
            <AppText
              style={[styles.cardNumber, { color }]}
              fontFamily="SpaceGroteskBold"
            >
              {item.cardNumber}
            </AppText>
          </View>
          <BlurView intensity={90} tint="dark" style={styles.blurContainer}>
            <View>
              <AppText
                style={styles.cardInfoHead}
                fontFamily="SpaceGroteskRegular"
              >
                Card Holder name
              </AppText>
              <AppText
                style={styles.cardInfoHeadValue}
                fontFamily="SpaceGroteskBold"
              >
                {item.name}
              </AppText>
            </View>
            <View>
              <AppText
                style={styles.cardInfoHead}
                fontFamily="SpaceGroteskRegular"
              >
                Expiry Date
              </AppText>
              <AppText
                style={styles.cardInfoHeadValue}
                fontFamily="SpaceGroteskBold"
              >
                {item.expiryDate}
              </AppText>
            </View>

            <SvgIcon icon="visa" />
          </BlurView>
        </ImageBackground>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    position: "absolute",
    left: 20,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: `rgba(255, 255, 255, 0.3)`,
  },
  cardContainer: {
    padding: scaleSizeFromBase(theme.metrics.basePadding + 4),
    paddingBottom: scaleSizeFromBase(theme.metrics.medium),
  },
  bankName: {
    color: theme.colors.white,
    fontSize: scaleSizeFromBase(18),
  },
  cardIconContainer: {
    marginVertical: scaleSizeFromBase(theme.metrics.medium),
  },
  cardNumber: {
    fontSize: scaleSizeFromBase(32),
    color: theme.colors.white,
  },
  blurContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    padding: scaleSizeFromBase(theme.metrics.basePadding + 4),
    flexDirection: "row",
  },
  cardInfoHead: {
    fontSize: scaleSizeFromBase(12),
    color: theme.colors.white,
  },
  cardInfoHeadValue: {
    fontSize: scaleSizeFromBase(24),
    color: theme.colors.white,
  },
});

export default Card;
