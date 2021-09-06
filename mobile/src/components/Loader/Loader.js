import React from 'react';
import { View, ActivityIndicator } from "react-native";
import { styles } from './styles';

const Loader = ({isLoading}) => {

	if(!isLoading)
	return null

	return (
      	<View style={styles.container}>
			<ActivityIndicator size="large" color="#00ff00" />
      	</View>
    );
}

export default Loader;
