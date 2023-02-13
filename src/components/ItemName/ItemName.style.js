import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 2,
      alignContent:"stretch",
      marginHorizontal: '1%',
      backgroundColor: 'white',
      marginLeft:0,
      marginBottom: 1,
      minWidth: '100%',
      textAlign: 'center',
      
    },
    checkboxBase: {
      width: 24,
      height: 24,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: 'coral',
    },
    checkboxChecked: {
      backgroundColor: 'coral',

    },
    checkboxContainer: {
      paddingTop:5,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flexWrap:"nowrap"

    },
    checkboxLabel: {
      margin:10,
      marginRight:20,
      fontSize: 15,
      flexWrap:"nowrap"
    },
  });