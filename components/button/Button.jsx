import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({
  title,
  transparent = false,
  width = "",
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container(transparent, width)}
    >
      <Text style={styles.title(transparent)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (transparent, width) => ({
    backgroundColor: transparent ? "#000" : "#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#fff",
    width,
  }),
  title: (transparent) => ({
    fontSize: 14,
    fontWeight: "bold",
    color: transparent ? "#fff" : "#000",
    textAlign: "center",
  }),
});

export default Button;
