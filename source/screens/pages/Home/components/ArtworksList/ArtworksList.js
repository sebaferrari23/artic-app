/** @format */
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { isEmpty } from 'lodash';

import { Spinner, CardArtwork } from '~/components';
import { artworksSelector, loadArtworks } from '~/store/modules';
import { BRAND_COLOR } from '~/constants';

import { styles } from './styles';

export const ArtworksList = () => {
  const dispatch = useDispatch();
  const { isLoadingArtworks, artworks } = useMappedState(artworksSelector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    !isLoadingArtworks && isEmpty(artworks) && dispatch(loadArtworks(page));
  }, [dispatch, isLoadingArtworks, artworks, page]);

  const fetchMoreArtworks = useCallback(() => {
    !isLoadingArtworks && dispatch(loadArtworks(page + 1));
    setPage(page + 1);
  }, [isLoadingArtworks, dispatch, page]);

  const renderFooter = useCallback(() => {
    return isLoadingArtworks && !isEmpty(artworks) ? (
      <View style={styles.footerLoading}>
        <ActivityIndicator size={'large'} color={BRAND_COLOR} />
      </View>
    ) : (
      <View style={styles.footer} />
    );
  }, [isLoadingArtworks, artworks]);

  if (isLoadingArtworks && isEmpty(artworks)) {
    return <Spinner backgroundColor="transparent" />;
  }
  return (
    <FlatList
      data={artworks}
      style={styles.artworksList}
      keyExtractor={(_, index) => index}
      renderItem={({ item }) => <CardArtwork {...item} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={renderFooter}
      onEndReachedThreshold={0.2}
      onEndReached={fetchMoreArtworks}
    />
  );
};
