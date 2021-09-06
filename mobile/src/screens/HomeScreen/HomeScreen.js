import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourite, getMeteoriteLandingsDataAction } from '../../Redux/Actions';
import { MeteoriteData } from '../../components/MeteoriteData';
import Loader from '../../components/Loader/Loader';
import { Header } from '../../components/Header';
import { styles } from './HomeScreenStyle';

export function HomeScreen(props) {

  const [searchText, setSearchText] = useState('')

  const dispatch = useDispatch();
  const { isLoading, meteroitData } = useSelector(state => state.nasaDataReducer)

  const addFave = {
    ITEM_ADDED_SUCCESSFULLY: "Item added to favourites succesfully"
  }

  useEffect(() => {
    dispatch(getMeteoriteLandingsDataAction())
  }, [])

  const isItemSearched = (item) => {
    if (searchText.length > 0) {
      if ((item.id.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.name.toLowerCase().includes(searchText.toLowerCase()))) {
        return true;
      }
      return false;
    } else {
      return true;
    }
  }

  const renderItem = useCallback(({ item }) => {

    if (isItemSearched(item) == false) {
      return null
    }

    return (
      <MeteoriteData
        item={item}
        onAddClick={() => {
          dispatch(addToFavourite(item));
          alert(addFave.ITEM_ADDED_SUCCESSFULLY)
        }}
      />
    )

  })

  return (
    <View style={styles.container}>
      <Header
        title="Main"
        onPress={() => props.navigation.navigate("FavouriteScreen")}
      />
      <>
        <SearchBar
          text={searchText}
          onChangeText={(txt) => setSearchText(txt)}
        />
        <FlatList
          data={meteroitData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </>
      <Loader isLoading={isLoading} />
    </View>
  );
}
