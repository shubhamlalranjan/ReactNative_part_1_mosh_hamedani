import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyle from "../config/styles";
function AppTextInput({ icon, width = "100%", ...otherPorperty }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          color={defaultStyle.colors.medium}
          size={20}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyle.colors.medium}
        style={defaultStyle.text}
        {...otherPorperty}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
  },
  container: {
    backgroundColor: defaultStyle.colors.lightGrey,
    borderRadius: 25,
    width: "100%",
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
});
export default AppTextInput;
