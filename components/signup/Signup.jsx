import React, { useContext, useState } from "react";
import { Image, Text, TextInput, View, Alert } from "react-native";
import { styles } from "./signup.style";
import Button from "../button/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { validateEmail } from "../../utils/isEmailValid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserDataContext } from "../../context/UserDataContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const route = useRoute();
  const isSignup = route?.params?.isSignup ?? false;
  const { setUserData } = useContext(UserDataContext);
  const navigation = useNavigation();

  const handleSignup = async () => {
    if (!validateEmail(email)) {
      Alert.alert("Error", "Invalid email address");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Password Error", "Enter 6 characters or more");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    if (!firstName || !age) {
      Alert.alert("Please fill in all fields");
      return;
    }

    try {
      const user = {
        email,
        password,
        firstName,
        age,
      };
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setUserData(user);

      Alert.alert("Success", "Account created successfully");

      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Error", "Failed to create account");
    }
  };

  const handleLogin = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        const { email: storedEmail, password: storedPassword } =
          JSON.parse(user);
        if (storedEmail === email && storedPassword === password) {
          Alert.alert("Success", "Logged in successfully");
        } else {
          Alert.alert("Error", "Invalid email or password");
        }
      } else {
        Alert.alert("Error", "No account found");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to login");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/images/cuemath.png")}
        height={24}
        width={100}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Email ID"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#808080"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#808080"
      />

      {isSignup && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholderTextColor="#808080"
          />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholderTextColor="#808080"
          />
          <TextInput
            style={styles.input}
            placeholder="Age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            placeholderTextColor="#808080"
          />
        </>
      )}

      <View style={styles.button}>
        <Button
          title={isSignup ? "Create Account" : "Login"}
          onPress={() => (isSignup ? handleSignup() : handleLogin())}
          width={"100%"}
        />
      </View>
    </SafeAreaView>
  );
};

export default Signup;
