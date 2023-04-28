import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import { Colors } from "../Constants/Colors";

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}

const icons = {
  email: require("../assets/Icons/email.png"),
};

export default function InputsEmail(props: Props): JSX.Element {
  return (
    <View style={styles.placeHolder}>
      <View style={styles.container}>
        <Image source={icons.email} style={styles.icon} />

        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          placeholderTextColor="#a8a8a8"
          onChangeText={props.onChangeText}
          value={props.value}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    width: 375,
    marginLeft: 28,
    marginTop: 25,

    backgroundColor: Colors.input,
    height: 55,
  },
  icon: {
    marginHorizontal: 20,
    left: 5,
    width: 25,
    height: 17,
  },
  input: {
    flex: 1,
    fontSize: 20,
    height: 24,
  },
  placeHolder: {
    marginEnd: 27,
  },
});
