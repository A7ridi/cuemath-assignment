import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Registration from "../components/registration/Registration";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Dashboard from "../components/dashboard/Dashboard";
import { UserDataContext } from "../context/UserDataContext";

const Home = () => {
  const { userData, setUserData } = useContext(UserDataContext);

  const getUserCreds = async () => {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      setUserData(JSON.parse(user));
    }
  };

  useEffect(() => {
    getUserCreds();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#000" />

      {userData ? <Dashboard /> : <Registration setUserData={setUserData} />}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
});
