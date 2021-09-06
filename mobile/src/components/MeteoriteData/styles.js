import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 24,
    margin: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white'
  },
  cardHeader: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  addRemove: {
    position: "absolute",
    right: 5
  },
  dataCard: {
    flexDirection: 'row',
  },
  textKeyContainer: {
    flex: 1,
    marginLeft: 10,
    paddingTop: 5,
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: Colors.Gray,
    marginVertical: 5,
  },
  valueText: {
    fontSize: 14,
    fontWeight: '400',
    textTransform: 'uppercase',
    color: Colors.Gray,
    marginVertical: 6,
  },
  valueContainer: {
    flex: 1,
    paddingTop: 5,
    justifyContent: 'center'
  },
});
