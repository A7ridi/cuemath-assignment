import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#000",
    alignItems: "center",
    position: "relative",
  },
  image: {
    marginTop: 30,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    width: "100%",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  button: {
    position: "absolute",
    width: "100%",
    bottom: 45,
  },
});
