import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems:"center",
    position:"absolute",
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
  text: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  snack: {
    width: 60,
    height: 60,
    elevation: 20,
    borderWidth: 1,
    borderColor: Colors.Orange,
    borderRadius: 150 / 2,
    backgroundColor: Colors.Orange,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
    margin: 12,
  },
});