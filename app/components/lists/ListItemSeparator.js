import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: colors.lightGrey,
    width: "100%",
    height: 1,
  },
});

export default ListItemSeparator;
