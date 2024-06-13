import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./registration.style";
import Button from "../button/Button";
import { useNavigation } from "@react-navigation/native";

const Registration = () => {
  const navigation = useNavigation();

  const signupNavigation = (isSignup) => {
    navigation.navigate("Signup", { isSignup });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/cuemath.png")}
        height={24}
        width={100}
      />

      <View style={styles.buttonsContainer}>
        <Button
          title="Signup"
          width={132}
          onPress={() => signupNavigation(true)}
        />
        <Button
          title="Login"
          transparent="true"
          width={132}
          onPress={() => signupNavigation(false)}
        />
      </View>
    </View>
  );
};

export default Registration;
