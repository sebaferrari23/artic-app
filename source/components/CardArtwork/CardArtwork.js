/** @format */

import React, { useCallback } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Config from 'react-native-config';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'redux-react-hook';

import { Icon } from '~/components';
import { BRAND_COLOR, NAVIGATION } from '~/constants';
import { toggleFav } from '~/store/modules';

import { styles } from './styles';

export const CardArtwork = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    title = '',
    artist_title = '',
    artwork_type_title = '',
    image_id = '',
    favorite = false,
    handleChangeFav = () => {},
  } = props;

  const handlePress = useCallback(() => {
    navigation.navigate(NAVIGATION.SCREENS.ARTWORK_DETAILS, {
      ...props,
    });
  }, [navigation, props]);

  const handleToggleFav = useCallback(() => {
    return new Promise((onSuccess, onError) => {
      dispatch(
        toggleFav(
          props,
          () => {
            onSuccess();
            handleChangeFav();
          },
          (error) => {
            console.log(error);
            onError();
          },
        ),
      );
    });
  }, [props, handleChangeFav, dispatch]);

  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={styles.container}>
        <Image source={{ uri: `${Config.API_IMAGE_URL}/${image_id}/full/843,/0/default.jpg` }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist_title}</Text>
          <Text style={styles.type}>{artwork_type_title}</Text>
        </View>
        <Icon
          size={17}
          name={favorite ? 'full_favstar' : 'favstar'}
          color={BRAND_COLOR}
          style={styles.favIcon}
          enable
          onPress={() => handleToggleFav()}
        />
      </View>
    </TouchableOpacity>
  );
};
