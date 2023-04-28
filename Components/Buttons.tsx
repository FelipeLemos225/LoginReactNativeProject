import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../Constants/Colors";

interface Props {
  text: string;
  onPress: () => void;
}

export const MyButton = ({ text, onPress }: Props): JSX.Element => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    paddingVertical: 18,
    paddingHorizontal: 18,
    width: 375,
    marginLeft: 28,
    marginRight: 27,
    height: 55,
    marginTop: 28,
  },
  text: {
    color: Colors.textButton,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
