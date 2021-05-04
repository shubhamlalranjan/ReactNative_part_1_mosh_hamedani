import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.headerContainer}>
        <AppText style={styles.title}> Red Jacket For Sell</AppText>
        <AppText style={styles.price}> $100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Mosh Hadmani"
            subTitle="10 Products"
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
  userContainer: {
    marginTop: 40,
  },
});
export default ListingDetailsScreen;
