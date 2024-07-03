import { View, Text, StyleSheet, TextStyle } from "react-native";
import React, { useMemo } from "react";
import { theme } from "@/constants/theme";

interface IAppTextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  fontFamily?: keyof typeof theme.fontfamily;
}

export default function AppText(props: IAppTextProps) {
  const { style = {}, fontFamily = "Helevetica" } = props;

  const stylesFromProps = useMemo(() => {
    const mappedStyles = Array.isArray(style)
      ? style.reduce((acc, curr) => {
          return {
            ...acc,
            ...curr,
          };
        }, {})
      : style;

    return {
      fontFamily: fontFamily,
      ...mappedStyles,
    } as TextStyle;
  }, [fontFamily, style]);

  return <Text style={[styles.text, stylesFromProps]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    // fontFamily: theme.fontfamily.Helevetica,
    // fontWeight: "400",
  },
});
