import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Colors } from "../Constants/Colors";
import InputsEmail from "../Components/InputsEmail";
import InputsUsername from "../Components/InputsUsername";
import { MyButton } from "../Components/Buttons";
import { CheckBox, Icon } from "react-native-elements";
import InputsPassword from "../Components/InputsPassword";
import { StackNavigationProp } from "@react-navigation/stack";
import { Roottypes } from "../types";

type SignUpScreenNavigationProp = StackNavigationProp<Roottypes, "Welcome">;

interface Props {
  navigation: SignUpScreenNavigationProp;
}

const SignUpScreen = ({ navigation }: Props): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState<string>("");
  const [errorMessagePassword, setErrorMessagePassword] = useState<string>("");
  const [errorMessageCheck, setErrorMessageCheck] = useState<string>("");
  const [errorMessageUsername, setErrorMessageUsername] = useState<string>("");

  const handleCheckBoxPress = (): void => {
    setChecked(!checked);
    if (checked === true) {
      setErrorMessageCheck("");
    }
  };
  const handleSignUp = (): void => {
    if (email === "") {
      setErrorMessageEmail("Please enter a valid email address");
    } else {
      setErrorMessageEmail("");
    }
    if (username === "") {
      setErrorMessageUsername("Please enter a valid username");
    } else {
      setErrorMessageUsername("");
    }
    if (password === "") {
      setErrorMessagePassword("Please enter a valid password");
    } else {
      setErrorMessagePassword("");
    }

    if (checked === false) {
      setErrorMessageCheck("Please accept the terms");
    } else {
      setErrorMessageCheck("");
    }

    if (
      email !== "" &&
      password !== "" &&
      username !== "" &&
      checked !== false
    ) {
      navigation.navigate("Home");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>SIGN UP</Text>
      <InputsEmail
        placeholder="Your email"
        value={email}
        onChangeText={setEmail}
      />

      {errorMessageEmail !== "" && (
        <Text style={styles.errorMessage}>{errorMessageEmail}</Text>
      )}

      <InputsUsername
        placeholder="username"
        value={username}
        onChangeText={setUsername}
      />

      {errorMessageUsername !== "" && (
        <Text style={styles.errorMessage}>{errorMessageUsername}</Text>
      )}

      <InputsPassword
        placeholder="Your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {errorMessagePassword !== "" && (
        <Text style={styles.errorMessage}>{errorMessagePassword}</Text>
      )}

      <View style={styles.checkBoxArea}>
        <CheckBox
          title="Agree to Terms and Conditions"
          checked={checked}
          onPress={handleCheckBoxPress}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          checkedIcon={
            <Icon name="check" type="material" color="#FFA500" size={20} />
          }
          uncheckedIcon={<View style={styles.uncheckedBox} />}
        />
      </View>
      {errorMessageCheck !== "" && (
        <Text style={styles.errorMessage}>{errorMessageCheck}</Text>
      )}

      <MyButton text="CREATE ACCOUNT" onPress={handleSignUp} />
      <View style={styles.lineFooter}>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Welcome")}
          >
            Sign In
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
    width: "100%",
  },

  footer: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  footerText: {
    fontSize: 16,
    color: "#f5f5f5",
    height: 19,
  },

  lineFooter: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: Colors.primaryShadow,
    left: 0,
    right: 0,
    height: 20,
    top: 70,
    bottom: 30,
  },

  link: {
    color: "#ffab49",
    fontSize: 16,
    fontWeight: "bold",
  },

  title: {
    fontSize: 36,
    color: Colors.primary,
    bottom: 100,
    marginTop: 60,
    fontWeight: "bold",
  },

  checkBoxArea: {
    marginRight: 130,
    marginTop: 20,
  },

  checkboxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
  },
  checkboxText: {
    color: "#f5f5f5",
    fontWeight: "normal",
  },

  uncheckedBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
  },

  errorMessage: {
    color: Colors.warning,
    marginRight: 140,
  },

  errorMessageContainer: {
    flexDirection: "column",
  },
});

export default SignUpScreen;
