import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "@/hooks/useTheme";
import Header from "@/containers/Home/Header";
import CardsSection from "@/containers/Home/CardsSection";

export default function HomeScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={theme.commonStyles.container}>
      <Header />
      <CardsSection />
    </SafeAreaView>
  );
}
