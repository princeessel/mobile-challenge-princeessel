import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './SplashStyle';


export function Splash(props) {

  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace("HomeScreen")
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'FLOGISTIX'}</Text>
    </View>
  );
}
