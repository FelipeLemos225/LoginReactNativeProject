import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../Constants/Colors";

interface Props {
  title: string;
}

const IconRectangle = ({ title }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 176,
    height: 230,
    backgroundColor: Colors.container,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontSize: 24,
    color: Colors.primary,
    fontWeight: "bold",
  },
});

export default IconRectangle;
