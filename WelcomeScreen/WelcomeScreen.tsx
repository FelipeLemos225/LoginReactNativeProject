import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../Constants/Colors";
import { MyButton } from "../Components/Buttons";
import InputsEmail from "../Components/InputsEmail";
import InputsPassword from "../Components/InputsPassword";
import { StackNavigationProp } from "@react-navigation/stack";
import { Roottypes } from "../types";

type SignUpScreenNavigationProp = StackNavigationProp<Roottypes, "SignUp">;

interface Props {
  navigation: SignUpScreenNavigationProp;
}

const WelcomeScreen = ({ navigation }: Props): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessageEmail, setErrorMessageEmail] = useState<string>("");
  const [errorMessagePassword, setErrorMessagePassword] = useState<string>("");

  const handleLogin = (): void => {
    if (email === "") {
      setErrorMessageEmail("Please enter a valid email address");
    } else {
      setErrorMessageEmail("");
    }
    if (password === "") {
      setErrorMessagePassword("Please enter a valid password");
    } else {
      setErrorMessagePassword("");
    }
    if (email !== "" && password !== "") {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME</Text>

      <View style={styles.errorMessageContainer}>
        <InputsEmail
          placeholder="Your email"
          value={email}
          onChangeText={setEmail}
        />
        {errorMessageEmail !== "" && (
          <Text style={styles.errorMessage}>{errorMessageEmail}</Text>
        )}
      </View>

      <View style={styles.errorMessageContainer}>
        <InputsPassword
          placeholder="Your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {errorMessagePassword !== "" && (
          <Text style={styles.errorMessage}>{errorMessagePassword}</Text>
        )}
      </View>

      <MyButton text="LOGIN" onPress={handleLogin} />
      <View style={styles.lineFooter}>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },

  footer: {
    height: 50,
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
    top: 135,
    bottom: 50,
  },

  link: {
    color: "#ffab49",
    fontSize: 16,
    fontWeight: "bold",
  },

  title: {
    fontSize: 36,
    color: Colors.primary,
    bottom: 165,
    marginTop: 115,
    fontWeight: "bold",
  },

  errorMessage: {
    color: Colors.warning,
    marginLeft: 53,
  },

  errorMessageContainer: {
    flexDirection: "column",
  },
});
