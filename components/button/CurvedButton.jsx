import React from "react";
import { Image } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const CurvedButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Svg height="100" width="1000" viewBox="0 0 300 80">
        <Path
          d="M0,40 Q150,1 300,40 V80 H0 Z"
          fill="#444"
          stroke="white"
          strokeWidth="1"
        />
      </Svg>

      <TouchableOpacity style={styles.buttonIcon} onPress={onPress}>
        <Image
          source={require("../../assets/images/carrot.png")}
          height={50}
          width={50}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Bottom Sheet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  buttonIcon: {
    position: "absolute",
    top: 0,
  },
  button: {
    position: "absolute",
    bottom: -10,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CurvedButton;
