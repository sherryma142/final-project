import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
    marginBottom: 15,
    justifyContent: "center",
  },
  labelsStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    marginRight: 10,
  },
  Input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textLabel: {
    marginTop: -40,
    marginRight: 80,
    marginBottom: 15,
  },
  scrollView: {
    marginHorizontal: 10,
  },
});
