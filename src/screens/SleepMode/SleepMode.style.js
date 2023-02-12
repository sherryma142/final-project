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
    marginRight: 10
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
    marginBottom: 10,
  },
  scrollView: {
    marginHorizontal: 10,
  },
 switch: {
    alignItems: 'center',
    justifyContent: "flex-start",
    marginTop: -50,
    marginRight:220
  },
  Button:{
   marginTop:10
  }

});
