import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { theme } from "@/constants/theme";
import { useSharedValue } from "react-native-reanimated";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { getCards } from "@/helpers";

import Card from "@/containers/Home/RenderCards/Card";

export default function RenderCards() {
  const [cards, setCards] = useState(getCards());
  const animatedValue = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const MAX_ITEMS = 4;

  const cycleCards = (item: ReturnType<typeof getCards>[0]) => {
    setCurrentIndex(currentIndex + 1);

    setCards([...cards, item]);
  };

  return (
    <GestureHandlerRootView>
      <View style={[styles.container]}>
        {cards.map(
          (item, index) =>
            !(index > currentIndex + MAX_ITEMS || index < currentIndex) && (
              <Card
                key={item.cardNumber}
                item={item}
                itemsLength={cards.length}
                index={index}
                cycleCards={cycleCards}
                currentIndex={currentIndex}
                animatedValue={animatedValue}
                maxVisibleItem={MAX_ITEMS}
              />
            )
        )}
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.metrics.basePadding,
    flex: 1,
    justifyContent: "center",
    marginTop: 48,
  },
});
