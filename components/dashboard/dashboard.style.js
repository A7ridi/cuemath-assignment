import { Dimensions, StyleSheet } from "react-native";

const { height: deviceHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  buttonIcon: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  bottomSheetContainer: {
    height: deviceHeight,
    backgroundColor: "#000",
    flexDirection: "column",
    alignItems: "center",
  },
  bottomSheetContent: {
    height: "100%",
    justifyContent: "center",
    marginHorizontal: 50,
  },
  bottomSheetText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
});
