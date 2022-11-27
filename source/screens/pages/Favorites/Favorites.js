/** @format */

import React, { memo, useCallback, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { CardArtwork, ToolBar } from '~/components';
import { FAVORITES } from '~/constants';
import { getSync } from '~/utils';

import { styles } from './styles';

export const Favorites = memo(() => {
  const isFocused = useIsFocused();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (isFocused) {
      setFavorites(getSync(FAVORITES));
    }
  }, [isFocused]);

  const onChangeFav = useCallback(() => {
    setFavorites(getSync(FAVORITES));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ToolBar title={'Favorites'} />
      <FlatList
        data={favorites}
        style={styles.favoritesList}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => <CardArtwork {...item} handleChangeFav={onChangeFav} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={() => <View style={styles.footer} />}
      />
    </SafeAreaView>
  );
});
