import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import IconRectangle from "../Components/IconRetangle";
import { Colors } from "../Constants/Colors";

type IconData = {id: string, title: string};

const data: IconData[] = [
  { id: "1", title: "Icon 1" },
  { id: "2", title: "Icon 2" },
  { id: "3", title: "Icon 3" },
  { id: "4", title: "Icon 4" },
  { id: "5", title: "Icon 5" },
  { id: "6", title: "Icon 6" },
  { id: "7", title: "Icon 7" },
  { id: "8", title: "Icon 8" },
  { id: "9", title: "Icon 9" },
  { id: "10", title: "Icon 10" },
];

const HomeScreen = (): JSX.Element => {
  const renderIcon = ({ item }:{item:IconData}) => {
    return <IconRectangle title={item.title} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderIcon}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    flexDirection: "column",
    justifyContent: "center",
  },
  list: {
    padding: 5,
  },

  cardContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 16,
    marginBottom: 16,
  },
});

export default HomeScreen;
