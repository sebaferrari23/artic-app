/** @format */

import React, { memo, useCallback, useState } from 'react';
import { SafeAreaView, Image, StatusBar, Text, View, ScrollView } from 'react-native';
import Config from 'react-native-config';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'redux-react-hook';

import { Icon, ToolBar } from '~/components';
import { toggleFav } from '~/store/modules';

import { styles } from './styles';

export const ArtworkDetails = memo(() => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { params } = useRoute();
  const {
    title = '',
    artist_display = '',
    artist_title,
    artwork_type_title = '',
    image_id = '',
    place_of_origin = '',
    medium_display = '',
    date_start = '',
    date_end = '',
    thumbnail = {},
    favorite = false,
  } = params;
  const [fav, setFav] = useState(favorite);

  const handleToggleFav = useCallback(() => {
    return new Promise((onSuccess, onError) => {
      dispatch(
        toggleFav(
          params,
          () => {
            setFav(!fav);
            onSuccess();
          },
          (error) => {
            console.log(error);
            onError();
          },
        ),
      );
    });
  }, [params, dispatch, fav]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <SafeAreaView style={styles.toolBar}>
        <ToolBar
          LeftButtonComponent={
            <Icon
              name="back"
              color={'white'}
              size={17}
              enable
              onPress={() => {
                navigation.goBack();
              }}
            />
          }
          RightButtonComponent={
            <Icon
              name={fav ? 'full_favstar' : 'favstar'}
              color={'white'}
              size={20}
              enable
              onPress={() => {
                handleToggleFav();
              }}
            />
          }
        />
      </SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.blurImage} blurRadius={1} resizeMode={'cover'} source={{ uri: thumbnail.lqip }} />
          <Image
            style={styles.artWorkImage}
            resizeMode={'contain'}
            source={{ uri: `${Config.API_IMAGE_URL}/${image_id}/full/843,/0/default.jpg` }}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist_display}</Text>
          {artist_title && (
            <View style={styles.tableRow}>
              <Text style={styles.tableTitle}>Artist</Text>
              <Text style={styles.tableValue}>{artist_title}</Text>
            </View>
          )}
          {artwork_type_title && (
            <View style={styles.tableRow}>
              <Text style={styles.tableTitle}>Type</Text>
              <Text style={styles.tableValue}>{artwork_type_title}</Text>
            </View>
          )}
          {place_of_origin && (
            <View style={styles.tableRow}>
              <Text style={styles.tableTitle}>Place</Text>
              <Text style={styles.tableValue}>{place_of_origin}</Text>
            </View>
          )}
          {date_start && (
            <View style={styles.tableRow}>
              <Text style={styles.tableTitle}>Date</Text>
              <Text style={styles.tableValue}>
                {date_start === date_end ? date_start : `${date_start} - ${date_end}`}
              </Text>
            </View>
          )}
          {medium_display && (
            <View style={styles.tableRow}>
              <Text style={styles.tableTitle}>Medium</Text>
              <Text style={styles.tableValue}>{medium_display}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
});
