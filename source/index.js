/** @format */
import React, { memo, useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { StoreContext } from 'redux-react-hook';
import { NavigationContainer } from '@react-navigation/native';

import { Screens } from '~/screens';
import { store } from '~/store';
import { BACKGROUND_COLOR, NAVIGATION_THEME } from '~/constants';
import { axiosInterceptor, initSyncStorage } from '~/utils';

axiosInterceptor();

export const App = memo(() => {
  const [isSyncStorageLoading, setSyncStorageLoading] = useState(true);

  useEffect(() => {
    initSyncStorage().finally(() => {
      setSyncStorageLoading(false);
    });
  }, []);

  if (isSyncStorageLoading) {
    return null;
  }
  return (
    <StoreContext.Provider value={store}>
      <NavigationContainer theme={NAVIGATION_THEME}>
        <StatusBar barStyle="dark-content" backgroundColor={BACKGROUND_COLOR} />
        <Screens />
      </NavigationContainer>
    </StoreContext.Provider>
  );
});
