import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.closeIcon, styles.icon]}>
        <MaterialCommunityIcons name="close" color={colors.white} size={30} />
      </View>
      <View style={[styles.checkIcon, styles.icon]}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={30}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 50,
  },
  closeIcon: {
    left: 30,
  },
  checkIcon: {
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
