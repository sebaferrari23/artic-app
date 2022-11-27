/** @format **/

import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { transform } from 'lodash';

import { NAVIGATION } from '~/constants';
import { setCurrentStackNavigation } from '~/utils';

import { Home, Favorites } from '~/screens/pages';
import { ArtworkDetails } from '../pages/Home/pages';

function tabScreenWrapper(Screen) {
  return (props) => {
    useFocusEffect(() => {
      setCurrentStackNavigation(props.navigation);
    });
    return <Screen {...props} />;
  };
}

function addNavigationInterceptor(screens) {
  return transform(
    screens,
    (screensAcc, screen, screenName) => {
      screensAcc[screenName] = tabScreenWrapper(screen);
    },
    {},
  );
}

export const SCREENS = addNavigationInterceptor({
  [NAVIGATION.SCREENS.ARTWORK_DETAILS]: ArtworkDetails,
});

export const ROOT_SCREENS = addNavigationInterceptor({
  [NAVIGATION.TAB.HOME]: Home,
  [NAVIGATION.TAB.FAVORITES]: Favorites,
});
