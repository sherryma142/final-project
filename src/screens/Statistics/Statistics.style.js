import { StyleSheet } from "react-native";
import { SlideInRight } from "react-native-reanimated";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    flexWrap: "wrap"
  },
  hadder: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
    marginBottom: 15,
    justifyContent: "center",
    
  },
  liveShow: {},
  liveShowImage: {
    width: 40,
    height: 40,
    paddingBottom: 10,
  },
   labelsStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },

});
