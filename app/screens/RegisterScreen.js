import React from "react";
import { StyleSheet } from "react-native";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

import * as Yup from "yup";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField
          name="name"
          maxLength={255}
          placeholder="Name"
          icon="face-profile"
          autoCorrenct={false}
          autoCapitalize="none"
        />
        <AppFormField
          autoCorrenct={false}
          autoCapitalize="none"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          icon="email"
        />
        <AppFormField
          name="password"
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
export default RegisterScreen;
