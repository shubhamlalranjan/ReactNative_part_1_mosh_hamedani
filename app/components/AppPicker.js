import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({
  icon,
  items,
  numColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              color={defaultStyle.colors.medium}
              size={12}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            color={defaultStyle.colors.medium}
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={modalVisible}
        onAccessibilityTap={() => setModalVisible(false)}
        animationType="slide"
      >
        <Screen>
          <Button title="Close Modal" onPress={() => setModalVisible(false)} />
          <FlatList
            keyExtractor={(item) => item.label.toString()}
            data={items}
            numColumns={numColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  onSelectItem(item);
                  setModalVisible(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
  },
  container: {
    backgroundColor: defaultStyle.colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  placeholder: {
    flex: 1,
    color: defaultStyle.colors.medium,
  },
  text: {
    flex: 1,
    color: defaultStyle.colors.black,
  },
});
export default AppPicker;
