import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorite } from '../../Redux/Actions';
import { MeteoriteData } from '../../components/MeteoriteData';
import { Header } from '../../components/Header';
import { EmptyState } from '../../components/EmptyState'
import { styles } from './FavouriteScreenStyle';


export function FavouriteScreen(props) {
    const dispatch = useDispatch();
    const { favouriteData } = useSelector(state => state.favouriteReducer)

    const renderItem = useCallback(({ item }) => {
        return (
            <View>
                <MeteoriteData
                    item={item}
                    onRemoveClick={() => {
                        dispatch(removeFromFavorite(item.id))
                    }}
                />
            </View>)

    })

    return (
        <View style={styles.container}>
            <Header title="Favorite" onBack={() => props.navigation.goBack()} />
            { favouriteData.length === 0 ?
            <EmptyState /> :
            <FlatList
                data={favouriteData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem} />
            }
        </View>
    );
}
