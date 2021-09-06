
import * as React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Feather';



export function SearchBar({text,onChangeText}) {

    return (
        <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="search" size={20} />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                underlineColorAndroid="transparent"
                placeholder="Search Here by ID or Name..."
            />
        </View>
    );
};
