import * as React from 'react'
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Feather'


export function MeteoriteData({ item, onAddClick, onRemoveClick }) {
    const year = new Date(item.year).getFullYear()

    return (
        <View style={styles.container}>
            <View style={styles.cardHeader}>
                <Text style={styles.name}>{item.name}</Text>
                <Pressable onPress={() => onRemoveClick()} style={styles.addRemove}>
                    {onRemoveClick && <Icon name='x' size={26} />}
                    {onAddClick && <Icon name='plus' size={26} />}
                </Pressable>
                <Pressable onPress={() => onAddClick()} style={styles.addRemove}>
                    {onAddClick && <Icon name='plus' size={24} />}
                </Pressable>
            </View>
            <View style={styles.dataCard}>
                <View style={styles.textKeyContainer}>
                    <Text style={styles.text}>{'ID: '}</Text>
                    <Text style={styles.text}>{'NAMETYPE: '}</Text>
                    <Text style={styles.text}>{'Reclass: '}</Text>
                    <Text style={styles.text}>{'Mass: '}</Text>
                    <Text style={styles.text}>{'Fall: '}</Text>
                    <Text style={styles.text}>{'Year: '}</Text>
                    <Text style={styles.text}>{'Reclat: '}</Text>
                    <Text style={styles.text}>{'Reclong: '}</Text>
                    <Text style={styles.text}>{'Geolocation: '}</Text>
                </View>
                <View style={styles.valueContainer}>
                    <Text style={styles.valueText}>{`${item.id}`}</Text>
                    <Text style={styles.valueText}>{`${item.nametype}`}</Text>
                    <Text style={styles.valueText}>{`${item.recclass}`}</Text>
                    <Text style={styles.valueText}>{`${item.mass}`}</Text>
                    <Text style={styles.valueText}>{`${item.fall}`}</Text>
                    <Text style={styles.valueText}>{`${year}`}</Text>
                    <Text style={styles.valueText}>{`${item.reclat}`}</Text>
                    <Text style={styles.valueText}>{`${item.reclong}`}</Text>
                    <Text style={styles.valueText}>{`( ${item?.geolocation?.coordinates} )`}</Text>
                </View>
            </View>
        </View>
    );
};
