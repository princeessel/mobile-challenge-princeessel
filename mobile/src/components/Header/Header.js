import * as React from 'react'
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Feather';


export function Header({ title, onPress, onBack }) {

    return (
        <View style={styles.headerStyle}>
            <Text style={styles.headerText}>{title}</Text>
            {onBack && <Pressable onPress={onBack} style={{
                position: "absolute",
                left: 5
            }}>
                <Icon
                    name="arrow-left"
                    size={30}
                />
            </Pressable>}
            {onPress && <Pressable onPress={onPress} style={{
                position: "absolute",
                right: 5
            }}>
                <Icon
                    name="heart"
                    size={25}
                />
            </Pressable>}
        </View>

    );
};
