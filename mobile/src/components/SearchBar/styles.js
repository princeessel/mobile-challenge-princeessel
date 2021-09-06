import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    searchSection: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      margin: 5,
      borderRadius: (Platform.OS) === 'ios' ? 10 : 0,

  },
  searchIcon: {
      padding: 10,
  },
  input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: '#fff',
      color: '#424242',
      borderColor: 'gray',
  },
  });