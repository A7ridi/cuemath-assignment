import { StyleSheet } from "react-native";

export const styling = (PAGE_WIDTH) =>
  StyleSheet.create({
    container: {
      flex: 1,
      //   justifyContent: "center",
    },
    imageContainer: {
      justifyContent: "center",
      alignItems: "center",
      width: PAGE_WIDTH,
      height: PAGE_WIDTH,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    dotsContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 10,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: "#888",
      marginHorizontal: 5,
    },
  });
