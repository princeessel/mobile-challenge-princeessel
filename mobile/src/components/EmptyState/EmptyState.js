import * as React from 'react'
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme';


export function EmptyState() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.emptyContainer}>
                <Icon
                    name="slash"
                    size={55}
                    color={Colors.Orange}
                />
                <Text style={styles.emptyTitle}>{'Oops Empty Favorite ...'}</Text>
                <Text style={styles.text}>{'Add a favorite meteorite and it will show up here.'}</Text>
            </View>
            <Pressable style={styles.snack} onPress={() => navigation.navigate("HomeScreen")}>

                <Icon
                    name="plus"
                    size={45}
                    color={Colors.White}
                />
            </Pressable>
        </View>
    );
};
