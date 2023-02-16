import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rowDevices: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "center",
    marginHorizontal: "1%",
    flexWrap: "wrap",
  },
  liveShowImage: {
    width: 40,
    height: 40,
    paddingBottom: 10,
  },
});
