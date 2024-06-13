import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserDataContext } from "../../context/UserDataContext";

const Navbar = () => {
  const { userData, setUserData } = useContext(UserDataContext);

  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("user");

      setUserData(null);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Logout error", "Failed to logout");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.emoji}>
        <Image
          source={require("../../assets/images/avatar.png")}
          height={25}
          width={25}
        />
        <Text style={styles.email}>{userData?.email ?? ""}</Text>
      </View>

      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  emoji: {
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  email: {
    fontSize: 14,
    fontWeight: "800",
    color: "#fff",
  },
  logout: {
    fontSize: 14,
    fontWeight: "800",
    color: "#808080",
  },
});
