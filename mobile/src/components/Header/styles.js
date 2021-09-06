import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

export const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    height: 52,
    justifyContent: 'center',
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.Gray,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
});