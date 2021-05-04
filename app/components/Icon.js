import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function Icon({
  name,
  size = 30,
  backgroundColor = colors.primary,
  color = colors.white,
}) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
          height: size,
          width: size,
          borderRadius: size / 2,
        },
      ]}
    >
      <MaterialCommunityIcons color={color} name={name} size={size / 2} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Icon;
